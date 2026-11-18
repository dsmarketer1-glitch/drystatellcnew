import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dev-only mock of the DataPins API so the capture → display flow can be
// demonstrated locally without Firebase. In-memory only (resets on restart).
// Production uses the real serverless functions in /api with Firebase.
function dataPinsDevMock() {
  const store = []; // { id, serviceSlug, citySlug, description, address, lat, lng, photoUrl }

  const readJson = (req) =>
    new Promise((resolve) => {
      let body = '';
      req.on('data', (c) => (body += c));
      req.on('end', () => {
        try { resolve(JSON.parse(body || '{}')); } catch { resolve({}); }
      });
    });

  const sendJson = (res, code, obj) => {
    res.statusCode = code;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(obj));
  };

  return {
    name: 'datapins-dev-mock',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url || '';
        if (!url.startsWith('/api/pins')) return next();

        // Public read
        if (url.startsWith('/api/pins-public')) {
          const q = new URL(url, 'http://localhost').searchParams;
          const service = q.get('service');
          const city = q.get('city');
          let pins = store.slice().reverse();
          if (service) pins = pins.filter((p) => p.serviceSlug === service);
          if (city) pins = pins.filter((p) => p.citySlug === city);
          return sendJson(res, 200, { pins });
        }

        // Private endpoint (mock ignores auth in dev)
        if (req.method === 'POST') {
          const body = await readJson(req);
          const id = 'dev_' + Math.random().toString(36).slice(2, 10);
          store.push({
            id,
            serviceSlug: body.serviceSlug,
            citySlug: body.citySlug,
            description: body.serviceDescription,
            address: body.address || '',
            lat: Number(body.lat),
            lng: Number(body.lng),
            photoUrl: body.photoBase64, // data URL renders directly in dev
          });
          return sendJson(res, 200, { ok: true, id });
        }
        if (req.method === 'GET') {
          return sendJson(res, 200, { pins: store.slice().reverse() });
        }
        if (req.method === 'DELETE') {
          const id = new URL(url, 'http://localhost').searchParams.get('id');
          const i = store.findIndex((p) => p.id === id);
          if (i >= 0) store.splice(i, 1);
          return sendJson(res, 200, { ok: true });
        }
        return next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dataPinsDevMock()],
})
