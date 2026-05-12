import React from 'react';

function ImmediateResponse() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-black text-primary mb-6">Immediate Response When Every Minute Counts</h2>
          <p className="text-lg text-on-surface-variant mb-6 leading-relaxed">
            When water enters your home, the clock starts ticking. Our expert restoration technicians are strategically stationed across Richland Hills to ensure a rapid arrival. We don't just extract water; we stabilize your environment to prevent secondary damage and structural decay.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary">check_circle</span>
              <span className="font-bold text-primary">IICRC Certified Professionals</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary">check_circle</span>
              <span className="font-bold text-primary">60-Minute Arrival Guarantee</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary">check_circle</span>
              <span className="font-bold text-primary">State-of-the-Art Extraction Gear</span>
            </li>
          </ul>
        </div>
        <div className="relative">
          <img 
            alt="Professional Restoration Equipment" 
            className="rounded-lg shadow-xl w-full h-auto" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8LYaFFDeF7WBVUwEQqkfaC5hpUSSrEub5ckOESBHfDNXnbSqUu_GSunyBq-w8RfyBNcnlQpRgIICRc5tQn0kOgsxpqQIRO7OEgE7FrK8yfPB3zx63XkI81i3YJQQyJGCxjNU-wnsZgdN0z9sj0FIq-ipAU4fjc8zVvT-kpIVGRe2EPDXAeh3IAUOefBWfhlBwXzq-pfi9QanEvywjKKOwRb9y--tkA5NR6a7mtukHaKNK0pVQn4Fxshj_XEXVawXQjOEP_MxYTiIw"
          />
          <div className="relative sm:absolute mt-4 sm:mt-0 sm:-bottom-6 sm:-left-6 bg-primary text-white p-6 rounded shadow-lg max-w-[240px]">
            <p className="text-3xl font-black leading-tight mb-2 tracking-tight">60 MIN</p>
            <p className="text-sm opacity-80 uppercase font-bold tracking-widest">Average Response Time</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImmediateResponse;
