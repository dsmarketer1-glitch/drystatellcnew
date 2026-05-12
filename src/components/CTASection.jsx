import React from 'react';
import { Smartphone } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="final-cta section">
      <div className="container">
        <div className="cta-box reveal">
          <div className="cta-content">
            <div className="cta-badge">24/7 PRIORITY HOTLINE</div>
            <h2>Your Recovery Starts Now.</h2>
            <p>
              Every minute counts when water or fire damage occurs. Don't wait for 
              the damage to become permanent. Call our elite response team today.
            </p>
            <div className="cta-btns">
              <a href="tel:2147851130" className="btn btn-red-cta no-underline">
                <Smartphone size={20} />
                214-785-1130
              </a>
              <button className="btn btn-white-cta">Get Free Estimate</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
