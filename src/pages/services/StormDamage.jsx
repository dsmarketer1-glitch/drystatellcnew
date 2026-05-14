import React from 'react';
import BaseServicePage from '../BaseServicePage';

const content = {
  title: "Storm Damage Restoration",
  heroDesc: "Immediate response to wind, hail, and flood damage. We arrive in 60 minutes or less to secure your property and prevent secondary damage.",
  heroChecklist: [
    "IICRC Certified Professionals",
    "60-Minute Arrival Guarantee",
    "Emergency Tarping & Board-Up"
  ],
  responseTime: "60 MIN",
  featuresTitle: "Rapid Storm Recovery",
  featuresDesc: "Texas storms can be devastating. Whether it's a fallen tree, hail damage, or flash flooding, our rapid response teams are ready to secure your property and begin the restoration process immediately.",
  features: [
    "Emergency Roof Tarping",
    "Window Board-Up",
    "Flood Water Extraction",
    "Structural Stabilization",
    "Debris Removal"
  ],
  techTitle: "Storm Defense Technology",
  techDesc: "We use heavy-duty equipment to secure your home and remove moisture introduced by storm events.",
  techItems: [
    { title: "Industrial Pumps", desc: "High-capacity submersible pumps capable of removing thousands of gallons of flood water per hour." },
    { title: "Structural Drying Units", desc: "Specialized equipment designed to dry deep into wall cavities and structural supports after a leak." },
    { title: "Moisture Sensors", desc: "Precision tools that find water pathing through foundations and roof lines that isn't visible to the eye." }
  ],
  redFlagsTitle: "Post-Storm Warning Signs",
  redFlagsDesc: "Don't ignore small leaks after a storm. They can quickly lead to mold and structural rot.",
  signs: [
    { title: "Ceiling Spots", desc: "Fresh water stains on your ceiling indicating a compromised roof or attic leak." },
    { title: "Foundation Seepage", desc: "Water pooling in your basement or crawlspace after heavy rainfall." },
    { title: "Shingle Damage", desc: "Granules in your gutters or missing shingles that leave your decking exposed." }
  ],
  sourcesTitle: "Common Storm Issues",
  sources: [
    { title: "High Winds", desc: "Winds can lift shingles and blow debris into windows, compromising your home's exterior." },
    { title: "Hail Impact", desc: "Large hail can crack roof tiles and damage siding, leading to slow leaks over time." },
    { title: "Flash Flooding", desc: "Excessive rain can overwhelm drainage systems and enter your home through doors or foundations." }
  ],
  insuranceTitle: "Storm Claim Support",
  insuranceDesc: "Texas storm claims can be complex. We provide the documentation and direct billing needed to get your repairs covered.",
  insuranceBenefits: [
    "Detailed Damage Documentation",
    "Direct Adjuster Coordination",
    "Fast-Track Storm Repairs"
  ],
  offerTitle: "Storm Protection Offer",
  offerDesc: "Free Roof Leak Inspection with any storm damage cleanup service. We'll find the hidden vulnerabilities before the next storm hits.",
  process: [
    { num: "01", title: "Emergency Secure", desc: "Tarping and boarding up to prevent further water entry." },
    { num: "02", title: "Water Removal", desc: "Extracting flood water from all affected living areas." },
    { num: "03", title: "Debris Clearing", desc: "Removing fallen trees and storm-related mess from your property." },
    { num: "04", title: "Drying", desc: "Stabilizing humidity levels to prevent mold growth." },
    { num: "05", title: "Restoration", desc: "Full repairs to your roof, siding, and interior structure." }
  ],
  faqs: [
    { q: "How fast can you tarp my roof?", a: "Our emergency crews are stationed across the metroplex and arrive in under 60 minutes." },
    { q: "Does insurance cover storm damage?", a: "Most homeowners policies cover storm-related damage. We work directly with your carrier to verify coverage." },
    { q: "Can you help with fallen trees?", a: "Yes, we handle tree removal from structures and provide emergency stabilization." }
  ],
  heroImage: "/assets/storm-damage-hero.jpg",
  featureImage: "/assets/storm-damage-feature.png",
  sourceImage1: "/assets/storm-damage-source-1.jpg",
  sourceImage2: "/assets/storm-damage-source-2.jpg"
};

function StormDamage() {
  return <BaseServicePage content={content} />;
}

export default StormDamage;
