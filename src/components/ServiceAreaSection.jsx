import React from 'react';
import CityName from './CityName';
import DfwMap from './DfwMap';
import { serviceAreaIntro, serviceAreaGroups } from '../data/serviceAreas';

// Compact, premium "Proudly Serving the DFW Metroplex" section:
// centered header → map + 24/7 badge (left) and 2x2 region cards (right) → trust bar.
function ServiceAreaSection({ bg = 'bg-[#f8f9fa]' }) {
  return (
    <section className={`py-16 md:py-24 ${bg}`} id="areas">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 reveal">
          <span className="text-[#b6171e] text-[11px] md:text-[12px] font-bold tracking-[0.2em] uppercase mb-4 block">
            LOCALIZED CARE
          </span>
          <h2 className="text-[28px] md:text-[42px] font-['Work_Sans'] font-black text-[#00123d] mb-4 leading-[1.1]">
            Proudly Serving the DFW Metroplex
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#44464f] max-w-2xl mx-auto leading-relaxed">
            {serviceAreaIntro}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center reveal">
          {/* Left: map + badge */}
          <div>
            <DfwMap />
            <div className="mt-4 bg-[#b6171e] text-white rounded-xl px-5 py-3.5 flex items-center gap-3 shadow-lg">
              <span className="material-symbols-outlined text-[26px]">e911_emergency</span>
              <span className="font-['Work_Sans'] font-bold text-[15px] md:text-[17px] leading-tight">
                24/7 Emergency Response Across DFW
              </span>
            </div>
          </div>

          {/* Right: 2x2 region cards */}
          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {serviceAreaGroups.map((group) => (
              <div
                key={group.region}
                className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 shadow-sm"
              >
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
                  <span className="material-symbols-outlined text-[#b6171e] text-[20px]">location_on</span>
                  <h3 className="text-[15px] md:text-[16px] font-['Work_Sans'] font-bold text-[#00123d]">
                    {group.region}
                  </h3>
                </div>
                <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
                  {group.cities.map((city) => (
                    <li key={city} className="text-[13px] md:text-[14px] text-[#44464f] font-medium">
                      <CityName name={city} className="text-[#44464f] hover:text-[#b6171e] no-underline transition-colors" />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-slate-200 reveal">
          <div className="flex flex-wrap items-center justify-center gap-x-6 md:gap-x-12 gap-y-4">
            {[
              { icon: 'verified_user', label: 'Local DFW Experts' },
              { icon: 'bolt', label: 'Fast Response Times' },
              { icon: 'workspace_premium', label: 'Trusted by Homeowners & Businesses' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#b6171e] text-[24px]">{item.icon}</span>
                <span className="text-[15px] md:text-[16px] font-['Work_Sans'] font-bold text-[#00123d]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceAreaSection;
