'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Target, 
  Users, 
  Megaphone, 
  Globe,
  ArrowLeft,
  CheckCircle,
  Star,
  Eye,
  Award
} from 'lucide-react';

const PublicRelationsPage: React.FC = () => {
  const services = [
    {
      title: "Media Relations & Strategic Counsel",
      description: "Build strong relationships with key media personnel and develop strategic messaging that resonates with your target audience",
      icon: <Megaphone className="w-6 h-6" />,
      features: ["Press Release Distribution", "Media Pitch Development", "Journalist Relationship Building", "Editorial Calendar Planning"]
    },
    {
      title: "Brand Building & Positioning", 
      description: "Establish and strengthen your brand's market position through consistent messaging and strategic communication initiatives",
      icon: <Award className="w-6 h-6" />,
      features: ["Brand Messaging Framework", "Competitive Positioning", "Market Research & Analysis", "Brand Story Development"]
    },
    {
      title: "Image Audit & Perception Analysis",
      description: "Comprehensive assessment of your current brand perception and strategic recommendations for improvement",
      icon: <Eye className="w-6 h-6" />,
      features: ["Reputation Assessment", "Stakeholder Surveys", "Media Monitoring", "Perception Gap Analysis"]
    },
    {
      title: "Consumer & Industry Relations",
      description: "Foster meaningful connections with consumers and industry stakeholders to build brand loyalty and market influence",
      icon: <Users className="w-6 h-6" />,
      features: ["Consumer Engagement Programs", "Industry Partnership Development", "Stakeholder Mapping", "Community Outreach"]
    },
    {
      title: "Digital PR & Online Reputation Management",
      description: "Manage your online presence and reputation across digital platforms with strategic content and engagement",
      icon: <Globe className="w-6 h-6" />,
      features: ["Online Reputation Monitoring", "Digital Content Strategy", "Social Media PR", "SEO-Optimized Content"]
    },
    {
      title: "Employee Communications",
      description: "Strengthen internal communications to align your workforce with company values and strategic objectives",
      icon: <Target className="w-6 h-6" />,
      features: ["Internal Newsletter Development", "Employee Engagement Surveys", "Change Communication", "Leadership Communication"]
    }
  ];

  const successMetrics = [
    { metric: "95%", label: "Media Coverage Success Rate" },
    { metric: "300+", label: "Media Relationships" }, 
    { metric: "50+", label: "Brand Positioning Projects" },
    { metric: "24/7", label: "Reputation Monitoring" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero Section with Image Overlay */}
      <section className="relative py-24 px-4 sm:px-8 lg:px-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#2d6389]/30 via-[#348992]/20 to-[#d73c77]/30"
          style={{
            backgroundImage: "url('/api/placeholder/1920/1080')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2d6389]/80 via-[#348992]/60 to-[#d73c77]/70"></div>
        
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
              <Target className="w-4 h-4" />
              <span className="text-sm font-medium">Strategic Communication</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Public Relations &
              <br />
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Reputation Management
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
              Build, protect, and enhance your brand&apos;s reputation through strategic public relations 
              and comprehensive reputation management solutions
            </p>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="w-32 h-1 bg-gradient-to-r from-white to-blue-100 mx-auto rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 bg-white/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {successMetrics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2d6389] to-[#348992] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {item.metric}
                </div>
                <p className="text-gray-600 font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
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
              <span className="bg-gradient-to-r from-[#2d6389] via-[#348992] to-[#d73c77] bg-clip-text text-transparent">
                Comprehensive PR Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our public relations services are designed to build authentic connections between your brand and your stakeholders
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
                      className="absolute inset-0 bg-gradient-to-br from-[#2d6389]/20 via-[#348992]/20 to-[#d73c77]/20"
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
                        <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-[#348992] shadow-lg">
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
                        <CheckCircle className="w-5 h-5 text-[#348992] flex-shrink-0" />
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

      {/* Why Choose Our PR Services */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-[#2d6389]/5 to-[#d73c77]/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#2d6389] via-[#348992] to-[#d73c77] bg-clip-text text-transparent">
                Why Choose Our PR Services?
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Proven Track Record",
                description: "15+ years of delivering successful PR campaigns across diverse industries",
                icon: <Star className="w-8 h-8" />
              },
              {
                title: "Strategic Approach", 
                description: "Data-driven strategies tailored to your unique business objectives and market position",
                icon: <Target className="w-8 h-8" />
              },
              {
                title: "Award-Winning Team",
                description: "Industry-recognized experts with extensive media relationships and proven results",
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
                <div className="w-16 h-16 bg-gradient-to-br from-[#348992] to-[#2d6389] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg">
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
  );
};

export default PublicRelationsPage;
