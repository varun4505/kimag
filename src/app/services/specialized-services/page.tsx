'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import DraggableCarousel from '@/app/components/DraggableCarousel';
import Navbar from '@/app/components/Navbar';
import { 
  Settings, 
  Users, 
  Search, 
  Palette, 
  Building2, 
  BarChart3,
  ArrowLeft,
  Zap,
  Eye,
  Target
} from 'lucide-react';

const SpecializedServicesPage: React.FC = () => {
  const services = [
    {
      title: "Media Training & Workshops",
      description: "Comprehensive media training programs to prepare executives and spokespersons for effective media interactions",
      icon: <Users className="w-6 h-6" />,
      features: ["Executive Media Training", "Interview Techniques", "Crisis Communication Training", "On-camera Training"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Market Intelligence & Research",
      description: "Strategic market research and intelligence services to inform communication strategies and business decisions",
      icon: <Search className="w-6 h-6" />,
      features: ["Market Analysis", "Competitive Intelligence", "Brand Perception Studies", "Stakeholder Research"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Creative Services & Content Development",
      description: "Innovative creative solutions and content development for comprehensive communication campaigns",
      icon: <Palette className="w-6 h-6" />,
      features: ["Creative Campaign Development", "Brand Identity Design", "Multimedia Content", "Visual Communication"],
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "B2B Communications",
      description: "Specialized business-to-business communication strategies for complex industrial and professional markets",
      icon: <Building2 className="w-6 h-6" />,
      features: ["Industrial Communication", "Professional Services PR", "Trade Media Relations", "B2B Content Strategy"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Measurement & Analytics",
      description: "Comprehensive measurement frameworks and analytics to track communication effectiveness and ROI",
      icon: <BarChart3 className="w-6 h-6" />,
      features: ["Performance Measurement", "ROI Analysis", "Communication Audits", "Analytics Reporting"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Communication Audit & Strategy",
      description: "In-depth communication audits and strategic planning to optimize organizational communication effectiveness",
      icon: <Eye className="w-6 h-6" />,
      features: ["Communication Assessment", "Strategic Planning", "Gap Analysis", "Optimization Strategies"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
      {/* Hero Section with Image Overlay */}
      <section className="relative py-24 px-4 sm:px-8 lg:px-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-[#2d6389]/20 to-purple-700/30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 via-[#2d6389]/60 to-purple-700/70"></div>
        
        <motion.div 
          className="max-w-7xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Breadcrumb */}
          <Link 
            href="/#ourservies" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>
          
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <Settings className="w-4 h-4" />
              <span className="text-sm font-medium">Expert Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Specialized Services &
              <br />
              <span className="bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
                Consulting
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
              Access expert consulting and specialized communication services tailored 
              to your unique industry needs and business challenges
            </p>
            
            <div className="flex justify-center mb-8">
              <Link href="/appointment">
                <motion.div
                  className="flex items-center gap-2 px-8 py-4 bg-orange-600/90 hover:bg-orange-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Target className="w-5 h-5" />
                  <span>Book Expert Consultation</span>
                </motion.div>
              </Link>
            </div>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="w-32 h-1 bg-gradient-to-r from-white to-orange-100 mx-auto rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Details */}
      <section className="py-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-600 via-[#348992] to-purple-600 bg-clip-text text-transparent">
                Specialized Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Expert-level specialized services tailored to your unique communication challenges
            </p>
          </motion.div>

        </div>
      </section>

      {/* Draggable Services Carousel */}
      <DraggableCarousel 
        services={services} 
        gradientColors="from-orange-500/40 via-[#348992]/30 to-purple-600/40"
      />

      {/* Expert Consultation Banner */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-purple-600 to-orange-500">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20"
          >
            <Zap className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-medium text-white">
              Ready to Elevate Your Communication Strategy?
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            Expert Consultation to Drive Your Success
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Partner with our experts for tailored solutions that deliver measurable results and drive impactful change.
          </motion.p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-orange-600 hover:bg-orange-500 transition-colors duration-300 rounded-full text-white font-semibold shadow-md hover:shadow-lg"
          >
            <Target className="w-5 h-5" />
            <span>Get Started with a Free Consultation</span>
          </Link>
        </div>
      </section>

      {/* Areas of Specialization */}
      <section className="py-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-600 via-[#2d6389] to-purple-600 bg-clip-text text-transparent">
                Areas of Specialization
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                area: "Training Excellence",
                description: "Comprehensive training programs for media, crisis, and communication skills",
                icon: <Users className="w-8 h-8" />
              },
              {
                area: "Research & Intelligence", 
                description: "Data-driven insights and market intelligence for strategic decision making",
                icon: <Search className="w-8 h-8" />
              },
              {
                area: "Creative Innovation",
                description: "Cutting-edge creative solutions and content development services",
                icon: <Palette className="w-8 h-8" />
              },
              {
                area: "Analytics & Measurement",
                description: "Advanced analytics and measurement frameworks for communication ROI",
                icon: <BarChart3 className="w-8 h-8" />
              }
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2d6389] mb-4">{area.area}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default SpecializedServicesPage;
