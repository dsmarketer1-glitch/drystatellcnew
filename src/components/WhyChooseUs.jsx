import React from 'react';
import { Phone, BadgeCheck, CircleDollarSign, Home, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      title: '24/7 Emergency Response',
      desc: 'No matter the time or day, our team is ready to respond to your emergency immediately.',
      icon: <Phone size={32} strokeWidth={1.5} />
    },
    {
      title: 'Certified, Licensed, and Insured Experts',
      desc: 'Our technicians are fully trained, certified, and insured to handle all types of restoration challenges.',
      icon: <BadgeCheck size={32} strokeWidth={1.5} />
    },
    {
      title: 'Transparent Pricing, No Surprises',
      desc: 'We provide clear, upfront estimates with no hidden fees, so you always know what to expect.',
      icon: <CircleDollarSign size={32} strokeWidth={1.5} />
    },
    {
      title: 'Complete Restoration Services',
      desc: 'From damage assessment to final repairs, we manage every stage of your property\'s full recovery.',
      icon: <Home size={32} strokeWidth={1.5} />
    },
    {
      title: 'State-of-the-Art Equipment',
      desc: 'We use advanced drying, cleaning, and restoration technology to ensure thorough and efficient property recovery.',
      icon: <Zap size={32} strokeWidth={1.5} />
    }
  ];

  return (
    <section className="why-choose-us section">
      <div className="container">
        <div className="why-choose-content">
          <div className="why-choose-left reveal">
            <h2>WHAT MAKES US DIFFERENT?</h2>
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
