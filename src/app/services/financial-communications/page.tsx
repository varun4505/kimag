'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import DraggableCarousel from '@/app/components/DraggableCarousel';
import Navbar from '@/app/components/Navbar';
import { 
  TrendingUp, 
  Building, 
  Users, 
  FileText, 
  Shield, 
  BarChart3,
  ArrowLeft,
  Globe,
  Award
} from 'lucide-react';

const FinancialCommunicationsPage: React.FC = () => {
  const services = [
    {
      title: "IR/Corporate Website Development",
      description: "Design and develop comprehensive investor relations websites with seamless user experience and regulatory compliance",
      icon: <Globe className="w-6 h-6" />,
      features: ["Responsive IR Websites", "Regulatory Compliance", "Document Management", "Investor Portal Development"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Investor Relations & Outreach",
      description: "Strategic investor communication programs to build strong relationships with institutional and retail investors",
      icon: <Users className="w-6 h-6" />,
      features: ["Investor Roadshows", "Conference Participation", "One-on-One Meetings", "Investor Database Management"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Analyst & Fund Manager Relations",
      description: "Build and maintain relationships with research analysts and fund managers to ensure accurate coverage and valuation",
      icon: <BarChart3 className="w-6 h-6" />,
      features: ["Analyst Briefings", "Research Coverage", "Consensus Management", "Sell-side Relations"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Disclosure Policy & Training",
      description: "Develop comprehensive disclosure policies and provide training to ensure regulatory compliance and transparency",
      icon: <Shield className="w-6 h-6" />,
      features: ["Policy Development", "Compliance Training", "Disclosure Guidelines", "Risk Management"],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Corporate Governance Communication",
      description: "Strategic communication around corporate governance practices, board changes, and governance initiatives",
      icon: <Building className="w-6 h-6" />,
      features: ["Board Communications", "ESG Reporting", "Governance Frameworks", "Transparency Initiatives"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Earnings Communication",
      description: "Comprehensive earnings communication strategies including results preparation, conference calls, and follow-up activities",
      icon: <FileText className="w-6 h-6" />,
      features: ["Earnings Presentations", "Conference Call Management", "Results Analysis", "Guidance Communication"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero Section with Image Overlay */}
      <section className="relative py-24 px-4 sm:px-8 lg:px-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-[#2d6389]/20 to-green-600/30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-[#2d6389]/60 to-green-600/70"></div>
        
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
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">Financial Excellence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Financial Communications &
              <br />
              <span className="bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                Investor Relations
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
              Build investor confidence and enhance market perception through strategic financial 
              communications and comprehensive investor relations services
            </p>
            
            <div className="flex justify-center mb-8">
              <Link href="/appointment">
                <motion.div
                  className="flex items-center gap-2 px-8 py-4 bg-green-600/90 hover:bg-green-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <TrendingUp className="w-5 h-5" />
                  <span>Book Financial Communications Session</span>
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
                Comprehensive Financial Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Build trust with investors and stakeholders through transparent, strategic financial communications
            </p>
          </motion.div>

          {/* Draggable Services Carousel */}
          <DraggableCarousel 
            services={services} 
            gradientColors="from-green-500/40 via-[#2d6389]/30 to-blue-600/40"
          />
        </div>
      </section>

      {/* Why Choose Our Financial Communications */}
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
                Why Choose Our Financial Communications?
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Market Expertise",
                description: "Deep understanding of financial markets, investor behavior, and regulatory requirements",
                icon: <TrendingUp className="w-8 h-8" />
              },
              {
                title: "Regulatory Compliance", 
                description: "Comprehensive knowledge of financial regulations and disclosure requirements across markets",
                icon: <Shield className="w-8 h-8" />
              },
              {
                title: "Proven Results",
                description: "Track record of successful IPOs, investor relations programs, and valuation improvements",
                icon: <Award className="w-8 h-8" />
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-[#2d6389] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2d6389] mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default FinancialCommunicationsPage;
