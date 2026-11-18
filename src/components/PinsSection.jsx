import React, { useEffect, useState } from 'react';
import PinCard from './PinCard';
import { fetchPublicPins } from '../lib/pinsApi';

// Live proof-of-work gallery. Fetches published pins for a service or city
// (or all, for the /projects page). Renders nothing until pins exist, so pages
// never show an empty or broken section before any jobs are captured.
function PinsSection({
  service,
  city,
  heading = 'Recent Jobs Near You',
  subheading = 'Real work from our crews across the Dallas–Fort Worth metroplex.',
  max,
}) {
  const [pins, setPins] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    fetchPublicPins({ service, city, max }).then((result) => {
      if (active) {
        setPins(result);
        setLoaded(true);
      }
    });
    return () => {
      active = false;
    };
  }, [service, city, max]);

  // Don't render anything until we have pins (keeps the page clean pre-launch).
  if (!loaded || pins.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-[#f8f9fa] reveal active">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-10 md:mb-14">
          <span className="text-[#b6171e] text-[11px] md:text-[12px] font-bold tracking-[0.2em] uppercase mb-4 block">
            PROOF OF WORK
          </span>
          <h2 className="text-[28px] md:text-[36px] font-['Work_Sans'] font-bold text-[#00123d] mb-4 leading-[1.2]">
            {heading}
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#44464f] max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pins.map((p) => (
            <PinCard key={p.id} pin={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PinsSection;
