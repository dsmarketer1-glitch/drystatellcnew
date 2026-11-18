import React from 'react';
import { Link } from 'react-router-dom';

function ServicePageCTA({ content = {} }) {
  const title = content.title || 'Restoration & Cleaning Services';
  const heading = content.ctaTitle || `Ready for ${title}?`;
  const desc =
    content.ctaDesc ||
    `Our certified team serves the entire Dallas–Fort Worth metroplex. Call now for a free estimate or to schedule your ${title.toLowerCase()}.`;

  return (
    <section className="py-section-gap">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <div className="bg-surface-container-high rounded-2xl p-12 max-w-4xl mx-auto shadow-sm">
          <h2 className="font-h2 text-h2 text-primary mb-4">{heading}</h2>
          <p className="text-on-surface-variant text-lg mb-10">{desc}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a className="bg-secondary hover:bg-secondary/90 text-white font-cta text-cta px-10 py-5 rounded flex items-center justify-center gap-3 shadow-lg no-underline" href="tel:2147851130">
              <span className="material-symbols-outlined" data-icon="call">call</span>
              214-785-1130
            </a>
            <Link to="/contact" className="bg-primary hover:bg-primary-container text-white font-cta text-cta px-10 py-5 rounded transition-all no-underline flex items-center justify-center">
              Get Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicePageCTA;
