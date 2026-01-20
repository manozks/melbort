import React, { useState } from 'react';
import heroBg from '../assets/hero-bg.png'; 
import ContactModal from './ContactModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

   return (
    <section id="home" className="relative bg-[#f9f9f9] pt-24 pb-24 md:pt-32 md:pb-32 overflow-hidden">
      {/* Background Map Image */}
      <div className="absolute inset-0 flex items-center justify-center opacity-100 pointer-events-none">
        {/* 2. USE THE VARIABLE HERE */}
        <img src={heroBg} alt="map of Australia" data-aos="zoom-in" 
        data-aos-duration="1500"   className="w-full pt-20 max-w-lg h-auto object-contain" 
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-16 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6" data-aos="fade-up">
          Leading the Digital <br className="hidden md:inline" />
          Transformation in Australia
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" 
    data-aos-delay="200">
          Melbote is the Australian arm of a pan-APAC technology leader, providing cutting-edge IT and digital consulting services to drive your business forward.
        </p>
        <div data-aos="zoom-in" data-aos-delay="400">
          <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#d4af37] hover:bg-[#b5952f] text-white font-bold py-3 px-8 rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </button>
        </div>
      </div>
      {/* 5. ADD MODAL AT THE BOTTOM */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;