import React, { useEffect } from 'react';
import Footer from '../components/Footer';

const AreasWeServe = () => {
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
    <main className="pt-[72px] lg:pt-[80px] font-['Inter']">
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            alt="Panoramic wide shot of the Dallas Fort Worth skyline" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuApdPzuclBgOK2f4nWRX31EnDOnsdI49Cb7D_Mzrk0mSaWGcPAjj6Nx-aYnokiYCkPd5D5KgwQdJY8DLFCT5Hv1_DHVwtCOzeGLr7nRskulkTLLqFkMYY6GQnpdtoBZ-Cq7jsSklbFVUA0qwjbzsSWqMZ8T54UPvOLLPGmL58Epy-u_Y_lyRAu8_u4gWeEZrXA1mJ_V6DBBwo7z9kyh34ECPAbh1Of8I9qoRpvD3xTWGDGbTPrF-s7-cISav5X0U3CuJxs8Vq4nVO2E" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00123d]/85 to-[#00123d]/95"></div>
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full py-12 md:py-20 reveal">
          <div className="max-w-3xl text-left">
            <span className="inline-block py-1 px-3 bg-[#b6171e] text-white font-bold text-[10px] md:text-[12px] uppercase tracking-[0.1em] mb-6">NOW SERVING ALL OF DFW</span>
            <h1 className="text-[32px] md:text-[56px] font-['Work_Sans'] font-bold text-white mb-6 leading-[1.1] tracking-[-0.02em]">Trusted Restoration Across the DFW Metroplex</h1>
            <p className="text-[16px] md:text-[18px] text-white/90 mb-10 max-w-xl leading-[1.6]">When disaster strikes, every minute counts. Dry State LLC provides rapid-response water, fire, and mold restoration across North Texas with professional precision.</p>
            <div className="flex flex-row flex-wrap gap-4 justify-start">
              <a href="tel:2147851130" className="bg-[#b6171e] text-white font-['Work_Sans'] font-bold text-[14px] md:text-[16px] px-6 md:px-8 py-4 flex items-center justify-center gap-2 hover:bg-[#9a141a] transition-all no-underline rounded-[4px]">
                <span className="material-symbols-outlined text-white text-[20px]">emergency</span>
                24/7 EMERGENCY RESPONSE
              </a>
              <button className="border-2 border-white text-white font-['Work_Sans'] font-bold text-[14px] md:text-[16px] px-6 md:px-8 py-4 hover:bg-white/10 transition-all rounded-[4px]">
                VIEW SERVICE AREAS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-white border-b border-slate-200 py-8 reveal">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#b6171e] text-[28px]" style={{ fontVariationSettings: "'FILL' 0" }}>verified</span>
            <span className="font-bold text-[#00123d] text-[13px] uppercase tracking-wider">IICRC Certified Firm</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#b6171e] text-[28px]" style={{ fontVariationSettings: "'FILL' 0" }}>star</span>
            <span className="font-bold text-[#00123d] text-[13px] uppercase tracking-wider">5-Star Average Rating</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#b6171e] text-[28px]" style={{ fontVariationSettings: "'FILL' 0" }}>shield</span>
            <span className="font-bold text-[#00123d] text-[13px] uppercase tracking-wider">Fully Insured & Bonded</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#b6171e] text-[28px]" style={{ fontVariationSettings: "'FILL' 0" }}>timer</span>
            <span className="font-bold text-[#00123d] text-[13px] uppercase tracking-wider">60-Minute Arrival Guarantee</span>
          </div>
        </div>
      </div>

      {/* Service Area Overview */}
      <section className="py-16 md:py-20 bg-white reveal">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="text-center md:text-left">
            <span className="text-[#b6171e] text-[11px] md:text-[12px] font-bold tracking-[0.2em] uppercase mb-4 block">STRATEGIC LOCATION</span>
            <h2 className="text-[28px] md:text-[36px] font-['Work_Sans'] font-bold text-[#00123d] mb-6 leading-[1.2] tracking-[-0.01em]">Richland Hills: The Heart of Our DFW Operations</h2>
            <p className="text-[16px] md:text-[18px] text-[#44464f] mb-10 leading-[1.7]">Headquartered in Richland Hills, Dry State LLC is strategically positioned to reach any corner of the DFW Metroplex within an hour. Our central location allows our fleet to deploy instantly to Fort Worth, Dallas, and everywhere in between.</p>
            <div className="space-y-4 text-left inline-block md:block">
              <div className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-white border border-[#f1f5f9] rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[#b6171e] text-xl md:text-2xl">speed</span>
                </div>
                <div>
                  <h3 className="font-['Work_Sans'] font-bold text-[#00123d] mb-1 text-[17px] md:text-[19px]">Rapid Deployment Fleet</h3>
                  <p className="text-[#44464f] text-[14px] md:text-[15px] leading-relaxed">Fully equipped restoration trucks stationed throughout Tarrant and Dallas counties.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-white border border-[#f1f5f9] rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[#b6171e] text-xl md:text-2xl">location_on</span>
                </div>
                <div>
                  <h3 className="font-['Work_Sans'] font-bold text-[#00123d] mb-1 text-[17px] md:text-[19px]">Hyper-Local Knowledge</h3>
                  <p className="text-[#44464f] text-[14px] md:text-[15px] leading-relaxed">We understand the unique environmental factors across North Texas municipalities.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl border-[8px] md:border-[12px] border-white">
            <img 
              className="w-full h-full object-cover" 
              alt="DryState Restoration in Richland Hills" 
              src="/assets/richland-hills-feature.jpg" 
            />
          </div>
        </div>
      </section>

      {/* Detailed City List */}
      <section className="py-24 bg-white reveal">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div className="area-category">
              <h2 className="text-3xl md:text-4xl font-black text-[#0F265C] mb-6">Primary Service Areas – Older Homes & Established Communities</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We frequently service older neighborhoods and established communities where aging properties are more susceptible to water damage, drainage issues, and hidden moisture problems, including:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  ["Irving", "Grand Prairie", "Carrollton", "Duncanville", "Richland Hills", "North Richland Hills", "Bedford"],
                  ["Euless", "Hurst", "Haltom City", "Fort Worth", "Farmers Branch"]
                ].map((col, idx) => (
                  <ul key={idx} className="space-y-4">
                    {col.map((city, cIdx) => (
                      <li key={cIdx} className="flex items-center gap-3 text-gray-600 text-[15px] font-bold">
                        <span className="w-1.5 h-1.5 bg-[#D32F2F] rounded-full shrink-0"></span>
                        {city}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>

            <div className="area-category">
              <h3 className="text-xl md:text-2xl font-black text-[#0F265C] mb-6 mt-2">Additional DFW Metroplex Areas We Serve</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We also provide high-precision restoration and cleanup services to these growing communities across North Texas:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {["Coppell", "Grapevine", "Keller", "Southlake", "Colleyville", "Lewisville", "Dallas", "Surrounding DFW communities"].map((city, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-600 text-[15px] font-bold">
                    <span className="w-1.5 h-1.5 bg-[#D32F2F]/60 rounded-full shrink-0"></span>
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Localized Expertise */}
      <section className="py-16 md:py-20 bg-[#00123d] text-white reveal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none hidden md:block">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
            <path d="M0 0 L100 0 L100 100 Z" />
          </svg>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16 relative z-10">
          <div className="lg:col-span-1 text-center md:text-left">
            <span className="sub-title !text-white/60">LOCAL EXPERTISE</span>
            <h2 className="text-[28px] md:text-[36px] font-['Work_Sans'] font-bold mb-6 leading-[1.2] tracking-[-0.01em] text-white">Why Local Response Matters</h2>
            <p className="text-[16px] md:text-[18px] text-white/70 leading-[1.7]">In North Texas, weather patterns and soil conditions create unique challenges for property restoration that only locals understand.</p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            <div className="border-l-2 border-[#b6171e] pl-6 md:pl-8">
              <h3 className="text-[20px] md:text-[22px] font-['Work_Sans'] font-bold mb-3 text-white">Rapid Secondary Damage Prevention</h3>
              <p className="text-[15px] md:text-[16px] text-white/60 leading-[1.7]">Richland Hills humidity can cause severe mold issues in as little as 24-48 hours. Our local proximity allows us to begin drying procedures immediately.</p>
            </div>
            <div className="border-l-2 border-[#b6171e] pl-6 md:pl-8">
              <h3 className="text-[20px] md:text-[22px] font-['Work_Sans'] font-bold mb-3 text-white">Deep DFW Network</h3>
              <p className="text-[15px] md:text-[16px] text-white/60 leading-[1.7]">We work directly with local DFW insurance adjusters and city building departments, streamlining the approval process for your restoration project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response Guarantee */}
      <section className="py-16 md:py-20 bg-[#f3f4f5] reveal">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="bg-white overflow-hidden flex flex-col md:flex-row shadow-2xl rounded-3xl border border-[#e2e8f0]">
            <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
              <span className="sub-title">OUR PROMISE</span>
              <h2 className="text-[28px] md:text-[36px] font-['Work_Sans'] font-bold text-[#00123d] mb-6 leading-[1.2] tracking-[-0.01em]">Our 60-Minute Rapid Response Guarantee</h2>
              <p className="text-[16px] md:text-[18px] text-[#44464f] mb-10 leading-[1.7]">We maintain a state-of-the-art fleet of restoration vehicles staged across the DFW Metroplex. Each unit is self-contained with industrial-grade extraction and dehumidification equipment.</p>
              <div className="grid grid-cols-2 gap-4 md:gap-8 mb-10">
                <div className="p-4 md:p-6 bg-[#f8f9fa] rounded-2xl border border-[#e2e8f0] text-center">
                  <div className="text-[36px] md:text-[48px] font-['Work_Sans'] font-bold text-[#b6171e] mb-1 leading-none">60</div>
                  <div className="font-bold text-[10px] md:text-[12px] text-[#00123d] uppercase tracking-[0.1em]">MINUTES OR LESS</div>
                </div>
                <div className="p-4 md:p-6 bg-[#f8f9fa] rounded-2xl border border-[#e2e8f0] text-center">
                  <div className="text-[36px] md:text-[48px] font-['Work_Sans'] font-bold text-[#b6171e] mb-1 leading-none">24/7</div>
                  <div className="font-bold text-[10px] md:text-[12px] text-[#00123d] uppercase tracking-[0.1em]">AVAILABILITY</div>
                </div>
              </div>
              <button className="bg-[#00123d] text-white font-['Work_Sans'] font-bold py-4 md:py-5 w-full hover:bg-[#000e2e] transition-colors uppercase tracking-[0.15em] text-[14px] md:text-[15px] rounded-xl shadow-lg">
                CALL FOR IMMEDIATE ASSISTANCE
              </button>
            </div>
            <div className="md:w-1/2 relative h-[300px] md:h-auto">
              <img 
                className="w-full h-full object-cover" 
                alt="Professional restoration technician unloading equipment" 
                src="/assets/our-promise-feature.png" 
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#00123d]/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials by Location */}
      <section className="py-16 md:py-20 bg-white reveal">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="sub-title">TESTIMONIALS</span>
            <h2 className="text-[28px] md:text-[36px] font-['Work_Sans'] font-bold text-[#00123d] mb-4 leading-[1.2] tracking-[-0.01em]">Community Success Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah J.", role: "Richland Hills Resident", text: "Our burst pipe in Richland Hills happened at 2 AM. Dry State was there before 3 AM and saved our hardwood floors. Professional and efficient." },
              { name: "Marcus R.", role: "Fort Worth Business Owner", text: "The smoke damage in our Fort Worth office was extensive. They handled the entire insurance claim and the cleaning was flawless." },
              { name: "Elena W.", role: "Dallas Homeowner", text: "Used them for property restoration in Dallas after the spring storms. Knowledgeable crew and they explained everything clearly." }
            ].map((review, idx) => (
              <div key={idx} className="p-8 md:p-10 bg-[#f8f9fa] border border-[#e2e8f0] flex flex-col h-full rounded-2xl shadow-sm hover:shadow-md transition-shadow relative">
                <div className="flex text-[#fbbf24] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined fill-1 text-[18px] md:text-[20px]">star</span>
                  ))}
                </div>
                <p className="text-[#44464f] text-[16px] md:text-[17px] italic mb-8 leading-[1.7]">"{review.text}"</p>
                <div className="mt-auto flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#00123d] rounded-full flex items-center justify-center text-white font-bold text-[16px] md:text-[18px]">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-[#00123d] text-[15px] md:text-[16px] leading-tight">{review.name}</p>
                    <p className="text-[13px] md:text-[14px] text-[#757681]">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-[#f8f9fa] reveal">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="sub-title">FAQ</span>
            <h2 className="text-[28px] md:text-[36px] font-['Work_Sans'] font-bold text-[#00123d] mb-4 leading-[1.2] tracking-[-0.01em]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {[
              { q: "Do you serve areas outside of Richland Hills?", a: "Yes, while our headquarters is in Richland Hills, we provide full restoration services to the entire Dallas-Fort Worth Metroplex, including Dallas, Fort Worth, Irving, Plano, and all surrounding suburbs." },
              { q: "What is your typical response time in Dallas?", a: "We maintain teams throughout the metroplex. For Dallas emergencies, we typically arrive on-site within 45 to 60 minutes of your initial call, regardless of traffic conditions." },
              { q: "Are you available on weekends and holidays?", a: "Absolutely. Emergencies don't follow a schedule. Our DFW response team is active 24/7, 365 days a year, including all major holidays." }
            ].map((faq, idx) => (
              <details key={idx} className="group border border-[#e2e8f0] bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow" open={idx === 0}>
                <summary className="flex justify-between items-center text-[17px] md:text-[19px] font-['Work_Sans'] font-bold text-[#00123d] cursor-pointer list-none">
                  {faq.q}
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-[#b6171e]">expand_more</span>
                </summary>
                <p className="text-[#44464f] text-[15px] md:text-[16px] pt-6 border-t border-[#f1f5f9] mt-6 leading-[1.7]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-white reveal">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="bg-[#00123d] rounded-[1.5rem] md:rounded-[2rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-[32px] md:text-[42px] font-['Work_Sans'] font-bold mb-6 leading-[1.1] tracking-[-0.02em]">Ready to Help Your Community</h2>
              <p className="text-[17px] md:text-[20px] text-white/70 mb-10 md:mb-12 leading-[1.6]">Don't wait for damage to worsen. Contact Dry State LLC now for a professional assessment and immediate restoration action anywhere in North Texas.</p>
              <div className="flex flex-row flex-wrap justify-center gap-4 md:gap-6">
                <a className="bg-[#b6171e] text-white font-['Work_Sans'] font-bold px-8 py-4 md:px-12 md:py-5 flex items-center justify-center gap-3 rounded-xl shadow-lg hover:bg-[#9a141a] hover:scale-105 transition-all text-[16px] md:text-[18px]" href="tel:2147851130">
                  <span className="material-symbols-outlined">call</span>
                  CALL FOR 24/7 HELP
                </a>
                <a className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-['Work_Sans'] font-bold px-8 py-4 md:px-12 md:py-5 flex items-center justify-center gap-3 rounded-xl hover:bg-white/20 transition-all text-[16px] md:text-[18px]" href="#">
                  <span className="material-symbols-outlined">assignment</span>
                  GET AN ESTIMATE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default AreasWeServe;
