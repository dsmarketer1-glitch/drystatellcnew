import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TrustBar from '../components/TrustBar';
import ServingAreas from '../components/ServingAreas';
import SecondaryCTA from '../components/SecondaryCTA';
import ServicePageCTA from '../components/ServicePageCTA';
import Footer from '../components/Footer';

function BaseServicePage({ content }) {
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
    <div className="bg-background text-on-surface font-body-md">
      <main className="mt-[48px]">
        {/* Hero Section */}
        <section 
          className="hero-gradient min-h-[600px] flex items-center py-stack-lg"
          style={content.heroImage ? { 
            backgroundImage: `linear-gradient(rgba(0, 18, 61, 0.85), rgba(0, 18, 61, 0.7)), url(${content.heroImage})`
          } : {}}
        >
          <div className="max-w-[1280px] mx-auto px-6 w-full text-white">
            <div className="max-w-2xl">
              <span className="bg-secondary text-white px-4 py-1 text-label-caps inline-block mb-4">24/7 EMERGENCY RESPONSE</span>
              <h1 className="font-h1 text-h1 mb-6">Expert {content.title} in Richland Hills</h1>
              <p className="font-body-lg text-body-lg mb-8 opacity-90">{content.heroDesc}</p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:2147851130" className="bg-secondary hover:bg-secondary/90 text-white font-cta text-cta px-8 py-4 flex items-center gap-2 border-none transition-transform active:scale-95 no-underline">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
                  Emergency Help
                </a>
                <Link to="/contact" className="border-2 border-white hover:bg-white hover:text-primary text-white font-cta text-cta px-8 py-4 transition-all bg-transparent no-underline flex items-center justify-center">
                  Get Free Estimate
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <TrustBar />

        {/* Expert Overview (Immediate Response) */}
        <section className="py-section-gap bg-white">
          <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="font-h2 text-h2 text-primary mb-6">{content.featuresTitle || "Immediate Response When Every Minute Counts"}</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                {content.featuresDesc || "When water enters your home, the clock starts ticking. Our expert restoration technicians are strategically stationed across Richland Hills to ensure a rapid arrival."}
              </p>
              <ul className="space-y-4">
                {content.features && content.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary">check_circle</span>
                    <span className="font-bold">{feature}</span>
                  </li>
                ))}
                {!content.features && (
                  <>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary">check_circle</span>
                      <span className="font-bold">IICRC Certified Professionals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary">check_circle</span>
                      <span className="font-bold">60-Minute Arrival Guarantee</span>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div className="relative reveal">
              <img 
                alt="Professional Restoration" 
                className="rounded-lg shadow-xl w-full object-cover aspect-video" 
                src={content.featureImage || "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"}
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded shadow-lg max-w-[240px] hidden sm:block">
                <p className="text-h3 font-h3 leading-tight mb-2">{content.responseTime || "60 MIN"}</p>
                <p className="text-sm opacity-80 uppercase font-bold tracking-widest">Average Response Time</p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Showcase (Restoration Technology) */}
        <section className="py-section-gap bg-primary text-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-h2 text-h2 mb-4">{content.techTitle || "Advanced Restoration Technology"}</h2>
              <p className="text-primary-fixed-dim max-w-2xl mx-auto">{content.techDesc || "We invest in high-tech equipment to ensure the most efficient and thorough drying process possible."}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {content.techItems && content.techItems.map((item, i) => (
                <div key={i} className="bg-primary-container p-8 rounded-xl border border-white/10 hover:border-white/30 transition-colors">
                  <div className="bg-secondary w-12 h-12 flex items-center justify-center rounded-lg mb-6">
                    <span className="material-symbols-outlined text-white">
                      {i === 0 ? 'air' : i === 1 ? 'humidity_mid' : 'thermostat'}
                    </span>
                  </div>
                  <h3 className="font-h3 text-h3 mb-3">{item.title}</h3>
                  <p className="text-primary-fixed-dim">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Signs of Water Damage (Red Flags) */}
        <section className="bg-surface-container py-section-gap">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-h2 text-h2 text-primary mb-4">{content.redFlagsTitle || "Signs of Water Damage"}</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">{content.redFlagsDesc || "Early detection can save thousands in restoration costs. Contact us immediately if you notice any of these red flags."}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {content.signs && content.signs.map((sign, i) => (
                <div key={i} className="bg-white p-8 border border-outline-variant hover:border-primary transition-colors">
                  <span className="material-symbols-outlined text-secondary text-4xl mb-4">
                    {i === 0 ? 'water_drop' : i === 1 ? 'air_freshener' : 'format_paint'}
                  </span>
                  <h3 className="font-h3 text-h3 mb-2">{sign.title}</h3>
                  <p className="text-on-surface-variant">{sign.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Sources of Damage */}
        <section className="py-section-gap bg-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 reveal">
                <div className="grid grid-cols-2 gap-4">
                  <img alt="Burst Pipe" className="w-full rounded aspect-square object-cover" src={content.sourceImage1 || "https://lh3.googleusercontent.com/aida-public/AB6AXuBOuA2x7WOZsxa1di3EAwPLm1kZIJ2YlFUfbgUzswHmj93JXx228X6DrgXZrdWmSEKnoeIqsQjilwWEVmYeq6Kp1Xh8rFxNBaZPOfV2VIYM0CtN91AuLMMu4s2zYt9cAd1X_D8VKDtrYh29ySyzCKs2pqk0Lk5VIiCtDTXBh3lvSMLQ2uSqPv2lFEDGPhyS0llfQEk1EFottmIdNqWLIt-jrjcdFv3NgLxMPIbzwcKCti78MbJgpPG-xUMjJ8f8CbeuZr3kxVypqo5M"}/>
                  <img alt="Roof Leak" className="w-full rounded aspect-square object-cover mt-8" src={content.sourceImage2 || "https://lh3.googleusercontent.com/aida-public/AB6AXuBNOM7gx88VO9_m-XkZtYCzWCPF1czhQheuvjBrRiIBuQCcCX2bzwYwASyQtR7ucoELDg0w-zjz9Yk8YOQ33MMm_ZPohC6MXLSOBEwPEMHW167topd16szhliItRX48zzo4jFjQ15qZZpj_NUsTD2Zbp-iOurTFIqo-l1fmR3Q6Q5NaNZOyKgzSwuHGdCPY5AMxM82WaFkt1g_gCRt_hY8sCcWRnLhc5TtLO47X9wR9VELOB2aoGJeOVI2kRHCLIbdV01vFdECFLfSB"}/>
                </div>
              </div>
              <div className="order-1 md:order-2 reveal">
                <h2 className="font-h2 text-h2 text-primary mb-6">{content.sourcesTitle || "Common Sources of Damage"}</h2>
                <div className="space-y-6">
                  {content.sources && content.sources.map((source, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="bg-primary-container p-3 rounded h-fit">
                        <span className="material-symbols-outlined text-white">
                          {i === 0 ? 'plumbing' : i === 1 ? 'home_repair_service' : 'kitchen'}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-primary">{source.title}</h4>
                        <p className="text-on-surface-variant">{source.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Free Inspection Offer */}
        <section className="max-w-[1280px] mx-auto px-6 my-section-gap">
          <div className="bg-primary text-white p-12 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8 border-l-8 border-secondary">
            <div className="max-w-xl">
              <h2 className="text-h2 font-h2 mb-4">{content.offerTitle || "Limited Time Offer"}</h2>
              <p className="text-lg opacity-90">{content.offerDesc || "Get a Free Professional Moisture Inspection with any water restoration service."}</p>
            </div>
            <Link to="/contact" className="bg-white text-primary font-cta text-cta px-10 py-5 rounded hover:bg-surface-container-highest transition-colors whitespace-nowrap shadow-xl no-underline flex items-center justify-center">
              Claim Offer Now
            </Link>
          </div>
        </section>

        {/* Restoration Process */}
        <section className="py-section-gap bg-surface-container-low">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-h2 text-h2 text-primary mb-4">Our Proven Restoration Process</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">We follow a rigorous IICRC-certified workflow to ensure your property is restored to pre-loss condition.</p>
            </div>
            <div className="grid md:grid-cols-5 gap-4">
              {content.process && content.process.map((step, i) => (
                <div key={i} className="relative group">
                  <div className="bg-white p-6 border-b-4 border-slate-200 group-hover:border-secondary transition-colors h-full">
                    <span className="text-4xl font-black text-slate-100 absolute top-2 right-4">{step.num}</span>
                    <div className="mb-4 bg-surface-container p-2 w-fit rounded">
                      <span className="material-symbols-outlined text-primary">
                        {i === 0 ? 'support_agent' : i === 1 ? 'water_damage' : i === 2 ? 'wind_power' : i === 3 ? 'sanitizer' : 'home_work'}
                      </span>
                    </div>
                    <h4 className="font-bold mb-2">{step.title}</h4>
                    <p className="text-sm text-on-surface-variant">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServingAreas />

        {/* FAQ Section */}
        <section className="py-section-gap bg-surface-container">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-h2 text-h2 text-primary mb-4">Frequently Asked Questions</h2>
              <p className="text-on-surface-variant">Everything you need to know about the restoration process.</p>
            </div>
            <div className="space-y-4">
              {content.faqs && content.faqs.map((faq, i) => (
                <details key={i} className="group bg-white rounded-lg border border-outline-variant overflow-hidden" open={i === 0}>
                  <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-surface-container-low transition-colors">
                    <span className="font-bold text-lg">{faq.q}</span>
                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="p-6 pt-0 text-on-surface-variant border-t border-outline-variant/50">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <SecondaryCTA />
        <ServicePageCTA />
        <Footer />
      </main>
    </div>
  );
}

export default BaseServicePage;

