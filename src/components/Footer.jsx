import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="inline-block mb-4">
              <img src="/assets/logo.png" alt="Dry State LLC" className="h-[64px] lg:h-[72px] w-auto object-contain" />
            </Link>
            <div className="footer-desc mb-6 space-y-4">
              <div>
                <span className="block font-bold text-white text-xs uppercase tracking-widest mb-1">Office Location</span>
                <p>
                  7410 Boulevard 26, Unit #: S<br />
                  Richland Hills, TX 76180
                </p>
              </div>
              <div>
                <span className="block font-bold text-white text-xs uppercase tracking-widest mb-1">Mailing Address</span>
                <p>
                  1527 W State Hwy 114, Unit #: 500-116<br />
                  Grapevine, TX 76051
                </p>
              </div>
            </div>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Services</h4>
            <ul className="grid grid-cols-1 gap-x-8">
              <li><Link to="/services/water-damage">Water Damage</Link></li>
              <li><Link to="/services/fire-damage">Fire Damage</Link></li>
              <li><Link to="/services/flood-damage">Flood Damage</Link></li>
              <li><Link to="/services/storm-damage">Storm Damage</Link></li>
              <li><Link to="/services/sewage-cleanup">Sewage Cleanup</Link></li>
              <li><Link to="/services/smoke-damage">Smoke Damage</Link></li>
              <li><Link to="/services/reconstruction">Reconstruction</Link></li>
              <li><Link to="/services/water-removal">Water Removal</Link></li>
              <li><Link to="/services/content-cleaning">Content Cleaning</Link></li>
              <li><Link to="/services/air-duct-cleaning">Air Duct Cleaning</Link></li>
              <li><Link to="/services/carpet-cleaning">Carpet Cleaning</Link></li>
              <li><Link to="/services/tile-grout-cleaning">Tile & Grout</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/areas-we-serve">Service Areas</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Contact Info</h4>
            <ul>
              <li><a href="tel:2147851130">214-785-1130</a></li>
              <li><a href="mailto:Office@DryStateLLC.com">Office@DryStateLLC.com</a></li>
            </ul>
          </div>

        </div>
        
        <div className="footer-bottom">
          <p className="w-full text-center">© 2024 DryState LLC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
