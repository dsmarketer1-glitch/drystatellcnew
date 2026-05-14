import React from 'react';
import BaseServicePage from '../BaseServicePage';

const content = {
  title: "Smoke Damage Restoration",
  heroDesc: "Professional removal of smoke odors and soot residue. We arrive in 60 minutes or less to begin the deep cleaning and deodorization of your property.",
  heroChecklist: [
    "IICRC Certified Professionals",
    "60-Minute Arrival Guarantee",
    "Molecular Odor Neutralization"
  ],
  responseTime: "60 MIN",
  featuresTitle: "Complete Smoke Recovery",
  featuresDesc: "Smoke damage is often invisible but can cause long-term respiratory issues and structural staining. Our team uses advanced air scrubbing and thermal fogging to remove smoke particles from every corner of your home.",
  features: [
    "Soot Residue Cleaning",
    "Odor Neutralization",
    "HVAC Duct Sanitization",
    "Content Deodorization",
    "Air Quality Testing"
  ],
  techTitle: "Smoke Removal Tech",
  techDesc: "We use specialized technology to reach smoke particles trapped deep within porous materials.",
  techItems: [
    { title: "Thermal Foggers", desc: "Equipment that creates a fine fog of counteractant that follows the same path as smoke, neutralizing odors in wall cavities and insulation." },
    { title: "Hydroxyl Generators", desc: "Safe air purification technology that uses UV light to eliminate odors while the property is occupied." },
    { title: "HEPA Air Scrubbers", desc: "High-volume air filters that capture 99.97% of microscopic smoke and soot particles from the air." }
  ],
  redFlagsTitle: "Lingering Smoke Signs",
  redFlagsDesc: "If you've had a fire nearby or a small kitchen flare-up, watch for these signs of persistent smoke damage.",
  signs: [
    { title: "Soot Ghosting", desc: "Dark streaks or shadows appearing on walls and ceilings, often tracing the path of structural studs." },
    { title: "Plastic Discoloration", desc: "White appliances or electronics turning yellow due to the acidic nature of smoke residue." },
    { title: "Metal Pitting", desc: "Small holes or tarnish appearing on chrome, brass, and stainless steel fixtures." }
  ],
  sourcesTitle: "Smoke Damage Sources",
  sources: [
    { title: "Protein Fires", desc: "Burnt food in the kitchen creates an invisible, greasy smoke that is extremely difficult to remove." },
    { title: "Furnace Puff-Backs", desc: "Malfunctioning oil or gas furnaces can release a sudden cloud of soot and smoke throughout the home." },
    { title: "External Smoke", desc: "Wildfires or neighboring structure fires can send smoke into your home through the HVAC system." }
  ],
  insuranceTitle: "Odor Claim Support",
  insuranceDesc: "Smoke damage claims require detailed documentation of air quality and surface contamination. We provide the expertise needed to get your claim approved.",
  insuranceBenefits: [
    "Professional Air Quality Reports",
    "Direct Billing to Carriers",
    "Expert Claim Documentation"
  ],
  offerTitle: "Air Quality Offer",
  offerDesc: "Free Smoke Particle Test with any smoke restoration service. We'll verify that your air is safe for your family to breathe.",
  process: [
    { num: "01", title: "Assessment", desc: "Identifying the type of smoke (dry, wet, or protein) to determine the cleaning method." },
    { num: "02", title: "Air Scrubbing", desc: "Immediately starting HEPA filtration to improve air quality during cleanup." },
    { num: "03", title: "Surface Cleaning", desc: "Detailed hand-cleaning of all surfaces using specialized soot sponges." },
    { num: "04", title: "Deodorization", desc: "Using thermal fogging or hydroxyls to eliminate molecular odors." },
    { num: "05", title: "HVAC Cleaning", desc: "Ensuring the ventilation system isn't recirculating smoke particles." }
  ],
  faqs: [
    { q: "Can I just use air fresheners?", a: "No, air fresheners only mask the smell. Professional equipment is needed to neutralize the smoke molecules." },
    { q: "Is smoke residue toxic?", a: "Yes, smoke contains various carcinogens and irritants that can cause health issues if not removed." },
    { q: "Will my clothes smell like smoke?", a: "We provide professional textile restoration that removes smoke odors from clothing, curtains, and upholstery." }
  ],
  heroImage: "/assets/smoke-damage-hero.png",
  featureImage: "/assets/smoke-damage-feature.jpg",
  sourceImage1: "/assets/smoke-damage-source-1.png",
  sourceImage2: "/assets/smoke-damage-source-2.png"
};

function SmokeDamage() {
  return <BaseServicePage content={content} />;
}

export default SmokeDamage;
