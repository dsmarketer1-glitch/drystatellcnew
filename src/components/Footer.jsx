import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Certification Logos */}
      <div className="footer-top-logos">
        <div className="container">
          <div className="logos-wrapper">
            <img src="/assets/iicrc.png" alt="IICRC Certified" className="cert-logo" />
            <img src="/assets/boys-girls-clubs.png" alt="Boys & Girls Clubs" className="cert-logo" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link">
              <img src="/assets/drystate-logo.png" alt="Dry State LLC" className="footer-logo" />
            </Link>
            <div className="brand-content">
              <h3 className="brand-tagline">Restoring Families, Building Communities</h3>
              <p className="brand-mission">
                Join us in our mission, and together, let’s build a legacy of hope, trust, and unwavering support.
              </p>
              <p className="brand-description">
                At DryState, we offer expert restoration for water, flood, and fire damage. Our experienced team uses advanced technology for efficient cleanup and repairs, working closely with you and your insurance provider for a smooth process.
              </p>
            </div>
          </div>
          
          {/* Services Column */}
          <div className="footer-links">
            <h4>OUR SERVICES</h4>
            <ul>
              <li><Link to="/services/water-damage">Water Damage Restoration</Link></li>
              <li><Link to="/services/water-removal">Water Removal Services</Link></li>
              <li><Link to="/services/water-damage">Water Damage Repairs</Link></li>
              <li><Link to="/services/flood-damage">Flood Damage Cleanup</Link></li>
              <li><Link to="/services/fire-damage">Fire Damage Restoration</Link></li>
              <li><Link to="/services/fire-damage">Fire Damage Repair</Link></li>
              <li><Link to="/services/smoke-damage">Smoke Damage Cleaning</Link></li>
              <li><Link to="/services/storm-damage">Storm Damage Restoration</Link></li>
              <li><Link to="/services/sewage-cleanup">Sewage Damage Cleanup</Link></li>
              <li><Link to="/services/mold-removal">Mold Removal Services</Link></li>
              <li><Link to="/services/content-cleaning">Content Cleaning and Packing</Link></li>
              <li><Link to="/services/reconstruction">Reconstruction Service</Link></li>
            </ul>
          </div>
          
          {/* About Column */}
          <div className="footer-links">
            <h4>ABOUT DRYSTATE</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/reviews">Reviews</Link></li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div className="footer-links contact-col">
            <h4>CONTACT US</h4>
            <div className="contact-info-list">
              <div className="contact-item">
                <strong>Mailing Address:</strong>
                <p>1527 W State Hwy 114 | Unit #: 500-116 | Grapevine, TX 76051</p>
              </div>
              <div className="contact-item">
                <strong>Office Location:</strong>
                <p>7410 Boulevard 26 | Unit #: S | Richland Hills, TX 76180</p>
              </div>
              <div className="contact-item">
                <a href="mailto:Office@DryStateLLC.com" className="contact-link">Office@DryStateLLC.com</a>
              </div>
              <div className="contact-item">
                <a href="tel:2147851130" className="contact-link">214-785-1130</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="bottom-content">
            <p>© 2026 DryState, LLC. All rights reserved.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="Youtube">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.02C5.12 19.47 12 19.47 12 19.47s6.88 0 8.6-.47a2.78 2.78 0 0 0 1.94-1.94 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
