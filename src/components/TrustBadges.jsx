import React from 'react';
import { Star, Shield, Award } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    { label1: 'IICRC', label2: 'CERTIFIED FIRM', type: 'text' },
    { label1: 'BBB', label2: 'A+ ACCREDITED', type: 'text' },
    { label1: 'TOP RATED', label2: 'RESTORATION', type: 'icon', icon: <Star fill="#00123d" /> },
    { label1: 'EPA', label2: 'LEAD-SAFE CERTIFIED', type: 'text' },
  ];

  return (
    <section className="trust-badges section">
      <div className="container badge-grid">
        {badges.map((badge, index) => (
          <div key={index} className="badge-item reveal">
            <div className="badge-icon-box">
              {badge.type === 'text' ? (
                <span className="badge-text-logo">{badge.label1}</span>
              ) : (
                <div className="badge-icon">{badge.icon}</div>
              )}
            </div>
            <div className="badge-labels">
              {badge.label2.split(' ').map((word, i) => (
                <span key={i}>{word}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBadges;
