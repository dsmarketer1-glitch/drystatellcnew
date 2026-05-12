import React from 'react';
import BaseServicePage from '../BaseServicePage';

const content = {
  title: "Full Structural Reconstruction",
  heroDesc: "Complete rebuilding services after water, fire, or storm damage. We handle everything from framing to final finishes to return your home to its original beauty.",
  heroChecklist: [
    "Licensed General Contractors",
    "End-to-End Project Management",
    "Quality Workmanship Warranty"
  ],
  responseTime: "SAME DAY",
  featuresTitle: "Seamless Restoration & Rebuild",
  featuresDesc: "Many restoration companies only dry the mess. We take your project from the initial cleanup all the way through the final coat of paint. Our construction experts ensure your home is stronger and more beautiful than before the disaster.",
  features: [
    "Structural Framing",
    "Drywall & Painting",
    "Flooring Installation",
    "Cabinetry & Carpentry",
    "Roofing & Siding"
  ],
  techTitle: "Construction Standards",
  techDesc: "We use high-quality materials and modern building techniques to ensure your home meets or exceeds current codes.",
  techItems: [
    { title: "Laser Leveling", desc: "Precision measurement tools used to ensure floors and walls are perfectly square and level during the rebuild." },
    { title: "Moisture-Resistant Materials", desc: "We offer upgrades to mold-resistant drywall and waterproof flooring during the reconstruction process." },
    { title: "Digital Project Tracking", desc: "Software that allows you to see the progress of your rebuild in real-time, including photos and schedules." }
  ],
  redFlagsTitle: "Reconstruction Needs",
  redFlagsDesc: "If mitigation required the removal of structural elements, professional reconstruction is necessary for safety and value.",
  signs: [
    { title: "Exposed Studs", desc: "Drywall that was removed during water mitigation needs to be replaced and finished." },
    { title: "Missing Flooring", desc: "Subfloors exposed after water or fire damage require professional flooring installation." },
    { title: "Structural Gaps", desc: "Cracks or gaps in framing caused by heat or moisture must be repaired before finishing." }
  ],
  sourcesTitle: "Rebuilding Expertise",
  sources: [
    { title: "Water Loss Rebuilds", desc: "Replacing cabinets, baseboards, and flooring damaged by flooding or leaks." },
    { title: "Fire Restoration Rebuilds", desc: "Full structural replacement of charred framing, roofing, and interior finishes." },
    { title: "Storm Damage Repairs", desc: "Fixing exterior siding, windows, and roof lines compromised by high winds or hail." }
  ],
  insuranceTitle: "Rebuild Claim Support",
  insuranceDesc: "Reconstruction is the most expensive part of a claim. We provide the detailed estimates and documentation your insurance company requires.",
  insuranceBenefits: [
    "Xactimate Estimating Standard",
    "Direct Billing to Carriers",
    "Supplement Claim Management"
  ],
  offerTitle: "Reconstruction Offer",
  offerDesc: "Free Material Upgrade with any full reconstruction project. Choose from our premium selection of mold-resistant drywall.",
  process: [
    { num: "01", title: "Detailed Estimate", desc: "Using industry-standard software to provide an accurate cost for the full rebuild." },
    { num: "02", title: "Permitting", desc: "Handling all local building permits and inspections to ensure your home is up to code." },
    { num: "03", title: "Structural Work", desc: "Repairing framing, electrical, and plumbing hidden behind the walls." },
    { num: "04", title: "Interior Finishing", desc: "Installing drywall, flooring, and cabinetry to your exact specifications." },
    { num: "05", title: "Final Walkthrough", desc: "A detailed quality check to ensure every detail meets our 5-star standard." }
  ],
  faqs: [
    { q: "Do I need a separate contractor?", a: "No, we are full-service general contractors. We handle everything from mitigation to final painting." },
    { q: "Can I make changes during the rebuild?", a: "Yes! Many clients take this opportunity to upgrade their kitchen or flooring during the reconstruction." },
    { q: "How long does a rebuild take?", a: "Timelines vary by scope, but we provide a detailed project schedule before work begins." }
  ],
  heroImage: "https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&w=1920&q=80",
  featureImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
};

function Reconstruction() {
  return <BaseServicePage content={content} />;
}

export default Reconstruction;
