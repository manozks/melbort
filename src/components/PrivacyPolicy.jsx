import React, { useEffect } from 'react';
// Optional: Import ArrowLeft if you want a back button
import { ArrowLeft, ShieldCheck } from 'lucide-react';

const PrivacyPolicy = () => {
  
  // Ensure page scrolls to top when opened
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f9f9f9] min-h-screen py-8">
      
      {/* --- HEADER SECTION --- */}
      <div className="bg-[#f9f9f9]  border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-[#d4af37]/10 rounded-full mb-6">
            <ShieldCheck className="text-[#d4af37]" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500 font-medium">Last updated: January 2026</p>
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="max-w-6xl mx-auto  bg-white rounded-[2rem] p-8 md:p-16 shadow-sm border border-[#e2e2e2] ">
        
        {/* Intro */}
        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          At <strong className="text-gray-900">Melbort</strong>, we respect your privacy and are committed to protecting your personal information. 
          This policy explains what data we collect, how we use it, and your rights regarding your personal information.
        </p>

        <div className="space-y-12">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">1. What Personal Information We Collect</h2>
            <p className="text-gray-700 mb-4">We may collect:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 marker:text-[#d4af37]">
              <li><strong>Identifiers:</strong> name, email, phone number, address, IP address</li>
              <li><strong>Account & Payment Info:</strong> login credentials, billing details, card numbers (processed securely)</li>
              <li><strong>Usage Data:</strong> browsing history, device info, referring pages, OS</li>
              <li><strong>Professional Data:</strong> job title, company name, employment history</li>
              <li><strong>Geolocation Data:</strong> when needed to improve service relevance</li>
              <li><strong>Other Data You Provide:</strong> surveys, testimonials, or reviews</li>
            </ul>
            <p className="text-gray-700 mt-4 italic">
              We also collect information automatically through cookies, web beacons, and analytics tools (Google Analytics, etc.).
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use your personal information to:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 marker:text-[#d4af37]">
              <li>Deliver and manage our services, projects, and communications</li>
              <li>Process payments and maintain accurate billing records</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Improve our website, services, and security</li>
              <li>Conduct analytics and research to enhance user experience</li>
              <li>Send updates, newsletters, and promotional offers (if opted in)</li>
              <li>Comply with legal obligations and requests</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">3. Sharing of Personal Data</h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell your personal information. We may share data with trusted service providers who support operations (hosting, analytics, CRM). Transfers outside Canada (e.g., to the U.S. or EU) are protected with <strong>Standard Contractual Clauses (SCCs)</strong>.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">4. Cookies & Tracking</h2>
            <p className="text-gray-700 mb-4">We use cookies to:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 marker:text-[#d4af37]">
              <li>Remember your preferences</li>
              <li>Measure website traffic and performance</li>
              <li>Deliver relevant marketing content</li>
            </ul>
            <p className="text-gray-700 mt-4">
              You can manage cookies through your browser settings or opt out of marketing cookies.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">5. Your Privacy Rights</h2>
            <p className="text-gray-700 mb-4">As a Canadian resident (or under GDPR), you have the right to:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 marker:text-[#d4af37]">
              <li><strong>Access</strong> your personal data</li>
              <li><strong>Request correction</strong> of inaccurate data</li>
              <li><strong>Request deletion</strong> when no longer needed</li>
              <li><strong>Withdraw consent</strong> for marketing communications</li>
              <li><strong>Receive a copy</strong> of your data in portable format</li>
            </ul>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border-l-4 border-[#d4af37]">
              <p className="text-gray-900 font-medium">
                To exercise these rights, email us at: <br/>
                <a href="mailto:hello@melbort.com" className="text-[#d4af37] hover:underline">
                  hello@melbort.com
                </a>
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">6. Data Security</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 marker:text-[#d4af37]">
              <li>SSL/TLS encryption</li>
              <li>Access controls and user authentication</li>
              <li>Regular vulnerability scanning and PCI DSS compliance</li>
            </ul>
            <p className="text-gray-700 mt-2">
              While no system is 100% secure, we take all reasonable steps to minimize risk.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">7. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain personal data only as long as necessary for the purposes described or to comply with legal requirements. Once no longer needed, we securely delete or anonymize it.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">8. Children’s Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are intended for business users. We do not knowingly collect data from anyone under 16 years of age.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">9. Updates to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Significant changes will be communicated by email or website notice.
            </p>
          </section>

        </div>

        {/* Back Button */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <a href="/" className="inline-flex items-center text-gray-600 hover:text-[#d4af37] font-medium transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default PrivacyPolicy;