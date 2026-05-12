import React from 'react';
import { MapPin, Building2, CheckCircle } from 'lucide-react';

const ServiceAreas = () => {
  const cities = [
    'Richland Hills', 'Fort Worth', 'Arlington', 'Dallas'
  ];

  return (
    <section className="service-areas section" id="areas">
      <div className="container">
        <div className="areas-layout">
          <div className="areas-visual-card reveal">
            <div className="map-card">
              <div className="grid-overlay"></div>
              <div className="map-content">
                <div className="pin-circle">
                  <MapPin size={32} fill="#fff" color="#00123d" />
                </div>
                <h3>Proudly Serving North Texas</h3>
              </div>
            </div>
          </div>

          <div className="areas-content-side reveal">
            <span className="sub-title" style={{ color: '#b6171e', letterSpacing: '2px' }}>LOCALIZED CARE</span>
            <h2 className="areas-title">Serving Richland Hills & Surrounding Areas</h2>
            <p className="areas-description">
              Based in the heart of North Texas, our strategic location allows us 
              to reach any disaster in the metroplex within an hour.
            </p>

            <div className="city-pills-grid">
              {cities.map((city, index) => (
                <div key={index} className="city-pill">
                  <Building2 size={18} className="city-pill-icon" />
                  <span>{city}</span>
                </div>
              ))}
            </div>

            <div className="area-footer-icons">
              <div className="area-footer-icon-box">
                <img src="https://api.iconify.design/material-symbols:clock-loader-60.svg?color=%2364748b" alt="24/7" width="24" />
              </div>
              <div className="area-footer-icon-box">
                <img src="https://api.iconify.design/material-symbols:shield-check-outline.svg?color=%2364748b" alt="Certified" width="24" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
