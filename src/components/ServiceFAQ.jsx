import React from 'react';

function ServiceFAQ() {
  const faqs = [
    {
      q: "How long does the drying process take?",
      a: "On average, the structural drying process takes between 3 to 5 days, depending on the extent of the water intrusion and the materials affected."
    },
    {
      q: "Is water damage covered by my insurance?",
      a: "Most sudden and accidental water damage is covered. We help you document the loss and speak with your adjuster to maximize your coverage."
    },
    {
      q: "Can I stay in my home during restoration?",
      a: "In many cases, yes. However, if the damage is extensive or affects the kitchen/bathrooms, it may be more comfortable to relocate temporarily."
    }
  ];

  return (
    <section className="py-20 bg-surface-container-low">
      <div className="max-w-[800px] mx-auto px-6">
        <h2 className="text-4xl font-black text-primary mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-white rounded-xl border border-outline-variant overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-surface transition-colors list-none">
                <span className="font-bold text-primary">{faq.q}</span>
                <span className="material-symbols-outlined text-secondary group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="p-6 pt-0 text-on-surface-variant border-t border-outline-variant leading-relaxed">
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceFAQ;
