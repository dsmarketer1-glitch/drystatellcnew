import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Marcus Thornton',
      role: 'HOMEOWNER, RICHLAND HILLS',
      text: 'After a pipe burst on the second floor, Dry State LLC was on-site in 40 minutes. Their equipment is top-notch and their project manager handled our insurance carrier directly. I didn\'t have to lift a finger.',
      service: 'Water Damage Restoration',
      verified: true,
      rating: 5
    },
    {
      name: 'Sarah Jenkins',
      role: 'BUSINESS OWNER, ARLINGTON',
      text: 'A kitchen fire at my restaurant was devastating, but the smoke removal team at Dry State worked through the night to get us back open by the weekend. Truly lifesavers.',
      service: 'Fire & Smoke Damage',
      verified: true,
      rating: 5
    }
  ];

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
              <span className="rating-value">5.0 / 5.0 Rating</span>
            </div>
            
            <p className="sidebar-description">
              We take immense pride in our reputation for excellence. Read what our clients in Richland Hills have to say about our rapid response and quality.
            </p>
            
            <button className="btn btn-dark-blue">Read All Google Reviews</button>
          </div>

          <div className="testimonials-list">
            {reviews.map((review, index) => (
              <div key={index} className="testimonial-card-long reveal">
                <div className="card-top-row">
                  <div className="user-info">
                    <div className="avatar-box"></div>
                    <div className="user-text">
                      <h4>{review.name}</h4>
                      <span>{review.role}</span>
                    </div>
                  </div>
                  {review.verified && (
                    <span className="verified-tag">VERIFIED PROJECT</span>
                  )}
                </div>
                
                <p className="card-review-text">"{review.text}"</p>
                
                <div className="card-bottom-row">
                  <CheckCircle2 size={18} className="service-icon-check" />
                  <span className="service-label">Service: <strong>{review.service}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
