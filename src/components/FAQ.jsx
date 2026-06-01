import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      q: 'How quickly can your team respond?',
      a: 'In many cases, our team can arrive within 60 minutes for emergency service calls in the Dallas–Fort Worth area.'
    },
    {
      q: 'Do you work with my specific insurance company?',
      a: 'We regularly work with homeowners, property managers, and insurance carriers throughout the restoration process. While coverage depends on your individual policy, we can help document damages and communicate with your insurance company when needed.'
    },
    {
      q: 'Are your restoration professionals trained and certified?',
      a: 'Yes, our team consists of fully trained and IICRC-certified professionals in Water Damage Restoration, Fire & Smoke Restoration, and Applied Microbial Remediation.'
    },
    {
      q: 'What is the first thing I should do after water damage?',
      a: 'If it is safe to do so, shut off the water source and avoid affected areas. Then contact a professional restoration company as quickly as possible to help prevent additional damage and moisture issues.'
    },
    {
      q: 'How long does water damage restoration take?',
      a: 'The timeline varies depending on the severity of the damage. Mitigation and drying typically take 3 to 5 days, while full reconstruction can take a few weeks. We provide a clear timeline after our initial assessment.'
    },
    {
      q: 'Can water damage cause mold?',
      a: 'Yes. Mold can begin growing within 24 to 48 hours if moisture is not properly extracted and dried. Our professional drying techniques help prevent mold growth and ensure a safe environment.'
    },
    {
      q: 'Does homeowners insurance cover water damage?',
      a: 'Most standard policies cover sudden and accidental water damage (like a burst pipe), but gradual damage or floodwater usually requires separate coverage. We can help you review your policy and work directly with your adjuster.'
    },
    {
      q: 'Do you provide reconstruction services after mitigation?',
      a: 'Yes. We are a full-service restoration company, meaning we handle everything from the initial cleanup and drying to the final repairs and reconstruction, ensuring your property is fully restored.'
    }
  ];

  return (
    <section className="py-24 bg-[#fafaf9]">
      <div className="container max-w-[900px] mx-auto px-6">
        <div className="text-center reveal mb-16">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">RESTORATION FAQ</span>
          <h2 className="text-4xl md:text-5xl font-black text-secondary">Frequently Asked Questions</h2>
        </div>
        
        <div className="reveal space-y-5">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] cursor-pointer
                ${activeIndex === index ? 'shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-transparent' : 'border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:border-transparent'}`}
              onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
            >
              <div className="w-full p-6 sm:p-8 flex justify-between items-center text-left text-lg font-bold text-secondary">
                <h3 className="pr-6 text-base sm:text-lg leading-snug">{faq.q}</h3>
                <div className="text-primary flex-shrink-0 transition-transform duration-300">
                  {activeIndex === index ? <Minus size={24} strokeWidth={2.5} /> : <Plus size={24} strokeWidth={2.5} />}
                </div>
              </div>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 sm:p-8 pt-0 sm:pt-0 text-on-surface-variant leading-relaxed text-[15px] bg-white">
                  <div className="pt-6 sm:pt-8 border-t border-slate-100 bg-[#fdfbf9] -mx-6 sm:-mx-8 px-6 sm:px-8 pb-6 sm:pb-8 -mb-6 sm:-mb-8">
                    {faq.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
