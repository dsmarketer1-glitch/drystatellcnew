import React from 'react';

function RestorationTech() {
  const tech = [
    {
      title: "Industrial Air Movers",
      desc: "High-velocity fans designed to create massive airflow across wet surfaces, accelerating evaporation from floors, walls, and carpets.",
      icon: "air"
    },
    {
      title: "LGR Dehumidifiers",
      desc: "Low Grain Refrigerant units that pull deep moisture from structural materials and the air, reaching humidity levels standard units can't touch.",
      icon: "humidity_mid"
    },
    {
      title: "Thermal Imaging Cameras",
      desc: "Non-invasive infrared sensors that detect temperature differences, revealing hidden pockets of moisture behind walls and under floors.",
      icon: "thermostat"
    }
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">Advanced Restoration Technology</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">We invest in high-tech equipment to ensure the most efficient and thorough drying process possible.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {tech.map((item, index) => (
            <div key={index} className="bg-primary-container p-8 rounded-xl border border-white/10 hover:border-white/30 transition-colors">
              <div className="bg-secondary w-12 h-12 flex items-center justify-center rounded-lg mb-6">
                <span className="material-symbols-outlined text-white">{item.icon}</span>
              </div>
              <h3 className="text-2xl font-black mb-3">{item.title}</h3>
              <p className="text-white/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RestorationTech;
