import React from 'react';

function RestorationProcess() {
  const steps = [
    { num: "01", title: "Inspection", desc: "Thorough assessment of damage using thermal cameras." },
    { num: "02", title: "Extraction", desc: "Removing standing water with powerful truck-mounts." },
    { num: "03", title: "Drying", desc: "Deploying LGR dehumidifiers and high-speed fans." },
    { num: "04", title: "Cleaning", desc: "Sanitizing and deodorizing all affected areas." },
    { num: "05", title: "Restore", desc: "Final repairs to bring your home back to life." }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-primary mb-4">Our Restoration Process</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">We follow a rigorous, industry-standard process to ensure your property is returned to its pre-loss condition.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-outline-variant shadow-sm relative z-10 hover:border-secondary/30 transition-colors">
              <div className="text-secondary font-black text-4xl mb-4 opacity-20">{step.num}</div>
              <h4 className="font-bold text-primary mb-2">{step.title}</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RestorationProcess;
