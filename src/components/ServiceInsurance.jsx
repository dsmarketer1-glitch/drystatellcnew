import React from 'react';

function ServiceInsurance() {
  return (
    <section className="py-20 bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-black text-primary mb-6">Hassle-Free Insurance Claims</h2>
          <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">We work directly with all major insurance carriers to streamline your claim. From initial documentation to final billing, we handle the paperwork so you can focus on getting back to normal.</p>
          <div className="flex flex-wrap gap-8 items-center opacity-50 grayscale">
            <div className="font-black text-xl text-primary">STATE FARM</div>
            <div className="font-black text-xl text-primary">ALLSTATE</div>
            <div className="font-black text-xl text-primary">LIBERTY MUTUAL</div>
            <div className="font-black text-xl text-primary">FARMERS</div>
          </div>
        </div>
        <div className="bg-primary text-white p-10 rounded-2xl shadow-xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-secondary p-3 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-white">description</span>
            </div>
            <h3 className="text-2xl font-black">Direct Billing Available</h3>
          </div>
          <p className="text-white/70 mb-8 leading-relaxed">No out-of-pocket stress. We bill your insurance company directly for all covered services, ensuring a smooth financial process.</p>
          <button className="bg-white text-primary font-bold px-6 py-3 w-full border-none hover:bg-secondary hover:text-white transition-colors">
            Ask About Insurance
          </button>
        </div>
      </div>
    </section>
  );
}

export default ServiceInsurance;
