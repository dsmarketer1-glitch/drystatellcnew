import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Flame, Wind, CheckCircle2, ArrowRight, Home, Trash2, Wind as Air, ShowerHead, Layers, Package, Construction } from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      title: 'Water Damage Restoration',
      link: '/services/water-damage',
      badge: 'IMMEDIATE STABILIZATION',
      desc: 'Our team responds quickly to remove water, dry affected areas, and stabilize your property to help prevent mold, structural damage, and costly repairs.',
      points: ['Structural Drying', 'Moisture Detection', 'Sanitization'],
      icon: <Droplets />,
      color: 'rgba(0, 18, 61, 0.05)',
      iconColor: '#00123d'
    },
    {
      title: 'Fire & Smoke Damage Restoration',
      link: '/services/fire-damage',
      badge: 'ODOR & SOOT REMOVAL',
      desc: 'Smoke and soot can spread far beyond the fire itself, affecting walls, furniture, HVAC systems, and air quality. Our team provides professional cleanup, deodorization, and restoration services to help return your property to pre-loss condition.',
      points: ['Smoke & Soot Cleanup', 'Odor Removal', 'Content Cleaning'],
      icon: <Flame />,
      color: 'rgba(182, 23, 30, 0.05)',
      iconColor: '#b6171e'
    },
    {
      title: 'Storm & Catastrophe Recovery',
      link: '/services/storm-damage',
      badge: 'EMERGENCY RESPONSE',
      desc: 'When severe storms impact your property, our team provides emergency board-up services, roof tarping, debris removal, and rapid stabilization to help prevent further damage.',
      points: ['Emergency Board-Up', 'Roof Tarping', 'Debris Removal'],
      icon: <Wind />,
      color: '#eff6ff',
      iconColor: '#2563eb'
    },
    {
      title: 'Sewage Cleanup',
      link: '/services/sewage-cleanup',
      badge: 'BIOHAZARD SANITIZATION',
      desc: 'Sewage backups can expose your property to harmful contaminants and odors. Our team provides safe cleanup, sanitation, and odor removal to restore a clean and healthy environment.',
      points: ['Sewage Extraction', 'Deep Sanitization', 'Odor Removal'],
      icon: <Trash2 />,
      color: '#fff7ed',
      iconColor: '#ea580c'
    },
    {
      title: 'Air Duct Cleaning',
      link: '/services/air-duct-cleaning',
      badge: 'INDOOR AIR QUALITY',
      desc: 'Improve your indoor air quality by removing dust, allergens, debris, and odors from your HVAC system. Our professional duct cleaning services help create a cleaner and healthier home environment.',
      points: ['HVAC System Cleaning', 'Dust & Debris Removal', 'HEPA Filtration'],
      icon: <Air />,
      color: '#f0fdf4',
      iconColor: '#16a34a'
    },
    {
      title: 'Reconstruction',
      link: '/services/reconstruction',
      badge: 'COMPLETE REPAIRS',
      desc: 'We provide professional reconstruction services to restore damaged properties with quality craftsmanship, clear communication, and attention to detail.',
      points: ['General Contracting', 'Drywall & Framing', 'Interior Finishes'],
      icon: <Construction />,
      color: '#faf5ff',
      iconColor: '#9333ea'
    }
  ];

  return (
    <section className="services-section section" id="services">
      <div className="container">
        <div className="section-header reveal">
          <span className="sub-title">PROFESSIONAL RESTORATION</span>
          <h2>Our Restoration Services</h2>
          <p className="header-desc">
            Fast response and professional restoration solutions for water, fire, storm, and environmental damage.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card reveal">
              <div className="card-top">
                <div className="service-icon" style={{ backgroundColor: service.color, color: service.iconColor }}>
                  {service.icon}
                </div>
                <div className="service-titles">
                  <h3>{service.title}</h3>
                  <span className="service-badge">{service.badge}</span>
                </div>
              </div>
              
              <div className="card-body">
                <p>{service.desc}</p>
                <ul className="points-list">
                  {service.points.map((point, i) => (
                    <li key={i}>
                      <CheckCircle2 size={16} color="#00123d" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="card-footer">
                <Link to={service.link} className="learn-more">
                  Learn Detailed Process <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
