import React from 'react';
import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#09090b] text-[#f4f4f5] overflow-x-hidden selection:bg-orange-500/30 selection:text-orange-200">
      {/* 3D WebGL Atmospheric Background */}
      <ThreeBackground />

      {/* Persistent Subtle Grid Layer for Architectural Texture */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />

      {/* Main Content Sections */}
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <main>
          <Hero />
          <SelectedWork />
          <Services />
          <Process />
          <About />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
