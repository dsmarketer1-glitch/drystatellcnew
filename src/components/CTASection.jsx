import React from 'react';
import { Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="final-cta section">
      <div className="container">
        <div className="cta-box reveal">
          <div className="cta-content">
            <div className="cta-badge">24/7 Emergency Restoration Services</div>
            <h2>Rapid Response for Water, Fire & Storm Damage</h2>
            <p>
              From emergency mitigation to full restoration, our team is available 24/7 to help homeowners and businesses recover quickly and confidently.
            </p>
            <div className="cta-btns flex flex-col sm:flex-row items-center sm:items-start justify-center gap-6 sm:gap-6 mt-8">
              <div className="flex flex-col items-center w-full sm:w-auto">
                <a href="tel:2147851130" className="btn btn-red-cta no-underline flex items-center justify-center">
                  <Smartphone size={20} />
                  214-785-1130
                </a>
                <span className="text-sm mt-3 text-white/80 font-medium tracking-wide uppercase text-[12px]">Available 24/7</span>
              </div>
              <div className="flex flex-col items-center w-full sm:w-auto">
                <Link to="/contact" className="btn btn-white-cta flex items-center justify-center h-auto min-h-[68px]">Request Emergency Service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
