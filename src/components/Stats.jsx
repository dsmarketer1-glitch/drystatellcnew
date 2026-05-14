import React from 'react';

const Stats = () => {
  const stats = [
    { label: 'Disaster Response Services', value: '365', suffix: 'Days' },
    { label: 'Licensed & Certified', value: '100', suffix: '%' },
    { label: 'Happy customers', value: '100', suffix: '+' },
    { label: '5-star reviews', value: '50', suffix: '+' }
  ];

  return (
    <section className="stats-section py-20 bg-[#00123d] text-white">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item text-center reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="text-4xl sm:text-5xl font-black mb-2 text-[#b6171e]">
                {stat.value}{stat.suffix}
              </div>
              <p className="text-sm uppercase font-bold tracking-widest opacity-70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
