'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Settings, 
  Users, 
  Search, 
  Palette, 
  Building2, 
  BarChart3,
  ArrowLeft,
  CheckCircle,
  Zap,
  Eye,
  Target,
  Award
} from 'lucide-react';

const SpecializedServicesPage: React.FC = () => {
  const services = [
    {
      title: "Media Training & Workshops",
      description: "Comprehensive media training programs to prepare executives and spokespersons for effective media interactions",
      icon: <Users className="w-6 h-6" />,
      features: ["Executive Media Training", "Interview Techniques", "Crisis Communication Training", "On-camera Training"]
    },
    {
      title: "Market Intelligence & Research",
      description: "Strategic market research and intelligence services to inform communication strategies and business decisions",
      icon: <Search className="w-6 h-6" />,
      features: ["Market Analysis", "Competitive Intelligence", "Brand Perception Studies", "Stakeholder Research"]
    },
    {
      title: "Creative Services & Content Development",
      description: "Innovative creative solutions and content development for comprehensive communication campaigns",
      icon: <Palette className="w-6 h-6" />,
      features: ["Creative Campaign Development", "Brand Identity Design", "Multimedia Content", "Visual Communication"]
    },
    {
      title: "B2B Communications",
      description: "Specialized business-to-business communication strategies for complex industrial and professional markets",
      icon: <Building2 className="w-6 h-6" />,
      features: ["Industrial Communication", "Professional Services PR", "Trade Media Relations", "B2B Content Strategy"]
    },
    {
      title: "Measurement & Analytics",
      description: "Comprehensive measurement frameworks and analytics to track communication effectiveness and ROI",
      icon: <BarChart3 className="w-6 h-6" />,
      features: ["Performance Measurement", "ROI Analysis", "Communication Audits", "Analytics Reporting"]
    },
    {
      title: "Communication Audit & Strategy",
      description: "In-depth communication audits and strategic planning to optimize organizational communication effectiveness",
      icon: <Eye className="w-6 h-6" />,
      features: ["Communication Assessment", "Strategic Planning", "Gap Analysis", "Optimization Strategies"]
    }
  ];

  const specializedMetrics = [
    { metric: "300+", label: "Training Sessions Conducted" },
    { metric: "50+", label: "Research Projects Completed" }, 
    { metric: "200+", label: "Creative Campaigns Launched" },
    { metric: "15+", label: "Years Specialized Experience" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
      {/* Hero Section with Image Overlay */}
      <section className="relative py-24 px-4 sm:px-8 lg:px-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-[#2d6389]/20 to-purple-700/30"
          style={{
            backgroundImage: "url('/api/placeholder/1920/1080')",
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
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="w-32 h-1 bg-gradient-to-r from-white to-orange-100 mx-auto rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Specialized Metrics */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 bg-white/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {specializedMetrics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {item.metric}
                </div>
                <p className="text-gray-600 font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Consultation Banner */}
      <section className="py-8 px-4 sm:px-8 lg:px-16 bg-gradient-to-r from-orange-500 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between text-white"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Zap className="w-8 h-8 text-yellow-300" />
              <div>
                <h3 className="text-xl font-bold">Need Expert Consultation?</h3>
                <p className="text-white/90">Get specialized communication solutions for your unique challenges</p>
              </div>
            </div>
            <motion.div
              className="flex items-center gap-2 px-6 py-3 bg-white text-orange-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Target className="w-5 h-5" />
              <span>Book Consultation</span>
            </motion.div>
          </motion.div>
        </div>
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
              <span className="bg-gradient-to-r from-orange-600 via-[#2d6389] to-purple-600 bg-clip-text text-transparent">
                Expert Specialized Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Access specialized expertise and consulting services designed for complex communication challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Service Image with Overlay */}
                  <div className="relative h-48 mb-6 rounded-2xl overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-[#2d6389]/20 to-purple-600/20"
                      style={{
                        backgroundImage: `url('/api/placeholder/400/300')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                    
                    {/* Icon and Text Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-between p-6">
                      <div className="flex justify-end">
                        <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-orange-600 shadow-lg">
                          {service.icon}
                        </div>
                      </div>
                      
                      <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                        <h3 className="text-lg font-bold text-[#2d6389] mb-2">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Expertise Areas */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-purple-50">
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
  );
};

export default SpecializedServicesPage;
