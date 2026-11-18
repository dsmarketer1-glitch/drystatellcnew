// Source of truth for service slugs used by DataPins.
// Slugs MUST match the /services/<slug> routes in App.jsx.
// Plain data only (no Vite/JSX imports) so the serverless API can import it too.

export const services = [
  { slug: 'water-damage', title: 'Water Damage Restoration' },
  { slug: 'fire-damage', title: 'Fire Damage Restoration' },
  { slug: 'flood-damage', title: 'Flood Damage Restoration' },
  { slug: 'storm-damage', title: 'Storm Damage Restoration' },
  { slug: 'sewage-cleanup', title: 'Sewage Cleanup' },
  { slug: 'smoke-damage', title: 'Smoke Damage Restoration' },
  { slug: 'reconstruction', title: 'Reconstruction' },
  { slug: 'water-removal', title: 'Water Removal' },
  { slug: 'content-cleaning', title: 'Content Cleaning' },
  { slug: 'air-duct-cleaning', title: 'Air Duct & HVAC Cleaning' },
  { slug: 'carpet-cleaning', title: 'Carpet Cleaning' },
  { slug: 'tile-grout-cleaning', title: 'Tile & Grout Cleaning' },
];

export function getServiceTitle(slug) {
  const s = services.find((x) => x.slug === slug);
  return s ? s.title : slug;
}

export function isValidServiceSlug(slug) {
  return services.some((s) => s.slug === slug);
}
