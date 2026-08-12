import React from 'react';
import CityName from './CityName';

const ServiceAreas = () => {
  const primaryAreas1 = ['Irving', 'Grand Prairie', 'Carrollton', 'Duncanville', 'Richland Hills', 'North Richland Hills', 'Bedford'];
  const primaryAreas2 = ['Euless', 'Hurst', 'Haltom City', 'Arlington', 'Fort Worth', 'Farmers Branch'];
  const additionalAreas = ['Coppell', 'Grapevine', 'Keller', 'Southlake', 'Colleyville', 'Lewisville', 'Dallas', 'Surrounding DFW communities'];

  return (
    <section className="service-areas section" id="areas">
      <div className="container">
        <div className="areas-content-center reveal">
          <div className="text-center mb-12">
            <span className="sub-title" style={{ color: '#b6171e', letterSpacing: '2px' }}>LOCALIZED CARE</span>
            <h2 className="areas-title mb-6">Proudly Serving the DFW Metroplex</h2>
            <p className="areas-description max-w-3xl mx-auto">
              Based in the heart of North Texas, our strategic location allows us to reach any disaster in the metroplex within an hour.
            </p>
          </div>

          <div className="areas-categories-grid">
            <div className="area-category">
              <h3 className="category-title">Primary DFW Service Areas</h3>
              <p className="category-desc">We frequently service older neighborhoods and established communities where aging properties are more susceptible to water damage, drainage issues, and hidden moisture problems, including:</p>
              <div className="cities-list-columns">
                <ul>
                  {primaryAreas1.map((area, i) => (
                    <li key={i}><CityName name={area} /></li>
                  ))}
                </ul>
                <ul>
                  {primaryAreas2.map((area, i) => (
                    <li key={i}><CityName name={area} /></li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="area-category">
              <h3 className="category-title">Additional Areas We Serve</h3>
              <div className="cities-list-columns single-col">
                <ul>
                  {additionalAreas.map((area, i) => (
                    <li key={i}><CityName name={area} /></li>
                  ))}
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
