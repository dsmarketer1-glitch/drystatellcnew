import React from 'react';

function RestorationProcess() {
  const steps = [
    { num: "01", title: "Emergency Contact", desc: "We’re available 24/7. When you call, we’ll quickly assess the situation and dispatch a team." },
    { num: "02", title: "Damage Assessment", desc: "Our experts conduct a thorough inspection to evaluate the extent of the damage and plan the recovery." },
    { num: "03", title: "Water Extraction", desc: "We use advanced equipment to remove excess water and ensure all affected areas are thoroughly dried." },
    { num: "04", title: "Cleaning & Sanitizing", desc: "We clean and sanitize affected areas to remove contaminants and odors, ensuring your property is safe." },
    { num: "05", title: "Repairs & Restoration", desc: "Our skilled technicians handle all necessary repairs, from structural fixes to cosmetic updates." },
    { num: "06", title: "Final Inspection", desc: "We conduct a final inspection to ensure everything meets our high standards and your satisfaction." }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-primary mb-4">Our Restoration Process</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">We follow a rigorous, industry-standard process to ensure your property is returned to its pre-loss condition.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 relative">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border border-outline-variant shadow-sm relative z-10 hover:border-secondary/30 transition-colors">
              <div className="text-secondary font-black text-3xl mb-2 opacity-20">{step.num}</div>
              <h4 className="font-bold text-primary mb-2 text-base">{step.title}</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RestorationProcess;
