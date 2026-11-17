// Central data source for all dedicated location pages.
//
// Structure:
//   locations = [ City, City, ... ]
//   City = { slug, name, county, tier, blurb, communities?: [Community] }
//   Community = { slug, name, blurb }
//
// tier: "primary"  -> core service cities
//       "extended" -> growing "additional areas we serve" communities
//
// Routes are generated from this file in App.jsx:
//   /{city.slug}                     -> city landing page
//   /{city.slug}/{community.slug}    -> neighborhood/community page

export const PHONE = '214-785-1130';
export const PHONE_HREF = 'tel:2147851130';

export const locations = [
  {
    slug: 'dallas',
    name: 'Dallas',
    county: 'Dallas County',
    tier: 'primary',
    blurb:
      'From historic bungalows to modern high-rises, Dallas properties face everything from aging cast-iron plumbing to flash flooding along the Trinity. Our crews know the city block by block and arrive fast when water, fire, or storm damage strikes.',
    communities: [
      {
        slug: 'oak-cliff',
        name: 'Oak Cliff',
        blurb:
          "Oak Cliff's century-old homes and mature tree canopy mean aging pipes, foundation shifts, and storm-driven roof leaks are common. We specialize in restoring older Oak Cliff properties without compromising their historic character.",
      },
      {
        slug: 'east-dallas',
        name: 'East Dallas',
        blurb:
          'East Dallas blends prewar homes with dense infill near White Rock Lake, where heavy rain and high water tables drive frequent basement and slab-leak issues. Our team responds quickly across the entire East Dallas corridor.',
      },
      {
        slug: 'lakewood',
        name: 'Lakewood',
        blurb:
          'Lakewood’s established estates near White Rock Lake are prized for their character but prone to hidden moisture, hardwood water damage, and storm impact. We restore these high-value homes with meticulous, discreet care.',
      },
      {
        slug: 'lake-highlands',
        name: 'Lake Highlands',
        blurb:
          'Lake Highlands sits on clay-heavy soil that shifts with drought and downpour, stressing foundations and supply lines. We handle slab leaks, appliance failures, and storm damage across the neighborhood every day.',
      },
      {
        slug: 'casa-view',
        name: 'Casa View',
        blurb:
          'Casa View’s mid-century homes often hide original galvanized plumbing and dated water heaters that fail without warning. Our rapid-response crews mitigate the damage and dry the structure before mold can take hold.',
      },
      {
        slug: 'lochwood',
        name: 'Lochwood',
        blurb:
          'Lochwood’s wooded lots near the lake see frequent storm and wind damage alongside the usual aging-home plumbing risks. We provide full water, storm, and fire restoration throughout the Lochwood community.',
      },
    ],
  },
  {
    slug: 'garland',
    name: 'Garland',
    county: 'Dallas County',
    tier: 'primary',
    blurb:
      'Garland’s mix of established mid-century neighborhoods and growing suburbs sees its share of burst pipes, roof leaks, and North Texas storm damage. DryState keeps rapid-response crews ready across the city, day or night.',
    communities: [
      {
        slug: 'downtown-garland',
        name: 'Downtown Garland',
        blurb:
          'Downtown Garland’s older commercial and residential buildings around the square carry aging infrastructure that’s vulnerable to plumbing failures and fire. We restore both homes and businesses in the historic core.',
      },
      {
        slug: 'travis-college-hill',
        name: 'Travis College Hill',
        blurb:
          'Travis College Hill is one of Garland’s oldest neighborhoods, where original plumbing and wiring raise the risk of water and fire damage. We restore these historic homes carefully and completely.',
      },
      {
        slug: 'williams-neighborhood',
        name: 'Williams Neighborhood',
        blurb:
          'The Williams Neighborhood’s established homes are prone to hidden moisture and storm-driven roof leaks. Our crews respond quickly to protect the structure and contents.',
      },
      {
        slug: 'western-heights',
        name: 'Western Heights',
        blurb:
          'Western Heights combines aging housing stock with clay soil that stresses foundations and supply lines. We handle slab leaks, pipe bursts, and storm damage throughout the area.',
      },
      {
        slug: 'duck-creek',
        name: 'Duck Creek',
        blurb:
          'Homes along Duck Creek face elevated flood and drainage risk when North Texas storms roll through. We provide fast extraction, structural drying, and full flood restoration for the neighborhood.',
      },
      {
        slug: 'south-garland',
        name: 'South Garland',
        blurb:
          'South Garland’s dense residential streets see frequent appliance failures, water heater leaks, and storm damage. Our team is on call 24/7 to mitigate and restore.',
      },
    ],
  },
  {
    slug: 'irving',
    name: 'Irving',
    county: 'Dallas County',
    tier: 'primary',
    blurb:
      'Irving spans historic older neighborhoods and booming Las Colinas development, each with distinct restoration needs. From aging pipes to sudden storm damage, DryState delivers fast, certified response across the city.',
    communities: [
      {
        slug: 'south-irving',
        name: 'South Irving',
        blurb:
          'South Irving’s established homes often run on decades-old plumbing that’s prone to leaks and bursts. We restore these properties quickly, preventing secondary mold and structural damage.',
      },
      {
        slug: 'heritage-district',
        name: 'Heritage District',
        blurb:
          'The Heritage District’s historic homes and buildings demand careful, character-preserving restoration after water or fire damage. Our IICRC-certified crews specialize in older-structure recovery.',
      },
      {
        slug: 'plymouth-park',
        name: 'Plymouth Park',
        blurb:
          'Plymouth Park’s mid-century ranch homes frequently hide original supply lines and aging water heaters. We respond fast to leaks, bursts, and storm damage across the neighborhood.',
      },
      {
        slug: 'barton-estates',
        name: 'Barton Estates',
        blurb:
          'Barton Estates homes sit on shifting clay soil that stresses slabs and plumbing. We handle slab leaks, foundation-related water intrusion, and storm damage with precision.',
      },
      {
        slug: 'nichols-park',
        name: 'Nichols Park',
        blurb:
          'Nichols Park’s established streets see regular plumbing failures and North Texas storm impact. Our crews provide complete water, fire, and storm restoration throughout the area.',
      },
    ],
  },

  // ---- Standalone primary cities (no dedicated community pages) ----
  {
    slug: 'richardson',
    name: 'Richardson',
    county: 'Dallas & Collin Counties',
    tier: 'primary',
    blurb:
      'Home to the Telecom Corridor, Richardson mixes established neighborhoods with dense commercial property. We handle everything from residential slab leaks to large-scale commercial water and fire damage.',
  },
  {
    slug: 'mesquite',
    name: 'Mesquite',
    county: 'Dallas County',
    tier: 'primary',
    blurb:
      'Mesquite’s expanding suburbs and older core alike face burst pipes, appliance leaks, and severe North Texas storms. DryState delivers rapid, certified restoration across the city.',
  },
  {
    slug: 'plano',
    name: 'Plano',
    county: 'Collin County',
    tier: 'primary',
    blurb:
      'Plano’s upscale homes and corporate campuses demand fast, meticulous restoration. From slab leaks to storm damage, our crews protect high-value property with certified precision.',
  },
  {
    slug: 'grand-prairie',
    name: 'Grand Prairie',
    county: 'Dallas & Tarrant Counties',
    tier: 'primary',
    blurb:
      'Stretching across two counties, Grand Prairie sees flooding near its lakes and creeks plus the usual aging-home plumbing risks. We respond fast with high-volume extraction and structural drying.',
  },
  {
    slug: 'arlington',
    name: 'Arlington',
    county: 'Tarrant County',
    tier: 'primary',
    blurb:
      'Arlington’s dense residential and entertainment districts keep our crews busy with water, fire, and storm restoration. We arrive quickly and restore properties to pre-loss condition.',
  },
  {
    slug: 'rowlett',
    name: 'Rowlett',
    county: 'Dallas & Rockwall Counties',
    tier: 'primary',
    blurb:
      'Bordered by Lake Ray Hubbard, Rowlett faces elevated storm and flood exposure. We provide fast flood extraction, drying, and complete storm-damage restoration for lakeside and inland homes alike.',
  },
  {
    slug: 'sachse',
    name: 'Sachse',
    county: 'Dallas & Collin Counties',
    tier: 'primary',
    blurb:
      'Sachse’s newer neighborhoods still face plumbing failures, appliance leaks, and severe storms. DryState keeps certified crews ready to respond across the community.',
  },
  {
    slug: 'wylie',
    name: 'Wylie',
    county: 'Collin County',
    tier: 'primary',
    blurb:
      'Wylie’s rapid growth near Lavon Lake brings both new construction and storm exposure. We handle water, storm, and fire damage for homes across the city.',
  },
  {
    slug: 'murphy',
    name: 'Murphy',
    county: 'Collin County',
    tier: 'primary',
    blurb:
      'Murphy’s family neighborhoods sit on clay soil that stresses foundations and supply lines. We respond quickly to slab leaks, pipe bursts, and North Texas storm damage.',
  },
  {
    slug: 'sunnyvale',
    name: 'Sunnyvale',
    county: 'Dallas County',
    tier: 'primary',
    blurb:
      'Sunnyvale’s larger lots and estate homes need careful, thorough restoration after water or storm damage. Our certified crews deliver discreet, high-quality recovery.',
  },
  {
    slug: 'balch-springs',
    name: 'Balch Springs',
    county: 'Dallas County',
    tier: 'primary',
    blurb:
      'Balch Springs’ established homes often run on aging plumbing prone to leaks and bursts. DryState provides fast mitigation and full restoration, day or night.',
  },
  {
    slug: 'rockwall',
    name: 'Rockwall',
    county: 'Rockwall County',
    tier: 'primary',
    blurb:
      'Overlooking Lake Ray Hubbard, Rockwall faces significant storm and flood risk. We provide rapid flood extraction, structural drying, and complete storm restoration.',
  },
  {
    slug: 'carrollton',
    name: 'Carrollton',
    county: 'Dallas, Denton & Collin Counties',
    tier: 'primary',
    blurb:
      'Carrollton’s established neighborhoods and older housing stock are prone to hidden moisture and drainage issues. Our crews respond fast across all three counties the city touches.',
  },
  {
    slug: 'farmers-branch',
    name: 'Farmers Branch',
    county: 'Dallas County',
    tier: 'primary',
    blurb:
      'Farmers Branch mixes mature residential streets with commercial property, both vulnerable to plumbing failures and storm damage. We deliver certified water, fire, and storm restoration.',
  },
  {
    slug: 'addison',
    name: 'Addison',
    county: 'Dallas County',
    tier: 'primary',
    blurb:
      'Addison’s dense mix of restaurants, offices, and residences keeps our crews ready for both commercial and residential emergencies. We mitigate fast to limit downtime and damage.',
  },
  {
    slug: 'duncanville',
    name: 'Duncanville',
    county: 'Dallas County',
    tier: 'primary',
    blurb:
      'Duncanville’s established homes are more susceptible to aging pipes, roof leaks, and hidden moisture. DryState restores these properties quickly and completely.',
  },
  {
    slug: 'desoto',
    name: 'DeSoto',
    county: 'Dallas County',
    tier: 'primary',
    blurb:
      'DeSoto’s family neighborhoods face the full range of North Texas risks, from burst pipes to severe storms. Our certified crews respond around the clock.',
  },
  {
    slug: 'richland-hills',
    name: 'Richland Hills',
    county: 'Tarrant County',
    tier: 'primary',
    blurb:
      "Home to DryState's headquarters, Richland Hills is where our fleet is based, giving these mid-century homes the fastest possible response. Aging plumbing and North Texas humidity make quick mitigation essential to prevent mold.",
  },
  {
    slug: 'north-richland-hills',
    name: 'North Richland Hills',
    county: 'Tarrant County',
    tier: 'primary',
    blurb:
      'North Richland Hills blends established neighborhoods with newer development, all exposed to North Texas storms and aging supply lines. We respond fast with certified water, fire, and storm restoration.',
  },
  {
    slug: 'bedford',
    name: 'Bedford',
    county: 'Tarrant County',
    tier: 'primary',
    blurb:
      'Bedford’s mature Mid-Cities homes often hide dated plumbing and water heaters that fail without warning. DryState mitigates quickly to prevent secondary mold and structural damage.',
  },
  {
    slug: 'euless',
    name: 'Euless',
    county: 'Tarrant County',
    tier: 'primary',
    blurb:
      'Centrally located in the Mid-Cities, Euless faces the full range of water and storm risks. Our nearby crews arrive fast to extract, dry, and fully restore your property.',
  },
  {
    slug: 'hurst',
    name: 'Hurst',
    county: 'Tarrant County',
    tier: 'primary',
    blurb:
      'Hurst’s established neighborhoods are prone to slab leaks, pipe bursts, and storm-driven roof damage. We provide complete, certified restoration around the clock.',
  },
  {
    slug: 'haltom-city',
    name: 'Haltom City',
    county: 'Tarrant County',
    tier: 'primary',
    blurb:
      'Haltom City’s older housing stock carries aging galvanized plumbing that’s vulnerable to leaks and bursts. DryState restores these homes quickly and thoroughly.',
  },
  {
    slug: 'fort-worth',
    name: 'Fort Worth',
    county: 'Tarrant County',
    tier: 'primary',
    blurb:
      'From historic neighborhoods to sprawling suburbs, Fort Worth properties face everything from flash flooding to aging infrastructure. Our crews cover the entire city with rapid, certified response.',
  },

  // ---- Extended / growing communities ----
  {
    slug: 'coppell',
    name: 'Coppell',
    county: 'Dallas County',
    tier: 'extended',
    blurb:
      'Coppell’s well-kept homes still face plumbing failures, appliance leaks, and storm damage. We provide high-precision water, fire, and storm restoration throughout the city.',
  },
  {
    slug: 'grapevine',
    name: 'Grapevine',
    county: 'Tarrant County',
    tier: 'extended',
    blurb:
      'Near Grapevine Lake, this historic city faces elevated storm and flood exposure alongside aging-home plumbing risks. Our crews respond fast with certified restoration.',
  },
  {
    slug: 'keller',
    name: 'Keller',
    county: 'Tarrant County',
    tier: 'extended',
    blurb:
      'Keller’s upscale neighborhoods demand careful, thorough restoration after water or storm damage. We protect high-value property with meticulous, certified work.',
  },
  {
    slug: 'southlake',
    name: 'Southlake',
    county: 'Tarrant County',
    tier: 'extended',
    blurb:
      'Southlake’s luxury estates require discreet, high-quality restoration. From slab leaks to storm damage, we restore these homes to pristine, pre-loss condition.',
  },
  {
    slug: 'colleyville',
    name: 'Colleyville',
    county: 'Tarrant County',
    tier: 'extended',
    blurb:
      'Colleyville’s large estate homes need meticulous water, fire, and storm restoration. Our certified crews deliver premium, detail-focused recovery.',
  },
  {
    slug: 'lewisville',
    name: 'Lewisville',
    county: 'Denton County',
    tier: 'extended',
    blurb:
      'Bordering Lewisville Lake, the city faces real storm and flood risk plus the usual aging-home plumbing issues. We provide rapid extraction, drying, and full restoration.',
  },
];

// ---- Lookup helpers ----

export function getCity(citySlug) {
  return locations.find((c) => c.slug === citySlug);
}

export function getCommunity(citySlug, communitySlug) {
  const city = getCity(citySlug);
  if (!city || !city.communities) return null;
  return city.communities.find((n) => n.slug === communitySlug) || null;
}

// Convert a display name (e.g. "North Richland Hills") to its URL slug.
export function citySlug(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

// Look up a city by its display name; returns undefined if no page exists.
export function getCityByName(name) {
  return getCity(citySlug(name));
}
