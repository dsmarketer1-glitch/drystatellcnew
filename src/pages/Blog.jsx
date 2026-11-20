import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Blog = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1 }
    );
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="pt-[72px] lg:pt-[80px] font-['Inter'] bg-[#f8f9fa]">
      {/* Hero */}
      <section className="bg-[#00123d] py-16 md:py-20">
        <div className="max-w-[900px] mx-auto px-6 text-center reveal">
          <span className="inline-block py-1 px-3 bg-[#b6171e] text-white font-bold text-[10px] md:text-[12px] uppercase tracking-[0.1em] mb-6">
            RESTORATION TIPS & NEWS
          </span>
          <h1 className="text-[32px] md:text-[48px] font-['Work_Sans'] font-black text-white mb-4 leading-[1.1]">
            DryState Blog
          </h1>
          <p className="text-[15px] md:text-[17px] text-[#b3c5ff] font-medium max-w-[640px] mx-auto leading-[1.7]">
            Practical guides on water, fire, storm, and mold damage — plus tips to protect your
            home and business across the Dallas–Fort Worth Metroplex.
          </p>
        </div>
      </section>

      {/* Coming soon */}
      <section className="py-16 md:py-24">
        <div className="max-w-[760px] mx-auto px-6">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 md:p-14 text-center reveal">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#dbe1ff] flex items-center justify-center">
              <span className="material-symbols-outlined text-[32px] text-[#00123d]">edit_note</span>
            </div>
            <h2 className="text-[24px] md:text-[32px] font-['Work_Sans'] font-black text-[#00123d] mb-4">
              Articles Coming Soon
            </h2>
            <p className="text-[15px] md:text-[17px] text-[#44464f] leading-[1.8] mb-8 max-w-[560px] mx-auto">
              We're putting together helpful, easy-to-read articles on preventing and handling
              property damage. Check back soon — in the meantime, our team is available 24/7 if
              you need help right now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2147851130"
                className="inline-flex items-center justify-center gap-2 bg-[#b6171e] text-white px-7 py-4 rounded-[4px] font-black text-[14px] uppercase tracking-widest hover:bg-[#930010] transition-all shadow-lg no-underline"
              >
                <span className="material-symbols-outlined text-[20px]">call</span>
                Call 214-785-1130
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#00123d] text-[#00123d] px-7 py-4 rounded-[4px] font-black text-[14px] uppercase tracking-widest hover:bg-[#00123d] hover:text-white transition-all no-underline"
              >
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
