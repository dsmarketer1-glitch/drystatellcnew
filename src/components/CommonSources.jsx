import React from 'react';

function CommonSources() {
  const sources = [
    { name: "Pipe Bursts", icon: "plumbing" },
    { name: "Roof Leaks", icon: "roofing" },
    { name: "Appliance Failure", icon: "faucet" },
    { name: "Flood Events", icon: "tsunami" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative flex min-h-[400px]">
          <img 
            alt="Damaged Ceiling" 
            className="w-2/3 rounded-lg shadow-lg relative z-10" 
            src="https://images.unsplash.com/photo-1595856405814-1e6a111b70c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          />
          <img 
            alt="Broken Pipe" 
            className="w-2/3 rounded-lg shadow-lg absolute right-0 top-12 z-0" 
            src="https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          />
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-black text-primary mb-6">Common Sources of Damage</h2>
          <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">Water damage can stem from multiple sources, each requiring a specific restoration approach. We specialize in identifying and resolving them all.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {sources.map((source, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="bg-surface-container p-3 rounded-lg">
                  <span className="material-symbols-outlined text-secondary">{source.icon}</span>
                </div>
                <span className="font-bold text-primary">{source.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommonSources;
