import React from 'react';
import BaseServicePage from '../BaseServicePage';

const content = {
  title: "Flood Damage Restoration",
  heroDesc: "Rapid response to basement flooding and heavy water intrusion. We arrive in 60 minutes or less to extract water and protect your structural integrity.",
  heroChecklist: [
    "IICRC Certified Professionals",
    "60-Minute Arrival Guarantee",
    "High-Volume Extraction Gear"
  ],
  responseTime: "60 MIN",
  featuresTitle: "Expert Flood Mitigation",
  featuresDesc: "Flooding requires more than just a shop-vac. Our high-capacity extraction units and industrial-strength drying systems are designed to handle thousands of gallons of water, ensuring your home is dry and safe.",
  features: [
    "Submersible Pump Extraction",
    "Deep-Cleaning & Disinfecting",
    "Structural Drying",
    "Moisture Mapping",
    "Full Reconstruction"
  ],
  techTitle: "Flood Recovery Tech",
  techDesc: "We use the most powerful extraction and drying equipment available in the restoration industry.",
  techItems: [
    { title: "Truck-Mounted Extractors", desc: "High-pressure vacuum systems that pull water directly from carpets and subfloors with massive suction power." },
    { title: "Desiccant Dehumidifiers", desc: "Specialized units that use chemical attraction to pull moisture from the air, even in freezing temperatures." },
    { title: "Weighted Extraction Tools", desc: "Heavy tools that use the technician's weight to squeeze water out of carpet pads without removing the carpet." }
  ],
  redFlagsTitle: "Flood Damage Risks",
  redFlagsDesc: "Standing water is a breeding ground for bacteria and mold. Immediate action is required to prevent these issues.",
  signs: [
    { title: "Warped Flooring", desc: "Hardwood or laminate floors that begin to cup or crown within hours of water exposure." },
    { title: "Saturated Drywall", desc: "Walls that feel soft, crumbly, or show visible 'wicking' marks above the water line." },
    { title: "Electrical Issues", desc: "Flickering lights or tripped breakers caused by water entering wall outlets and conduits." }
  ],
  sourcesTitle: "Common Flood Sources",
  sources: [
    { title: "Heavy Rainfall", desc: "Flash floods can overwhelm window wells and enter through basement doors or crawlspaces." },
    { title: "Sump Pump Failure", desc: "When pumps fail during a storm, basements can fill with several feet of water in minutes." },
    { title: "Main Breakage", desc: "City water main breaks can send thousands of gallons of pressurized water into your lower levels." }
  ],
  insuranceTitle: "Flood Claim Support",
  insuranceDesc: "Flood insurance can be tricky. We provide the documentation and direct billing needed to ensure your claim is processed correctly.",
  insuranceBenefits: [
    "Direct Billing to All Carriers",
    "Detailed Moisture Readings",
    "Expert Claim Documentation"
  ],
  offerTitle: "Flood Defense Offer",
  offerDesc: "Free Sump Pump Inspection with any flood cleanup service. Ensure your backup systems are ready for the next storm.",
  process: [
    { num: "01", title: "Emergency Extract", desc: "Rapidly removing the bulk of standing water using truck-mounted units." },
    { num: "02", title: "Moisture Map", desc: "Identifying all wet areas behind walls and under floors using thermal tech." },
    { num: "03", title: "Dry Out", desc: "Strategically placing air movers to stabilize the environment." },
    { num: "04", title: "Disinfect", desc: "Applying hospital-grade antimicrobials to prevent mold and bacteria." },
    { num: "05", title: "Reconstruct", desc: "Replacing damaged drywall, flooring, and finishing touches." }
  ],
  faqs: [
    { q: "Can my flooded carpet be saved?", a: "In most clean-water flood cases, yes, if we extract and dry it within 24-48 hours." },
    { q: "What is moisture mapping?", a: "It's the process of using infrared cameras and meters to find hidden water that hasn't caused visible damage yet." },
    { q: "Is flood water dangerous?", a: "It can be. If the water came from the ground or a sewer, it's considered 'Category 3' and requires professional disinfection." }
  ],
  heroImage: "https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=1920&q=80",
  featureImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
};

function FloodDamage() {
  return <BaseServicePage content={content} />;
}

export default FloodDamage;
