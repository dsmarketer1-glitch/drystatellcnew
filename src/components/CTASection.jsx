import React from 'react';
import { Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="final-cta section">
      <div className="container">
        <div className="cta-box reveal">
          <div className="cta-content">
            <div className="cta-badge">NEED IMMEDIATE HELP? CONTACT DRYSTATE NOW</div>
            <h2>Don’t Let Water Damage Worsen — Act Fast!</h2>
            <p>
              Our Experts Will Dry, Clean, and Restore Your Property Safely and Efficiently. Every minute counts when water or fire damage occurs. Call our elite response team today.
            </p>
            <div className="cta-btns">
              <a href="tel:2147851130" className="btn btn-red-cta no-underline">
                <Smartphone size={20} />
                214-785-1130
              </a>
              <Link to="/contact" className="btn btn-white-cta">Get Free Estimate</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
