import React from 'react';
import { Globe, Cloud, BarChart3, Code2, ShieldCheck, Server } from 'lucide-react';
import serviceBg from '../assets/service-bg.png';

// --- SERVICE CARD COMPONENT ---
const ServiceCard = ({ icon: Icon, title, desc }) => (
  <div className="bg-[white] p-8 rounded-3xl border border-[#e2e2e2] shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col items-start h-full">
    {/* Icon Container */}
    <div className="w-16 h-16 rounded-full bg-[#d4af37] flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
      <Icon size={32} strokeWidth={1.5} />
    </div>
    
    {/* Content */}
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

// --- MAIN SERVICES SECTION ---
const Services = () => {
  const services = [
    { 
      icon: Globe, 
      title: "Digital Strategy", 
      desc: "Crafting bespoke digital roadmaps that align with your business objectives and market demands." 
    },
    { 
      icon: Cloud, 
      title: "Cloud Solutions", 
      desc: "Leveraging cloud technologies for scalable infrastructure, enhanced security, and operational efficiency." 
    },
    { 
      icon: BarChart3, 
      title: "Data Analytics", 
      desc: "Transforming raw data into actionable insights to inform strategic decisions and foster growth." 
    },
    { 
      icon: Code2, 
      title: "Custom Software Development", 
      desc: "Building innovative, tailor-made software solutions to meet your unique operational needs." 
    },
    { 
      icon: ShieldCheck, 
      title: "Cybersecurity", 
      desc: "Protecting your digital assets with robust security frameworks and proactive threat management." 
    },
    { 
      icon: Server, 
      title: "IT Infrastructure Consulting", 
      desc: "Optimizing your IT infrastructure for peak performance, reliability, and cost-effectiveness." 
    },
  ];

  return (
    <section id="services" className="bg-[#f9f9f9] py-24 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Sticky Title */}
        <div className="lg:w-1/3 relative">
            <div className="sticky top-32">
              
         
              <div className="absolute z-0 opacity-30 pointer-events-none
                top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64
                lg:top-[-2.5rem] lg:left-[-2.5rem] lg:translate-x-0 lg:translate-y-0 lg:w-[120%]
              ">
                <img 
                  src={serviceBg} 
                  alt="Background Pattern" 
                  className="w-full h-auto object-contain" 
                />
              </div>

              {/* Text Content */}
              <div className="relative z-10 text-center lg:text-left">
                <h2 className="text-4xl md:text-4xl font-serif text-[#d4af37] mb-2 leading-none">Our</h2>
                <h2 className="text-4xl md:text-4xl font-serif text-black-700 tracking-tight">Services</h2>
                <div className="w-20 h-1.5 bg-[#d4af37] mt-6 rounded-full opacity-80 mx-auto lg:mx-0"></div>
              </div>
              
            </div>
          </div>

          {/* Right Side: Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, index) => (
              <ServiceCard key={index} {...s} />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Services;