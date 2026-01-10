import React from 'react';
import aboutBg from '../assets/about-bg.png';

const About = () => {
  return (
    <section id="about" className="bg-[#f9f9f9] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Card Container */}
        <div className="bg-white rounded-[2rem] p-8 md:p-16 shadow-sm border border-[#e2e2e2]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* --- LEFT COLUMN: Title & Image --- */}
            <div className="lg:w-1/3 flex flex-col items-start relative">

             <div className="absolute z-0 pointer-events-none 
                top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64
                lg:top-[-2.5rem] lg:left-[-2.5rem] lg:translate-x-0 lg:translate-y-0 lg:w-[120%]
              " data-aos="zoom-in" 
        data-aos-duration="1500">
                <img 
                  src={aboutBg} 
                  alt="Australian Kangaroo Art" 
                  className="w-64 md:w-80 lg:w-full max-w-sm object-contain opacity-60" 
                />
              </div>
              {/* Title Section */}
              <div className="mb-8 z-10 text-center lg:text-left w-full" data-aos="fade-right">
               <h2 className="text-4xl md:text-4xl font-serif text-[#d4af37] mb-2 leading-none">About</h2>
                <h2 className="text-4xl md:text-4xl font-serif text-black-700 tracking-tight">Melbote</h2>
                <div className="w-20 h-1.5 bg-[#d4af37] mt-6 rounded-full opacity-80 mx-auto lg:mx-0"></div>
              </div>

            
              
            </div>

            {/* --- RIGHT COLUMN: Text Content --- */}
            <div className="lg:w-2/3 flex flex-col justify-center space-y-6 text-black-600 leading-relaxed text-[15px] md:text-base font-light" data-aos="fade-left" data-aos-delay="200">
              <p>
                Melbote is an IT professional services consulting company operating as the 
                Australian subsidiary of a prominent pan-APAC technology leader. We are proud 
                to work closely with our esteemed partners, techryde.com and 
                emultitechsolution.com, bringing global expertise with a local touch.
              </p>

              <p>
                Our mission is to empower Australian businesses to navigate the complexities 
                of the digital landscape. We combine deep industry knowledge with 
                innovative technological solutions to help our clients achieve sustainable 
                growth, operational excellence, and a competitive edge.
              </p>

              <p>
                We believe in building strong, collaborative relationships with our clients, 
                understanding their challenges, and delivering impactful results. Our team of 
                experienced consultants is dedicated to excellence, integrity, and driving real 
                value for every project we undertake.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;