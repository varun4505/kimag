'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import DraggableCarousel from '@/app/components/DraggableCarousel';
import Navbar from '@/app/components/Navbar';
import { 
  Building, 
  Users, 
  MessageSquare, 
  Calendar, 
  Award, 
  Target,
  ArrowLeft,
  Briefcase,
  Globe,
  Heart,
  Lightbulb
} from 'lucide-react';

const CorporateCommunicationsPage: React.FC = () => {
  const services = [
    {
      title: "Internal Communications Strategy",
      description: "Develop comprehensive internal communication frameworks to align employees with organizational goals and values",
      icon: <MessageSquare className="w-6 h-6" />,
      features: ["Employee Engagement", "Change Communication", "Leadership Messaging", "Internal Newsletters"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Executive Communications",
      description: "Strategic positioning and communication support for C-level executives and senior leadership teams",
      icon: <Briefcase className="w-6 h-6" />,
      features: ["Thought Leadership", "Executive Positioning", "Speaking Engagements", "CEO Communication"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Corporate Social Responsibility (CSR)",
      description: "Strategic CSR communication programs that showcase your organization's commitment to social and environmental impact",
      icon: <Heart className="w-6 h-6" />,
      features: ["CSR Strategy", "Impact Reporting", "Sustainability Communication", "Community Engagement"],
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Event Management & Coordination",
      description: "End-to-end event planning and communication for corporate events, conferences, and stakeholder gatherings",
      icon: <Calendar className="w-6 h-6" />,
      features: ["Event Planning", "Conference Management", "Virtual Events", "Stakeholder Meetings"],
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Thought Leadership Development",
      description: "Build industry authority through strategic thought leadership programs and content development",
      icon: <Lightbulb className="w-6 h-6" />,
      features: ["Content Strategy", "Industry Speaking", "Expert Positioning", "Knowledge Sharing"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Industry Relations",
      description: "Strategic relationship building with industry associations, trade bodies, and professional networks",
      icon: <Globe className="w-6 h-6" />,
      features: ["Association Relations", "Industry Partnerships", "Trade Communication", "Network Building"],
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30">
      {/* Hero Section with Image Overlay */}
      <section className="relative py-24 px-4 sm:px-8 lg:px-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-[#2d6389]/20 to-green-700/30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-[#2d6389]/60 to-green-700/70"></div>
        
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
              <Building className="w-4 h-4" />
              <span className="text-sm font-medium">Corporate Excellence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Corporate
              <br />
              <span className="bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                Communications
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
              Align your organization with strategic internal and external corporate communication 
              solutions that drive engagement and build stakeholder confidence
            </p>
            
            <div className="flex justify-center mb-8">
              <Link href="/appointment">
                <motion.div
                  className="flex items-center gap-2 px-8 py-4 bg-green-600/90 hover:bg-green-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Target className="w-5 h-5" />
                  <span>Schedule Corporate Consultation</span>
                </motion.div>
              </Link>
            </div>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="w-32 h-1 bg-gradient-to-r from-white to-green-100 mx-auto rounded-full"
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
              <span className="bg-gradient-to-r from-green-600 via-[#2d6389] to-blue-600 bg-clip-text text-transparent">
                Complete Corporate Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Build organizational alignment and stakeholder engagement through strategic corporate communications
            </p>
          </motion.div>

          {/* Draggable Services Carousel */}
          <DraggableCarousel 
            services={services} 
            gradientColors="from-green-500/40 via-[#2d6389]/30 to-blue-600/40"
          />
        </div>
      </section>

      {/* Communication Excellence Framework */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-600 via-[#2d6389] to-blue-600 bg-clip-text text-transparent">
                Our Communication Framework
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                phase: "Strategy",
                description: "Comprehensive communication strategy development aligned with business objectives",
                icon: <Target className="w-8 h-8" />
              },
              {
                phase: "Implementation", 
                description: "Seamless execution of communication programs across all organizational levels",
                icon: <Users className="w-8 h-8" />
              },
              {
                phase: "Engagement",
                description: "Active stakeholder engagement and relationship building initiatives",
                icon: <MessageSquare className="w-8 h-8" />
              },
              {
                phase: "Optimization",
                description: "Continuous improvement and optimization based on feedback and analytics",
                icon: <Award className="w-8 h-8" />
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg">
                  {phase.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2d6389] mb-4">{phase.phase}</h3>
                <p className="text-gray-600 leading-relaxed">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default CorporateCommunicationsPage;
