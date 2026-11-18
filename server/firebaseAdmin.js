// Server-only. Lazily initializes firebase-admin and exposes helpers.
// Used by the Vercel serverless functions in /api. Never import from client code.

let _appPromise = null;

export function isFirebaseAdminConfigured() {
  return Boolean(
    process.env.FIREBASE_PROJECT_ID &&
      process.env.FIREBASE_CLIENT_EMAIL &&
      process.env.FIREBASE_PRIVATE_KEY
  );
}

async function getAdminApp() {
  if (_appPromise) return _appPromise;
  _appPromise = (async () => {
    const { getApps, initializeApp, cert } = await import('firebase-admin/app');
    const existing = getApps();
    if (existing.length) return existing[0];
    const privateKey = (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n');
    return initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey,
      }),
    });
  })();
  return _appPromise;
}

export async function getAdminDb() {
  const app = await getAdminApp();
  const { getFirestore } = await import('firebase-admin/firestore');
  return getFirestore(app);
}

export async function getFieldValue() {
  const { FieldValue } = await import('firebase-admin/firestore');
  return FieldValue;
}

// Verify a Firebase ID token via Identity Toolkit REST (avoids firebase-admin/auth
// and its jose ESM issues). Returns { uid, email, name } or throws.
export async function verifyIdTokenRest(idToken) {
  const apiKey = process.env.FIREBASE_API_KEY || process.env.VITE_FIREBASE_API_KEY;
  if (!apiKey) throw new Error('Missing FIREBASE_API_KEY');
  const res = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idToken }),
    }
  );
  if (!res.ok) throw new Error('Token verification failed');
  const data = await res.json();
  const u = data.users && data.users[0];
  if (!u) throw new Error('Invalid token');
  return { uid: u.localId, email: u.email, name: u.displayName };
}
