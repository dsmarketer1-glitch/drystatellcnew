import React, { useEffect } from 'react';
import { Star } from 'lucide-react';

// Featurable Google Reviews widget — pulls live reviews from the GBP profile.
const FEATURABLE_WIDGET_ID = '369be8b0-2386-44d4-abd7-ef5aa5e1bb03';
const FEATURABLE_SRC = 'https://featurable.com/assets/bundle.js';

const Testimonials = () => {
  useEffect(() => {
    // Inject the Featurable script so it scans for the widget div and renders.
    // Re-added on mount so client-side navigation re-initializes the embed.
    const script = document.createElement('script');
    script.src = FEATURABLE_SRC;
    script.async = true;
    script.charset = 'UTF-8';
    document.body.appendChild(script);

    return () => {
      try {
        document.body.removeChild(script);
      } catch (e) {
        /* script already removed */
      }
    };
  }, []);

  return (
    <section className="testimonials section" id="reviews">
      <div className="container">
        <div className="testimonials-layout">
          <div className="testimonials-sidebar reveal">
            <span className="sub-title" style={{ color: '#b6171e', letterSpacing: '2px' }}>CLIENT VOICES</span>
            <h2 className="sidebar-title">Customers Love Us!</h2>

            <div className="sidebar-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>
              <span className="rating-value">Rated by our Google customers</span>
            </div>

            <p className="sidebar-description">
              We take immense pride in our reputation for excellence. Read what our clients across the Dallas–Fort Worth area have to say about our rapid response and quality.
            </p>

            <a
              href="https://maps.app.goo.gl/RjjgLFHP9CA5GMGaA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark-blue"
            >
              Read All Google Reviews
            </a>
          </div>

          <div className="testimonials-list">
            {/* Live Google Business Profile reviews via Featurable */}
            <div id={`featurable-${FEATURABLE_WIDGET_ID}`} data-featurable-async></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
