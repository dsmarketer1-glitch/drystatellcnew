import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const About = () => {
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
      {/* 1. Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            alt="Professional restoration technicians" 
            src="/assets/about-hero.jpg" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00123d]/85 to-[#00123d]/70"></div>
        </div>
        <div className="container relative z-10 max-w-4xl reveal px-4 mx-auto text-center">
          <span className="text-white/80 uppercase mb-4 block font-bold tracking-[0.2em] text-[10px] md:text-[12px]">Trusted North Texas Restoration</span>
          <h1 className="text-[28px] md:text-[42px] font-['Work_Sans'] font-bold text-white mb-6 leading-[1.2] tracking-[-0.01em]">The Hands Behind Your Recovery</h1>
          <p className="text-[16px] md:text-[18px] text-white/90 max-w-xl mx-auto leading-[1.6]">Providing resilient stability to Richland Hills and Arlington property owners during their most challenging moments.</p>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-white border-b border-slate-200 py-6 md:py-8 reveal">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 text-[#00123d]"><span className="font-black text-lg md:text-xl">IICRC</span> <span className="font-medium text-sm md:text-base">Certified Firm</span></div>
          <div className="flex items-center gap-2 text-[#00123d]"><span className="font-black text-lg md:text-xl">BBB</span> <span className="font-medium text-sm md:text-base">A+ Rated</span></div>
          <div className="flex items-center gap-2 text-[#00123d]"><span className="font-black text-lg md:text-xl">EPA</span> <span className="font-medium text-sm md:text-base">Lead-Safe Certified</span></div>
          <div className="flex items-center gap-3">
            <div className="flex text-yellow-500 text-lg md:text-xl">★★★★★</div>
            <span className="font-bold text-[#00123d] text-sm md:text-base">5-Star Average</span>
          </div>
        </div>
      </div>

      {/* 2. Mission & Vision */}
      <section className="py-16 md:py-24 px-6 max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center reveal">
        <div className="max-w-3xl text-center md:text-left">
          <h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-['Work_Sans'] font-bold text-[#00123d] mb-8 leading-[1.2]">Our Mission & Vision</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-[#b6171e] pl-6 md:pl-8 text-left">
              <h3 className="text-[20px] md:text-[24px] font-['Work_Sans'] font-bold text-[#00123d] mb-3">The Mission</h3>
              <p className="text-[15px] md:text-[17px] text-[#44464f] leading-relaxed">To serve as the premier North Texas responder for water, fire, and mold crises, delivering technical precision with human compassion to restore property and peace of mind.</p>
            </div>
            <div className="border-l-4 border-[#00123d] pl-6 md:pl-8 text-left">
              <h3 className="text-[20px] md:text-[24px] font-['Work_Sans'] font-bold text-[#00123d] mb-3">The Vision</h3>
              <p className="text-[15px] md:text-[17px] text-[#44464f] leading-relaxed">To set the standard for resilient restoration through continuous innovation, expert certification, and an unwavering commitment to our local DFW communities.</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img 
            alt="Office desk with restoration plans" 
            className="rounded-2xl shadow-2xl border border-slate-200 w-full" 
            src="/assets/mission-vision-feature.png" 
          />
          <div className="absolute -bottom-6 -right-6 bg-[#00123d] p-6 md:p-10 rounded-2xl shadow-2xl text-white hidden sm:block border-4 border-white">
            <p className="text-[32px] md:text-[42px] font-bold leading-none mb-1">15+</p>
            <p className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.2em] opacity-80">Years of Service</p>
          </div>
        </div>
      </section>

      {/* 3. Our History (Timeline) */}
      <section className="bg-[#f8f9fa] py-24 reveal">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[#0F265C] text-3xl md:text-4xl font-black mb-4">A Local Legacy</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Founded in the heart of Richland Hills, Dry State LLC grew from a family-owned single-truck operation into North Texas's most trusted restoration specialist.
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gray-200 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-0">
              {/* Timeline Item 1: 2009 (Right) */}
              <div className="relative md:flex md:justify-end md:mb-12 group">
                {/* Icon Box on the line */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 w-12 h-12 bg-[#00123d] rounded-[4px] items-center justify-center z-10 shadow-lg">
                  <span className="material-symbols-outlined text-white text-2xl">home</span>
                </div>
                
                {/* Content Card */}
                <div className="md:w-[45%] bg-white p-8 rounded-[4px] border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="text-[#D32F2F] font-black text-xl mb-2">2009</div>
                  <h4 className="text-[#0F265C] text-xl font-bold mb-4">The Foundation</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Dry State LLC begins operations in Arlington with a focus on localized water damage restoration and residential mold mitigation.
                  </p>
                </div>
              </div>

              {/* Timeline Item 2: 2016 (Left) */}
              <div className="relative md:flex md:justify-start group">
                {/* Icon Box on the line */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 w-12 h-12 bg-[#00123d] rounded-[4px] items-center justify-center z-10 shadow-lg">
                  <span className="material-symbols-outlined text-white text-2xl">trending_up</span>
                </div>
                
                {/* Content Card */}
                <div className="md:w-[45%] bg-white p-8 rounded-[4px] border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="text-[#D32F2F] font-black text-xl mb-2">2016</div>
                  <h4 className="text-[#0F265C] text-xl font-bold mb-4">Expansion & Certification</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Acquired high-capacity LGR dehumidifiers and became a full IICRC Certified Firm, expanding services to fire and storm damage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="bg-[#00123d] py-16 md:py-24 text-white reveal">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-['Work_Sans'] font-bold mb-4">The Pillars of Dry State</h2>
            <p className="text-white/70 max-w-xl mx-auto text-sm md:text-base">Our culture is built on four non-negotiable principles that guide every technician on every job site.</p>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap gap-8">
            <div className="flex-1 min-w-[250px] bg-[#0f265c] p-8 md:p-10 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300">
              <span className="material-symbols-outlined text-[#b6171e] text-[40px] md:text-[48px] mb-6 block">verified_user</span>
              <h4 className="text-[20px] md:text-[22px] font-['Work_Sans'] font-bold mb-4">Integrity</h4>
              <p className="text-[14px] md:text-[15px] text-white/60 leading-relaxed">Transparent pricing and honest assessments. We never recommend unnecessary services.</p>
            </div>
            <div className="flex-1 min-w-[250px] bg-[#0f265c] p-8 md:p-10 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300">
              <span className="material-symbols-outlined text-[#b6171e] text-[40px] md:text-[48px] mb-6 block">bolt</span>
              <h4 className="text-[20px] md:text-[22px] font-['Work_Sans'] font-bold mb-4">Rapid Response</h4>
              <p className="text-[14px] md:text-[15px] text-white/60 leading-relaxed">Disaster doesn't wait, and neither do we. On-site within 60 minutes for emergencies.</p>
            </div>
            <div className="flex-1 min-w-[250px] bg-[#0f265c] p-8 md:p-10 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300">
              <span className="material-symbols-outlined text-[#b6171e] text-[40px] md:text-[48px] mb-6 block">precision_manufacturing</span>
              <h4 className="text-[20px] md:text-[22px] font-['Work_Sans'] font-bold mb-4">Technical Precision</h4>
              <p className="text-[14px] md:text-[15px] text-white/60 leading-relaxed">Using science-based drying protocols and state-of-the-art LGR dehumidification.</p>
            </div>
            <div className="flex-1 min-w-[250px] bg-[#0f265c] p-8 md:p-10 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300">
              <span className="material-symbols-outlined text-[#b6171e] text-[40px] md:text-[48px] mb-6 block">volunteer_activism</span>
              <h4 className="text-[20px] md:text-[22px] font-['Work_Sans'] font-bold mb-4">Compassion</h4>
              <p className="text-[14px] md:text-[15px] text-white/60 leading-relaxed">Treating your home like our own. We understand the stress of property loss.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Professional Credentials */}
      <section className="py-16 md:py-24 px-6 max-w-[1280px] mx-auto text-center reveal">
        <h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-['Work_Sans'] font-bold text-[#00123d] mb-4">Certified Authority</h2>
        <p className="text-[16px] md:text-[18px] text-[#44464f] mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed">We maintain the highest industry standards through rigorous certification and recurring education.</p>
        <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap gap-6 md:gap-8">
          {[
            { icon: "badge", title: "IICRC Certified Firm", subtitle: "Global Standard" },
            { icon: "award_star", title: "BBB A+ Accredited", subtitle: "Trust Rating" },
            { icon: "policy", title: "EPA Lead-Safe", subtitle: "Environmental Safety" },
            { icon: "shield", title: "Fully Insured", subtitle: "General Liability" }
          ].map((cred, idx) => (
            <div key={idx} className="flex-1 min-w-[200px] p-8 md:p-10 border border-slate-100 rounded-2xl bg-white shadow-sm flex flex-col items-center gap-5 hover:border-[#00123d] transition-all duration-300 hover:shadow-xl">
              <span className="material-symbols-outlined text-[48px] md:text-[56px] text-[#00123d]">{cred.icon}</span>
              <div>
                <p className="font-bold text-[#00123d] text-[16px] md:text-[18px]">{cred.title}</p>
                <p className="text-[10px] md:text-[11px] text-slate-400 uppercase tracking-widest mt-1">{cred.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. The Dry State Difference */}
      <section className="bg-[#f8f9fa] py-24 reveal">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-[#0F265C] mb-16 text-center">The Dry State Difference</h2>
          
          <div className="space-y-8">
            {/* Row 1: 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-10 rounded-[4px] border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <span className="material-symbols-outlined text-[#D32F2F] text-4xl mb-6 block">timer</span>
                <h4 className="text-xl font-bold text-[#0F265C] mb-3">60-Minute Arrival</h4>
                <p className="text-gray-600 text-[15px] leading-relaxed">Strategically located in Richland Hills to ensure we reach any point in the DFW Metroplex in under an hour during emergencies.</p>
              </div>
              <div className="bg-white p-10 rounded-[4px] border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <span className="material-symbols-outlined text-[#D32F2F] text-4xl mb-6 block">payments</span>
                <h4 className="text-xl font-bold text-[#0F265C] mb-3">Direct Insurance Billing</h4>
                <p className="text-gray-600 text-[15px] leading-relaxed">We work directly with your adjuster to streamline the claims process, often resulting in $0 out-of-pocket costs for covered losses.</p>
              </div>
            </div>

            {/* Row 2: 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#00123d] text-white p-10 rounded-[4px] shadow-xl">
                <span className="material-symbols-outlined text-white text-4xl mb-6 block">air_purifier</span>
                <h4 className="text-xl font-bold mb-3">Advanced LGR</h4>
                <p className="text-white/70 text-[15px] leading-relaxed">Low Grain Refrigerant dehumidifiers pull more moisture than standard units, speeding up drying by 30%.</p>
              </div>
              <div className="bg-white p-10 rounded-[4px] border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <span className="material-symbols-outlined text-[#D32F2F] text-4xl mb-6 block">camera</span>
                <h4 className="text-xl font-bold text-[#0F265C] mb-3">Thermal Mapping</h4>
                <p className="text-gray-600 text-[15px] leading-relaxed">Infrared technology identifies hidden moisture pockets behind walls and under floors before they become mold issues.</p>
              </div>
              <div className="bg-white p-10 rounded-[4px] border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <span className="material-symbols-outlined text-[#D32F2F] text-4xl mb-6 block">support_agent</span>
                <h4 className="text-xl font-bold text-[#0F265C] mb-3">24/7 Dispatch</h4>
                <p className="text-gray-600 text-[15px] leading-relaxed">Real humans, not robots, answer our phones every hour of every day to initiate your recovery instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Community Commitment */}
      <section className="py-16 md:py-24 px-6 max-w-[1280px] mx-auto reveal">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative order-2 md:order-1">
            <img 
              alt="DryState team at local community event" 
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover" 
              src="/assets/community-commitment-feature.png" 
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00123d]/20 to-transparent rounded-2xl pointer-events-none"></div>
          </div>
          <div className="order-1 md:order-2 text-center md:text-left">
            <h2 className="text-[28px] md:text-[36px] font-['Work_Sans'] font-bold text-[#00123d] mb-8 leading-[1.2]">Our Community Commitment</h2>
            <p className="text-[16px] md:text-[18px] text-[#44464f] mb-10 leading-relaxed">As a family-owned business rooted in Richland Hills and Arlington, we believe our responsibility extends beyond the job site. We are proud supporters of DFW first responders and local neighborhood initiatives.</p>
            <ul className="space-y-4 md:space-y-6 text-left">
              <li className="flex items-start gap-4 md:gap-5 p-4 md:p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                <span className="material-symbols-outlined text-[#b6171e] text-[24px] md:text-[28px] mt-1">check_circle</span>
                <div>
                  <p className="font-bold text-[#00123d] text-[16px] md:text-[18px]">Local Employment</p>
                  <p className="text-[14px] md:text-[15px] text-[#44464f] leading-relaxed">90% of our staff resides within 15 miles of our main warehouse.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 md:gap-5 p-4 md:p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                <span className="material-symbols-outlined text-[#b6171e] text-[24px] md:text-[28px] mt-1">check_circle</span>
                <div>
                  <p className="font-bold text-[#00123d] text-[16px] md:text-[18px]">First Responder Support</p>
                  <p className="text-[14px] md:text-[15px] text-[#44464f] leading-relaxed">Annual donors to Arlington and Richland Hills Fire & Police foundations.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#b6171e] text-white py-16 md:py-20 text-center reveal overflow-hidden relative">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-[32px] md:text-[42px] font-['Work_Sans'] font-bold mb-6 leading-[1.1]">Facing an Emergency?</h2>
          <p className="text-[18px] md:text-[20px] mb-10 md:mb-12 opacity-90 leading-relaxed">Expert help is just 60 minutes away. Call our dispatch center now for immediate assistance.</p>
          <div className="flex flex-row flex-wrap justify-center gap-4 md:gap-6">
            <a className="bg-white text-[#b6171e] px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-[16px] md:text-[18px] flex items-center justify-center gap-3 hover:bg-slate-50 transition-all shadow-xl no-underline" href="tel:2147851130">
              <span className="material-symbols-outlined">call</span>
              214-785-1130
            </a>
            <Link className="bg-[#00123d] text-white border border-[#0f265c] px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-[16px] md:text-[18px] flex items-center justify-center transition-all shadow-xl" to="/contact">
              Schedule Online
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default About;
