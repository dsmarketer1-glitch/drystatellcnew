import React from 'react';
import { Link } from 'react-router-dom';

function FreeInspection() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 py-12">
      <div className="bg-primary border-l-8 border-secondary p-8 md:p-12 text-white flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <span className="text-secondary font-bold tracking-widest text-sm uppercase block mb-2">Limited Time Offer</span>
          <h2 className="text-2xl sm:text-4xl font-black mb-2">Free Professional Inspection</h2>
          <p className="text-white/70 text-lg">Don't guess about water damage. Get a professional assessment at no cost.</p>
        </div>
        <Link to="/contact" className="w-full md:w-auto bg-secondary hover:bg-secondary/90 text-white font-bold px-10 py-5 whitespace-nowrap border-none transition-transform active:scale-95 flex items-center justify-center gap-2 no-underline">
          <span className="material-symbols-outlined">event_available</span>
          Book Your Free Inspection
        </Link>
      </div>
    </div>
  );
}

export default FreeInspection;
