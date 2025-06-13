'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function CaseStudiesPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    reason: '',
    sector: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.name || !form.email || !form.reason || !form.sector) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/case-studies/access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert('Access request submitted successfully! We will review your request and get back to you soon.');
        setForm({
          name: '',
          email: '',
          company: '',
          phone: '',
          reason: '',
          sector: ''
        });
      } else {
        const result = await response.json();
        alert(result.error || 'Failed to submit access request.');
      }
    } catch (error) {
      console.error('Error submitting access request:', error);
      alert('An error occurred while submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />
      
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-br from-[#2d6389]/10 to-[#348992]/10 blur-xl"></div>
        <div className="absolute bottom-32 right-32 w-40 h-40 rounded-full bg-gradient-to-br from-[#348992]/10 to-[#d73c77]/10 blur-xl"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 px-6"
        >
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-r from-[#2d6389]/10 via-[#348992]/10 to-[#d73c77]/10 backdrop-blur-xl border border-white/30 rounded-full shadow-lg">
            <span className="text-[#2d6389] font-semibold text-sm tracking-wider uppercase">
              Exclusive Access
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-gray-800">
            Request Access to Our
            <br />
            <span className="bg-gradient-to-r from-[#2d6389] via-[#348992] to-[#d73c77] bg-clip-text text-transparent">
              Case Studies
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get exclusive access to our detailed case studies, project insights, and success stories. 
            Tell us about your project and we&apos;ll share relevant examples that can inspire your next big idea.
          </p>
        </motion.div>

        {/* Features Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto px-6 mb-12"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#2d6389] to-[#348992] rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Industry-Specific Cases</h3>
              <p className="text-gray-600">Sector-specific case studies from Hospitality, Real Estate, Healthcare, Technology, and more.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#348992] to-[#d73c77] rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Proven Results</h3>
              <p className="text-gray-600">Real metrics and outcomes from campaigns that drove significant growth for our clients.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#d73c77] to-[#2d6389] rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Strategic Insights</h3>
              <p className="text-gray-600">Behind-the-scenes look at our creative process and strategic thinking for each project.</p>
            </div>
          </div>
        </motion.div>

        {/* Form Section */}
        <div className="max-w-4xl mx-auto px-6">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Request Access Form</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#348992]/20 focus:border-[#348992] transition-colors outline-none"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#348992]/20 focus:border-[#348992] transition-colors outline-none"
                  required
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm(f => ({ ...f, company: e.target.value }))}
                  placeholder="Enter your company name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#348992]/20 focus:border-[#348992] transition-colors outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#348992]/20 focus:border-[#348992] transition-colors outline-none"
                />
              </div>

              {/* Sector Selection */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry Sector *
                </label>
                <select
                  value={form.sector}
                  onChange={(e) => setForm(f => ({ ...f, sector: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#348992]/20 focus:border-[#348992] transition-colors outline-none"
                  required
                >
                  <option value="">Select your industry sector</option>
                  <option value="hospitality">Hospitality & Tourism</option>
                  <option value="real-estate">Real Estate & Property</option>
                  <option value="healthcare">Healthcare & Medical</option>
                  <option value="technology">Technology & Software</option>
                  <option value="retail">Retail & E-commerce</option>
                  <option value="finance">Finance & Banking</option>
                  <option value="education">Education & Training</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Reason */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want access to our case studies? *
                </label>
                <textarea
                  value={form.reason}
                  onChange={(e) => setForm(f => ({ ...f, reason: e.target.value }))}
                  placeholder="Tell us about your project or how our case studies might help you..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#348992]/20 focus:border-[#348992] transition-colors outline-none resize-none"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex justify-center">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`
                  px-12 py-4 rounded-xl font-semibold text-lg transition-all duration-300 relative
                  ${!isSubmitting
                    ? 'bg-gradient-to-r from-[#2d6389] to-[#348992] text-white shadow-lg hover:shadow-xl' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }
                `}
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-400"></div>
                    <span>Submitting...</span>
                  </div>
                ) : (
                  'Request Access'
                )}
              </motion.button>
            </div>

            <p className="text-sm text-gray-500 text-center mt-4">
              We typically respond to access requests within 24 hours during business days.
            </p>
          </motion.form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
