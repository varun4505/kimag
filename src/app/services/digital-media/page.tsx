'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import DraggableCarousel from '@/app/components/DraggableCarousel';
import Navbar from '@/app/components/Navbar';
import { 
  Smartphone, 
  Users, 
  Camera, 
  Share2, 
  BarChart3,
  ArrowLeft,
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
      features: ["Content Calendar Planning", "Community Management", "Platform Optimization", "Brand Voice Development"],
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Content Creation & Management",
      description: "Strategic content development for both internal and external audiences across multiple digital platforms",
      icon: <Camera className="w-6 h-6" />,
      features: ["Video Content Production", "Graphic Design", "Copywriting", "Content Distribution"],
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Digital News Dissemination",
      description: "Strategic distribution of news and announcements across digital channels for maximum reach and impact",
      icon: <Globe className="w-6 h-6" />,
      features: ["Press Release Distribution", "News Portal Management", "Digital Media Relations", "Content Syndication"],
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Influencer Marketing Programs",
      description: "Strategic influencer partnerships and collaboration programs to amplify brand reach and credibility",
      icon: <Users className="w-6 h-6" />,
      features: ["Influencer Identification", "Partnership Management", "Campaign Development", "Performance Tracking"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Digital Campaigns & Engagement",
      description: "Creative digital marketing campaigns designed to drive engagement and build meaningful audience connections",
      icon: <Zap className="w-6 h-6" />,
      features: ["Campaign Strategy", "Creative Development", "Multi-platform Execution", "Real-time Optimization"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Social Media Analytics & Reporting",
      description: "Comprehensive analytics and reporting to measure performance and optimize digital marketing efforts",
      icon: <BarChart3 className="w-6 h-6" />,
      features: ["Performance Analytics", "ROI Measurement", "Audience Insights", "Competitive Analysis"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      {/* Hero Section with Image Overlay */}
      <section className="relative py-24 px-4 sm:px-8 lg:px-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-[#348992]/20 to-pink-600/30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
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
            
            <div className="flex justify-center mb-8">
              <Link href="/appointment">
                <motion.div
                  className="flex items-center gap-2 px-8 py-4 bg-purple-600/90 hover:bg-purple-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Zap className="w-5 h-5" />
                  <span>Book Digital Strategy Session</span>
                </motion.div>
              </Link>
            </div>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="w-32 h-1 bg-gradient-to-r from-white to-pink-100 mx-auto rounded-full"
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
              <span className="bg-gradient-to-r from-purple-600 via-[#348992] to-pink-600 bg-clip-text text-transparent">
                Complete Digital Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Build meaningful digital connections with strategic social media and content marketing
            </p>
          </motion.div>



          {/* Draggable Services Carousel */}
          <DraggableCarousel 
            services={services} 
            gradientColors="from-purple-500/40 via-[#348992]/30 to-pink-600/40"
          />
        </div>
      </section>

      {/* Platform Expertise */}
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
    </>
  );
};

export default DigitalMediaPage;
