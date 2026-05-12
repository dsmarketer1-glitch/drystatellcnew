import React from 'react';

function FinancingWarranty() {
  return (
    <section className="py-section-gap">
      <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div className="bg-surface p-10 rounded-xl border border-outline-variant">
          <span className="material-symbols-outlined text-secondary text-5xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
          <h3 className="font-h3 text-h3 mb-4 text-primary">Flexible Financing Plans</h3>
          <p className="text-on-surface-variant mb-6">Restoration can be an unexpected expense. We offer low-interest payment plans and work directly with all major insurance companies to minimize your out-of-pocket costs.</p>
          <a className="text-primary font-bold hover:underline flex items-center gap-2" href="#">Learn about insurance billing <span className="material-symbols-outlined">arrow_forward</span></a>
        </div>
        <div className="bg-primary text-white p-10 rounded-xl">
          <span className="material-symbols-outlined text-tertiary-fixed-dim text-5xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
          <h3 className="font-h3 text-h3 mb-4">The Dry State Guarantee</h3>
          <p className="opacity-90 mb-6">We stand by our work with a 100% satisfaction guarantee and a 5-year workmanship warranty. If moisture returns due to our oversight, we fix it at zero cost to you.</p>
          <div className="flex items-center gap-4 opacity-70 border-t border-white/20 pt-6">
            <img 
              alt="Service Manager" 
              className="w-12 h-12 rounded-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdYM65rBKanN0eS5jIX0BsEXJBgrVqAOvWl5RUcaDat3QDa2y3yXtksTT6pbRAIiw_wXDEsHJnBjR2sCW9CtnROpVsFayztF2yKxh9uNk5EeIuQp3KtOZ3fUJNquvbeY4ssRSEWAtoeY5qY7ZG5yvsXxpv6r2BJnh2RxA6pdAqHjSpDDRa4Fyh_TNb_G7nAxKUpeqLkkm9DfOJJ1SxCcLChOISNBpMX2I3tiSCOGAQiU8RTs_v_e6-MU4lhxgop3xNPcBki1wsD9dB"
            />
            <div>
              <p className="font-bold">David Miller</p>
              <p className="text-sm">Operations Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinancingWarranty;

