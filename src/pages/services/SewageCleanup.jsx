import React from 'react';
import BaseServicePage from '../BaseServicePage';

const content = {
  title: "Sewage Cleanup & Removal",
  heroDesc: "Professional biohazard remediation for sewage backups and overflows. We arrive in 60 minutes or less to safely clean and sanitize your property.",
  heroChecklist: [
    "IICRC Certified Biohazard Pros",
    "60-Minute Emergency Response",
    "Hospital-Grade Disinfection"
  ],
  responseTime: "60 MIN",
  featuresTitle: "Safe & Thorough Biohazard Removal",
  featuresDesc: "Sewage backups are a serious health risk. Our team is trained to handle 'Category 3' black water safely, removing contaminants and restoring your environment to a hospital-clean standard.",
  features: [
    "Safe Sewage Extraction",
    "Biohazard Disposal",
    "Odor Neutralization",
    "Deep Sanitization",
    "Structural Drying"
  ],
  techTitle: "Biohazard Cleanup Tech",
  techDesc: "We use specialized protection and sanitization equipment to ensure the safety of your family and our team.",
  techItems: [
    { title: "HEPA Air Scrubbers", desc: "Industrial-grade filtration that captures airborne pathogens and prevents the spread of bacteria during cleanup." },
    { title: "Hospital-Grade Antimicrobials", desc: "EPA-registered disinfectants that kill 99.9% of bacteria and viruses associated with sewage." },
    { title: "Thermal Fogging", desc: "Technology that creates a fine mist of disinfectant to reach into porous materials and eliminate odors at the source." }
  ],
  redFlagsTitle: "Health & Safety Risks",
  redFlagsDesc: "Never attempt to clean sewage yourself. It contains dangerous pathogens that require professional handling.",
  signs: [
    { title: "Floor Drain Backups", desc: "Water pooling around floor drains in your basement or utility room." },
    { title: "Slow Drains", desc: "Multiple fixtures in your home gurgling or draining slowly at the same time." },
    { title: "Sewage Odors", desc: "A strong smell of rotten eggs or sulfur emanating from your plumbing fixtures." }
  ],
  sourcesTitle: "Common Backup Sources",
  sources: [
    { title: "Main Line Clogs", desc: "Tree roots or debris blocking the main sewer line can cause waste to back up into the home." },
    { title: "Heavy Rain Overload", desc: "Stormwater entering sewer lines can overwhelm the system, forcing sewage into basements." },
    { title: "Septic Tank Issues", desc: "Full or failing septic systems can cause backups into lower-level bathrooms." }
  ],
  insuranceTitle: "Biohazard Claim Support",
  insuranceDesc: "We provide the documentation and direct billing needed for sewage and biohazard claims to ensure full coverage.",
  insuranceBenefits: [
    "Direct Billing for Biohazard Services",
    "Detailed Sanitization Logs",
    "Expert Insurance Coordination"
  ],
  offerTitle: "Sanitization Offer",
  offerDesc: "Free Bio-Mapping with any sewage cleanup service. We'll identify all affected porous surfaces for safe removal.",
  process: [
    { num: "01", title: "Containment", desc: "Isolating the affected area to prevent cross-contamination." },
    { num: "02", title: "Safe Removal", desc: "Extracting sewage and disposing of contaminated materials safely." },
    { num: "03", title: "Disinfection", desc: "Deep cleaning with hospital-grade antimicrobials." },
    { num: "04", title: "Odor Control", desc: "Neutralizing persistent smells using thermal fogging." },
    { num: "05", title: "Restoration", desc: "Replacing affected drywall and flooring with new materials." }
  ],
  faqs: [
    { q: "Is sewage water dangerous?", a: "Yes, sewage is considered 'Black Water' and contains harmful bacteria, viruses, and parasites." },
    { q: "Can my furniture be saved?", a: "Porous items like mattresses and sofas usually must be disposed of for safety. Non-porous items can often be sanitized." },
    { q: "How long does cleanup take?", a: "The initial cleanup and sanitization usually take 24-48 hours, followed by drying and restoration." }
  ],
  heroImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1920&q=80",
  featureImage: "https://images.unsplash.com/photo-1585702138251-512015509748?auto=format&fit=crop&w=800&q=80"
};

function SewageCleanup() {
  return <BaseServicePage content={content} />;
}

export default SewageCleanup;
