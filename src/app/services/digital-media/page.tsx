'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Smartphone, 
  Users, 
  Camera, 
  Share2, 
  BarChart3,
  ArrowLeft,
  CheckCircle,
  Play,
  Globe,
  Heart,
  Zap
} from 'lucide-react';

const DigitalMediaPage: React.FC = () => {
  const services = [
    {
      title: "Social Media Management & Strategy",
      description: "Comprehensive social media presence management with strategic content planning and community engagement",
      icon: <Share2 className="w-6 h-6" />,
      features: ["Content Calendar Planning", "Community Management", "Platform Optimization", "Brand Voice Development"]
    },
    {
      title: "Content Creation & Management",
      description: "Strategic content development for both internal and external audiences across multiple digital platforms",
      icon: <Camera className="w-6 h-6" />,
      features: ["Video Content Production", "Graphic Design", "Copywriting", "Content Distribution"]
    },
    {
      title: "Digital News Dissemination",
      description: "Strategic distribution of news and announcements across digital channels for maximum reach and impact",
      icon: <Globe className="w-6 h-6" />,
      features: ["Press Release Distribution", "News Portal Management", "Digital Media Relations", "Content Syndication"]
    },
    {
      title: "Influencer Marketing Programs",
      description: "Strategic influencer partnerships and collaboration programs to amplify brand reach and credibility",
      icon: <Users className="w-6 h-6" />,
      features: ["Influencer Identification", "Partnership Management", "Campaign Development", "Performance Tracking"]
    },
    {
      title: "Digital Campaigns & Engagement",
      description: "Creative digital marketing campaigns designed to drive engagement and build meaningful audience connections",
      icon: <Zap className="w-6 h-6" />,
      features: ["Campaign Strategy", "Creative Development", "Multi-platform Execution", "Real-time Optimization"]
    },
    {
      title: "Social Media Analytics & Reporting",
      description: "Comprehensive analytics and reporting to measure performance and optimize digital marketing efforts",
      icon: <BarChart3 className="w-6 h-6" />,
      features: ["Performance Analytics", "ROI Measurement", "Audience Insights", "Competitive Analysis"]
    }
  ];

  const digitalMetrics = [
    { metric: "500M+", label: "Social Media Reach" },
    { metric: "10K+", label: "Content Pieces Created" }, 
    { metric: "95%", label: "Engagement Rate Growth" },
    { metric: "50+", label: "Digital Campaigns Launched" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      {/* Hero Section with Image Overlay */}
      <section className="relative py-24 px-4 sm:px-8 lg:px-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-[#348992]/20 to-pink-600/30"
          style={{
            backgroundImage: "url('/api/placeholder/1920/1080')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-[#348992]/60 to-pink-600/70"></div>
        
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
              <Smartphone className="w-4 h-4" />
              <span className="text-sm font-medium">Digital Excellence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Digital Media &
              <br />
              <span className="bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
                Social Strategy
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
              Transform your digital presence with strategic social media management, 
              engaging content creation, and data-driven digital marketing campaigns
            </p>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="w-32 h-1 bg-gradient-to-r from-white to-pink-100 mx-auto rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Digital Metrics */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 bg-white/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {digitalMetrics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {item.metric}
                </div>
                <p className="text-gray-600 font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Transformation Banner */}
      <section className="py-8 px-4 sm:px-8 lg:px-16 bg-gradient-to-r from-purple-500 to-pink-600">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between text-white"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Play className="w-8 h-8 text-yellow-300" />
              <div>
                <h3 className="text-xl font-bold">Ready to Go Digital?</h3>
                <p className="text-white/90">Transform your digital presence with our expert team</p>
              </div>
            </div>
            <motion.div
              className="flex items-center gap-2 px-6 py-3 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="w-5 h-5" />
              <span>Start Digital Strategy</span>
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
              <span className="bg-gradient-to-r from-purple-600 via-[#348992] to-pink-600 bg-clip-text text-transparent">
                Complete Digital Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Build meaningful digital connections with strategic social media and content marketing
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
                      className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-[#348992]/20 to-pink-600/20"
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
                        <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-purple-600 shadow-lg">
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
                        <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
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

      {/* Digital Platform Expertise */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-[#348992] to-pink-600 bg-clip-text text-transparent">
                Platform Expertise
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                platform: "Social Media",
                description: "LinkedIn, Twitter, Facebook, Instagram, YouTube strategy and management",
                icon: <Share2 className="w-8 h-8" />
              },
              {
                platform: "Content Platforms", 
                description: "Video, podcast, blog, and multimedia content creation and distribution",
                icon: <Camera className="w-8 h-8" />
              },
              {
                platform: "Analytics Tools",
                description: "Advanced tracking and reporting across all digital touchpoints",
                icon: <BarChart3 className="w-8 h-8" />
              },
              {
                platform: "Engagement Tools",
                description: "Community management and audience engagement optimization",
                icon: <Heart className="w-8 h-8" />
              }
            ].map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg">
                  {platform.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2d6389] mb-4">{platform.platform}</h3>
                <p className="text-gray-600 leading-relaxed">{platform.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMediaPage;
