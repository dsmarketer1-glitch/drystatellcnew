// Vercel serverless function (Node). PUBLIC read endpoint for the live galleries.
//   GET /api/pins-public               -> all published pins (for /projects)
//   GET /api/pins-public?service=<s>   -> pins for a service page
//   GET /api/pins-public?city=<c>      -> pins for a city page
//
// Returns PUBLIC fields only. customerName/customerEmail are NEVER serialized.
// Degrades to { pins: [] } on any backend trouble so public pages never break.

import { getAdminDb, isFirebaseAdminConfigured } from '../server/firebaseAdmin.js';

function serialize(doc) {
  const d = doc.data();
  return {
    id: doc.id,
    serviceSlug: d.serviceSlug,
    citySlug: d.citySlug,
    description: d.description,
    address: d.address,
    lat: d.lat,
    lng: d.lng,
    photoUrl: d.photoUrl,
  };
}

export default async function handler(req, res) {
  // Cache at the edge for an hour (mirrors the brief's ISR window).
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');

  if (!isFirebaseAdminConfigured()) return res.status(200).json({ pins: [] });

  const q = req.query || {};
  const service = q.service ? String(q.service) : '';
  const city = q.city ? String(q.city) : '';
  const max = Math.min(Number(q.max) || (service || city ? 12 : 48), 60);

  try {
    const db = await getAdminDb();
    let query = db.collection('pins').where('status', '==', 'published');
    if (service) query = query.where('serviceSlug', '==', service);
    if (city) query = query.where('citySlug', '==', city);

    const snap = await query.get();
    const pins = snap.docs
      .map((doc) => ({ doc, ms: doc.data().createdAt?.toMillis?.() || 0 }))
      .sort((a, b) => b.ms - a.ms)
      .slice(0, max)
      .map(({ doc }) => serialize(doc));

    return res.status(200).json({ pins });
  } catch (err) {
    console.error('pins-public failed:', err);
    return res.status(200).json({ pins: [] }); // degrade gracefully
  }
}
