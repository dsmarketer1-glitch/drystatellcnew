import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import PinCard from '../components/PinCard';
import { fetchPublicPins } from '../lib/pinsApi';

// Master proof-of-work gallery: every published job across all services & cities.
const Projects = () => {
  const [pins, setPins] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetchPublicPins({ max: 60 }).then((result) => {
      setPins(result);
      setLoaded(true);
    });
  }, []);

  return (
    <main className="pt-[72px] lg:pt-[80px] font-['Inter'] bg-[#f8f9fa]">
      {/* Hero */}
      <section className="bg-[#00123d] py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <span className="inline-block py-1 px-3 bg-[#b6171e] text-white font-bold text-[10px] md:text-[12px] uppercase tracking-[0.1em] mb-6">
            PROOF OF WORK
          </span>
          <h1 className="text-[32px] md:text-[48px] font-['Work_Sans'] font-black text-white mb-4 leading-[1.1]">
            Recent Jobs Across DFW
          </h1>
          <p className="text-[16px] md:text-[18px] text-[#b3c5ff] max-w-2xl mx-auto">
            Real water, fire, storm, and cleaning jobs completed by DryState Restoration crews across the
            Dallas–Fort Worth metroplex.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-14 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          {!loaded ? (
            <p className="text-center text-[#757681]">Loading recent jobs…</p>
          ) : pins.length === 0 ? (
            <div className="text-center max-w-xl mx-auto">
              <span className="material-symbols-outlined text-[#b6171e] text-5xl mb-4">photo_camera</span>
              <h2 className="text-[22px] font-['Work_Sans'] font-bold text-[#00123d] mb-2">Jobs coming soon</h2>
              <p className="text-[#44464f]">
                Our crews are documenting completed jobs. Check back shortly to see recent work near you.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pins.map((p) => (
                <PinCard key={p.id} pin={p} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Projects;
