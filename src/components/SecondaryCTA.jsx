import React from 'react';

function SecondaryCTA() {
  return (
    <section className="py-12 bg-secondary text-white">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-4xl" data-icon="precision_manufacturing">precision_manufacturing</span>
          <div>
            <h3 className="text-xl font-bold">Unsure about hidden water?</h3>
            <p className="opacity-90">Schedule a high-precision moisture inspection today.</p>
          </div>
        </div>
        <button className="bg-white text-secondary font-cta text-cta px-8 py-3 rounded hover:bg-surface transition-colors shadow-lg">
          Get Fast Quote
        </button>
      </div>
    </section>
  );
}

export default SecondaryCTA;

