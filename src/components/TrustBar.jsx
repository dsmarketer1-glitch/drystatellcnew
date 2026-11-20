import React from 'react';

const badges = [
  {
    icon: 'verified',
    title: 'IICRC Certified Restoration Firm',
    sub: 'Trained & certified to industry standards',
  },
  {
    icon: 'star',
    title: '5-Star Customer Reviews',
    sub: 'Rated 5 stars by DFW homeowners',
  },
  {
    icon: 'shield',
    title: 'Fully Insured & Bonded',
    sub: 'Your property protected, start to finish',
  },
  {
    icon: 'timer',
    title: '24/7 Emergency Response',
    sub: 'Available any hour, any day of the year',
  },
];

function TrustBar() {
  return (
    <div className="bg-white border-b border-slate-200 py-7 md:py-8">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-wrap justify-center md:justify-between items-start gap-8">
        {badges.map((b, i) => (
          <div key={i} className="flex items-start gap-3 max-w-[280px]">
            <span
              className="material-symbols-outlined text-[#b6171e] text-[28px] shrink-0"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              {b.icon}
            </span>
            <div>
              <div className="font-bold text-[#00123d] text-[13px] uppercase tracking-wider leading-tight">
                {b.title}
              </div>
              <div className="text-[12px] md:text-[13px] text-[#44464f] mt-1 leading-snug">
                {b.sub}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrustBar;
