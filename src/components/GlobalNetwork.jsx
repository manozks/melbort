import React from 'react';
import globalBg from '../assets/global-bg.png';
import techRydeLogo from '../assets/techryde-logo.png';
import emultitechLogo from '../assets/emultitech-logo.png';

const GlobalNetwork = () => {
  return (
    <section id="partners" className="relative bg-[#f9f9f9] py-20 overflow-hidden">
      
      {/* --- BACKGROUND IMAGE (Centered) --- */}
      {/* Positioned absolute in the center, low opacity to sit behind text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-5xl z-0 opacity-100 pointer-events-none">
        <img src={globalBg} alt="Global Network" className="w-full max-w-5xl h-auto object-contain opacity-20" // Adjusted opacity so text is readable
        />
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl mb-6">
          <span className="font-serif text-[#d4af37]">Our Global </span>
          <span className="font-serif  text-black-900">Network</span>
        </h2>

        {/* Description */}
        <p className="text-black-600 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Melbote leverages the strength and innovation of our pan-APAC technology leaders to deliver unparalleled solutions.
        </p>

        {/* --- LOGOS SECTION --- */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          
          {/* Logo 1: TechRyde */}
          <div className="h-12 md:h-16 flex items-center justify-center">
            <a href="https://www.techryde.com" target="_blank"  rel="noopener noreferrer"
    className="hover:opacity-80 transition-opacity" 
  >
    <img src={techRydeLogo} alt="TechRyde" className="h-full w-auto" />
  </a>
           
          </div>

          {/* Vertical Divider (Hidden on mobile, visible on desktop) */}
          <div className="hidden md:block w-px h-12 bg-[#333333]"></div>

          {/* Logo 2: eMultiTech */}
          <div className="h-12 md:h-16 flex items-center justify-center">
                     <a href="https://www.emultitechsolution.com" target="_blank"  rel="noopener noreferrer"
    className="hover:opacity-80 transition-opacity" 
  >
    <img src={emultitechLogo} alt="eMultiTech" className="h-full w-auto" />
  </a>
            
          </div>

        </div>

      </div>
    </section>
  );
};

export default GlobalNetwork;