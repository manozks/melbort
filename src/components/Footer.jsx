import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, X, ArrowRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
emailjs.init("TyHCIJzhmvykmXzwo"); // Your Public Key
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

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New loading state
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interested: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

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
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.interested) newErrors.interested = 'Please select an option';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // --- EMAIL SENDING LOGIC ---
    setIsLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company,
      interested_in: formData.interested,
      message: formData.message,
    };

    // DEBUG LOG: Check keys in console before sending
    console.log("Sending Email with:", {
      service: 'service_2z14fex',
      template: 'template_oo51p9q',
      key: 'TyHCIJzhmvykmXzwo'
    });

    emailjs.send(
      'service_2z14fex',     // Service ID (Double check this matches your dashboard exactly)
      'template_oo51p9q',    // Template ID
      templateParams,
      'TyHCIJzhmvykmXzwo'    // Public Key
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsLoading(false);
      setIsSubmitted(true);
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setIsLoading(false);
      // Alert the actual error text to help debugging
      alert(`Failed to send: ${err.text || 'Unknown Error'}`); 
    });
  };

  const handleNext = () => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', company: '', interested: '', message: '' });
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#d4af37] text-white rounded-xl shadow-lg p-6 flex flex-col items-start text-left h-full justify-between relative overflow-hidden animate-fade-in-up">
        <button onClick={handleNext} className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors focus:outline-none">
          <X size={20} />
        </button>
        <div className="mt-8">
          <h2 className="text-4xl font-bold mb-4 leading-tight">Thank You.</h2>
          <p className="text-white/90 text-lg">We'll be in touch. <br/>Shortly!</p>
        </div>
        <div className="flex items-center justify-end w-full mt-6">
          <button onClick={handleNext} className="text-sm font-semibold tracking-wider uppercase flex items-center gap-2 hover:underline focus:outline-none">
            Send Another <ArrowRight size={18} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h5 className="font-bold text-gray-900 mb-6">Get in touch</h5>
      <div className="bg-white rounded-xl shadow-lg p-6 border border-[#e2e2e2] relative">
        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          
          {/* Inputs... (Same as before) */}
          <div>
            <input 
              type="text" id="name" value={formData.name} onChange={handleChange}
              className={`w-full p-2 border rounded-lg outline-none transition-all ${errors.name ? 'border-red-500 bg-red-50' : 'border-[#e2e2e2] focus:ring-[#d4af37] focus:border-[#d4af37]'}`} 
              placeholder='Name' 
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <input 
              type="email" id="email" value={formData.email} onChange={handleChange}
              placeholder='Email' 
              className={`w-full p-2 border rounded-lg outline-none transition-all ${errors.email ? 'border-red-500 bg-red-50' : 'border-[#e2e2e2] focus:ring-[#d4af37] focus:border-[#d4af37]'}`} 
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <input 
              type="text" id="company" value={formData.company} onChange={handleChange}
              placeholder='Company' 
              className={`w-full p-2 border rounded-lg outline-none transition-all ${errors.company ? 'border-red-500 bg-red-50' : 'border-[#e2e2e2] focus:ring-[#d4af37] focus:border-[#d4af37]'}`} 
            />
            {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
          </div>

          <div>
            <select 
              id="interested" value={formData.interested} onChange={handleChange}
              className={`w-full p-2 border rounded-lg outline-none text-gray-600 transition-all ${errors.interested ? 'border-red-500 bg-red-50' : 'border-[#e2e2e2] focus:ring-[#d4af37] focus:border-[#d4af37]'}`}
            >
              <option value="">What type of project do you need?</option>
              <option value="Website">Website</option>
              <option value="Mobile App">Mobile App</option>
              <option value="Software Development">Software Development</option>
            </select>
            {errors.interested && <p className="text-red-500 text-xs mt-1">{errors.interested}</p>}
          </div>

          <div>
            <textarea 
              id="message" rows="3" value={formData.message} onChange={handleChange}
              placeholder='Message' 
              className={`w-full p-2 border rounded-lg outline-none resize-none transition-all ${errors.message ? 'border-red-500 bg-red-50' : 'border-[#e2e2e2] focus:ring-[#d4af37] focus:border-[#d4af37]'}`}
            ></textarea>
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>

          <div className="flex justify-end">
            <button 
              type="submit" 
              disabled={isLoading}
              className="flex items-center gap-2 bg-[#d4af37] hover:bg-[#b5952f] text-white text-xs font-bold py-2 px-4 rounded-full shadow-sm transition-colors focus:outline-none uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>SENDING... <Loader2 size={14} className="animate-spin" /></>
              ) : (
                <>SEND <Send size={14} /></>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Footer = () => {
  // ... (Your existing footer code remains exactly the same, just keeping the import of ContactForm)
  return (
    <footer id="contact" className="bg-[#f9f9f9] pt-20 pb-12 border-t border-[#e2e2e2] relative overflow-hidden">
      {/* ... keeping the rest of your layout ... */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16" data-aos="fade-up" data-aos-delay="100">
          
          {/* Brand/Location Column */}
          <div className="flex flex-col items-start" >
             <div className="absolute inset-x-0 top-0 flex justify-center z-0 pointer-events-none">
                <img src={footerBg} alt="Footer" className="w-full max-w-2xl h-auto object-contain opacity-100" />
              </div>
            <div className="relative z-10 w-full">
              <h5 className="font-bold text-gray-900 mb-6">Location</h5>
              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#d4af37] mt-1 shrink-0" />
                  <span>Level 1, 123 Digital Drive<br/>Sydney, NSW 2000<br/>Australia</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-[#d4af37] shrink-0" />
                  <a href="https://wa.me/61419616922" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors cursor-pointer">+61 419 616 922</a>                
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-[#d4af37] shrink-0" />
                  <span>info@melbote.com</span>
                </li>
              </ul>
              <div className='py-8'> 
                <Link to="/" className="mb-6 inline-block"><img src={logo} alt="Melbote Logo" className="h-10 w-auto object-cover"/></Link>
                <p className="text-gray-600 text-sm leading-relaxed mt-2 max-w-xs">Leading the digital transformation in Australia, powered by global technology excellence.</p>
              </div>
            </div>
          </div>

          {/* Links Column */}
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

          {/* Contact Form Column */}
          <div>
            <ContactForm />
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-xs text-gray-600">© 2026 Melbote. All rights reserved. A subsidiary of a pan-APAC technology leader.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;