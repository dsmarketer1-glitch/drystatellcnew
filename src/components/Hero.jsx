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
            24/7 EMERGENCY RESPONSE ACROSS DFW
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Restoring What Matters Most,<br />
          <span className="highlight">24/7 Emergency Response</span> Across DFW.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hero-subtext"
        >
          When unexpected property damage occurs, our team is ready 24/7 to help protect your property and guide you through the recovery process.
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
            Request Emergency Service
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
