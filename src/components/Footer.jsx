import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, X, ArrowRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import logo from '../assets/logo.png';
import footerBg from '../assets/footer-bg.png';

// --- Validation Helper ---
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// --- POPUP MODAL COMPONENT ---
const ContactModal = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interested: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!isOpen) {
      // Reset when closed
      setTimeout(() => {
        setIsSubmitted(false);
        setErrors({});
        setFormData({ name: '', email: '', company: '', interested: '', message: '' });
      }, 300);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    // Optional fields can be skipped if you prefer
    if (!formData.interested) newErrors.interested = 'Please select an option';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company,
      interested_in: formData.interested,
      message: formData.message,
    };

    emailjs.send(
      'service_yglitrg',     // Service ID 
      'template_alt0xyd',    // Template ID
      templateParams,
      '_cUVxtjKbraEo34SL'    // Public Key (Make sure this matches Account > Public Key)
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsLoading(false);
      setIsSubmitted(true);
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setIsLoading(false);
      // Detailed error for debugging
      alert(`Failed to send. Error: ${err.text || 'Account not found (Check Public Key)'}`); 
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-sm overflow-hidden transform transition-all animate-fade-in-up min-h-[500px] flex flex-col">
        
        {/* Close Icon */}
        <button 
          onClick={onClose} 
          className={`absolute top-5 right-5 z-20 transition-colors ${isSubmitted ? 'text-white/70 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`}
        >
          <X size={24} />
        </button>

        {isSubmitted ? (
          // --- SUCCESS STATE (Blue Card - image_3df40b) ---
          <div className="bg-[#3b41e8] text-white p-8 h-full flex flex-col justify-between flex-grow">
            <div className="mt-12">
              <h2 className="text-5xl font-bold leading-tight tracking-tight">
                Thank<br/>You.
              </h2>
            </div>
            
            <div className="mb-8">
              <div className="w-full h-px bg-white/20 mb-8"></div>
              <p className="text-xl font-medium mb-1">We'll be in touch.</p>
              <p className="text-xl font-medium">Shortly!</p>
              
              <div className="flex justify-end mt-10">
                 <button 
                  onClick={onClose} 
                  className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:opacity-80 transition-opacity"
                >
                  Next 
                  <div className="bg-[#1a1f9c] p-2 rounded-full">
                    <ArrowRight size={16} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        ) : (
          // --- FORM STATE (White Form - image_fa9603) ---
          <div className="p-8 h-full flex flex-col flex-grow">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 mt-2">Get in touch</h2>
            
            <form onSubmit={handleSubmit} className="flex-grow flex flex-col justify-between space-y-4">
              
              <div className="space-y-5">
                {/* Name */}
                <div className="relative border-b border-gray-200 focus-within:border-[#3b41e8] transition-colors pb-1">
                  <label className="block text-xs text-gray-500 font-medium mb-1">Name</label>
                  <input 
                    type="text" id="name" value={formData.name} onChange={handleChange}
                    className="w-full outline-none text-gray-900 font-medium bg-transparent text-sm placeholder-gray-300"
                    placeholder="Jane Doe"
                  />
                </div>

                {/* Email */}
                <div className={`relative border-b transition-colors pb-1 ${errors.email ? 'border-red-500' : 'border-gray-200 focus-within:border-[#3b41e8]'}`}>
                  <label className="block text-xs text-gray-500 font-medium mb-1">Email</label>
                  <input 
                    type="email" id="email" value={formData.email} onChange={handleChange}
                    className="w-full outline-none text-gray-900 font-medium bg-transparent text-sm placeholder-gray-300"
                    placeholder="jane@example.com"
                  />
                </div>

                {/* Company */}
                <div className="relative border-b border-gray-200 focus-within:border-[#3b41e8] transition-colors pb-1">
                  <label className="block text-xs text-gray-500 font-medium mb-1">Company</label>
                  <input 
                    type="text" id="company" value={formData.company} onChange={handleChange}
                    className="w-full outline-none text-gray-900 font-medium bg-transparent text-sm placeholder-gray-300"
                    placeholder="Your Company"
                  />
                </div>

                {/* Interested In */}
                <div className="relative border-b border-gray-200 focus-within:border-[#3b41e8] transition-colors pb-1">
                  <label className="block text-xs text-gray-500 font-medium mb-1">Interested in...</label>
                  <select 
                    id="interested" value={formData.interested} onChange={handleChange}
                    className="w-full outline-none text-gray-900 font-medium bg-transparent text-sm cursor-pointer appearance-none"
                  >
                    <option value="" disabled className="text-gray-300"></option>
                    <option value="Website">Website</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="Software">Software Development</option>
                  </select>
                  {/* Custom Arrow */}
                  <div className="absolute right-0 bottom-2 pointer-events-none">
                     <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>

                {/* Message */}
                <div className="relative border-b border-gray-200 focus-within:border-[#3b41e8] transition-colors pb-1">
                  <label className="block text-xs text-gray-500 font-medium mb-1">Message</label>
                  <textarea 
                    id="message" rows="2" value={formData.message} onChange={handleChange}
                    className="w-full outline-none text-gray-900 font-medium bg-transparent resize-none text-sm placeholder-gray-300"
                    placeholder="Hello..."
                  ></textarea>
                </div>
              </div>

              {/* Send Button (Bottom Right) */}
              <div className="flex justify-end pt-4 items-center gap-3">
                <span className="text-xs font-bold text-[#3b41e8] tracking-widest uppercase">Send</span>
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="bg-[#3b41e8] hover:bg-[#2c33c4] text-white rounded-full p-3 shadow-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:scale-100 flex items-center justify-center w-12 h-12"
                >
                  {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Mail size={20} />}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

// --- FOOTER COMPONENT ---
const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer id="contact" className="bg-[#f9f9f9] pt-20 pb-12 border-t border-[#e2e2e2] relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16" data-aos="fade-up" data-aos-delay="100">
            
            {/* 1. Brand */}
            <div className="flex flex-col items-start" >
              <div className="absolute inset-x-0 top-0 flex justify-center z-0 pointer-events-none">
                  <img src={footerBg} alt="Footer" className="w-full max-w-2xl h-auto object-contain opacity-100" />
              </div>
              <div className="relative z-10 w-full">
                <div className="mb-6">
                   <Link to="/" className="inline-block"><img src={logo} alt="Melbote Logo" className="h-10 w-auto object-cover"/></Link>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-xs">Leading the digital transformation in Australia, powered by global technology excellence.</p>
              </div>
            </div>

            {/* 2. Info */}
            <div>
              <h5 className="font-bold text-gray-900 mb-6">Information</h5>
              <ul className="space-y-4 text-sm text-gray-600">
                <li><Link to="/" className="hover:text-[#d4af37] transition-colors">Home</Link></li>
                <li><a href="/#services" className="hover:text-[#d4af37] transition-colors">Services</a></li>
                <li><a href="/#about" className="hover:text-[#d4af37] transition-colors">About Us</a></li>
                <li><a href="/#partners" className="hover:text-[#d4af37] transition-colors">Partners</a></li>
                <li><a href="/#contact" className="hover:text-[#d4af37] transition-colors">Contact</a></li>
                <li><Link to="/privacy-policy" className="hover:text-[#d4af37]">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* 3. Contact Details */}
            <div className="relative z-10">
             <h5 className="font-bold text-gray-900 mb-6">Contact Us</h5>
            <ul className="space-y-4 text-sm text-black-600">
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

            {/* 4. Inquiries (Trigger for Modal) */}
            <div>
              <h5 className="font-bold text-gray-900 mb-6">Inquiries</h5>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Feel free to reach out to us for any consulting needs or partnership opportunities.
              </p>
              {/* BUTTON OPENS MODAL */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#d4af37] hover:bg-[#b5952f] text-white font-bold py-3 px-8 rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </button>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-xs text-gray-600">© 2026 Melbote. All rights reserved. A subsidiary of a pan-APAC technology leader.</p>
          </div>
        </div>
      </footer>

      {/* RENDER MODAL */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Footer;