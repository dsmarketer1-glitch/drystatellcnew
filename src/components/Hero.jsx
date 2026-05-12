import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="/assets/hero.png" alt="Restoration Hero" />
        <div className="overlay"></div>
      </div>
      
      <div className="container hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="badge-wrapper"
        >
          <div className="status-badge">
            <span className="dot"></span>
            IMMEDIATE RESPONSE AVAILABLE
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Expert Damage <span className="highlight">Restoration</span><br />
          When Seconds Count.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hero-subtext"
        >
          Richland Hills' premier disaster recovery experts. We don't just dry out homes; we restore peace of mind with 24/7 rapid deployment and elite craftsmanship.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="hero-btns"
        >
          <button className="btn btn-hero-primary">
            <span className="material-symbols-outlined">bolt</span>
            Request Immediate Help
          </button>
          <button className="btn btn-hero-secondary">
            Book Online
          </button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hero-trust"
        >
          <div className="avatar-group">
            <div className="avatar">JS</div>
            <div className="avatar">MT</div>
            <div className="avatar">LR</div>
            <div className="avatar count">+500</div>
          </div>
          <div className="trust-text">
            <div className="stars">5.0 Star Rating</div>
            <div className="trusted">Trusted by 500+ local homeowners</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
