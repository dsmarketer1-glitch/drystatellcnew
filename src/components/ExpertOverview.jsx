import React from 'react';
import expertImg from '../assets/flood-recovery.jpg';
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
              {/* Experience Badge removed as the company is new */}
            </div>
            {/* Background accent */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#f8f9fa] rounded-[40px] -z-0"></div>
          </div>

          <div className="w-full md:w-1/2 reveal" style={{ transitionDelay: '200ms' }}>
            <h2 className="text-3xl sm:text-5xl font-black text-[#00123d] leading-tight mb-8">
              Trusted Restoration Services Across DFW
            </h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              DryState provides emergency response, mitigation, cleanup, and reconstruction services for homeowners and businesses throughout the Dallas–Fort Worth area.
            </p>

            <div className="grid grid-cols-1 gap-6">
              <div className="flex gap-5">
                <div className="w-14 h-14 bg-[#f8f9fa] rounded-2xl flex items-center justify-center shrink-0 text-[#b6171e]">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h4 className="text-[#00123d] font-bold text-xl mb-1">IICRC Certified Technicians</h4>
                  <p className="text-gray-500 text-sm">Our restoration professionals are trained and certified through the IICRC.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-14 h-14 bg-[#f8f9fa] rounded-2xl flex items-center justify-center shrink-0 text-[#b6171e]">
                  <Target size={28} />
                </div>
                <div>
                  <h4 className="text-[#00123d] font-bold text-xl mb-1">Advanced Drying Equipment</h4>
                  <p className="text-gray-500 text-sm">We use professional drying and moisture-control equipment to help prevent further damage.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-14 h-14 bg-[#f8f9fa] rounded-2xl flex items-center justify-center shrink-0 text-[#b6171e]">
                  <Award size={28} />
                </div>
                <div>
                  <h4 className="text-[#00123d] font-bold text-xl mb-1">Responsive Restoration Team</h4>
                  <p className="text-gray-500 text-sm">We focus on clear communication, dependable service, and quality workmanship throughout the restoration process.</p>
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
