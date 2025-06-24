'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Calendar,
  ArrowRight
} from 'lucide-react';

const ContactUs: React.FC = () => {
  const router = useRouter();

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

  return (
    <section id="contact" className="relative min-h-screen overflow-hidden px-4 py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
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
          className="text-center mb-20"
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