import React from 'react';

function WaterDamageSigns() {
  const signs = [
    {
      title: "Discoloration",
      desc: "Yellow, brown, or gray stains on ceilings or walls are often the first visible signs of a persistent leak."
    },
    {
      title: "Musty Odors",
      desc: "A damp, earthy smell that won't go away often indicates hidden moisture trapped within walls or under carpets."
    },
    {
      title: "Bubbling Walls",
      desc: "When drywall or paint begins to peel, blister, or feel soft to the touch, it's a sign of significant moisture intrusion."
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-primary mb-4">Are You Seeing These Signs?</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">Hidden water damage can cause serious structural issues and health risks if left unaddressed.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {signs.map((sign, index) => (
            <div key={index} className="bg-white p-8 rounded-xl border border-outline-variant shadow-sm">
              <h3 className="text-2xl font-black text-primary mb-4">{sign.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{sign.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WaterDamageSigns;
