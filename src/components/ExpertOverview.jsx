import React from 'react';
import expertImg from '../assets/restoration-expert.png';
import { ShieldCheck, Target, Award } from 'lucide-react';

function ExpertOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-1/2 relative reveal">
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl shadow-[#00123d]/20 border-8 border-white">
              <img 
                src={expertImg} 
                alt="Water restoration expert" 
                className="w-full h-full object-cover"
              />
              {/* Experience Badge integrated inside the image container for better alignment */}
              <div className="absolute bottom-6 right-6 bg-[#b6171e] p-8 rounded-[32px] text-white shadow-2xl z-20 hidden md:block">
                 <div className="text-4xl font-black mb-1">15+</div>
                 <div className="text-[10px] font-bold uppercase tracking-widest leading-tight">Years of <br /> Excellence</div>
              </div>
            </div>
            {/* Background accent */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#f8f9fa] rounded-[40px] -z-0"></div>
          </div>

          <div className="w-full md:w-1/2 reveal" style={{ transitionDelay: '200ms' }}>
            <span className="text-[#b6171e] font-black tracking-widest uppercase text-sm mb-4 block">Professional Expertise</span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#00123d] leading-tight mb-8">
              Richland Hills' <br />
              <span className="text-gray-400">#1 Trusted</span> Experts
            </h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              Drystate isn't just a cleaning company. We are a specialized restoration firm with over a decade of experience handling the most complex water damage scenarios in North Texas. Our technicians are highly trained, IICRC certified, and committed to restoring your peace of mind.
            </p>

            <div className="grid grid-cols-1 gap-6">
              <div className="flex gap-5">
                <div className="w-14 h-14 bg-[#f8f9fa] rounded-2xl flex items-center justify-center shrink-0 text-[#b6171e]">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h4 className="text-[#00123d] font-bold text-xl mb-1">IICRC Certified Technicians</h4>
                  <p className="text-gray-500 text-sm">Every team member undergoes rigorous training and industry certification.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-14 h-14 bg-[#f8f9fa] rounded-2xl flex items-center justify-center shrink-0 text-[#b6171e]">
                  <Target size={28} />
                </div>
                <div>
                  <h4 className="text-[#00123d] font-bold text-xl mb-1">Precision Extraction</h4>
                  <p className="text-gray-500 text-sm">We use the latest high-pressure extraction technology to remove water fast.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-14 h-14 bg-[#f8f9fa] rounded-2xl flex items-center justify-center shrink-0 text-[#b6171e]">
                  <Award size={28} />
                </div>
                <div>
                  <h4 className="text-[#00123d] font-bold text-xl mb-1">Guaranteed Results</h4>
                  <p className="text-gray-500 text-sm">We stand behind our work with a comprehensive drying guarantee.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpertOverview;
