import React from 'react';
import { Link } from 'react-router-dom';

function ServicePageFooter() {
  return (
    <footer className="w-full py-12 border-t border-slate-200 mt-20 bg-slate-50 text-slate-500">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <div className="text-lg font-bold text-blue-900 mb-4">Dry State LLC</div>
          <p className="text-sm text-slate-500 mb-4">Richland Hills' most trusted name in emergency restoration. IICRC Certified and family-owned.</p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-slate-400" data-icon="facebook">social_leaderboard</span>
            <span className="material-symbols-outlined text-slate-400" data-icon="share_location">share_location</span>
          </div>
        </div>
        <div>
          <h5 className="font-bold text-blue-900 mb-4 text-sm uppercase tracking-widest">Services</h5>
          <ul className="space-y-2">
            <li><Link className="text-sm text-slate-500 hover:underline hover:text-blue-700" to="/services/water-damage">Water Damage</Link></li>
            <li><Link className="text-sm text-slate-500 hover:underline hover:text-blue-700" to="/services/fire-damage">Fire Damage</Link></li>
            <li><Link className="text-sm text-slate-500 hover:underline hover:text-blue-700" to="/services/mold-remediation">Mold Remediation</Link></li>
            <li><Link className="text-sm text-slate-500 hover:underline hover:text-blue-700" to="/services/storm-damage">Storm Damage</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-blue-900 mb-4 text-sm uppercase tracking-widest">Company</h5>
          <ul className="space-y-2">
            <li><Link className="text-sm text-slate-500 hover:underline hover:text-blue-700" to="/about">About Us</Link></li>
            <li><Link className="text-sm text-slate-500 hover:underline hover:text-blue-700" to="/areas-we-serve">Service Areas</Link></li>
            <li><Link className="text-sm text-slate-500 hover:underline hover:text-blue-700" to="/contact">Contact</Link></li>
            <li><Link className="text-sm text-slate-500 hover:underline hover:text-blue-700" to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-blue-900 mb-4 text-sm uppercase tracking-widest">Contact Info</h5>
          <p className="text-sm text-slate-500 mb-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-xs" data-icon="location_on">location_on</span>
            Richland Hills, TX 76118
          </p>
          <p className="text-sm text-slate-500 mb-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-xs" data-icon="phone">phone</span>
            (800) DRY-STATE
          </p>
          <p className="text-sm text-slate-500 flex items-center gap-2">
            <span className="material-symbols-outlined text-xs" data-icon="mail">mail</span>
            help@drystatellc.com
          </p>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-6 mt-12 pt-8 border-t border-slate-200 text-center">
        <p className="text-sm text-slate-500">© 2024 Dry State LLC. All Rights Reserved. IICRC Certified Firm.</p>
      </div>
    </footer>
  );
}

export default ServicePageFooter;

