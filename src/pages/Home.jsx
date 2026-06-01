import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import ExpertOverview from '../components/ExpertOverview';
import ServicesGrid from '../components/ServicesGrid';
import RapidResponse from '../components/RapidResponse';
import WhyChooseUs from '../components/WhyChooseUs';
import RestorationProcess from '../components/RestorationProcess';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';
import FAQ from '../components/FAQ';
import ServiceAreas from '../components/ServiceAreas';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Hero />
      <ExpertOverview />
      <ServicesGrid />
      <RapidResponse />
      <WhyChooseUs />
      <RestorationProcess />
      <Testimonials />
      <Stats />
      <FAQ />
      <ServiceAreas />
      <CTASection />
      <Footer />
    </main>
  );
}

export default Home;
