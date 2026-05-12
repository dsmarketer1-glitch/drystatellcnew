import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Flame, Wind, CheckCircle2, ArrowRight, Home, Trash2, Wind as Air, ShowerHead, Layers, Package, Construction } from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      title: 'Water Damage Restoration',
      link: '/services/water-damage',
      badge: 'IMMEDIATE STABILIZATION',
      desc: 'Our technicians utilize industrial-grade submersible pumps and high-volume air movers to remove standing water and moisture. We conduct thorough structural drying.',
      points: ['Structural Drying', 'Thermal Inspection', 'Sanitization'],
      icon: <Droplets />,
      color: 'rgba(0, 18, 61, 0.05)',
      iconColor: '#00123d'
    },
    {
      title: 'Fire & Smoke Remediation',
      link: '/services/fire-damage',
      badge: 'ODOR & SOOT REMOVAL',
      desc: 'Beyond the visible burn, smoke and soot particles infiltrate deep into surfaces. We use specialized cleaning agents and air scrubbers to neutralize air quality.',
      points: ['Odor Neutralization', 'Soot Removal', 'Content Cleaning'],
      icon: <Flame />,
      color: 'rgba(182, 23, 30, 0.05)',
      iconColor: '#b6171e'
    },
    {
      title: 'Storm & Catastrophe Recovery',
      link: '/services/storm-damage',
      badge: 'EMERGENCY DEFENSE',
      desc: 'When severe weather strikes North Texas, we provide immediate structural defense. Our crews are equipped for emergency board-ups and roof tarping.',
      points: ['Board-Up & Tarping', 'Debris Removal', 'Hazard Cleanup'],
      icon: <Wind />,
      color: '#eff6ff',
      iconColor: '#2563eb'
    },
    {
      title: 'Sewage Cleanup',
      link: '/services/sewage-cleanup',
      badge: 'BIOHAZARD SAFETY',
      desc: 'Sewage backups require specialized biohazard protocols. We provide deep sanitization and disinfection to ensure your home is safe and odor-free.',
      points: ['Waste Removal', 'Deep Disinfection', 'Odor Elimination'],
      icon: <Trash2 />,
      color: '#fff7ed',
      iconColor: '#ea580c'
    },
    {
      title: 'Air Duct Cleaning',
      link: '/services/air-duct-cleaning',
      badge: 'AIR QUALITY',
      desc: 'Improve your indoor air quality by removing dust, allergens, and soot from your HVAC system. We use high-powered negative pressure systems.',
      points: ['HVAC Sanitization', 'Dust Removal', 'HEPA Filtration'],
      icon: <Air />,
      color: '#f0fdf4',
      iconColor: '#16a34a'
    },
    {
      title: 'Reconstruction',
      link: '/services/reconstruction',
      badge: 'FULL REBUILD',
      desc: 'From demolition to final finish, we handle the entire rebuilding process. Our licensed contractors restore your home to its pre-loss condition.',
      points: ['General Contracting', 'Framing & Drywall', 'Finishing Work'],
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
          <h2>Comprehensive Damage Solutions</h2>
          <p className="header-desc">
            We employ industry-leading protocols and specialized technology to provide<br />
            full-spectrum property restoration services.
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
