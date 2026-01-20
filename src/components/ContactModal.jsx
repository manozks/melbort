import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Loader2 } from 'lucide-react';

// --- Validation Helper ---
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          // 🔴 PASTE YOUR WEB3FORMS ACCESS KEY HERE
          access_key: "9d740cf6-0829-4cc2-8a01-9497a8f56628", 
          ...formData,
          subject: `New Inquiry from ${formData.name}`
        }),
      });

      const result = await response.json();
      if (result.success) setIsSubmitted(true);
      else alert("Something went wrong.");
    } catch (error) {
      alert("Connection failed.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-sm overflow-hidden animate-fade-in-up min-h-[500px] flex flex-col">
        
        <button onClick={onClose} className={`absolute top-5 right-5 z-20 ${isSubmitted ? 'text-white/70 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`}>
          <X size={24} />
        </button>

        {isSubmitted ? (
          <div className="bg-[#d4af37] text-white p-8 h-full flex flex-col justify-between flex-grow">
            <div className="mt-12"><h2 className="text-5xl font-bold leading-tight">Thank<br/>You.</h2></div>
            <div className="mb-8">
              <div className="w-full h-px bg-white/20 mb-8"></div>
              <p className="text-xl font-medium">We'll be in touch.<br/>Shortly!</p>
              <div className="flex justify-end mt-10">
                 <button onClick={onClose} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:opacity-80">
                  Next <div className="bg-[#7c620e] p-2 rounded-full"><ArrowRight size={16} /></div>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-8 h-full flex flex-col flex-grow">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 mt-2">Get in touch</h2>
            <form onSubmit={handleSubmit} className="flex-grow flex flex-col justify-between space-y-4">
              <div className="space-y-5">
                {/* Name */}
                <div className="relative border-b border-gray-200 focus-within:border-[#d4af37] transition-colors pb-1">
                  <label className="block text-xs text-gray-500 font-medium mb-1">Name</label>
                  <input 
                    type="text" id="name" value={formData.name} onChange={handleChange}
                    className="w-full outline-none text-gray-900 font-medium bg-transparent text-sm placeholder-gray-300"
                    placeholder="Manish Rijal"
                  />
                </div>

                {/* Email */}
                <div className={`relative border-b transition-colors pb-1 ${errors.email ? 'border-red-500' : 'border-gray-200 focus-within:border-[#d4af37]'}`}>
                  <label className="block text-xs text-gray-500 font-medium mb-1">Email</label>
                  <input 
                    type="email" id="email" value={formData.email} onChange={handleChange}
                    className="w-full outline-none text-gray-900 font-medium bg-transparent text-sm placeholder-gray-300"
                    placeholder="manish@example.com"
                  />
                </div>

                {/* Company */}
                <div className="relative border-b border-gray-200 focus-within:border-[#d4af37] transition-colors pb-1">
                  <label className="block text-xs text-gray-500 font-medium mb-1">Company</label>
                  <input 
                    type="text" id="company" value={formData.company} onChange={handleChange}
                    className="w-full outline-none text-gray-900 font-medium bg-transparent text-sm placeholder-gray-300"
                    placeholder="Your Company"
                  />
                </div>

                {/* Interested In */}
                <div className="relative border-b border-gray-200 focus-within:border-[#d4af37] transition-colors pb-1">
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
                  <div className="absolute right-0 bottom-2 pointer-events-none">
                     <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>

                {/* Message */}
                <div className="relative border-b border-gray-200 focus-within:border-[#d4af37] transition-colors pb-1">
                  <label className="block text-xs text-gray-500 font-medium mb-1">Message</label>
                  <textarea 
                    id="message" rows="2" value={formData.message} onChange={handleChange}
                    className="w-full outline-none text-gray-900 font-medium bg-transparent resize-none text-sm placeholder-gray-300"
                    placeholder="Hello..."
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end pt-4 items-center gap-3">
                <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase">Send</span>
                <button type="submit" disabled={isLoading} className="bg-[#d4af37] hover:bg-[#7c620e] text-white rounded-full p-3 shadow-lg hover:scale-105 disabled:opacity-50 w-12 h-12 flex items-center justify-center">
                  {isLoading ? <Loader2 size={20} className="animate-spin" /> : <ArrowRight size={20} />}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal;