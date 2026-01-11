import React, { useEffect } from 'react';
// 1. Import AOS and its CSS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import your components
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import GlobalNetwork from './components/GlobalNetwork';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  // 2. Initialize AOS inside useEffect
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation speed (1000ms = 1s)
      once: true,     // Animation happens only once (doesn't repeat on scroll up)
      offset: 100,    // Trigger animation 100px before element is visible
    });
  }, []);

  return (
    <div className="font-sans text-black-900 selection:bg-[#d4af37] selection:text-white overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <About />
      <GlobalNetwork />
      <Footer />
    </div>
  );
}

export default App;