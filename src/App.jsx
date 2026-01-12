import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Pages/Components
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import GlobalNetwork from './components/GlobalNetwork';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

// Helper component to handle scroll on load
const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout to ensure the element is rendered
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash]);

  return null;
};

// Create a "Home" component that holds the main page sections
const Home = () => (
  <>
   <div id="home"><Hero /></div>
    <div id="services"><Services /></div>
    <div id='about'><About /></div>
    <div id="partners"><GlobalNetwork /></div>
  </>
);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="font-sans text-gray-900 selection:bg-[#d4af37] selection:text-white overflow-x-hidden">
      {/* Header stays visible on all pages */}
      <Header />
      <ScrollToHash />

      <Routes>
        {/* Route for the main homepage */}
        <Route path="/" element={<Home />} />
        
        {/* Route for the Privacy Policy page */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      {/* Footer stays visible on all pages */}
      <Footer />
    </div>
  );
}

export default App;