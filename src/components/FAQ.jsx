import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      q: 'How quickly can you arrive at my property?',
      a: 'We offer a 60-minute arrival guarantee for emergency calls within the Dallas-Fort Worth metroplex. Our dispatch center is staffed 24/7/365.'
    },
    {
      q: 'Do you work with my specific insurance company?',
      a: 'Yes, we work with all major insurance carriers including State Farm, Allstate, Liberty Mutual, and many others. We handle direct billing and documentation.'
    },
    {
      q: 'Are your technicians certified?',
      a: 'All our lead technicians are IICRC certified in Water Damage Restoration (WRT), Fire & Smoke Restoration (FSRT), and Applied Microbial Remediation (AMRT).'
    },
    {
      q: 'What is the first thing I should do after water damage?',
      a: 'Safety first. If it is safe, turn off the water source and electricity to the affected area. Then call a professional restoration company immediately to prevent further structural damage.'
    }
  ];

  return (
    <section className="faq-section section">
      <div className="container">
        <div className="section-header reveal">
          <span className="sub-title">COMMON QUESTIONS</span>
          <h2>Frequently Asked Questions</h2>
        </div>
        
        <div className="faq-container reveal">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
            >
              <div className="faq-question">
                <h3>{faq.q}</h3>
                {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </div>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
