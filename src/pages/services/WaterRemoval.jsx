import React from 'react';
import BaseServicePage from '../BaseServicePage';

const content = {
  title: "Professional Water Removal",
  heroDesc: "Immediate extraction of standing water from your property. We arrive in 60 minutes or less with truck-mounted vacuum systems to prevent structural decay.",
  heroChecklist: [
    "IICRC Certified Extraction Teams",
    "60-Minute Emergency Response",
    "Truck-Mounted High-Volume Vacs"
  ],
  responseTime: "60 MIN",
  featuresTitle: "Rapid Water Extraction",
  featuresDesc: "Standing water is an immediate threat to your home's foundation and air quality. Our powerful extraction equipment removes water 10x faster than standard pumps, significantly reducing the drying time and preventing secondary damage like mold.",
  features: [
    "Standing Water Extraction",
    "Carpet Pad Water Removal",
    "Subfloor Pumping",
    "Sump Pump Assistance",
    "Emergency Water Shutoff"
  ],
  techTitle: "Extraction Technology",
  techDesc: "We use the most powerful vacuum systems in the industry to pull water from deep within structural materials.",
  techItems: [
    { title: "Truck-Mounted Vacuum Units", desc: "Heavy-duty engines that provide massive suction power to pull water through hundreds of feet of hose." },
    { title: "Submersible Trash Pumps", desc: "Pumps designed to handle debris and large volumes of water during basement flooding." },
    { title: "Weighted Extraction Tools", desc: "Tools that use mechanical pressure to squeeze water out of carpet and pad for a drier finish." }
  ],
  redFlagsTitle: "Dangers of Standing Water",
  redFlagsDesc: "The longer water sits, the more damage it causes. Don't wait to start the extraction process.",
  signs: [
    { title: "Foundation Wicking", desc: "Water marks rising up your drywall or foundation walls from standing pools." },
    { title: "Swell & Buckle", desc: "Wood trim and flooring expanding and lifting as they absorb standing water." },
    { title: "Bio-Contamination", desc: "Standing water quickly becomes stagnant, promoting the growth of bacteria and pathogens." }
  ],
  sourcesTitle: "Water Removal Needs",
  sources: [
    { title: "Appliance Overflows", desc: "Washing machines or dishwashers failing and releasing hundreds of gallons into living areas." },
    { title: "Plumbing Failures", desc: "Burst pipes under sinks or in walls that create immediate indoor flooding." },
    { title: "Groundwater Seepage", desc: "Water entering the home through cracks in the foundation or basement doors during rain." }
  ],
  insuranceTitle: "Extraction Claim Support",
  insuranceDesc: "Immediate water removal is required by most insurance policies to mitigate further damage. We provide the proof of work they need.",
  insuranceBenefits: [
    "Immediate Mitigation Records",
    "Direct Billing to Carriers",
    "Professional Extraction Logs"
  ],
  offerTitle: "Water Removal Offer",
  offerDesc: "Free Perimeter Inspection with any water removal service. We'll find the entry point to ensure it doesn't happen again.",
  process: [
    { num: "01", title: "Emergency Dispatch", desc: "Arriving on-site within 60 minutes of your call." },
    { num: "02", title: "Safety Check", desc: "Ensuring power is disconnected in wet areas to prevent electrical hazards." },
    { num: "03", title: "High-Volume Pump", desc: "Removing standing water from floors and basements." },
    { num: "04", title: "Sub-Surface Extract", desc: "Using weighted tools to pull water from carpet pads and subfloors." },
    { num: "05", title: "Final Inspection", desc: "Verifying all standing water is gone before beginning the dry-out phase." }
  ],
  faqs: [
    { q: "Can I use my own shop-vac?", a: "Shop-vacs lack the lift and volume capacity to remove water from subfloors and carpet pads effectively." },
    { q: "How long does extraction take?", a: "Most residential extraction jobs can be completed in 2 to 4 hours depending on the volume of water." },
    { q: "Will the water come back?", a: "We identify the source of the water and provide temporary repairs to ensure the area remains dry." }
  ],
  heroImage: "/assets/water-removal-hero.png",
  featureImage: "/assets/water-removal-feature.png"
};

function WaterRemoval() {
  return <BaseServicePage content={content} />;
}

export default WaterRemoval;
