// Service-area copy + regionally organized city lists, shared across the site
// (homepage, service pages, Areas We Serve, Contact).

export const serviceAreaIntro =
  'We provide restoration services for homeowners, property managers, and businesses throughout the Dallas–Fort Worth area, including:';

export const serviceAreaGroups = [
  {
    region: 'Fort Worth Area',
    cities: ['Fort Worth', 'Arlington', 'Grand Prairie', 'Haltom City'],
  },
  {
    region: 'Northeast Tarrant County',
    cities: ['North Richland Hills', 'Richland Hills', 'Keller', 'Colleyville', 'Southlake', 'Grapevine'],
  },
  {
    region: 'Mid-Cities',
    cities: ['Bedford', 'Euless', 'Hurst', 'Irving', 'Coppell'],
  },
  {
    region: 'Dallas Area',
    cities: ['Dallas', 'Carrollton', 'Farmers Branch', 'Duncanville', 'Lewisville', 'Addison'],
  },
];

// Pins for the DFW map graphic (approximate geographic positions on a 480x400 canvas).
export const mapPins = [
  { label: 'Fort Worth', x: 78, y: 236, lx: 78, ly: 212 },
  { label: 'Grapevine', x: 196, y: 150, lx: 196, ly: 126 },
  { label: 'Lewisville', x: 285, y: 96, lx: 285, ly: 72 },
  { label: 'Carrollton', x: 345, y: 150, lx: 345, ly: 126 },
  { label: 'Irving', x: 272, y: 222, lx: 272, ly: 198 },
  { label: 'Dallas', x: 372, y: 238, lx: 372, ly: 214 },
  { label: 'Arlington', x: 168, y: 300, lx: 168, ly: 324 },
  { label: 'Grand Prairie', x: 240, y: 308, lx: 240, ly: 332 },
];
