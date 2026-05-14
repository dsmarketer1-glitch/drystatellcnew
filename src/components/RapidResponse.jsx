import React from 'react';
import { Clock, HardHat } from 'lucide-react';

const RapidResponse = () => {
  return (
    <section className="rapid-response section">
      <div className="container response-flex">
        <div className="response-content reveal">
          <span className="sub-title">FAST EMERGENCY RESPONSE</span>
          <h2>FAST EMERGENCY RESTORATION WHEN YOU NEED IT MOST</h2>
          <p className="desc">
            Disasters don’t wait for business hours — neither do we. Whether it’s a flooded basement, fire aftermath, storm wreckage, or hazardous sewage backup, DryState is on-call 24/7 to protect your property and start the recovery process immediately.
          </p>
          
          <div className="readiness-cards">
            <div className="readiness-card">
              <div className="card-icon"><Clock color="#b6171e" /></div>
              <div className="card-text">
                <h4>60-Minute Arrival Guarantee</h4>
                <p>Strategic staging across DFW ensures our technicians arrive on-site within the hour.</p>
              </div>
            </div>
            
            <div className="readiness-card">
              <div className="card-icon"><HardHat color="#b6171e" /></div>
              <div className="card-text">
                <h4>Industrial Equipment Inventory</h4>
                <p>Access to large-loss desiccant dehumidifiers and specialized LGR technology for any scale.</p>
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
          
          <div className="technician-badge">
            <span className="count">100+</span>
            <span className="label">TECHNICIANS READY</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RapidResponse;
