import React from 'react';
import { Link } from 'react-router-dom';

function SecondaryCTA({ content = {} }) {
  const title = content.title || 'our services';
  const heading = content.secondaryCtaTitle || `Need ${title}?`;
  const desc =
    content.secondaryCtaDesc || 'Request a fast, no-obligation quote for your property today.';

  return (
    <section className="py-12 bg-secondary text-white">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-4xl" data-icon="request_quote">request_quote</span>
          <div>
            <h3 className="text-xl font-bold">{heading}</h3>
            <p className="opacity-90">{desc}</p>
          </div>
        </div>
        <Link to="/contact" className="bg-white text-secondary font-cta text-cta px-8 py-3 rounded hover:bg-surface transition-colors shadow-lg no-underline whitespace-nowrap">
          Get Fast Quote
        </Link>
      </div>
    </section>
  );
}

export default SecondaryCTA;
