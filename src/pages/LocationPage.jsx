import React, { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import PinsSection from '../components/PinsSection';
import { getCity, getCommunity, PHONE, PHONE_HREF } from '../data/locations';

const SERVICES = [
  { title: 'Water Damage', desc: 'Extraction, drying, and full water restoration.', icon: 'water_drop', path: '/services/water-damage' },
  { title: 'Fire & Smoke Damage', desc: 'Soot removal, deodorization, and rebuild.', icon: 'local_fire_department', path: '/services/fire-damage' },
  { title: 'Flood Damage', desc: 'High-volume extraction and structural drying.', icon: 'flood', path: '/services/flood-damage' },
  { title: 'Storm Damage', desc: 'Emergency board-up and full storm recovery.', icon: 'thunderstorm', path: '/services/storm-damage' },
  { title: 'Mold Remediation', desc: 'Safe removal and moisture control.', icon: 'coronavirus', path: '/services/water-damage' },
  { title: 'Sewage Cleanup', desc: 'Category 3 cleanup and disinfection.', icon: 'plumbing', path: '/services/sewage-cleanup' },
];

const PROCESS = [
  { id: 1, title: 'Emergency Call', desc: 'Immediate triage and dispatch, 24/7/365.' },
  { id: 2, title: 'On-Site Assessment', desc: 'Arrival within 60 minutes with thermal moisture mapping.' },
  { id: 3, title: 'Mitigation & Drying', desc: 'Extraction and industrial drying to stop further damage.' },
  { id: 4, title: 'Restoration', desc: 'Repairs and finishing to pre-loss condition.' },
];

const LocationPage = () => {
  const params = useParams();
  const citySlug = params.city;
  const communitySlug = params.community;

  const city = getCity(citySlug);
  const community = communitySlug ? getCommunity(citySlug, communitySlug) : null;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1 }
    );
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // Re-run when the location changes so new sections animate in
  }, [citySlug, communitySlug]);

  // Unknown slug -> send back home
  if (!city) return <Navigate to="/" replace />;
  if (communitySlug && !community) return <Navigate to={`/${city.slug}`} replace />;

  const isCommunity = Boolean(community);
  const name = isCommunity ? community.name : city.name;
  const fullName = isCommunity ? `${community.name}, ${city.name}` : city.name;
  const blurb = isCommunity ? community.blurb : city.blurb;

  const faqs = [
    {
      q: `How fast can you respond to an emergency in ${name}?`,
      a: `Our crews are staged across the DFW Metroplex and typically arrive on-site in ${fullName} within 45–60 minutes of your call, 24 hours a day, 365 days a year.`,
    },
    {
      q: `Do you handle insurance claims for ${name} properties?`,
      a: `Yes. We document all damage with detailed moisture readings and photos, bill your carrier directly, and work with local DFW adjusters to streamline your claim.`,
    },
    {
      q: `What types of damage do you restore in ${name}?`,
      a: `We provide complete water, fire, smoke, flood, storm, sewage, and mold restoration for both residential and commercial properties throughout ${fullName}.`,
    },
  ];

  return (
    <main className="pt-[72px] lg:pt-[80px] font-['Inter'] bg-[#f8f9fa]">
      {/* Hero */}
      <section className="relative min-h-[380px] md:min-h-[460px] flex items-center overflow-hidden bg-[#00123d]">
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
          <img
            className="w-full h-full object-cover"
            alt={`${fullName} restoration services`}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuApdPzuclBgOK2f4nWRX31EnDOnsdI49Cb7D_Mzrk0mSaWGcPAjj6Nx-aYnokiYCkPd5D5KgwQdJY8DLFCT5Hv1_DHVwtCOzeGLr7nRskulkTLLqFkMYY6GQnpdtoBZ-Cq7jsSklbFVUA0qwjbzsSWqMZ8T54UPvOLLPGmL58Epy-u_Y_lyRAu8_u4gWeEZrXA1mJ_V6DBBwo7z9kyh34ECPAbh1Of8I9qoRpvD3xTWGDGbTPrF-s7-cISav5X0U3CuJxs8Vq4nVO2E"
          />
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full py-12 md:py-16 reveal">
          {/* Breadcrumb */}
          <nav className="flex flex-wrap items-center gap-2 text-[12px] md:text-[13px] font-bold text-white/60 mb-5">
            <Link to="/areas-we-serve" className="hover:text-white no-underline">Service Areas</Link>
            <span>/</span>
            {isCommunity ? (
              <>
                <Link to={`/${city.slug}`} className="hover:text-white no-underline">{city.name}</Link>
                <span>/</span>
                <span className="text-white">{community.name}</span>
              </>
            ) : (
              <span className="text-white">{city.name}</span>
            )}
          </nav>

          <span className="inline-block py-1 px-3 bg-[#b6171e] text-white font-bold text-[10px] md:text-[12px] uppercase tracking-[0.1em] mb-6">
            NOW SERVING {fullName.toUpperCase()}
          </span>
          <h1 className="text-[30px] md:text-[52px] font-['Work_Sans'] font-black text-white mb-6 leading-[1.1] tracking-[-0.02em] max-w-3xl">
            Water, Fire & Storm Damage Restoration in {name}
          </h1>
          <p className="text-[16px] md:text-[18px] text-white/85 mb-9 max-w-2xl leading-[1.6]">{blurb}</p>
          <div className="flex flex-row flex-wrap gap-4">
            <a
              href={PHONE_HREF}
              className="bg-[#b6171e] text-white font-['Work_Sans'] font-bold text-[14px] md:text-[16px] px-6 md:px-8 py-4 flex items-center justify-center gap-2 hover:bg-[#9a141a] transition-all no-underline rounded-[4px]"
            >
              <span className="material-symbols-outlined text-white text-[20px]">emergency</span>
              CALL {PHONE}
            </a>
            <Link
              to="/contact"
              className="border-2 border-white text-white font-['Work_Sans'] font-bold text-[14px] md:text-[16px] px-6 md:px-8 py-4 hover:bg-white/10 transition-all rounded-[4px] no-underline flex items-center justify-center"
            >
              GET A FREE ESTIMATE
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-white border-b border-slate-200 py-8 reveal">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8">
          {[
            { icon: 'verified', label: 'IICRC Certified Firm' },
            { icon: 'star', label: '5-Star Average Rating' },
            { icon: 'shield', label: 'Fully Insured & Bonded' },
            { icon: 'timer', label: '60-Minute Arrival' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#b6171e] text-[28px]" style={{ fontVariationSettings: "'FILL' 0" }}>
                {item.icon}
              </span>
              <span className="font-bold text-[#00123d] text-[13px] uppercase tracking-wider">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Local Intro */}
      <section className="py-16 md:py-20 bg-white reveal">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <span className="text-[#b6171e] text-[11px] md:text-[12px] font-bold tracking-[0.2em] uppercase mb-4 block">
              LOCAL RESPONSE • {city.county.toUpperCase()}
            </span>
            <h2 className="text-[28px] md:text-[36px] font-['Work_Sans'] font-bold text-[#00123d] mb-6 leading-[1.2] tracking-[-0.01em]">
              Trusted Restoration for {fullName}
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#44464f] mb-8 leading-[1.7]">
              When disaster strikes in {name}, every minute counts. DryState LLC deploys IICRC-certified crews and
              truck-mounted equipment fast, stopping damage before it spreads and restoring your property to pre-loss
              condition.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 md:p-5 bg-white border border-[#f1f5f9] rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[#b6171e] text-2xl">speed</span>
                </div>
                <div>
                  <h3 className="font-['Work_Sans'] font-bold text-[#00123d] mb-1 text-[17px] md:text-[19px]">60-Minute Rapid Response</h3>
                  <p className="text-[#44464f] text-[14px] md:text-[15px] leading-relaxed">Fully-equipped restoration trucks reach {name} fast, any hour.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 md:p-5 bg-white border border-[#f1f5f9] rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[#b6171e] text-2xl">location_on</span>
                </div>
                <div>
                  <h3 className="font-['Work_Sans'] font-bold text-[#00123d] mb-1 text-[17px] md:text-[19px]">Hyper-Local Knowledge</h3>
                  <p className="text-[#44464f] text-[14px] md:text-[15px] leading-relaxed">We know {name}'s homes, soil, and weather patterns.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#00123d] text-white p-8 md:p-10 rounded-2xl shadow-xl">
            <h3 className="text-[22px] md:text-[26px] font-['Work_Sans'] font-bold mb-6">Emergency in {name}?</h3>
            <p className="text-white/70 mb-8 leading-relaxed text-[15px] md:text-[16px]">
              Our dispatch line is open 24/7. Call now and a certified restoration specialist will be on the way.
            </p>
            <a
              href={PHONE_HREF}
              className="bg-[#b6171e] text-white font-['Work_Sans'] font-bold py-4 w-full hover:bg-[#9a141a] transition-colors rounded-xl shadow-lg text-[18px] md:text-[20px] flex items-center justify-center gap-3 no-underline mb-4"
            >
              <span className="material-symbols-outlined">call</span>
              {PHONE}
            </a>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-[32px] md:text-[40px] font-['Work_Sans'] font-black text-white leading-none mb-1">60</div>
                <div className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Min or Less</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-[32px] md:text-[40px] font-['Work_Sans'] font-black text-white leading-none mb-1">24/7</div>
                <div className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Availability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-[#f8f9fa] reveal">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#b6171e] text-[11px] md:text-[12px] font-bold tracking-[0.2em] uppercase mb-4 block">OUR SERVICES</span>
            <h2 className="text-[28px] md:text-[36px] font-['Work_Sans'] font-bold text-[#00123d] mb-4 leading-[1.2]">
              Restoration Services in {name}
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#44464f] max-w-2xl mx-auto">
              Full-service damage restoration for homes and businesses throughout {fullName}.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <Link
                key={i}
                to={service.path}
                className="group bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all no-underline"
              >
                <div className="w-12 h-12 bg-[#00123d] text-white rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#b6171e] transition-colors">
                  <span className="material-symbols-outlined">{service.icon}</span>
                </div>
                <h3 className="text-[18px] md:text-[20px] font-['Work_Sans'] font-bold text-[#00123d] mb-2">{service.title}</h3>
                <p className="text-[14px] md:text-[15px] text-[#44464f] leading-relaxed">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods (city pages with communities) */}
      {!isCommunity && city.communities && city.communities.length > 0 && (
        <section className="py-16 md:py-24 bg-white reveal">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-12 md:mb-16">
              <span className="text-[#b6171e] text-[11px] md:text-[12px] font-bold tracking-[0.2em] uppercase mb-4 block">NEIGHBORHOODS</span>
              <h2 className="text-[28px] md:text-[36px] font-['Work_Sans'] font-bold text-[#00123d] mb-4 leading-[1.2]">
                Communities We Serve in {city.name}
              </h2>
              <p className="text-[16px] md:text-[18px] text-[#44464f] max-w-2xl mx-auto">
                Dedicated, hyper-local restoration for {city.name}'s established neighborhoods.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {city.communities.map((c) => (
                <Link
                  key={c.slug}
                  to={`/${city.slug}/${c.slug}`}
                  className="group bg-[#f8f9fa] p-6 md:p-7 rounded-2xl border border-slate-200 hover:border-[#00123d] hover:shadow-lg transition-all no-underline flex flex-col"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[18px] md:text-[20px] font-['Work_Sans'] font-bold text-[#00123d]">{c.name}</h3>
                    <span className="material-symbols-outlined text-[#b6171e] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                  <p className="text-[14px] text-[#44464f] leading-relaxed line-clamp-3">{c.blurb}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sibling neighborhoods (community pages) */}
      {isCommunity && city.communities && city.communities.length > 1 && (
        <section className="py-16 md:py-20 bg-white reveal">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-[24px] md:text-[32px] font-['Work_Sans'] font-bold text-[#00123d] mb-3 leading-[1.2]">
                Other {city.name} Neighborhoods We Serve
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {city.communities
                .filter((c) => c.slug !== community.slug)
                .map((c) => (
                  <Link
                    key={c.slug}
                    to={`/${city.slug}/${c.slug}`}
                    className="bg-[#f8f9fa] border border-slate-200 hover:border-[#00123d] hover:bg-white px-5 py-3 rounded-full text-[14px] font-bold text-[#00123d] transition-all no-underline"
                  >
                    {c.name}
                  </Link>
                ))}
              <Link
                to={`/${city.slug}`}
                className="bg-[#00123d] text-white px-5 py-3 rounded-full text-[14px] font-bold hover:bg-[#0f265c] transition-all no-underline"
              >
                All of {city.name} →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      <section className="py-16 md:py-24 bg-[#e1e3e4] reveal">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h2 className="text-[28px] md:text-[36px] font-['Work_Sans'] font-bold text-[#00123d] mb-4">Our {name} Response Process</h2>
          <p className="text-[16px] md:text-[18px] text-[#44464f] mb-12 md:mb-16 max-w-2xl mx-auto">Precision and speed at every step of your restoration.</p>
          <div className="flex flex-col md:flex-row gap-6 relative">
            <div className="hidden md:block absolute top-[44px] left-0 w-full h-[2px] bg-slate-300 z-0"></div>
            {PROCESS.map((step) => (
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

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-[#f8f9fa] reveal">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#b6171e] text-[11px] md:text-[12px] font-bold tracking-[0.2em] uppercase mb-4 block">FAQ</span>
            <h2 className="text-[28px] md:text-[36px] font-['Work_Sans'] font-bold text-[#00123d] mb-4 leading-[1.2]">
              {name} Restoration Questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
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

      {/* Live proof-of-work gallery for this city (hidden until jobs exist) */}
      <PinsSection
        city={city.slug}
        heading={`Recent Jobs in ${city.name}`}
        subheading={`Real restoration and cleaning work completed by our crews in and around ${city.name}.`}
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-white reveal">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="bg-[#00123d] rounded-[1.5rem] md:rounded-[2rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-[30px] md:text-[42px] font-['Work_Sans'] font-bold mb-6 leading-[1.1] tracking-[-0.02em]">
                24/7 Emergency Restoration in {name}
              </h2>
              <p className="text-[17px] md:text-[20px] text-white/70 mb-10 md:mb-12 leading-[1.6]">
                Don't wait for damage to worsen. Call DryState LLC now for immediate response anywhere in {fullName}.
              </p>
              <div className="flex flex-row flex-wrap justify-center gap-4 md:gap-6">
                <a
                  className="bg-[#b6171e] text-white font-['Work_Sans'] font-bold px-8 py-4 md:px-12 md:py-5 flex items-center justify-center gap-3 rounded-xl shadow-lg hover:bg-[#9a141a] hover:scale-105 transition-all text-[16px] md:text-[18px] no-underline"
                  href={PHONE_HREF}
                >
                  <span className="material-symbols-outlined">call</span>
                  CALL {PHONE}
                </a>
                <Link
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-['Work_Sans'] font-bold px-8 py-4 md:px-12 md:py-5 flex items-center justify-center gap-3 rounded-xl hover:bg-white/20 transition-all text-[16px] md:text-[18px] no-underline"
                  to="/contact"
                >
                  <span className="material-symbols-outlined">assignment</span>
                  REQUEST AN ESTIMATE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default LocationPage;
