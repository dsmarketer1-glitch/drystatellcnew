import React from 'react';
import BaseServicePage from '../BaseServicePage';

const content = {
  title: "Professional Carpet Cleaning",
  heroDesc: "Deep cleaning for your home's most important surfaces. We use truck-mounted steam extraction to remove stains, allergens, and deep-seated dirt.",
  heroChecklist: [
    "Certified Carpet Care Experts",
    "Eco-Friendly Cleaning Agents",
    "Deep-Steam Extraction Tech"
  ],
  responseTime: "SAME DAY",
  featuresTitle: "Restore Your Carpet's Beauty",
  featuresDesc: "Daily wear and tear can leave your carpets looking dull and harboring allergens. Our professional hot water extraction process reaches deep into the fibers to remove what standard vacuums leave behind.",
  features: [
    "Hot Water Extraction",
    "Stall & Spot Treatment",
    "Pet Odor Removal",
    "Fiber Protection",
    "Rapid Drying Service"
  ],
  techTitle: "Cleaning Technology",
  techDesc: "We use the most powerful truck-mounted systems in the industry for a thorough, deep clean.",
  techItems: [
    { title: "Truck-Mounted Systems", desc: "High-temperature, high-pressure steam extraction that provides a far deeper clean than portable units." },
    { title: "Rotary Extraction Tools", desc: "Specialized tools that provide 360-degree cleaning to agitate fibers and pull out more dirt." },
    { title: "Industrial Air Movers", desc: "High-velocity fans used to significantly reduce drying time after the cleaning process." }
  ],
  redFlagsTitle: "Signs You Need Deep Cleaning",
  redFlagsDesc: "If your carpets show these signs, standard vacuuming is no longer enough to maintain a healthy environment.",
  signs: [
    { title: "Visible Traffic Lanes", desc: "Dark or matted areas in high-use sections of your home like hallways and doorways." },
    { title: "Stubborn Odors", desc: "Smells that persist even after surface cleaning or deodorizing sprays." },
    { title: "Increased Allergies", desc: "A rise in dust sensitivity or respiratory issues when spending time in carpeted rooms." }
  ],
  sourcesTitle: "Common Carpet Issues",
  sources: [
    { title: "Deep-Seated Dirt", desc: "Abrasive soil particles that cut into carpet fibers, causing premature wear." },
    { title: "Pet Stains", desc: "Organic accidents that seep into the pad and cause persistent odors and bacteria." },
    { title: "Allergen Buildup", desc: "Dust mites, pollen, and dander that become trapped in the carpet pile." }
  ],
  insuranceTitle: "Maintenance Value",
  insuranceDesc: "Professional cleaning extends the life of your flooring and is often required by carpet warranties.",
  insuranceBenefits: [
    "Warranty Compliance Documentation",
    "Fiber Life Extension",
    "Improved Indoor Health"
  ],
  offerTitle: "Carpet Care Offer",
  offerDesc: "Free Deodorizer Treatment with any carpet cleaning service. Get that 'new home' smell back today.",
  process: [
    { num: "01", title: "Pre-Inspection", desc: "Identifying fiber types and specific stain challenges." },
    { num: "02", title: "Pre-Treatment", desc: "Applying eco-friendly agents to break down heavy soils." },
    { num: "03", title: "Extraction", desc: "Deep hot water extraction using truck-mounted equipment." },
    { num: "04", title: "Spot Care", desc: "Detailed attention to any remaining stubborn stains." },
    { num: "05", title: "Grooming", desc: "Brushing the carpet pile for a professional finish and faster drying." }
  ],
  faqs: [
    { q: "How long until I can walk on it?", a: "With our rapid drying fans, carpets are usually dry to the touch in 4 to 6 hours." },
    { q: "Can you remove pet urine smells?", a: "Yes, we use specialized enzyme treatments that break down urine at the molecular level." },
    { q: "Do you move furniture?", a: "We move light items like chairs and side tables. We ask that you move valuables and large electronics." }
  ],
  heroImage: "/assets/carpet-cleaning-hero.png",
  featureImage: "/assets/carpet-cleaning-feature.png",
  sourceImage1: "/assets/carpet-cleaning-source-1.jpg",
  sourceImage2: "/assets/carpet-cleaning-source-2.png"
};

function CarpetCleaning() {
  return <BaseServicePage content={content} />;
}

export default CarpetCleaning;
