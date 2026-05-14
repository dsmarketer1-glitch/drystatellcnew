import React from 'react';
import { MapPin, Building2, CheckCircle } from 'lucide-react';

const ServiceAreas = () => {
  const cities = [
    'Richland Hills', 'Fort Worth', 'Arlington', 'Dallas'
  ];

  return (
    <section className="service-areas section" id="areas">
      <div className="container">
        <div className="areas-content-center reveal">
          <div className="text-center mb-12">
            <span className="sub-title" style={{ color: '#b6171e', letterSpacing: '2px' }}>LOCALIZED CARE</span>
            <h2 className="areas-title mb-6">Serving Richland Hills & Surrounding Areas</h2>
            <p className="areas-description max-w-3xl mx-auto">
              Based in the heart of North Texas, our strategic location allows us to reach any disaster in the metroplex within an hour.
            </p>
          </div>

          <div className="areas-categories-grid">
            <div className="area-category">
              <h3 className="category-title">Primary Service Areas – Older Homes & Established Communities</h3>
              <p className="category-desc">We frequently service older neighborhoods and established communities where aging properties are more susceptible to water damage, drainage issues, and hidden moisture problems, including:</p>
              <div className="cities-list-columns">
                <ul>
                  <li>Irving</li>
                  <li>Grand Prairie</li>
                  <li>Carrollton</li>
                  <li>Duncanville</li>
                  <li>Richland Hills</li>
                  <li>North Richland Hills</li>
                  <li>Bedford</li>
                </ul>
                <ul>
                  <li>Euless</li>
                  <li>Hurst</li>
                  <li>Haltom City</li>
                  <li>Arlington</li>
                  <li>Fort Worth</li>
                  <li>Farmers Branch</li>
                </ul>
              </div>
            </div>

            <div className="area-category">
              <h3 className="category-title">Additional DFW Metroplex Areas We Serve</h3>
              <div className="cities-list-columns single-col">
                <ul>
                  <li>Coppell</li>
                  <li>Grapevine</li>
                  <li>Keller</li>
                  <li>Southlake</li>
                  <li>Colleyville</li>
                  <li>Lewisville</li>
                  <li>Dallas</li>
                  <li>Surrounding DFW communities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
