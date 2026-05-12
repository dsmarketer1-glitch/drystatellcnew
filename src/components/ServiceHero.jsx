import React from 'react';

function ServiceHero() {
  return (
    <section className="hero-gradient min-h-[600px] flex items-center py-12 pt-24">
      <div className="max-w-[1280px] mx-auto px-6 w-full text-white">
        <div className="max-w-2xl">
          <span className="bg-secondary text-white px-4 py-1 text-xs font-bold tracking-widest uppercase inline-block mb-4">24/7 EMERGENCY RESPONSE</span>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">Expert Water Damage Restoration in Richland Hills</h1>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">Immediate response to flooding, leaks, and storm damage. We arrive in 60 minutes or less to protect your property and peace of mind.</p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 py-4 flex items-center gap-2 border-none transition-transform active:scale-95">
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>emergency</span>
              Emergency Help
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-primary text-white font-bold px-8 py-4 transition-all">
              Get Free Estimate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceHero;
