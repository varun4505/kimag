"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { 
  BarChart3, 
  BookOpen, 
  Lightbulb, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Award,
  Building2,
  Heart,
  Laptop,
  CreditCard,
  ShoppingBag,
  GraduationCap,
  Home,
  Factory
} from "lucide-react";

export default function CaseStudies() {
  const [isHovering, setIsHovering] = useState(false);
  const controls = useAnimation();
  
  const industries = [
    { name: 'Hospitality', icon: Building2 },
    { name: 'Healthcare', icon: Heart },
    { name: 'Technology', icon: Laptop },
    { name: 'Finance', icon: CreditCard },
    { name: 'Retail', icon: ShoppingBag },
    { name: 'Education', icon: GraduationCap },
    { name: 'Real Estate', icon: Home },
    { name: 'Manufacturing', icon: Factory }
  ];

  // Auto-scroll effect for carousel - Optimized speed
  useEffect(() => {
    if (!isHovering) {
      const autoScroll = async () => {
        await controls.start({
          x: '-50%',
          transition: {
            duration: 20, // Faster: reduced from 30 to 20 seconds
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }
        });
      };
      autoScroll();
    } else {
      controls.stop();
    }
  }, [isHovering, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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

  return (
    <section id="case-studies" className="w-full py-12 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/50 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[#348992]/5 to-[#d73c77]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-[#d73c77]/5 to-[#348992]/5 rounded-full blur-3xl"></div>
      </div>
      
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Clean Header */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-4 border border-[#348992]/20 shadow-sm">
            <Award className="w-4 h-4 text-[#348992]" />
            <span className="text-sm font-medium text-[#348992]">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-gray-900">
            Industry <span className="bg-gradient-to-r from-[#348992] to-[#d73c77] bg-clip-text text-transparent">Case Studies</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore proven strategies and real results from companies that transformed their operations with our expertise.
          </p>
        </motion.div>

        {/* Industries Carousel */}
        <motion.div 
          variants={itemVariants}
          className="mb-12"
        >
          <h3 className="text-center text-xl font-semibold text-gray-800 mb-6">Industries We Serve</h3>
          <div 
            className="relative overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <motion.div 
              className="flex gap-6"
              animate={controls}
              style={{ width: 'fit-content' }}
            >
              {/* Multiple duplicates for seamless infinite loop */}
              {[...industries, ...industries, ...industries, ...industries].map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <motion.div
                    key={`${industry.name}-${index}`}
                    className="flex-shrink-0 group"
                    whileHover={{ y: -4 }}
                  >
                    <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 w-36 h-32 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-[#348992]/30">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#348992]/10 to-[#d73c77]/10 rounded-xl flex items-center justify-center mb-3 group-hover:from-[#348992]/20 group-hover:to-[#d73c77]/20 transition-all duration-300">
                        <IconComponent className="w-5 h-5 text-[#348992]" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 text-center leading-tight">{industry.name}</span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content Card - Simplified */}
        <motion.div 
          variants={itemVariants}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20 overflow-hidden">
            
            {/* Content - More Spacious */}
            <div className="p-8">
              
              {/* Features Grid - Simplified */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <motion.div 
                  className="text-center group"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#348992] to-[#2d6389] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Data-Driven Results</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Comprehensive analytics and performance metrics with detailed ROI tracking</p>
                </motion.div>

                <motion.div 
                  className="text-center group"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#d73c77] to-[#348992] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Industry-Specific</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Tailored solutions designed for your specific sector and business model</p>
                </motion.div>

                <motion.div 
                  className="text-center group"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#348992] to-[#d73c77] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Implementation Guides</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Step-by-step roadmaps and best practices with actionable insights</p>
                </motion.div>
              </div>

              {/* Privacy Notice - Cleaner */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-6 border border-gray-200/50">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#348992] to-[#2d6389] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-2">Confidential Access</h5>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      Access requires approval to ensure client confidentiality and provide you with the most relevant case studies for your needs.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">Premium Quality</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">Verified Results</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">Quick Approval</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA - Simplified */}
              <div className="text-center">
                <motion.a
                  href="/case-studies"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#348992] to-[#d73c77] text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request Access to Case Studies
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
