import React from 'react';
import { HeroSection } from './components/HeroSection';
import { StatsRow } from './components/StatsRow';
import { ServiceModules } from './components/ServiceModules';
import { WorkflowSection } from './components/WorkflowSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Hexagon } from 'lucide-react';
import './index.css';

function App() {
  return (
    <div className="app-layout">

      {/* Top Navigation */}
      <nav className="top-nav">
        <div className="nav-brand">
          <Hexagon size={24} className="logo-icon" />
          GravonLabs
        </div>
        <div className="nav-links">
          <a href="#">Solutions</a>
          <a href="#">Industries</a>
          <a href="#">About us</a>
        </div>
        <div className="nav-actions">
          <button className="btn-login">CLIENT LOGIN</button>
          <a href="#contact" className="btn-get-started" style={{ display: 'inline-block', textDecoration: 'none' }}>Get Started</a>
        </div>
      </nav>

      {/* Main Content Layout */}
      <main className="main-content">
        <HeroSection />
        <ServiceModules />
        <WorkflowSection />
        <StatsRow />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
