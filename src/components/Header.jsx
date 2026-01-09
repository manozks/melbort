import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // 2. STATE TO TRACK WHICH LINK IS ACTIVE
  const [activeLink, setActiveLink] = useState('Home');

  // Helper to handle clicks: set active, close menu (mobile), and scroll
  const handleLinkClick = (name) => {
    setActiveLink(name);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Partners', href: '#partners' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4 pt-0">
      <nav className="max-w-7xl mx-auto bg-white rounded-b-2xl shadow-lg px-6 py-3 md:px-8 flex justify-between items-center transition-all duration-300">
        
        {/* --- LOGO SECTION --- */}
        <div className="flex items-center">
          <a href="#" onClick={() => handleLinkClick('Home')} className="flex items-center gap-1">
            {/* 3. USING THE IMAGE LOGO INSTEAD OF TEXT */}
            <img 
              src={logo} 
              alt="Melbote Logo" 
              className="h-[10] w-auto object-contain" // Adjust h-10 if you want it bigger/smaller
            />
          </a>
        </div>

        {/* --- DESKTOP NAVIGATION --- */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleLinkClick(link.name)}
              className={`px-5 py-1.5 text-sm font-medium transition-all duration-300 rounded-full
                ${
                  activeLink === link.name
                    ? 'text-black-900 border border-gray-200 shadow-sm bg-gray-50' // Active Style (Pill)
                    : 'text-black-600 hover:text-[#d4af37] border border-transparent' // Inactive Style
                }
              `}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* --- CALL TO ACTION & MOBILE TOGGLE --- */}
        <div className="flex items-center gap-4">
         <a
  href="https://wa.me/61212345678" // Link format: Country code + Number (No spaces/plus signs)
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:inline-flex bg-[#d4af37] hover:bg-[#b5952f] text-white text-sm font-semibold px-8 py-2.5 rounded-full shadow-sm transition-all transform hover:scale-105"
>
  Call Now
</a>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 focus:outline-none"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* --- MOBILE MENU --- */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-7xl bg-white rounded-2xl shadow-xl overflow-hidden p-4 border border-gray-100 animate-fade-in-up">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.name)}
                className={`block px-4 py-3 rounded-lg font-medium transition-colors
                  ${
                    activeLink === link.name
                      ? 'bg-gray-100 text-[#d4af37]' // Mobile Active
                      : 'text-gray-600 hover:bg-gray-50'
                  }
                `}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a href="#" className="block w-full text-center bg-[#d4af37] text-white font-bold py-3 rounded-full">
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