import React, { useState } from 'react';
import { Menu, X, Globe, Cloud, BarChart3, Code2, ShieldCheck, Server, MapPin, Phone, Mail } from 'lucide-react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import GlobalNetwork from './components/GlobalNetwork.jsx'; 
import Footer from './components/Footer.jsx';

// --- SHARED COMPONENTS ---
const Button = ({ children, className }) => (
  <button className={`bg-[#d4af37] hover:bg-[#b5952f] text-white font-medium py-2 px-6 rounded-full transition-all duration-300 shadow-md ${className}`}>
    {children}
  </button>
);

const Section = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-6 md:px-12 py-16 ${className}`}>
    {children}
  </div>
);




// --- MAIN APP COMPONENT ---
export default function App() {
  return (
    <div className="font-sans text-gray-900 selection:bg-[#f9f9f9] selection:text-white">
      <Header />
      <Hero />
      <Services />
      <About/>
      <GlobalNetwork />
      <Footer />
    </div>
  );
}