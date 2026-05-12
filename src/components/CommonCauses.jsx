import React from 'react';
import { Droplets, AlertTriangle, CloudRain, Hammer } from 'lucide-react';

function CommonCauses() {
  const causes = [
    {
      title: "Pipe Bursts & Leaks",
      desc: "Small leaks can quickly lead to catastrophic water damage if left unaddressed.",
      icon: <Droplets />
    },
    {
      title: "Appliance Overflows",
      desc: "Malfunctioning washing machines or dishwashers can flood your home in minutes.",
      icon: <AlertTriangle />
    },
    {
      title: "Storm & Flood",
      desc: "Severe weather events in North Texas can cause rapid exterior water intrusion.",
      icon: <CloudRain />
    },
    {
      title: "Sewage Backup",
      desc: "Clogged main lines can lead to hazardous sewage backflow into your property.",
      icon: <Hammer />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-20 reveal">
          <span className="text-[#b6171e] font-black tracking-widest uppercase text-sm mb-4 block">Root Causes</span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#00123d] mb-6">Common Sources of Water Damage</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg">Understanding the source of water damage is critical for selecting the correct restoration protocol.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {causes.map((cause, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-6 sm:gap-8 p-6 sm:p-10 bg-[#f8f9fa] rounded-[32px] hover:bg-white hover:shadow-2xl hover:shadow-[#00123d]/10 transition-all duration-500 reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="w-16 h-16 bg-white text-[#b6171e] rounded-2xl flex items-center justify-center shrink-0 shadow-lg border border-gray-100">
                {React.cloneElement(cause.icon, { size: 32 })}
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#00123d] mb-3">{cause.title}</h3>
                <p className="text-gray-500 leading-relaxed">{cause.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommonCauses;
