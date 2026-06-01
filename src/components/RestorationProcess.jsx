import React from 'react';
import { PhoneCall, Search, ShieldCheck, Sparkles, Wrench, CheckCircle } from 'lucide-react';

function RestorationProcess() {
  const steps = [
    { num: "01", title: "24/7 Emergency Response", desc: "We’re available 24/7. When you call, we’ll quickly assess the situation and dispatch a team.", icon: <PhoneCall size={24} strokeWidth={1.5} /> },
    { num: "02", title: "Damage Assessment", desc: "Our experts conduct a thorough inspection to evaluate the extent of the damage and plan the recovery.", icon: <Search size={24} strokeWidth={1.5} /> },
    { num: "03", title: "Damage Mitigation", desc: "We stabilize the property, remove affected materials when necessary, and begin the drying and cleanup process to help prevent further damage.", icon: <ShieldCheck size={24} strokeWidth={1.5} /> },
    { num: "04", title: "Cleaning & Sanitization", desc: "We clean and sanitize affected areas to remove contaminants and odors, ensuring your property is safe.", icon: <Sparkles size={24} strokeWidth={1.5} /> },
    { num: "05", title: "Repairs & Restoration", desc: "We complete the necessary repairs and reconstruction work to restore the appearance, safety, and functionality of your property.", icon: <Wrench size={24} strokeWidth={1.5} /> },
    { num: "06", title: "Final Inspection", desc: "We perform a final walkthrough to ensure the work meets our quality standards and your expectations.", icon: <CheckCircle size={24} strokeWidth={1.5} /> }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-primary mb-4">Our Proven Restoration Process</h2>
          <p className="text-on-surface-variant max-w-3xl mx-auto text-lg leading-relaxed">We guide you through every stage of the restoration process with clear communication, professional care, and efficient recovery solutions.</p>
        </div>
        
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[8%] right-[8%] border-t-2 border-dashed border-secondary/20 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className={`p-6 rounded-xl border border-outline-variant shadow-sm hover:-translate-y-2 hover:shadow-md transition-all duration-300 flex flex-col ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-secondary/40 font-black text-2xl">{step.num}</div>
                  <div className="text-secondary p-2 bg-secondary/5 rounded-full">{step.icon}</div>
                </div>
                <h4 className="font-bold text-primary mb-3 text-[15px] leading-tight">{step.title}</h4>
                <p className="text-[13px] text-on-surface-variant leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RestorationProcess;
