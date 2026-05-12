import React from 'react';

function TrustBar() {
  return (
    <div className="bg-surface-container-low py-6 border-b border-outline-variant">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-wrap justify-between items-center gap-8 opacity-70 grayscale">
        <div className="flex items-center gap-2 font-bold text-primary">IICRC CERTIFIED</div>
        <div className="flex items-center gap-2 font-bold text-primary">BBB ACCREDITED A+</div>
        <div className="flex items-center gap-2 font-bold text-primary">FULLY INSURED</div>
        <div className="flex items-center gap-2 font-bold text-primary">5-STAR RATED</div>
      </div>
    </div>
  );
}

export default TrustBar;

