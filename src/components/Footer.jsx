import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.png';
import footerBg from '../assets/footer-bg.png';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#f9f9f9] pt-20 pb-4 border-t border-[#e2e2e2] relative overflow-hidden">
      
      {/* Background Pattern (Simulating the map texture) */}
      
    
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"  data-aos="fade-up" data-aos-delay="100">
          
          {/* 1. Brand Column */}
          <div className="flex flex-col items-start" >
            <a href="#" className="mb-6">
                  <img 
                           src={logo} 
                           alt="Melbote Logo" 
                           className="h-[10] w-auto object-contain"
                         />
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Leading the digital transformation in Australia, powered by global technology excellence.
            </p>
          </div>

          {/* 2. Information Links */}
          <div>
            <h5 className="font-bold text-gray-900 mb-6">Information</h5>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#services" className="hover:text-[#d4af37] transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-[#d4af37] transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-[#d4af37] transition-colors">About Us</a></li>
              <li><a href="#partners" className="hover:text-[#d4af37] transition-colors">Partners</a></li>
              <li><a href="#contact" className="hover:text-[#d4af37] transition-colors">Contact</a></li>
              <li><a href="/privacy-policy" className="hover:text-[#d4af37]">Privacy Policy</a></li>
            </ul>
          </div>

          {/* 3. Contact Us */}
          <div>
            <div className="absolute inset-x-0 top-0 flex justify-center z-0 pointer-events-none">
        <img 
          src={footerBg} 
          alt="Footer" 
          className="w-full max-w-2xl h-auto object-contain opacity-100" // translate-y moves it down slightly for that 'watermark' look
        />
      </div>
           <div className="relative z-10">
             <h5 className="font-bold text-gray-900 mb-6">Contact Us</h5>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#d4af37] mt-1 shrink-0" />
                <span>Level 1, 123 Digital Drive<br/>Sydney, NSW 2000<br/>Australia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#d4af37] shrink-0" />
                <a href="https://wa.me/61419616922" target="_blank"  rel="noopener noreferrer"
    className="hover:text-[#d4af37] transition-colors cursor-pointer"
  >+61 419 616 922</a>                
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#d4af37] shrink-0" />
                <span>info@melbote.com</span>
              </li>
            </ul>
           </div>
          </div>

          {/* 4. Inquiries */}
          <div>
            <h5 className="font-bold text-gray-900 mb-6">Inquiries</h5>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Feel free to reach out to us for any consulting needs or partnership opportunities.
            </p>
            <button className="bg-[#d4af37] hover:bg-[#b5952f] text-white font-bold py-3 px-10 rounded-full shadow-sm transition-all duration-300 transform hover:scale-105">
              Email
            </button>
          </div>
        </div>

        {/* Bottom Copyright Line */}
        <div className="border-t border-gray-200 pt-4 text-center">
          <p className="text-xs text-gray-400">
            © 2026 Melbote. All rights reserved. A subsidiary of a pan-APAC technology leader.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;