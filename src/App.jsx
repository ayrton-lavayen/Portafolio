import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      {/* Navbar Header */}
      <Header />
      
      {/* Hero section */}
      <Hero />
      
      {/* First Marquee text banner */}
      <Marquee />
      
      {/* Projects Grid Section */}
      <Projects />
      
      {/* Second Marquee text banner */}
      <Marquee />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
}
