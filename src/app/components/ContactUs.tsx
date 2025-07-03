'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Calendar,
  ArrowRight,
  Send,
  ChevronDown,
  Linkedin,
  Instagram,
  Facebook,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const ContactUs: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleBookAppointment = () => {
    router.push('/appointment');
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setFormStatus('submitting');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormStatus('idle');
        }, 5000);
      } else {
        setFormStatus('error');
        console.error('Error submitting form:', data.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleFaq = (index: number) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  const faqs = [
    {
      question: "What services does Konnections IMAG offer?",
      answer: "We offer a comprehensive range of PR and communication services including public relations, crisis management, corporate communications, digital media, financial communications, and specialized consulting services tailored to your specific industry needs."
    },
    {
      question: "How quickly can you respond to a PR crisis?",
      answer: "Our crisis management team is available 24/7 and can respond immediately to urgent situations. We have an established protocol that allows us to mobilize resources quickly and implement strategic communication plans within hours of being notified."
    },
    {
      question: "What industries do you specialize in?",
      answer: "While we have experience across diverse sectors, we have particular expertise in technology, healthcare, finance, consumer goods, education, and non-profit organizations. Our team's specialized knowledge allows us to create industry-specific strategies that resonate with your target audience."
    },
    {
      question: "How do you measure the success of PR campaigns?",
      answer: "We use a combination of quantitative and qualitative metrics including media coverage analysis, sentiment analysis, engagement metrics, message penetration, and business impact indicators. We provide comprehensive reports and analytics dashboards to track performance against your specific goals."
    }
  ];

  return (
    <section id="contact" className="relative min-h-screen overflow-hidden mobile-container py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-[#348992]/10 to-[#d73c77]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-[#d73c77]/8 to-[#348992]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-2xl"></div>
      </div>

      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Enhanced Hero Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#348992]/10 to-[#d73c77]/10 rounded-full mb-6 border border-[#348992]/20">
            <MessageCircle className="w-4 h-4 text-[#348992]" />
            <span className="text-sm font-medium text-[#348992]">Get In Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#2d6389] via-[#348992] to-[#d73c77] bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Let&apos;s Start a Conversation That Matters
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="w-32 h-1 bg-gradient-to-r from-[#2d6389] via-[#348992] to-[#d73c77] mx-auto rounded-full mt-6"
          />
        </motion.div>

        {/* Enhanced Contact Information Grid */}
        <motion.div 
          variants={itemVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {[
            {
              icon: <Mail className="w-6 h-6" />,
              title: "Email Us",
              content: "info@konnections.co.in",
              gradient: "from-[#2d6389] to-[#348992]",
              bgGradient: "from-blue-50 to-indigo-50"
            },
            {
              icon: <Phone className="w-6 h-6" />,
              title: "Call Us",
              content: "+91 7032939360",
              gradient: "from-[#348992] to-[#d73c77]",
              bgGradient: "from-green-50 to-emerald-50"
            },
            {
              icon: <MapPin className="w-6 h-6" />,
              title: "Visit Us",
              content: "Konnections IMAG\n6-3-596/102F, 2nd Floor, Navin Nagar,\nBanjara Hills, Hyderabad, Telangana - 500004",
              gradient: "from-[#d73c77] to-[#2d6389]",
              bgGradient: "from-purple-50 to-pink-50"
            },
            {
              icon: <Clock className="w-6 h-6" />,
              title: "Office Hours",
              content: "Mon - Fri, 9AM - 6PM",
              gradient: "from-[#2d6389] to-[#d73c77]",
              bgGradient: "from-amber-50 to-orange-50"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${item.bgGradient} p-6 rounded-2xl border border-white/20 group cursor-pointer`}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center text-white mb-4 group-hover:shadow-lg transition-all duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-lg font-bold text-[#2d6389] mb-2">{item.title}</h3>
              <p className="text-gray-600 whitespace-pre-line leading-relaxed">{item.content}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form and Map Section */}
        <motion.div 
          variants={itemVariants}
          className="grid md:grid-cols-5 gap-8 mb-16"
        >
          {/* Contact Form */}
          <div className="md:col-span-3 bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#348992]/5 via-transparent to-[#d73c77]/5"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-[#2d6389] mb-6">
                Send Us a Message
              </h2>

              {/* Form Status Message */}
              {formStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-3 p-4 bg-green-50 text-green-700 rounded-xl mb-6"
                >
                  <CheckCircle className="w-5 h-5" />
                  <p>Your message has been sent successfully! We&apos;ll get back to you soon.</p>
                </motion.div>
              )}

              {formStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-3 p-4 bg-red-50 text-red-700 rounded-xl mb-6"
                >
                  <AlertCircle className="w-5 h-5" />
                  <p>There was an error sending your message. Please try again later.</p>
                </motion.div>
              )}

              <form onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#348992]/20 focus:border-[#348992] transition-colors outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#348992]/20 focus:border-[#348992] transition-colors outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 1234567890"
                      className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#348992]/20 focus:border-[#348992] transition-colors outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#348992]/20 focus:border-[#348992] transition-colors outline-none appearance-none"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z' fill='%232d6389'/%3E%3C/svg%3E")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', paddingRight: '3rem' }}
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="New Project">New Project</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Career">Career Opportunity</option>
                      <option value="Support">Support</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#348992]/20 focus:border-[#348992] transition-colors outline-none resize-none"
                  ></textarea>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">* Required fields</p>
                  <motion.button
                    type="submit"
                    className="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#348992] to-[#2d6389] text-white font-semibold rounded-xl shadow-lg transition-all duration-300 relative overflow-hidden"
                    whileHover={{ scale: formStatus === 'submitting' ? 1 : 1.03 }}
                    whileTap={{ scale: formStatus === 'submitting' ? 1 : 0.97 }}
                    disabled={formStatus === 'submitting'}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2d6389] to-[#d73c77] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {formStatus === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-t-2 border-r-2 border-white rounded-full animate-spin mr-2 relative z-10"></div>
                        <span className="relative z-10">Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2 relative z-10" />
                        <span className="relative z-10">Send Message</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </div>

          {/* Map and Social Media */}
          <div className="md:col-span-2 space-y-8">
            {/* Map */}
            <div className="bg-white/70 backdrop-blur-xl p-4 rounded-3xl shadow-xl border border-white/20 relative overflow-hidden h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-[#348992]/5 via-transparent to-[#d73c77]/5"></div>
              <div className="relative z-10 h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8948880316625!2d78.44935877421022!3d17.41683130195812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a0e6555554f%3A0x3b469d80bb33445f!2sKonnections%20IMAG!5e0!3m2!1sen!2sin!4v1751519166835!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '1rem' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Konnections IMAG Location"
                ></iframe>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-white/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#348992]/5 via-transparent to-[#d73c77]/5"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-[#2d6389] mb-6 text-center">Connect With Us</h3>
                <div className="flex justify-center items-center gap-4">
                  {[
                    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", color: "bg-[#0077B5] hover:bg-[#0077B5]/80", url: "https://www.linkedin.com/company/konnectionsimag/posts/?feedView=all" },
                    { icon: <Facebook className="w-5 h-5" />, label: "Facebook", color: "bg-[#4267B2] hover:bg-[#4267B2]/80", url: "https://www.facebook.com/Konnections/" },
                    { icon: <Instagram className="w-5 h-5" />, label: "Instagram", color: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:opacity-90", url: "https://www.instagram.com/konnections.imag/" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow us on ${social.label}`}
                      className={`w-14 h-14 ${social.color} rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQs Section */}
        <motion.div
          variants={itemVariants}
          className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/20 relative overflow-hidden mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#348992]/5 via-transparent to-[#d73c77]/5"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-[#2d6389] mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="border border-gray-200 rounded-2xl overflow-hidden"
                  initial={false}
                  animate={{ height: activeFaq === index ? 'auto' : '60px' }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left text-[#2d6389] font-medium focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-[#348992] transition-transform duration-300 ${activeFaq === index ? 'transform rotate-180' : ''}`} 
                    />
                  </button>
                  <div className={`px-6 pb-6 ${activeFaq === index ? 'block' : 'hidden'}`}>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center bg-white/70 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl border border-white/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#348992]/5 via-transparent to-[#d73c77]/5"></div>
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-16 h-16 bg-gradient-to-br from-[#348992] to-[#2d6389] rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Calendar className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d6389] mb-6">
              Ready to Transform Your Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Book a consultation with our experts and discover how we can elevate your brand&apos;s communication strategy.
            </p>
            <motion.button
              onClick={handleBookAppointment}
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#348992] to-[#2d6389] text-white text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#2d6389] to-[#d73c77] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Calendar className="w-5 h-5 mr-3 relative z-10" />
              <span className="relative z-10">Book Your Appointment</span>
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactUs;