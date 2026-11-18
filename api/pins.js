// Vercel serverless function (Node). Private DataPins endpoint.
//   POST   /api/pins          -> create a pin (auth required)
//   GET    /api/pins          -> list pins for the team manager (auth required)
//   DELETE /api/pins?id=<id>  -> delete a pin (auth required)
//
// Photo is sent as a base64 data URL in the JSON body (client compresses it first),
// which keeps us under Vercel's request-size limit without multipart parsing.

import {
  getAdminDb,
  getFieldValue,
  verifyIdTokenRest,
  isFirebaseAdminConfigured,
} from '../server/firebaseAdmin.js';
import { uploadImage, deleteImage, isCloudinaryConfigured } from '../server/cloudinary.js';
import { callClaudeForDescription } from '../server/aiDescription.js';
import { services, isValidServiceSlug, getServiceTitle } from '../src/data/services.js';
import { cities, isValidCitySlug } from '../src/data/locations.js';

const MAX_PHOTO_BYTES = 10 * 1024 * 1024; // 10 MB (decoded)
const ALLOWED_MIME = { 'image/jpeg': 'jpg', 'image/png': 'png' };

async function authenticate(req) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  if (!token) return null;
  try {
    return await verifyIdTokenRest(token);
  } catch {
    return null;
  }
}

function decodeDataUrl(dataUrl) {
  // Accepts "data:image/jpeg;base64,xxxx" or raw base64.
  const m = /^data:(image\/[a-zA-Z+]+);base64,(.*)$/.exec(dataUrl || '');
  if (m) return { mime: m[1], buffer: Buffer.from(m[2], 'base64') };
  return null;
}

export default async function handler(req, res) {
  if (req.method === 'POST') return createPin(req, res);
  if (req.method === 'GET') return listPins(req, res);
  if (req.method === 'DELETE') return deletePin(req, res);
  res.setHeader('Allow', 'POST, GET, DELETE');
  return res.status(405).json({ error: 'Method not allowed' });
}

async function createPin(req, res) {
  if (!isFirebaseAdminConfigured() || !isCloudinaryConfigured()) {
    return res.status(503).json({ error: 'Backend not configured' });
  }
  const user = await authenticate(req);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  const body = req.body || {};
  const serviceSlug = String(body.serviceSlug || '');
  const citySlug = String(body.citySlug || '');
  const serviceDescription = String(body.serviceDescription || '').trim();
  const lat = Number(body.lat);
  const lng = Number(body.lng);
  const address = String(body.address || '').trim();
  const customerName = String(body.customerName || '').trim();
  const customerEmail = String(body.customerEmail || '').trim();

  if (!isValidServiceSlug(serviceSlug)) return res.status(400).json({ error: 'Invalid service' });
  if (!isValidCitySlug(citySlug)) return res.status(400).json({ error: 'Invalid city' });
  if (!serviceDescription) return res.status(400).json({ error: 'Description required' });
  if (Number.isNaN(lat) || Number.isNaN(lng)) return res.status(400).json({ error: 'Location required' });

  const decoded = decodeDataUrl(body.photoBase64);
  if (!decoded) return res.status(400).json({ error: 'Photo required' });
  const ext = ALLOWED_MIME[decoded.mime];
  if (!ext) return res.status(400).json({ error: 'Photo must be JPEG or PNG' });
  if (decoded.buffer.length > MAX_PHOTO_BYTES) {
    return res.status(400).json({ error: 'Photo too large (max 10MB)' });
  }

  // Upload photo to Cloudinary (free image storage).
  const uploaded = await uploadImage(decoded.buffer, decoded.mime);
  const photoUrl = uploaded.url;
  const photoPublicId = uploaded.publicId;

  // Optional AI polish; falls back to the raw caption on any failure.
  const serviceTitle = getServiceTitle(serviceSlug);
  const cityName = (cities.find((c) => c.slug === citySlug) || {}).name || citySlug;
  const description = await callClaudeForDescription({
    rawCaption: serviceDescription,
    serviceTitle,
    cityName,
  });

  const db = await getAdminDb();
  const FieldValue = await getFieldValue();
  const docRef = await db.collection('pins').add({
    serviceSlug,
    citySlug,
    description,
    rawCaption: serviceDescription,
    address,
    lat,
    lng,
    photoUrl,
    photoPublicId,
    customerName, // stored, never serialized to public
    customerEmail, // stored, never serialized to public
    status: 'published',
    createdAt: FieldValue.serverTimestamp(),
    createdBy: user.uid,
  });

  return res.status(200).json({ ok: true, id: docRef.id });
}

async function listPins(req, res) {
  if (!isFirebaseAdminConfigured()) return res.status(200).json({ pins: [] });
  const user = await authenticate(req);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  const db = await getAdminDb();
  const snap = await db.collection('pins').get();
  const pins = snap.docs
    .map((d) => ({ id: d.id, ...d.data() }))
    .sort((a, b) => (b.createdAt?.toMillis?.() || 0) - (a.createdAt?.toMillis?.() || 0))
    .map((p) => ({
      id: p.id,
      photoUrl: p.photoUrl,
      description: p.description,
      serviceSlug: p.serviceSlug,
      citySlug: p.citySlug,
      address: p.address,
    }));
  return res.status(200).json({ pins });
}

async function deletePin(req, res) {
  if (!isFirebaseAdminConfigured()) return res.status(503).json({ error: 'Backend not configured' });
  const user = await authenticate(req);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  const id = (req.query && req.query.id) || new URL(req.url, 'http://x').searchParams.get('id');
  if (!id) return res.status(400).json({ error: 'Missing id' });

  const db = await getAdminDb();
  const ref = db.collection('pins').doc(id);
  const doc = await ref.get();
  if (doc.exists) {
    const { photoPublicId } = doc.data();
    if (photoPublicId) {
      try {
        await deleteImage(photoPublicId);
      } catch {
        /* photo already gone — ignore */
      }
    }
    await ref.delete();
  }
  return res.status(200).json({ ok: true });
}
