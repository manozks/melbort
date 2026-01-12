import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', type: 'link', target: '/' },
    { name: 'Services', type: 'scroll', target: 'services' },
    { name: 'About Us', type: 'scroll', target: 'about' },    // Make sure you have id="about" somewhere
    { name: 'Partners', type: 'scroll', target: 'partners' }, // Make sure you have id="partners" somewhere
    { name: 'Contact Us', type: 'scroll', target: 'contact' },
  ];

  const handleNavigation = (link) => {
    setActiveLink(link.name);
    setIsMenuOpen(false);

    if (link.type === 'link') {
      navigate(link.target);
      window.scrollTo(0, 0);
    } else if (link.type === 'scroll') {
      
      // 1. IF WE ARE ON HOME PAGE
      if (location.pathname === '/') {
        // Update the URL Hash manually without reloading
        window.history.pushState({}, '', `#${link.target}`);
        
        // Find the section and scroll
        const element = document.getElementById(link.target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } 
      // 2. IF WE ARE ON ANOTHER PAGE (e.g., Privacy Policy)
      else {
        // Navigate to Home with the hash
        navigate(`/#${link.target}`);
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4 pt-0">
      <nav className="max-w-7xl mx-auto bg-white rounded-b-lg shadow-lg px-6 py-3 md:px-8 flex justify-between items-center transition-all duration-300">
        
        {/* LOGO */}
        <div className="flex items-center">
          <button onClick={() => handleNavigation({ name: 'Home', type: 'link', target: '/' })} className="flex items-center gap-1 cursor-pointer">
            <img src={logo} alt="Melbote Logo" className="h-[10] w-auto object-contain" />
          </button>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavigation(link)}
              className={`px-5 py-1.5 text-sm font-medium transition-all duration-300 rounded-full cursor-pointer
                ${
                  activeLink === link.name
                    ? 'text-gray-900 border border-gray-200 shadow-sm bg-gray-50' 
                    : 'text-gray-600 hover:text-[#d4af37] border border-transparent'
                }
              `}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/61419616922"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex bg-[#d4af37] hover:bg-[#b5952f] text-white text-sm font-semibold px-8 py-2.5 rounded-full shadow-sm transition-all transform hover:scale-105"
          >
            Call Now
          </a>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-600 focus:outline-none">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-7xl bg-white rounded-2xl shadow-xl overflow-hidden p-4 border border-gray-100 animate-fade-in-up">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors
                  ${
                    activeLink === link.name
                      ? 'bg-gray-100 text-[#d4af37]' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }
                `}
              >
                {link.name}
              </button>
            ))}
             <div className="pt-2">
              <a href="https://wa.me/61 419 616 922" className="block w-full text-center bg-[#d4af37] text-white font-bold py-3 rounded-full">
                Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;