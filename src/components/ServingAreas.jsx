import React from 'react';

function ServingAreas() {
  const primaryAreas1 = ["Irving", "Grand Prairie", "Carrollton", "Duncanville", "Richland Hills", "North Richland Hills", "Bedford"];
  const primaryAreas2 = ["Euless", "Hurst", "Haltom City", "Arlington", "Fort Worth", "Farmers Branch"];
  const additionalAreas = ["Coppell", "Grapevine", "Keller", "Southlake", "Colleyville", "Lewisville", "Dallas", "Surrounding DFW communities"];

  return (
    <section className="py-section-gap bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-black text-secondary">Proudly Serving the DFW Metroplex</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div className="area-category">
            <h3 className="category-title">Primary DFW Service Areas</h3>
            <p className="text-body-lg mb-8 text-on-surface-variant">
              We frequently service older neighborhoods and established communities where aging properties are more susceptible to water damage, drainage issues, and hidden moisture problems, including:
            </p>
            
            <div className="cities-list-columns">
              <ul>
                {primaryAreas1.map((area, index) => (
                  <li key={index}>{area}</li>
                ))}
              </ul>
              <ul>
                {primaryAreas2.map((area, index) => (
                  <li key={index}>{area}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="area-category">
            <h3 className="category-title mt-2">Additional Areas We Serve</h3>
            <p className="text-body-lg mb-8 text-on-surface-variant">
              We also provide high-precision restoration and cleanup services to these growing communities across North Texas:
            </p>
            <div className="cities-list-columns single-col">
              <ul>
                {additionalAreas.map((area, index) => (
                  <li key={index}>{area}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServingAreas;

