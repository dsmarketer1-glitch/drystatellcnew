import React from 'react';
import BaseServicePage from '../BaseServicePage';

const content = {
  title: "Professional Content Cleaning",
  heroDesc: "Restoring your most valued possessions after a disaster. We provide expert cleaning and deodorization for furniture, electronics, and sentimental items.",
  heroChecklist: [
    "Certified Restoration Technicians",
    "Secure Pack-Out & Storage",
    "Advanced Ultrasonic Cleaning"
  ],
  responseTime: "SAME DAY",
  featuresTitle: "Saving Your Belongings",
  featuresDesc: "A disaster shouldn't mean losing your history. Our content restoration team uses specialized cleaning methods to save items that most people think are ruined, from family photos to high-end electronics.",
  features: [
    "Secure Pack-Out Service",
    "Climate-Controlled Storage",
    "Ultrasonic Deep Cleaning",
    "Electronics Restoration",
    "Ozone Deodorization"
  ],
  techTitle: "Restoration Technology",
  techDesc: "We use precision cleaning systems designed to restore delicate items to their pre-loss condition.",
  techItems: [
    { title: "Ultrasonic Cleaning", desc: "Using high-frequency sound waves in a specialized solution to remove soot and contaminants from intricate items and electronics." },
    { title: "Ozone Chambers", desc: "Secure environments that use concentrated ozone to permanently neutralize smoke and musty odors from porous items like sofas." },
    { title: "Electronic Diagnostic Tools", desc: "Specialized equipment to safely dry, clean, and test electronics that have been exposed to moisture or smoke." }
  ],
  redFlagsTitle: "Signs Items Need Cleaning",
  redFlagsDesc: "Don't throw away items without a professional assessment. Many can be saved with the right technology.",
  signs: [
    { title: "Soot Staining", desc: "Fine black dust on electronics or delicate fabrics that requires professional removal to prevent permanent damage." },
    { title: "Musty Odors", desc: "Items removed from a wet environment often harbor odors that indicate deep-seated bacterial or mold growth." },
    { title: "Visible Residue", desc: "Sticky or oily films on furniture and surfaces caused by protein fires or smoke." }
  ],
  sourcesTitle: "Content Loss Causes",
  sources: [
    { title: "Smoke Infiltration", desc: "Smoke particles can settle into everything from clothes to cabinet interiors, requiring deep cleaning." },
    { title: "Secondary Water Damage", desc: "High humidity after a flood can cause mold to grow on furniture even if it didn't touch the standing water." },
    { title: "Soot Acidification", desc: "Acidic soot can slowly eat away at the finish of antiques and the circuitry of electronics if not neutralized." }
  ],
  insuranceTitle: "Inventory & Claims",
  insuranceDesc: "We provide the detailed inventory and cost-of-repair documentation your insurance adjuster needs to process your personal property claim.",
  insuranceBenefits: [
    "Digital Inventory Cataloging",
    "Direct Billing for Storage",
    "Total Loss Documentation"
  ],
  offerTitle: "Content Care Offer",
  offerDesc: "Free 30-Day Storage with any full pack-out and content cleaning project. Keep your items safe while your home is being rebuilt.",
  process: [
    { num: "01", title: "Inventory", desc: "Carefully documenting every item and its condition before it leaves your home." },
    { num: "02", title: "Secure Pack-Out", desc: "Professional packing and transport to our climate-controlled restoration facility." },
    { num: "03", title: "Deep Cleaning", desc: "Using ultrasonic, ozone, or hand-cleaning methods based on the item type." },
    { num: "04", title: "Storage", desc: "Keeping your restored items safe and secure until your property is ready." },
    { num: "05", title: "Pack-Back", desc: "Carefully returning and placing your items exactly where they belong in your restored home." }
  ],
  faqs: [
    { q: "Can you save my photos?", a: "In many cases, yes. We use specialized freeze-drying and cleaning techniques for paper and photo restoration." },
    { q: "Is my furniture safe in storage?", a: "Yes, our facility is 24/7 monitored, climate-controlled, and fully insured." },
    { q: "What is ultrasonic cleaning?", a: "It's a process that uses sound waves to create millions of tiny bubbles that gently scrub every surface of an item, even the parts we can't see." }
  ],
  heroImage: "/assets/content-cleaning-hero.jpg",
  featureImage: "/assets/content-cleaning-feature.png",
  sourceImage1: "/assets/content-cleaning-source-1.jpg",
  sourceImage2: "/assets/content-cleaning-source-2.png"
};

function ContentCleaning() {
  return <BaseServicePage content={content} />;
}

export default ContentCleaning;
