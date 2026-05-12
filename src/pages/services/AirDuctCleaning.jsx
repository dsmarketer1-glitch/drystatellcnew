import React from 'react';
import BaseServicePage from '../BaseServicePage';

const content = {
  title: "Air Duct & HVAC Cleaning",
  heroDesc: "Improve your indoor air quality and HVAC efficiency. We provide professional deep cleaning for residential and commercial duct systems.",
  heroChecklist: [
    "Certified Ventilation Specialists",
    "High-Powered HEPA Vacuuming",
    "Microbial Growth Treatment"
  ],
  responseTime: "SAME DAY",
  featuresTitle: "Breathe Easier with Clean Ducts",
  featuresDesc: "Your air ducts can collect pounds of dust, allergens, and microbial growth over time. Our professional cleaning process removes these contaminants, improving your health and reducing your energy bills.",
  features: [
    "Full HVAC System Cleaning",
    "HEPA Vacuuming",
    "Filter Replacement",
    "Antimicrobial Fogging",
    "Video Duct Inspections"
  ],
  techTitle: "Ventilation Tech",
  techDesc: "We use specialized tools to agitate and remove debris from deep within your ventilation system.",
  techItems: [
    { title: "Power Brushes", desc: "Rotary brush systems that scrub the interior walls of your ducts to loosen stubborn buildup." },
    { title: "HEPA Vacuums", desc: "High-capacity vacuums that pull debris directly out of your home, preventing dust from entering your living space." },
    { title: "Video Inspection Cameras", desc: "Fiber-optic cameras that allow us to see (and show you) the condition of your ducts before and after cleaning." }
  ],
  redFlagsTitle: "Signs Your Ducts Need Cleaning",
  redFlagsDesc: "Don't ignore poor air quality. If you notice these signs, your HVAC system could be circulating harmful particles.",
  signs: [
    { title: "Visible Dust", desc: "Dust buildup on vent covers or around ceiling registers shortly after cleaning." },
    { title: "Unexplained Allergies", desc: "Increased sneezing, coughing, or respiratory issues when the HVAC system is running." },
    { title: "Musty Smells", desc: "A damp or stale odor coming from the vents when the air or heat turns on." }
  ],
  sourcesTitle: "Common Contaminants",
  sources: [
    { title: "Construction Debris", desc: "Drywall dust and sawdust from renovations often settle in the ductwork." },
    { title: "Pet Dander & Hair", desc: "Shedding from pets can quickly clog return vents and accumulate in the main lines." },
    { title: "Mold & Mildew", desc: "Moisture in the HVAC system can lead to microbial growth inside the dark, cool ducts." }
  ],
  insuranceTitle: "Maintenance & Claims",
  insuranceDesc: "Regular duct cleaning can prevent costly HVAC failures. We provide the documentation needed for maintenance records and property claims.",
  insuranceBenefits: [
    "Efficiency Improvement Reports",
    "Detailed Before/After Photos",
    "Certified Maintenance Logs"
  ],
  offerTitle: "Air Quality Offer",
  offerDesc: "Free Video Duct Inspection with any air duct cleaning service. See the difference our deep cleaning makes.",
  process: [
    { num: "01", title: "Inspection", desc: "Video assessment of the entire duct system and HVAC unit." },
    { num: "02", title: "Agitation", desc: "Using power brushes to loosen dust and debris from duct walls." },
    { num: "03", title: "Extraction", desc: "Powerful HEPA vacuums pull all loosened debris out of the system." },
    { num: "04", title: "Sanitization", desc: "Applying antimicrobial fogging to kill bacteria and mold spores." },
    { num: "05", title: "Verification", desc: "Final video inspection to ensure the system is completely clean." }
  ],
  faqs: [
    { q: "How often should ducts be cleaned?", a: "We recommend cleaning your air ducts every 3 to 5 years for optimal air quality." },
    { q: "Will this make my house dusty?", a: "No, our high-powered HEPA vacuum system creates negative pressure, pulling all dust out of your home." },
    { q: "Can this lower my energy bill?", a: "Yes, cleaning the ducts and HVAC coils improves airflow, allowing your system to run more efficiently." }
  ],
  heroImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1920&q=80",
  featureImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
};

function AirDuctCleaning() {
  return <BaseServicePage content={content} />;
}

export default AirDuctCleaning;
