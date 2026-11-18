// Builds JSON-LD Service schema per pin, with DryState Restoration as the provider.
const PROVIDER = {
  '@type': 'HomeAndConstructionBusiness',
  name: 'DryState Restoration',
  telephone: '214-785-1130',
  areaServed: 'Dallas–Fort Worth, TX',
  url: 'https://www.drystatellc.com',
};

export function buildPinSchema(pin) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: pin.description?.slice(0, 110) || 'Completed restoration job',
    areaServed: pin.address || undefined,
    provider: PROVIDER,
    ...(typeof pin.lat === 'number'
      ? {
          location: {
            '@type': 'Place',
            geo: { '@type': 'GeoCoordinates', latitude: pin.lat, longitude: pin.lng },
            address: pin.address,
          },
        }
      : {}),
  };
}
