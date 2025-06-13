'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Shield, 
  Clock, 
  AlertTriangle, 
  Target, 
  Users, 
  Zap,
  ArrowLeft,
  CheckCircle,
  Phone,
  Eye,
  TrendingUp
} from 'lucide-react';

const CrisisManagementPage: React.FC = () => {
  const services = [
    {
      title: "Crisis Communication Planning",
      description: "Develop comprehensive crisis communication strategies and protocols before issues arise to ensure rapid, effective response",
      icon: <Target className="w-6 h-6" />,
      features: ["Crisis Response Protocols", "Communication Templates", "Stakeholder Mapping", "Risk Assessment"]
    },
    {
      title: "24/7 Crisis Response",
      description: "Round-the-clock crisis management support with immediate response capabilities and strategic guidance",
      icon: <Clock className="w-6 h-6" />,
      features: ["Immediate Response Team", "Real-time Monitoring", "Emergency Hotline", "Rapid Communication"]
    },
    {
      title: "Reputation Recovery Strategies",
      description: "Strategic programs to rebuild and restore brand reputation following crisis situations",
      icon: <TrendingUp className="w-6 h-6" />,
      features: ["Reputation Rebuilding", "Trust Restoration", "Brand Recovery Plans", "Long-term Monitoring"]
    },
    {
      title: "Media Training & Spokesperson Development",
      description: "Comprehensive media training to prepare executives and spokespersons for crisis communications",
      icon: <Users className="w-6 h-6" />,
      features: ["Executive Media Training", "Spokesperson Coaching", "Crisis Simulations", "Message Development"]
    },
    {
      title: "Stakeholder Communication Management",
      description: "Coordinated communication strategies for all stakeholder groups during crisis situations",
      icon: <Shield className="w-6 h-6" />,
      features: ["Stakeholder Mapping", "Communication Coordination", "Feedback Management", "Relationship Maintenance"]
    },
    {
      title: "Risk Assessment & Mitigation",
      description: "Proactive identification and assessment of potential reputation risks with mitigation strategies",
      icon: <Eye className="w-6 h-6" />,
      features: ["Risk Identification", "Vulnerability Assessment", "Mitigation Planning", "Preventive Measures"]
    }
  ];

  const responseCapabilities = [
    { capability: "< 1 Hour", label: "Initial Response Time" },
    { capability: "24/7", label: "Crisis Monitoring" }, 
    { capability: "100+", label: "Crisis Handled Successfully" },
    { capability: "15 Min", label: "Team Mobilization" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50/30">
      {/* Hero Section with Image Overlay */}
      <section className="relative py-24 px-4 sm:px-8 lg:px-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-[#2d6389]/20 to-[#348992]/30"
          style={{
            backgroundImage: "url('/api/placeholder/1920/1080')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/80 via-[#2d6389]/60 to-[#348992]/70"></div>
        
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
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Crisis Protection</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Crisis Management &
              <br />
              <span className="bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
                Emergency Response
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
              Protect your reputation with our 24/7 crisis management services, 
              strategic response planning, and expert reputation recovery solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.div
                className="flex items-center gap-2 px-6 py-3 bg-red-500/90 hover:bg-red-500 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span>24/7 Crisis Hotline</span>
              </motion.div>
              <div className="text-white/80 text-sm">
                Immediate response within 1 hour
              </div>
            </div>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="w-32 h-1 bg-gradient-to-r from-white to-red-100 mx-auto rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Response Capabilities */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 bg-white/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {responseCapabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-[#2d6389] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {item.capability}
                </div>
                <p className="text-gray-600 font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Crisis Alert Banner */}
      <section className="py-8 px-4 sm:px-8 lg:px-16 bg-gradient-to-r from-red-500 to-red-600">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between text-white"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <AlertTriangle className="w-8 h-8 text-yellow-300" />
              <div>
                <h3 className="text-xl font-bold">Crisis Situation?</h3>
                <p className="text-white/90">Get immediate expert assistance</p>
              </div>
            </div>
            <motion.div
              className="flex items-center gap-2 px-6 py-3 bg-white text-red-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              <span>Call Crisis Hotline</span>
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
              <span className="bg-gradient-to-r from-red-600 via-[#2d6389] to-[#348992] bg-clip-text text-transparent">
                Comprehensive Crisis Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Protect your reputation with our strategic crisis management and emergency response capabilities
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
                      className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-[#2d6389]/20 to-[#348992]/20"
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
                        <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-red-600 shadow-lg">
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
                        <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
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

      {/* Crisis Response Process */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-red-50 to-[#348992]/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-600 via-[#2d6389] to-[#348992] bg-clip-text text-transparent">
                Our Crisis Response Process
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Immediate Assessment",
                description: "Rapid situation analysis and impact evaluation within 15 minutes",
                icon: <Zap className="w-8 h-8" />
              },
              {
                step: "02", 
                title: "Strategic Planning",
                description: "Develop targeted response strategy and key messaging framework",
                icon: <Target className="w-8 h-8" />
              },
              {
                step: "03",
                title: "Coordinated Response",
                description: "Execute multi-channel communication plan across all stakeholders",
                icon: <Users className="w-8 h-8" />
              },
              {
                step: "04",
                title: "Recovery & Monitoring",
                description: "Long-term reputation recovery with continuous monitoring and optimization",
                icon: <TrendingUp className="w-8 h-8" />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="text-6xl font-bold text-red-100 mb-4">{step.step}</div>
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-[#2d6389] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg -mt-12 relative z-10">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2d6389] mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CrisisManagementPage;
