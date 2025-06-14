"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  BookOpen, 
  Lightbulb, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  Award,
  Star,
  Zap
} from "lucide-react";

export default function CaseStudies() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  return (
    <section id="case-studies" className="w-full py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#348992]/10 to-[#d73c77]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#d73c77]/10 to-[#348992]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Floating decoration elements */}
      <motion.div 
        variants={floatingVariants}
        animate="float"
        className="absolute top-20 right-20 w-4 h-4 bg-[#348992]/20 rounded-full blur-sm"
      />
      <motion.div 
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: "1s" }}
        className="absolute bottom-32 left-16 w-6 h-6 bg-[#d73c77]/20 rounded-full blur-sm"
      />
      <motion.div 
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: "2s" }}
        className="absolute top-40 left-1/4 w-3 h-3 bg-purple-400/20 rounded-full blur-sm"
      />
      
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Enhanced Header */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#348992]/10 to-[#d73c77]/10 rounded-full mb-6 border border-[#348992]/20">
            <Sparkles className="w-4 h-4 text-[#348992]" />
            <span className="text-sm font-medium text-[#348992]">Premium Content</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#2d6389] via-[#348992] to-[#d73c77] bg-clip-text text-transparent">
              Industry Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how leading companies transformed their operations with our proven strategies and innovative solutions.
          </p>
        </motion.div>

        {/* Enhanced Main content card */}
        <motion.div 
          variants={itemVariants}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden relative">
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#348992]/20 via-transparent to-[#d73c77]/20 rounded-3xl blur-xl"></div>
            
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl">
              {/* Enhanced hero section */}
              <div className="relative bg-gradient-to-br from-[#348992] via-[#2d6389] to-[#d73c77] p-8 md:p-16 text-white overflow-hidden">
                {/* Hero background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-32 h-32 border border-white/20 rounded-full"></div>
                  <div className="absolute top-20 right-10 w-20 h-20 border border-white/20 rounded-full"></div>
                  <div className="absolute bottom-10 left-20 w-16 h-16 border border-white/20 rounded-full"></div>
                </div>
                
                <div className="relative text-center">
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-8 border border-white/30"
                  >
                    <Award className="w-12 h-12" />
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                  >
                    Exclusive Industry Insights
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed"
                  >
                    Access comprehensive case studies with real-world implementations, detailed analysis, 
                    and measurable outcomes across multiple industries
                  </motion.p>
                </div>
              </div>

              {/* Enhanced Content body */}
              <div className="p-8 md:p-12 lg:p-16">
                {/* Enhanced Industry tags */}
                <motion.div 
                  variants={itemVariants}
                  className="mb-12"
                >
                  <h4 className="text-center text-lg font-semibold text-gray-700 mb-6">Industries We Serve</h4>
                  <div className="flex flex-wrap justify-center gap-3">
                    {[
                      'Hospitality', 'Healthcare', 'Technology', 'Finance', 
                      'Retail', 'Education', 'Real Estate', 'Manufacturing'
                    ].map((industry, index) => (
                      <motion.span 
                        key={industry}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        className="px-6 py-3 bg-gradient-to-r from-[#348992]/10 via-blue-50 to-[#d73c77]/10 text-[#2d6389] rounded-full text-sm font-medium border border-[#348992]/20 hover:border-[#348992]/40 hover:shadow-lg transition-all duration-300 cursor-pointer"
                      >
                        {industry}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Enhanced Features grid */}
                <motion.div 
                  variants={itemVariants}
                  className="grid md:grid-cols-3 gap-8 mb-16"
                >
                  <motion.div 
                    className="group text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <motion.div 
                      className="relative mb-6"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-[#348992] to-[#2d6389] rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <BarChart3 className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-3 h-3 text-white" />
                      </div>
                    </motion.div>
                    <h4 className="text-xl font-bold text-[#2d6389] mb-3">Data-Driven Results</h4>
                    <p className="text-[#348992] leading-relaxed">Comprehensive analytics, performance metrics, and ROI measurements with detailed KPI tracking</p>
                  </motion.div>

                  <motion.div 
                    className="group text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <motion.div 
                      className="relative mb-6"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-[#d73c77] to-[#348992] rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <BookOpen className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
                        <Users className="w-3 h-3 text-white" />
                      </div>
                    </motion.div>
                    <h4 className="text-xl font-bold text-[#2d6389] mb-3">Industry-Specific</h4>
                    <p className="text-[#348992] leading-relaxed">Tailored solutions and strategies designed for your specific sector and business model</p>
                  </motion.div>

                  <motion.div 
                    className="group text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-yellow-50 hover:to-orange-50 transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <motion.div 
                      className="relative mb-6"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-[#348992] to-[#d73c77] rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <Lightbulb className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                        <Zap className="w-3 h-3 text-white" />
                      </div>
                    </motion.div>
                    <h4 className="text-xl font-bold text-[#2d6389] mb-3">Implementation Guides</h4>
                    <p className="text-[#348992] leading-relaxed">Step-by-step strategic roadmaps and best practices with actionable insights</p>
                  </motion.div>
                </motion.div>

                {/* Enhanced Privacy notice */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 mb-10 border border-[#348992]/10 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#348992]/5 to-[#d73c77]/5 rounded-full blur-2xl"></div>
                  <div className="relative flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#348992] to-[#2d6389] rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-[#2d6389] mb-3 text-lg">Confidential & Exclusive Access</h5>
                      <p className="text-[#348992] leading-relaxed mb-4">
                        Access requires approval to ensure client confidentiality and provide you with the most relevant, 
                        up-to-date case studies for your industry and business needs.
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="text-[#2d6389] font-medium">Premium Quality</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-[#2d6389] font-medium">Verified Results</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Enhanced CTA section */}
                <motion.div 
                  variants={itemVariants}
                  className="text-center"
                >
                  <motion.a
                    href="/case-studies"
                    className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#348992] to-[#d73c77] text-white text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-300 relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2d6389] to-[#348992] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Request Access to Case Studies</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  </motion.a>
                  
                  <div className="flex items-center justify-center space-x-8 mt-8 text-sm text-[#348992]">
                    <motion.div 
                      className="flex items-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-medium">Quick approval</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-medium">Sector-specific content</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-medium">Confidential access</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
