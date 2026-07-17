import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../components/Footer';

// EmailJS credentials — replace these with your own from https://dashboard.emailjs.com
const EMAILJS_SERVICE_ID = 'service_e1ugpf3';
const EMAILJS_TEMPLATE_ID = 'template_r2i68b6';
const EMAILJS_PUBLIC_KEY = 'oy9zG3K10fg8umT6L';

const Contact = () => {
  const formRef = useRef(null);
  // status: 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setStatus('success');
        formRef.current?.reset();
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setStatus('error');
      });
  };

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
          <div className="flex justify-center w-full max-w-4xl">
            <a className="bg-white text-[#00123d] px-6 py-4 md:px-8 md:py-5 rounded-xl flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-2xl no-underline w-full sm:w-auto" href="tel:2147851130">
              <span className="text-[20px] sm:text-[24px] lg:text-[32px] font-['Work_Sans'] font-black whitespace-nowrap">214-785-1130</span>
            </a>
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
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] md:text-[11px] font-black text-[#00123d] tracking-widest uppercase">FULL NAME</label>
                    <input name="full_name" required className="w-full border-slate-200 rounded-lg p-4 bg-[#f8f9fa] focus:bg-white focus:ring-2 focus:ring-[#00123d] transition-all outline-none" placeholder="John Doe" type="text"/>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] md:text-[11px] font-black text-[#00123d] tracking-widest uppercase">PHONE NUMBER</label>
                    <input name="phone" required className="w-full border-slate-200 rounded-lg p-4 bg-[#f8f9fa] focus:bg-white focus:ring-2 focus:ring-[#00123d] transition-all outline-none" placeholder="(214) 000-0000" type="tel"/>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] md:text-[11px] font-black text-[#00123d] tracking-widest uppercase">EMAIL ADDRESS</label>
                  <input name="email" required className="w-full border-slate-200 rounded-lg p-4 bg-[#f8f9fa] focus:bg-white focus:ring-2 focus:ring-[#00123d] transition-all outline-none" placeholder="john@example.com" type="email"/>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] md:text-[11px] font-black text-[#00123d] tracking-widest uppercase">SERVICE TYPE</label>
                  <select name="service_type" className="w-full border-slate-200 rounded-lg p-4 bg-[#f8f9fa] focus:bg-white focus:ring-2 focus:ring-[#00123d] transition-all outline-none cursor-pointer">
                    <option>Water Damage Restoration</option>
                    <option>Fire & Smoke Damage</option>
                    <option>Mold Remediation</option>
                    <option>Storm Damage Repair</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] md:text-[11px] font-black text-[#00123d] tracking-widest uppercase">MESSAGE / LOSS DESCRIPTION</label>
                  <textarea name="message" className="w-full border-slate-200 rounded-lg p-4 bg-[#f8f9fa] focus:bg-white focus:ring-2 focus:ring-[#00123d] transition-all outline-none resize-none" placeholder="Please describe the situation..." rows="4"></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-[#00123d] text-white py-5 rounded-lg font-black text-[14px] md:text-[16px] tracking-widest transition-all hover:bg-[#0f265c] uppercase disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
                </button>

                {status === 'success' && (
                  <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg text-[14px] md:text-[15px]">
                    <span className="material-symbols-outlined">check_circle</span>
                    <span>Thank you! Your request has been sent. A restoration specialist will contact you within 2 hours.</span>
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg text-[14px] md:text-[15px]">
                    <span className="material-symbols-outlined">error</span>
                    <span>Something went wrong. Please call us at 214-785-1130 or try again.</span>
                  </div>
                )}
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

      {/* 7. Service Areas */}
      <section className="py-16 md:py-24 bg-[#f8f9fa] reveal">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-[28px] md:text-[36px] font-['Work_Sans'] font-bold text-[#00123d] mb-6">Primary Service Areas – Older Homes & Established Communities</h2>
              <p className="text-[16px] md:text-[18px] text-[#44464f] mb-8 leading-relaxed">
                We frequently service older neighborhoods and established communities where aging properties are more susceptible to water damage, drainage issues, and hidden moisture problems, including:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  ["Irving", "Grand Prairie", "Carrollton", "Duncanville", "Richland Hills", "North Richland Hills", "Bedford"],
                  ["Euless", "Hurst", "Haltom City", "Arlington", "Fort Worth", "Farmers Branch"]
                ].map((col, idx) => (
                  <ul key={idx} className="space-y-4">
                    {col.map((city, cIdx) => (
                      <li key={cIdx} className="flex items-center gap-3 text-[#44464f] text-[15px] font-bold">
                        <span className="w-1.5 h-1.5 bg-[#b6171e] rounded-full shrink-0"></span>
                        {city}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[22px] md:text-[28px] font-['Work_Sans'] font-bold text-[#00123d] mb-6 mt-2">Additional DFW Metroplex Areas We Serve</h3>
              <p className="text-[16px] md:text-[18px] text-[#44464f] mb-8 leading-relaxed">
                We also provide high-precision restoration and cleanup services to these growing communities across North Texas:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {["Coppell", "Grapevine", "Keller", "Southlake", "Colleyville", "Lewisville", "Dallas", "Surrounding DFW communities"].map((city, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[#44464f] text-[15px] font-bold">
                    <span className="w-1.5 h-1.5 bg-[#b6171e]/60 rounded-full shrink-0"></span>
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;

