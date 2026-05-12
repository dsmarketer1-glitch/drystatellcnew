import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [restorationOpen, setRestorationOpen] = useState(false);
  const [cleaningOpen, setCleaningOpen] = useState(false);
  const location = useLocation();

  const restorationServices = [
    { title: "Water Damage", path: "/services/water-damage" },
    { title: "Fire Damage", path: "/services/fire-damage" },
    { title: "Flood Damage", path: "/services/flood-damage" },
    { title: "Storm Damage", path: "/services/storm-damage" },
    { title: "Sewage Cleanup", path: "/services/sewage-cleanup" },
    { title: "Smoke Damage", path: "/services/smoke-damage" },
    { title: "Reconstruction", path: "/services/reconstruction" },
    { title: "Water Removal", path: "/services/water-removal" },
  ];

  const cleaningServices = [
    { title: "Content Cleaning", path: "/services/content-cleaning" },
    { title: "Air Duct Cleaning", path: "/services/air-duct-cleaning" },
    { title: "Carpet Cleaning", path: "/services/carpet-cleaning" },
    { title: "Tile & Grout Cleaning", path: "/services/tile-grout-cleaning" },
  ];

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    setRestorationOpen(false);
    setCleaningOpen(false);
  }, [location]);

  return (
    <>
      <nav className="fixed top-0 w-full h-[80px] lg:h-[100px] z-[70] border-b border-slate-100 bg-white/95 backdrop-blur-md flex items-center transition-all">
        <div className="flex justify-between items-center max-w-[1440px] mx-auto px-6 lg:px-10 w-full h-full">
          {/* Logo Section */}
          <Link to="/" className="flex items-center group z-[80]">
            <img 
              src="/assets/logo.png" 
              alt="Dry State LLC" 
              className="h-[40px] sm:h-[60px] lg:h-[85px] w-auto object-contain"
            />
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex gap-6 xl:gap-8 items-center h-full">
            <Link className="text-[14px] xl:text-[15px] font-black text-[#0F265C] hover:text-[#D32F2F] transition-all py-2" to="/">
              Home
            </Link>
            
            {/* Restoration Dropdown */}
            <div 
              className="relative h-full flex items-center group"
              onMouseEnter={() => setRestorationOpen(true)}
              onMouseLeave={() => setRestorationOpen(false)}
            >
              <button className="flex items-center gap-1 text-[14px] xl:text-[15px] font-black text-[#0F265C] group-hover:text-[#D32F2F] transition-all py-2">
                Restoration Service
                <span className="material-symbols-outlined text-[20px]">expand_more</span>
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[500px] bg-white shadow-2xl rounded-b-xl border-t-4 border-[#D32F2F] p-8 grid grid-cols-2 gap-x-8 gap-y-4 transition-all duration-300 ${restorationOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
                {restorationServices.map((service, i) => (
                  <Link 
                    key={i} 
                    to={service.path}
                    className="text-[14px] font-bold text-[#0F265C] hover:text-[#D32F2F] transition-all flex items-center gap-2 group/item"
                  >
                    <span className="w-1.5 h-1.5 bg-[#D32F2F] rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity"></span>
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Cleaning Dropdown */}
            <div 
              className="relative h-full flex items-center group"
              onMouseEnter={() => setCleaningOpen(true)}
              onMouseLeave={() => setCleaningOpen(false)}
            >
              <button className="flex items-center gap-1 text-[14px] xl:text-[15px] font-black text-[#0F265C] group-hover:text-[#D32F2F] transition-all py-2">
                Cleaning Services
                <span className="material-symbols-outlined text-[20px]">expand_more</span>
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[300px] bg-white shadow-2xl rounded-b-xl border-t-4 border-[#D32F2F] p-6 flex flex-col gap-4 transition-all duration-300 ${cleaningOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
                {cleaningServices.map((service, i) => (
                  <Link 
                    key={i} 
                    to={service.path}
                    className="text-[14px] font-bold text-[#0F265C] hover:text-[#D32F2F] transition-all flex items-center gap-2 group/item"
                  >
                    <span className="w-1.5 h-1.5 bg-[#D32F2F] rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity"></span>
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link className="text-[14px] xl:text-[15px] font-black text-[#0F265C] hover:text-[#D32F2F] transition-all py-2" to="/areas-we-serve">
              Service Area
            </Link>
            <Link className="text-[14px] xl:text-[15px] font-black text-[#0F265C] hover:text-[#D32F2F] transition-all py-2" to="/about">
              About Us
            </Link>
            <Link className="text-[14px] xl:text-[15px] font-black text-[#0F265C] hover:text-[#D32F2F] transition-all py-2" to="/contact">
              Contact Us
            </Link>
          </div>

          {/* Action Section */}
          <div className="flex items-center gap-4 lg:gap-8 h-full">
            <a href="tel:2147851130" className="hidden xl:flex flex-col items-end group">
              <span className="text-[12px] font-bold text-gray-500 uppercase tracking-widest">Emergency Line</span>
              <span className="text-[20px] font-black text-[#0F265C] group-hover:text-[#D32F2F] transition-colors">214-785-1130</span>
            </a>
            
            <Link to="/contact" className="hidden sm:flex bg-[#D32F2F] text-white px-6 xl:px-8 py-4 rounded-[4px] font-black text-[13px] uppercase tracking-widest hover:bg-[#b71c1c] transition-all shadow-lg">
              Get Help Now
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-[#0F265C] z-[80] relative"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="material-symbols-outlined text-[32px]">
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 bg-white z-[60] transition-all duration-300 lg:hidden overflow-y-auto ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center justify-start min-h-full gap-6 px-6 text-center pt-[100px] pb-20">
          <Link className="text-[24px] font-black text-[#0F265C]" to="/">Home</Link>
          
          <div className="w-full">
            <div className="text-[14px] font-black text-gray-400 uppercase tracking-widest mb-4">Restoration Services</div>
            <div className="grid grid-cols-1 gap-3">
              {restorationServices.map((service, i) => (
                <Link key={i} className="text-[18px] font-bold text-[#0F265C]" to={service.path}>{service.title}</Link>
              ))}
            </div>
          </div>

          <div className="w-full">
            <div className="text-[14px] font-black text-gray-400 uppercase tracking-widest mb-4">Cleaning Services</div>
            <div className="grid grid-cols-1 gap-3">
              {cleaningServices.map((service, i) => (
                <Link key={i} className="text-[18px] font-bold text-[#0F265C]" to={service.path}>{service.title}</Link>
              ))}
            </div>
          </div>

          <Link className="text-[24px] font-black text-[#0F265C]" to="/areas-we-serve">Service Area</Link>
          <Link className="text-[24px] font-black text-[#0F265C]" to="/about">About Us</Link>
          <Link className="text-[24px] font-black text-[#0F265C]" to="/contact">Contact</Link>
          
          <div className="mt-4 flex flex-col items-center gap-6 w-full">
            <a href="tel:2147851130" className="flex flex-col items-center gap-1">
              <span className="text-[12px] font-bold text-gray-500 uppercase tracking-widest">24/7 Emergency Help</span>
              <span className="text-[24px] font-black text-[#D32F2F]">214-785-1130</span>
            </a>
            <Link to="/contact" className="bg-[#0F265C] text-white w-full py-5 rounded-[4px] font-black text-[16px] shadow-xl uppercase tracking-widest">
              Get A Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
