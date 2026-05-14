import React from 'react';
import BaseServicePage from '../BaseServicePage';

const content = {
  title: "Tile & Grout Cleaning",
  heroDesc: "Professional restoration for your hard surfaces. We use high-pressure steam and specialized cleaning agents to remove years of buildup and stains.",
  heroChecklist: [
    "Expert Hard Surface Technicians",
    "High-Pressure Steam Extraction",
    "Grout Sealing & Protection"
  ],
  responseTime: "SAME DAY",
  featuresTitle: "Bring Your Tile Back to Life",
  featuresDesc: "Tile and grout are porous and trap dirt, grease, and bacteria over time. Mopping only moves the dirt around. Our professional deep cleaning reaches deep into the pores of your grout to pull out the grime and restore the original color.",
  features: [
    "High-Pressure Tile Scrubbing",
    "Grout Deep Cleaning",
    "Clear & Color Sealing",
    "Mildew & Mold Removal",
    "Kitchen & Bath Restoration"
  ],
  techTitle: "Tile Cleaning Tech",
  techDesc: "We use specialized equipment designed to provide maximum cleaning power without damaging your tile or grout.",
  techItems: [
    { title: "Truck-Mounted Steamers", desc: "High-temperature steam that breaks down grease and stubborn stains that household cleaners can't touch." },
    { title: "Rotary Pressure Tools", desc: "Specialized tools that create a high-pressure vortex to scrub tile surfaces and grout lines simultaneously." },
    { title: "Industrial Vacuums", desc: "Immediately extracting the dirty water and cleaning agents, leaving your floors dry and residue-free." }
  ],
  redFlagsTitle: "Signs for Professional Cleaning",
  redFlagsDesc: "If your tile looks like this, standard cleaning is no longer effective.",
  signs: [
    { title: "Dark Grout Lines", desc: "Grout that has turned black or brown, especially in high-traffic areas or near cooking surfaces." },
    { title: "Persistent Mildew", desc: "Mold or mildew in shower corners or around tubs that returns shortly after surface cleaning." },
    { title: "Dull Tile Finish", desc: "A cloudy or waxy buildup on the tile surface that makes it look dirty even after mopping." }
  ],
  sourcesTitle: "Common Grout Issues",
  sources: [
    { title: "Microbial Growth", desc: "Bacteria and mold that thrive in the porous structure of damp grout in bathrooms and kitchens." },
    { title: "Grease & Oil Buildup", desc: "Cooking oils and kitchen spills that penetrate grout and become impossible to remove with standard cleaners." },
    { title: "Residue Accumulation", desc: "Leftover soap and household cleaners that actually attract more dirt over time." }
  ],
  insuranceTitle: "Property Maintenance",
  insuranceDesc: "Proper tile and grout maintenance prevents water seepage and structural damage in wet areas. We provide the professional logs for your records.",
  insuranceBenefits: [
    "Sealing Warranty Protection",
    "Waterproofing Verification",
    "Professional Maintenance Logs"
  ],
  offerTitle: "Tile Care Offer",
  offerDesc: "Free Grout Sealing with any full tile cleaning service. Protect your restored grout from future stains.",
  process: [
    { num: "01", title: "Pre-Treatment", desc: "Applying a specialized cleaning solution to emulsify dirt and oils." },
    { num: "02", title: "Manual Agitation", desc: "Hand-scrubbing grout lines to ensure the cleaning agent reaches deep into the pores." },
    { num: "03", title: "Steam Extraction", desc: "High-pressure rinsing and vacuuming to remove all dirt and cleaning residue." },
    { num: "04", title: "Drying", desc: "Using high-velocity fans to ensure the surface is dry and ready for sealing." },
    { num: "05", title: "Grout Sealing", desc: "Applying a professional-grade sealer to protect the grout from future penetration and stains." }
  ],
  faqs: [
    { q: "How long does it stay clean?", a: "With professional sealing and proper maintenance, your tile and grout can stay looking new for several years." },
    { q: "Can you change the grout color?", a: "Yes! We offer grout color sealing that can completely change the look of your tile while providing maximum protection." },
    { q: "Is the sealer safe for pets?", a: "Yes, once the sealer is dry (usually 2-4 hours), it is completely non-toxic and safe for the whole family." }
  ],
  heroImage: "/assets/tile-grout-hero.png",
  featureImage: "/assets/tile-grout-feature.png",
  sourceImage1: "/assets/tile-grout-source-1.jpg",
  sourceImage2: "/assets/tile-grout-source-2.png"
};

function TileGroutCleaning() {
  return <BaseServicePage content={content} />;
}

export default TileGroutCleaning;
