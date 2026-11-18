// Keyless maps helpers (OpenStreetMap + Nominatim). No API keys, no billing.

export function osmEmbedUrl(lat, lng) {
  const d = 0.01; // ~1km bbox padding
  const bbox = `${lng - d},${lat - d},${lng + d},${lat + d}`;
  return (
    `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}` +
    `&layer=mapnik&marker=${lat},${lng}`
  );
}

export async function nominatimReverse(lat, lng) {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`,
      { headers: { 'Accept-Language': 'en' } }
    );
    if (!res.ok) return '';
    const data = await res.json();
    return data.display_name || '';
  } catch {
    return '';
  }
}

export async function nominatimSearch(query) {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(query)}`,
      { headers: { 'Accept-Language': 'en' } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    if (data && data[0]) {
      return {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon),
        address: data[0].display_name,
      };
    }
    return null;
  } catch {
    return null;
  }
}
