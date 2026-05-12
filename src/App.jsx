import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FireDamage from './pages/services/FireDamage';
import FloodDamage from './pages/services/FloodDamage';
import StormDamage from './pages/services/StormDamage';
import SewageCleanup from './pages/services/SewageCleanup';
import SmokeDamage from './pages/services/SmokeDamage';
import Reconstruction from './pages/services/Reconstruction';
import WaterRemoval from './pages/services/WaterRemoval';
import ContentCleaning from './pages/services/ContentCleaning';
import AirDuctCleaning from './pages/services/AirDuctCleaning';
import CarpetCleaning from './pages/services/CarpetCleaning';
import TileGroutCleaning from './pages/services/TileGroutCleaning';
import WaterDamage from './pages/services/WaterDamage';
import AreasWeServe from './pages/AreasWeServe';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/areas-we-serve" element={<AreasWeServe />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<WaterDamage />} />
          <Route path="/services/water-damage" element={<WaterDamage />} />
          <Route path="/services/fire-damage" element={<FireDamage />} />
          <Route path="/services/flood-damage" element={<FloodDamage />} />
          <Route path="/services/storm-damage" element={<StormDamage />} />
          <Route path="/services/sewage-cleanup" element={<SewageCleanup />} />
          <Route path="/services/smoke-damage" element={<SmokeDamage />} />
          <Route path="/services/reconstruction" element={<Reconstruction />} />
          <Route path="/services/water-removal" element={<WaterRemoval />} />
          <Route path="/services/content-cleaning" element={<ContentCleaning />} />
          <Route path="/services/air-duct-cleaning" element={<AirDuctCleaning />} />
          <Route path="/services/carpet-cleaning" element={<CarpetCleaning />} />
          <Route path="/services/tile-grout-cleaning" element={<TileGroutCleaning />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
