import React from 'react';
import BaseServicePage from '../BaseServicePage';

const content = {
  title: "Water Damage Restoration",
  heroDesc: "Immediate response to flooding, leaks, and storm damage. We arrive in 60 minutes or less to protect your property and peace of mind.",
  heroChecklist: [
    "IICRC Certified Professionals",
    "60-Minute Arrival Guarantee",
    "State-of-the-Art Extraction Gear"
  ],
  responseTime: "60 MIN",
  featuresTitle: "Immediate Response When Every Minute Counts",
  featuresDesc: "When water enters your home, the clock starts ticking. Our expert restoration technicians are strategically stationed across Richland Hills to ensure a rapid arrival. We don't just extract water; we stabilize your environment to prevent mold growth and structural decay.",
  features: [
    "Emergency Water Extraction",
    "Structural Drying",
    "Mold Prevention",
    "Debris Removal",
    "Full Reconstruction"
  ],
  techTitle: "Advanced Restoration Technology",
  techDesc: "We invest in high-tech equipment to ensure the most efficient and thorough drying process possible.",
  techItems: [
    { title: "Industrial Air Movers", desc: "High-velocity fans designed to create massive airflow across wet surfaces, accelerating evaporation from floors, walls, and carpets." },
    { title: "LGR Dehumidifiers", desc: "Low Grain Refrigerant units that pull deep moisture from structural materials and the air, reaching humidity levels standard units can't touch." },
    { title: "Thermal Imaging Cameras", desc: "Non-invasive infrared sensors that detect temperature differences, revealing hidden pockets of moisture behind walls and under floors." }
  ],
  redFlagsTitle: "Detection is Key",
  redFlagsDesc: "Early detection can save thousands in restoration costs. Contact us immediately if you notice any of these red flags.",
  signs: [
    { title: "Discoloration", desc: "Yellow, brown, or copper-colored stains appearing on ceilings or walls." },
    { title: "Musty Odors", desc: "Persistent damp smells that don't go away with cleaning or ventilation." },
    { title: "Bubbling Walls", desc: "Peeling paint or wallpaper and drywall that feels soft or spongy to the touch." }
  ],
  sourcesTitle: "Common Sources of Damage",
  sources: [
    { title: "Plumbing Failures", desc: "Burst pipes, leaking water heaters, and overflowing toilets are the most frequent causes of indoor flooding." },
    { title: "Roof & Foundation Leaks", desc: "Aging shingles or cracked foundations allow storm water to seep into living spaces during heavy rain." },
    { title: "Appliance Malfunctions", desc: "Washing machine hoses and refrigerator supply lines can fail suddenly, releasing hundreds of gallons of water." }
  ],
  insuranceTitle: "Hassle-Free Insurance Claims",
  insuranceDesc: "We understand how stressful dealing with insurance can be during a disaster. Dry State LLC works directly with all major insurance carriers to streamline your claim process.",
  insuranceBenefits: [
    "We handle all the paperwork for you",
    "Direct coordination with adjusters",
    "No upfront payments for qualified claims"
  ],
  offerTitle: "Limited Time Offer",
  offerDesc: "Get a Free Professional Moisture Inspection with any water restoration service. We use thermal imaging to find hidden water behind your walls.",
  process: [
    { num: "01", title: "Initial Contact", desc: "Emergency dispatch within minutes of your call." },
    { num: "02", title: "Extraction", desc: "Removing standing water using heavy-duty pumps." },
    { num: "03", title: "Drying", desc: "Industrial air movers and dehumidifiers remove deep moisture." },
    { num: "04", title: "Sanitizing", desc: "Anti-microbial treatments to prevent mold and bacteria." },
    { num: "05", title: "Restoration", desc: "Final repairs to return your home to original beauty." }
  ],
  faqs: [
    { q: "How long does the drying process take?", a: "Most structures can be fully dried within 3 to 5 days using our advanced equipment." },
    { q: "Should I call my insurance first?", a: "No, call us first to stabilize the damage and prevent secondary issues. We'll help you with the claim afterward." },
    { q: "What is LGR Dehumidification?", a: "LGR (Low Grain Refrigerant) dehumidifiers are the most effective units in the industry, capable of removing moisture even in low-humidity environments." }
  ],
  heroImage: "/assets/water-damage-hero.png",
  featureImage: "/assets/emergency-water-leak.png",
  sourceImage1: "/assets/water-damage-source-1.png",
  sourceImage2: "/assets/water-damage-source-2.png"
};

function WaterDamage() {
  return <BaseServicePage content={content} />;
}

export default WaterDamage;
