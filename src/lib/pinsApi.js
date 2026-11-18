// Client helpers for talking to the DataPins API.

// Create a pin (auth required). `token` = Firebase ID token. `pin` includes photoBase64.
export async function createPin(token, pin) {
  const res = await fetch('/api/pins', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(pin),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Failed to submit');
  return data;
}

// List pins for the team manager (auth required).
export async function listPins(token) {
  const res = await fetch('/api/pins', {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json().catch(() => ({ pins: [] }));
  if (!res.ok) throw new Error(data.error || 'Failed to load');
  return data.pins || [];
}

// Delete a pin (auth required).
export async function deletePin(token, id) {
  const res = await fetch(`/api/pins?id=${encodeURIComponent(id)}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Failed to delete');
  return data;
}

// Public read for the live galleries. opts = { service } | { city } | {}.
export async function fetchPublicPins(opts = {}) {
  const params = new URLSearchParams();
  if (opts.service) params.set('service', opts.service);
  if (opts.city) params.set('city', opts.city);
  if (opts.max) params.set('max', String(opts.max));
  try {
    const res = await fetch(`/api/pins-public?${params.toString()}`);
    if (!res.ok) return [];
    const data = await res.json();
    return data.pins || [];
  } catch {
    return [];
  }
}
