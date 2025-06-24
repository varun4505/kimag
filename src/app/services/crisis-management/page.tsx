'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import DraggableCarousel from '@/app/components/DraggableCarousel';
import Navbar from '@/app/components/Navbar';
import { 
  Shield, 
  Clock, 
  AlertTriangle, 
  Target, 
  Users, 
  Zap,
  ArrowLeft,
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
      features: ["Crisis Response Protocols", "Communication Templates", "Stakeholder Mapping", "Risk Assessment"],
      image: "https://images.unsplash.com/photo-1566325593923-e4b76a8c5d44?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "24/7 Crisis Response",
      description: "Round-the-clock crisis management support with immediate response capabilities and strategic guidance",
      icon: <Clock className="w-6 h-6" />,
      features: ["Immediate Response Team", "Real-time Monitoring", "Emergency Support", "Rapid Communication"],
      image: "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Reputation Recovery Strategies",
      description: "Strategic programs to rebuild and restore brand reputation following crisis situations",
      icon: <TrendingUp className="w-6 h-6" />,
      features: ["Reputation Rebuilding", "Trust Restoration", "Brand Recovery Plans", "Long-term Monitoring"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Media Training & Spokesperson Development",
      description: "Comprehensive media training to prepare executives and spokespersons for crisis communications",
      icon: <Users className="w-6 h-6" />,
      features: ["Executive Media Training", "Spokesperson Coaching", "Crisis Simulations", "Message Development"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Stakeholder Communication Management",
      description: "Coordinated communication strategies for all stakeholder groups during crisis situations",
      icon: <Shield className="w-6 h-6" />,
      features: ["Stakeholder Mapping", "Communication Coordination", "Feedback Management", "Relationship Maintenance"],
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Risk Assessment & Mitigation",
      description: "Proactive identification and assessment of potential reputation risks with mitigation strategies",
      icon: <Eye className="w-6 h-6" />,
      features: ["Risk Identification", "Vulnerability Assessment", "Mitigation Planning", "Preventive Measures"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50/30">
      {/* Hero Section with Image Overlay */}
      <section className="relative py-24 px-4 sm:px-8 lg:px-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-[#2d6389]/20 to-[#348992]/30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
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
              <Link href="/appointment">
                <motion.div
                  className="flex items-center gap-2 px-6 py-3 bg-red-500/90 hover:bg-red-500 text-white font-semibold rounded-full shadow-lg transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5" />
                  <span>Book Crisis Consultation</span>
                </motion.div>
              </Link>
              <div className="text-white/80 text-sm">
                Expert guidance within 24 hours
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
            <Link href="/appointment">
              <motion.div
                className="flex items-center gap-2 px-6 py-3 bg-white text-red-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span>Schedule Crisis Consultation</span>
              </motion.div>
            </Link>
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

        </div>
      </section>

      {/* Draggable Services Carousel */}
      <DraggableCarousel 
        services={services} 
        gradientColors="from-red-500/40 via-[#2d6389]/30 to-[#348992]/40"
      />

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
    </>
  );
};

export default CrisisManagementPage;
