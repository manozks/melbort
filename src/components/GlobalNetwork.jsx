import React from 'react';
import globalBg from '../assets/global-bg.png';
import techRyde from '../assets/techryde-logo.png';
import emultitech from '../assets/emultitech-logo.png';

const GlobalNetwork = () => {
  return (
    <section id="partners" className="relative bg-[#f9f9f9] py-20 overflow-hidden">
    

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* --- LEFT SECTION: Title --- */}
          <div className="lg:w-1/3 flex flex-col items-start relative">
             <div className="absolute z-0 pointer-events-none
                top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64
                lg:top-[-2.5rem] lg:left-[-2.5rem] lg:translate-x-0 lg:translate-y-0 lg:w-[120%]
              ">
        <img src={globalBg} alt="Global Network" 
          className="w-64 md:w-80 lg:w-full max-w-sm object-contain opacity-60" 
        />
      </div>
        <div className="mb-8 z-10 text-center lg:text-left w-full">
            <h2 className="text-4xl md:text-4xl font-serif text-[#d4af37] mb-2 leading-none">Our</h2>
                <h2 className="text-4xl md:text-4xl font-serif text-black-700 tracking-tight">Global Network</h2>
                <div className="w-20 h-1.5 bg-[#d4af37] mt-6 rounded-full opacity-80 mx-auto lg:mx-0"></div>
                </div>
          </div>

          {/* --- RIGHT SECTION: Description & Logos --- */}
          <div className="lg:w-8/12 bg-[#f9f9f9] rounded-[2rem] p-8 md:p-16 shadow-sm border border-[#e2e2e2] ">
            
            {/* Description Text */}
            <p className="text-black-600 font-bold text-center mb-10 text-lg leading-relaxed max-w-2xl">
              Melbote leverages the strength and innovation of our pan-APAC technology leaders to deliver unparalleled solutions.
            </p> 

            {/* Logos Row */}
            <div className="flex flex-col sm:flex-row items-center justify-start gap-8 sm:gap-12">
              
              {/* Logo 1: TechRyde */}
              <a 
                href="https://www.techryde.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                
                <div className="flex items-center gap-2 h-full">
                    <img src={techRyde} alt="TechRyde" className="h-[66px] w-[290px]" />
                    
                </div>
              </a>

              {/* Vertical Divider (Visible on Desktop) */}
              <div className="hidden sm:block w-[1px] h-12 bg-black-900"></div>

              {/* Logo 2: MultiTech */}
              <a 
                href="https://www.multitech.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                
                <div className="flex items-center gap-2 h-full">
                    <img src={emultitech} alt="Multitech" className="h-[42px] w-[131px]" />
                    
                </div>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;