import React from 'react';
import BaseServicePage from '../BaseServicePage';

const content = {
  title: "Fire Damage Restoration",
  heroDesc: "Rapid response to fire, smoke, and soot damage. We arrive in 60 minutes or less to stabilize your property and begin the cleaning process.",
  heroChecklist: [
    "IICRC Certified Professionals",
    "60-Minute Arrival Guarantee",
    "Advanced Soot & Odor Removal"
  ],
  responseTime: "60 MIN",
  featuresTitle: "Comprehensive Fire Recovery",
  featuresDesc: "Fire damage goes beyond what is visible. Smoke and soot can permeate every surface, causing long-term damage if not treated immediately. Our team provides professional deep cleaning and structural restoration.",
  features: [
    "Emergency Board-Up",
    "Soot & Smoke Removal",
    "Debris Clearing",
    "Odor Neutralization",
    "Full Reconstruction"
  ],
  techTitle: "Fire Restoration Technology",
  techDesc: "We use specialized equipment to remove soot, smoke, and persistent odors from your property.",
  techItems: [
    { title: "Hydroxyl Generators", desc: "Advanced air purification systems that eliminate smoke odors at the molecular level without using harmful chemicals." },
    { title: "HEPA Air Scrubbers", desc: "High-efficiency particulate air filters that remove soot particles and smoke contaminants from the air." },
    { title: "Ultrasonic Cleaners", desc: "Precision cleaning technology used to restore delicate items, electronics, and valuables damaged by soot." }
  ],
  redFlagsTitle: "Hidden Fire Damage",
  redFlagsDesc: "Even after the fire is out, secondary damage continues. Watch for these signs of lingering smoke and soot.",
  signs: [
    { title: "Soot Staining", desc: "Dark oily spots or streaks on walls, ceilings, and upholstery." },
    { title: "Persistent Odor", desc: "A strong, lingering smell of smoke that persists even after surface cleaning." },
    { title: "Corrosion", desc: "Acidic soot can cause metal fixtures and electronics to corrode within hours." }
  ],
  sourcesTitle: "Common Fire Causes",
  sources: [
    { title: "Kitchen Accidents", desc: "Grease fires and unattended cooking are the leading causes of residential fires." },
    { title: "Electrical Faults", desc: "Frayed wires, overloaded outlets, and faulty appliances can spark sudden fires." },
    { title: "Heating Systems", desc: "Space heaters and poorly maintained furnaces often cause winter emergencies." }
  ],
  insuranceTitle: "Stress-Free Claims",
  insuranceDesc: "We work directly with your insurance company to ensure your fire damage claim is handled professionally and promptly.",
  insuranceBenefits: [
    "Complete Inventory Documentation",
    "Direct Billing to Carriers",
    "Expert Claim Support"
  ],
  offerTitle: "Fire Safety Offer",
  offerDesc: "Free Smoke Damage Assessment with any fire restoration service. We'll identify hidden soot pockets in your HVAC system.",
  process: [
    { num: "01", title: "Site Security", desc: "Emergency board-up and tarping to protect your property." },
    { num: "02", title: "Soot Removal", desc: "Detailed cleaning of all affected surfaces and structures." },
    { num: "03", title: "Odor Treatment", desc: "Neutralizing smoke smells using industrial technology." },
    { num: "04", title: "Content Care", desc: "Cleaning and restoring personal items and furniture." },
    { num: "05", title: "Rebuild", desc: "Structural repairs to return your home to original condition." }
  ],
  faqs: [
    { q: "Can smoke smells ever be fully removed?", a: "Yes, our industrial-grade hydroxyl generators and air scrubbers neutralize smoke at the molecular level." },
    { q: "Should I clean the soot myself?", a: "No, soot is often acidic and can cause permanent staining if handled incorrectly. Professional equipment is required." },
    { q: "Is my home safe to enter after a fire?", a: "We provide professional structural assessments to ensure the property is safe before anyone enters." }
  ],
  heroImage: "https://images.unsplash.com/photo-1599819177626-b50f9dd21c9b?auto=format&fit=crop&w=1920&q=80",
  featureImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
};

function FireDamage() {
  return <BaseServicePage content={content} />;
}

export default FireDamage;
