import React, { useEffect } from 'react';
import Footer from '../components/Footer';

const Contact = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="pt-[72px] lg:pt-[80px] font-['Inter'] bg-[#f8f9fa]">
      {/* 1. Emergency Hero */}
      <section className="relative bg-[#00123d] py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img 
            className="w-full h-full object-cover" 
            alt="Emergency dispatch equipment" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAt1GebCG50ilWfE7RqxK3Vkm80b0SQZduI1_04QEf1uPKJMwq1d5ns-HpOci1HKCFbJHtu3xTrKT3z2KLtwaM41pzjUF_5SX4hf4bTA-vQa8CU5b1BIrzE2dAt_Nw2Goi3qmETM5Q4b9KGdukzFl5qhU71Ag-mtxsVHXR7cfXF-GXfj3G6FStji3BSMSzAxd8kbuoBm1hDsO0eUSSm7wLreVtT_ikf96bCSVdH8AsNvqQt19R2eaixq_omK1iL43XKkFW5NCpq2PV" 
          />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 flex flex-col items-center text-center reveal">
          <div className="bg-[#b6171e] text-white px-4 py-1.5 rounded-full text-[10px] md:text-[12px] font-bold tracking-[0.1em] mb-6 animate-pulse">
            60-MINUTE RAPID RESPONSE
          </div>
          <h1 className="text-[32px] md:text-[48px] font-['Work_Sans'] font-black text-white mb-6 max-w-3xl leading-[1.1]">
            Emergency Water & Fire Damage Dispatch
          </h1>
          <p className="text-[16px] md:text-[18px] text-[#b3c5ff] mb-10 max-w-2xl leading-relaxed px-2">
            Immediate mitigation is critical to prevent mold growth and structural failure. Our emergency crews are on standby across DFW.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full max-w-4xl">
            <a className="bg-white text-[#00123d] px-6 py-4 md:px-8 md:py-5 rounded-xl flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-2xl no-underline" href="tel:2147851130">
              <span className="text-[20px] sm:text-[24px] lg:text-[32px] font-['Work_Sans'] font-black whitespace-nowrap">214-785-1130</span>
            </a>
            <button className="bg-[#b6171e] text-white px-6 py-4 md:px-8 md:py-5 rounded-xl font-bold text-[16px] md:text-[18px] flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-2xl group">
              <span className="material-symbols-outlined group-hover:animate-bounce" style={{ fontVariationSettings: "'FILL' 1" }}>emergency_share</span>
              <span className="whitespace-nowrap">Dispatch Now</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="bg-white border-b border-slate-200 py-6 md:py-8">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-8 opacity-60 reveal">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#00123d] text-[24px] md:text-[28px]">verified_user</span>
            <span className="text-[10px] md:text-[12px] font-black tracking-widest text-[#00123d] uppercase">IICRC CERTIFIED FIRM</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#00123d] text-[24px] md:text-[28px]">workspace_premium</span>
            <span className="text-[10px] md:text-[12px] font-black tracking-widest text-[#00123d] uppercase">BBB A+ ACCREDITED</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#00123d] text-[24px] md:text-[28px]">security</span>
            <span className="text-[10px] md:text-[12px] font-black tracking-widest text-[#00123d] uppercase">FULLY INSURED & BONDED</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#00123d] text-[24px] md:text-[28px]">stars</span>
            <span className="text-[10px] md:text-[12px] font-black tracking-widest text-[#00123d] uppercase">5-STAR GOOGLE RATING</span>
          </div>
        </div>
      </section>

      {/* 3. Main Interaction (Form & Sidebar Grid) */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-16 reveal">
            {/* Left: Contact Form */}
            <div className="w-full md:w-[60%] bg-white p-6 md:p-10 border border-slate-200 rounded-2xl shadow-sm">
              <h2 className="text-[28px] md:text-[36px] font-['Work_Sans'] font-bold text-[#00123d] mb-4">Request an Inspection</h2>
              <p className="text-[15px] md:text-[16px] text-[#44464f] mb-10 leading-relaxed">For non-emergencies, fill out the form below and a restoration specialist will contact you within 2 hours to schedule a free site assessment.</p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] md:text-[11px] font-black text-[#00123d] tracking-widest uppercase">FULL NAME</label>
                    <input className="w-full border-slate-200 rounded-lg p-4 bg-[#f8f9fa] focus:bg-white focus:ring-2 focus:ring-[#00123d] transition-all outline-none" placeholder="John Doe" type="text"/>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] md:text-[11px] font-black text-[#00123d] tracking-widest uppercase">PHONE NUMBER</label>
                    <input className="w-full border-slate-200 rounded-lg p-4 bg-[#f8f9fa] focus:bg-white focus:ring-2 focus:ring-[#00123d] transition-all outline-none" placeholder="(214) 000-0000" type="tel"/>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] md:text-[11px] font-black text-[#00123d] tracking-widest uppercase">EMAIL ADDRESS</label>
                  <input className="w-full border-slate-200 rounded-lg p-4 bg-[#f8f9fa] focus:bg-white focus:ring-2 focus:ring-[#00123d] transition-all outline-none" placeholder="john@example.com" type="email"/>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] md:text-[11px] font-black text-[#00123d] tracking-widest uppercase">SERVICE TYPE</label>
                  <select className="w-full border-slate-200 rounded-lg p-4 bg-[#f8f9fa] focus:bg-white focus:ring-2 focus:ring-[#00123d] transition-all outline-none cursor-pointer">
                    <option>Water Damage Restoration</option>
                    <option>Fire & Smoke Damage</option>
                    <option>Mold Remediation</option>
                    <option>Storm Damage Repair</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] md:text-[11px] font-black text-[#00123d] tracking-widest uppercase">MESSAGE / LOSS DESCRIPTION</label>
                  <textarea className="w-full border-slate-200 rounded-lg p-4 bg-[#f8f9fa] focus:bg-white focus:ring-2 focus:ring-[#00123d] transition-all outline-none resize-none" placeholder="Please describe the situation..." rows="4"></textarea>
                </div>
                <button className="w-full bg-[#00123d] text-white py-5 rounded-lg font-black text-[14px] md:text-[16px] tracking-widest transition-all hover:bg-[#0f265c] uppercase">
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* Right: Emergency Info & Tips */}
            <div className="w-full md:w-[40%] space-y-6 md:space-y-8">
              <div className="bg-[#da3433] text-white p-6 md:p-8 rounded-xl border-l-[6px] border-[#b6171e] shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-[24px] md:text-[28px]">lightbulb</span>
                  <h3 className="text-[18px] md:text-[20px] font-bold">While You Wait...</h3>
                </div>
                <ul className="space-y-4 text-[14px] md:text-[15px]">
                  <li className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-[18px] opacity-80">check_circle</span>
                    <span>Turn off the main water valve if safe.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-[18px] opacity-80">check_circle</span>
                    <span>Shut off breakers to affected areas.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-[18px] opacity-80">check_circle</span>
                    <span>Do not use domestic vacuums to remove water.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-[18px] opacity-80">check_circle</span>
                    <span>Move electronics and photos to a dry level.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-5 md:p-6 border border-slate-200 rounded-xl flex items-center gap-5 md:gap-6 shadow-sm hover:shadow-md transition-all group">
                  <div className="bg-[#00123d] text-white p-3 rounded-lg group-hover:bg-[#b6171e] transition-colors">
                    <span className="material-symbols-outlined">support_agent</span>
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">DISPATCH HOTLINE</p>
                    <p className="text-[18px] md:text-[20px] font-black text-[#00123d]">214-785-1130</p>
                  </div>
                </div>
                <div className="bg-white p-5 md:p-6 border border-slate-200 rounded-xl flex items-center gap-5 md:gap-6 shadow-sm hover:shadow-md transition-all group">
                  <div className="bg-slate-100 text-[#00123d] p-3 rounded-lg group-hover:bg-[#00123d] group-hover:text-white transition-all">
                    <span className="material-symbols-outlined">receipt_long</span>
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">BILLING & CLAIMS</p>
                    <p className="text-[18px] md:text-[20px] font-black text-[#00123d]">214-785-1130</p>
                  </div>
                </div>
                <div className="bg-white p-5 md:p-6 border border-slate-200 rounded-xl flex items-center gap-5 md:gap-6 shadow-sm hover:shadow-md transition-all group">
                  <div className="bg-slate-100 text-[#00123d] p-3 rounded-lg group-hover:bg-[#00123d] group-hover:text-white transition-all">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">EMAIL SUPPORT</p>
                    <p className="text-[16px] md:text-[18px] font-black text-[#00123d]">Office@DryStateLLC.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Response Timeline (Horizontal Grid) */}
      <section className="bg-[#e1e3e4] py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 text-center reveal">
          <h2 className="text-[28px] md:text-[36px] font-['Work_Sans'] font-bold text-[#00123d] mb-4">Restoration Response Timeline</h2>
          <p className="text-[16px] md:text-[18px] text-[#44464f] mb-12 md:mb-16 max-w-2xl mx-auto">Precision and speed are the foundation of our restoration process.</p>
          <div className="flex flex-col md:flex-row gap-6 relative">
            <div className="hidden md:block absolute top-[44px] left-0 w-full h-[2px] bg-slate-300 z-0"></div>
            {[
              { id: 1, title: "Initial Call", desc: "Emergency triage and basic advice provided immediately." },
              { id: 2, title: "Assessment", desc: "Arrival within 60 mins for thermal imaging inspections." },
              { id: 3, title: "Mitigation", desc: "Extraction and stabilization to stop further damage." },
              { id: 4, title: "Recovery", desc: "Final structural repairs and air quality clearance." }
            ].map((step) => (
              <div key={step.id} className="relative z-10 w-full md:w-1/4 bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-lg group hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#00123d] text-white rounded-lg flex items-center justify-center mx-auto mb-6 text-[18px] md:text-[22px] font-black shadow-lg group-hover:bg-[#b6171e] transition-colors">
                  {step.id}
                </div>
                <h4 className="text-[17px] md:text-[18px] font-bold text-[#00123d] mb-2">{step.title}</h4>
                <p className="text-[13px] md:text-[14px] text-[#44464f] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Headquarters & Map (Side-by-Side Grid) */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-[28px] md:text-[36px] font-['Work_Sans'] font-bold text-[#00123d] mb-6">Arlington Headquarters</h2>
              <p className="text-[16px] md:text-[18px] text-[#44464f] mb-8 md:mb-10 leading-relaxed">We centrally stage our equipment in Arlington to ensure rapid deployment to the entire DFW Metroplex.</p>
              <div className="space-y-6 text-left inline-block md:block">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#b6171e] mt-1">location_on</span>
                  <div>
                    <p className="font-black text-[#00123d] text-[15px] md:text-[16px]">Office Location</p>
                    <p className="text-[#44464f] text-[14px] md:text-[15px]">7410 Boulevard 26 | Unit #: S | Richland Hills, TX 76180</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#b6171e] mt-1">mail</span>
                  <div>
                    <p className="font-black text-[#00123d] text-[15px] md:text-[16px]">Mailing Address</p>
                    <p className="text-[#44464f] text-[14px] md:text-[15px]">1527 W State Hwy 114 | Unit #: 500-116 | Grapevine, TX 76051</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#b6171e] mt-1">schedule</span>
                  <div>
                    <p className="font-black text-[#00123d] text-[15px] md:text-[16px]">Operating Hours</p>
                    <p className="text-[#44464f] text-[14px] md:text-[15px]">Dispatch: 24/7/365 | Office: Mon-Fri 8am - 5pm</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl relative border-[6px] md:border-[8px] border-white">
              <img 
                className="w-full h-full object-cover" 
                alt="Service Area Map" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDage66PU3d6QI_P7HUfkO60lA3HUyHB9WxFR6q3NdSxkFHkyh3SIq63OqynV9Ew_Wu0k9h4r70y9w4QkWpZSu2BHHYqhAd0YiWr3eqLtVKd33Dme3_eP66CCVCfEHwjrdkh-4RfL7TgwPfB2IQBIBG6aUxe4S8Hz4N6mGWVuTZ4o3mRACGbcqopi229QV-oUrjTLFKct8jkP-t1TilELeWEPxcU_OSqPRMuhbtClcmovNTrHKHLCP1Z4Ml2rw6561PB2DhZIfOHO5Y" 
              />
              <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-xl text-[10px] md:text-[12px] font-black flex items-center gap-2">
                <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#b6171e] rounded-full animate-ping"></span>
                DFW Service Radius
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Service Areas */}
      <section className="py-16 md:py-24 bg-[#f8f9fa] reveal">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-[28px] md:text-[36px] font-['Work_Sans'] font-bold text-[#00123d] mb-10 md:mb-12 text-center md:text-left">North Texas Service Areas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
            {[
              { county: "Tarrant County", cities: ["Arlington", "Fort Worth", "Mansfield", "Richland Hills", "Keller"] },
              { county: "Dallas County", cities: ["Dallas", "Irving", "Grand Prairie", "Coppell", "Richardson"] },
              { county: "Denton County", cities: ["Denton", "Lewisville", "Flower Mound", "The Colony"] },
              { county: "Collin County", cities: ["Plano", "Frisco", "McKinney", "Allen"] },
              { county: "Surrounding", cities: ["Grapevine", "Southlake", "Colleyville", "Bedford"] }
            ].map((col, idx) => (
              <div key={idx} className="space-y-4 text-center md:text-left">
                <h4 className="font-black text-[#00123d] uppercase tracking-wider text-[11px] md:text-[12px] border-b border-slate-200 pb-2 inline-block md:block">{col.county}</h4>
                <ul className="space-y-2 text-[#44464f] text-[14px] md:text-[15px]">
                  {col.cities.map((city, cIdx) => (
                    <li key={cIdx} className="hover:text-[#b6171e] transition-colors">{city}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;

