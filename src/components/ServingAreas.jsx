import React from 'react';

function ServingAreas() {
  const areas = [
    "Richland Hills",
    "Fort Worth",
    "Arlington",
    "Dallas",
    "North Richland Hills",
    "Haltom City",
    "Hurst",
    "Euless"
  ];

  return (
    <section className="py-section-gap">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-surface-container rounded-xl p-8 h-[400px] flex items-center justify-center border border-outline-variant">
            <div className="text-center">
              <span className="material-symbols-outlined text-secondary text-6xl mb-4" data-icon="location_on">location_on</span>
              <h3 className="font-h3 text-h3 text-primary">North Texas Coverage</h3>
              <p className="text-on-surface-variant">Rapid response teams stationed throughout the metroplex.</p>
            </div>
          </div>
          <div>
            <h2 className="font-h2 text-h2 text-primary mb-6">Serving Richland Hills & Surrounding Areas</h2>
            <p className="text-body-lg mb-8">We are a local family-owned business. Our strategic placement allows us to reach any North Texas emergency in under 60 minutes.</p>
            <div className="grid grid-cols-2 gap-4">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="font-bold">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServingAreas;

