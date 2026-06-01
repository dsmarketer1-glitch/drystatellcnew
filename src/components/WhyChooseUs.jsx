import React from 'react';
import { Phone, BadgeCheck, CircleDollarSign, Home, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      title: '24/7 Emergency Response',
      desc: 'Available day and night for rapid emergency response across DFW.',
      icon: <Phone size={32} strokeWidth={1.5} />
    },
    {
      title: 'Trained & Certified Professionals',
      desc: 'Our team is trained and equipped to handle water, fire, storm, and environmental restoration projects with professionalism and care.',
      icon: <BadgeCheck size={32} strokeWidth={1.5} />
    },
    {
      title: 'Transparent Pricing, No Surprises',
      desc: 'We provide clear communication and detailed estimates so you know what to expect throughout the restoration process.',
      icon: <CircleDollarSign size={32} strokeWidth={1.5} />
    },
    {
      title: 'Full-Service Restoration',
      desc: 'From emergency mitigation to reconstruction, we manage every phase of the restoration process.',
      icon: <Home size={32} strokeWidth={1.5} />
    },
    {
      title: 'Advanced Drying Technology',
      desc: 'We use professional drying, cleaning, and moisture detection equipment to help restore properties efficiently and effectively.',
      icon: <Zap size={32} strokeWidth={1.5} />
    }
  ];

  return (
    <section className="why-choose-us section">
      <div className="container">
        <div className="why-choose-content">
          <div className="why-choose-left reveal">
            <h2>The DryState Difference</h2>
          </div>
          
          <div className="why-choose-right">
            <div className="features-list">
              {features.map((feature, index) => (
                <div key={index} className="feature-item reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <div className="feature-text">
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Watermark Logo */}
      <div className="watermark-logo">
        <img src="/assets/logo.png" alt="" />
      </div>
    </section>
  );
};

export default WhyChooseUs;
