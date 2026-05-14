import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
            SERVING RICHLAND HILLS & NEARBY COMMUNITIES
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Restoring What Matters Most,<br />
          <span className="highlight">24/7 Emergency</span> Restoration.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hero-subtext"
        >
          Rapid, reliable, and compassionate recovery services for your home or business — any time, any day. Richland Hills' trusted disaster restoration experts.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="hero-btns"
        >
          <a href="tel:2147851130" className="btn btn-hero-primary">
            <span className="material-symbols-outlined">bolt</span>
            Request Immediate Help
          </a>
          <Link to="/contact" className="btn btn-hero-secondary">
            Book Online
          </Link>
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
