import React from 'react';
import { Clock, HardHat } from 'lucide-react';

const RapidResponse = () => {
  return (
    <section className="rapid-response section">
      <div className="container response-flex">
        <div className="response-content reveal">
          <span className="sub-title">AVAILABLE DAY & NIGHT</span>
          <h2>24/7 Emergency Restoration Services</h2>
          <p className="desc">
            Emergencies do not wait — and neither do we. Our team is available 24/7 to provide rapid response, damage mitigation, and professional restoration services when your property needs immediate attention.
          </p>
          
          <div className="readiness-cards">
            <div className="readiness-card">
              <div className="card-icon"><Clock color="#b6171e" /></div>
              <div className="card-text">
                <h4>Rapid Emergency Dispatch</h4>
                <p>Our strategically positioned teams help us respond quickly throughout the Dallas–Fort Worth area.</p>
              </div>
            </div>
            
            <div className="readiness-card">
              <div className="card-icon"><HardHat color="#b6171e" /></div>
              <div className="card-text">
                <h4>Professional Drying Equipment</h4>
                <p>We use commercial-grade drying and moisture control equipment to handle everything from small residential losses to large-scale property damage.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="response-visual reveal">
          <div className="main-image">
            <img src="/assets/emergency-water-leak.jpg" alt="Emergency Water Leak Restoration" />
            <div className="visual-overlay"></div>
            <div className="centered-badge">
              <span className="big-text">24/7</span>
              <span className="small-text">ALWAYS READY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RapidResponse;
