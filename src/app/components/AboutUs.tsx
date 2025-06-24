'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Lightbulb, 
  Heart, 
  Zap, 
  Award, 
  Sparkles,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const AboutUs: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
    <section id="about" className="relative py-20 px-4 bg-white">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#348992]/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#348992]/2 rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Two-Column Hero Section */}
        <motion.div 
          variants={itemVariants}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
        >
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#348992]/10 to-[#d73c77]/10 rounded-full border border-[#348992]/20">
              <Sparkles className="w-4 h-4 text-[#348992]" />
              <span className="text-sm font-medium text-[#348992]">Who We Are</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-[#2d6389] via-[#348992] to-[#d73c77] bg-clip-text text-transparent">
                About Konnections IMAG
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              At Konnections IMAG, we don&apos;t just create campaigns; we craft compelling narratives that transform brands into movements. As a premier public relations and image management consultancy, we specialize in building, protecting, and enhancing reputations across diverse industries and markets.
            </p>
            
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              className="w-24 h-1 bg-gradient-to-r from-[#2d6389] via-[#348992] to-[#d73c77] rounded-full"
            />
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300">
              <div className="text-center text-gray-500">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="font-medium">Company Image</p>
                <p className="text-sm">Replace with actual photo</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#348992]/20 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#d73c77]/20 rounded-full"></div>
          </div>
        </motion.div>

        {/* Enhanced Company Overview */}
        <motion.div 
          variants={itemVariants}
          className="bg-white/70 backdrop-blur-xl p-8 md:p-16 rounded-3xl mb-16 shadow-2xl border border-white/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#348992]/5 via-transparent to-[#d73c77]/5"></div>
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-16 h-16 bg-gradient-to-br from-[#348992] to-[#2d6389] rounded-2xl flex items-center justify-center mx-auto mb-8"
            >
              <Award className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d6389] text-center mb-8">
              Award-Winning Communications Excellence
            </h2>
            <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed max-w-5xl mx-auto mb-12">
              Konnections IMAG is an award-winning independent multi-disciplinary communications company 
              offering 360-degree solutions to brands across India. Founded in 2010 and incubated at 
              NSRCEL Indian Institute of Management, Bangalore, we have evolved into one of India&apos;s 
              leading integrated marketing communication consultancies.
            </p>
            
            {/* Our Reach Section */}
            <div className="bg-gradient-to-br from-[#348992]/10 to-[#d73c77]/10 p-8 rounded-2xl border border-[#348992]/20">
              <h3 className="text-2xl md:text-3xl font-bold text-[#2d6389] text-center mb-8">Our Reach</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div className="group">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2d6389] to-[#348992] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">14+</div>
                  <p className="text-gray-700 font-medium">Years of Excellence</p>
                </div>
                <div className="group">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#348992] to-[#d73c77] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                  <p className="text-gray-700 font-medium">Brands Served</p>
                </div>
                <div className="group">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#d73c77] to-[#2d6389] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">30+</div>
                  <p className="text-gray-700 font-medium">Industry Verticals</p>
                </div>
                <div className="group">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2d6389] to-[#d73c77] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">Pan-India</div>
                  <p className="text-gray-700 font-medium">Presence</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Mission, Vision, Philosophy Section */}
        <motion.div 
          variants={itemVariants}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {/* Mission Card */}
          <motion.div
            className="group relative overflow-hidden"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl h-full border border-white/20 group-hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2d6389] to-[#348992] rounded-t-3xl" />
              <motion.div 
                className="flex items-center mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#2d6389] to-[#348992] rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2d6389] group-hover:text-[#348992] transition-colors duration-300">
                  Our Mission
                </h3>
              </motion.div>
              <div className="relative">
                <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-[#2d6389] to-[#348992] rounded-full opacity-30" />
                <p className="text-gray-700 leading-relaxed text-lg pl-6">
                  To help brands find their <span className="text-[#2d6389] font-semibold">authentic voice</span>, 
                  tell <span className="text-[#348992] font-semibold">compelling stories</span>, and build 
                  meaningful connections with their stakeholders through strategic communication.
                </p>
              </div>
              <motion.div 
                className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-br from-[#2d6389]/20 to-[#348992]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            className="group relative overflow-hidden"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl h-full border border-white/20 group-hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#348992] to-[#d73c77] rounded-t-3xl" />
              <motion.div 
                className="flex items-center mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#348992] to-[#d73c77] rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#348992] group-hover:text-[#d73c77] transition-colors duration-300">
                  Our Vision
                </h3>
              </motion.div>
              <div className="relative">
                <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-[#348992] to-[#d73c77] rounded-full opacity-30" />
                <p className="text-gray-700 leading-relaxed text-lg pl-6">
                  To be India&apos;s <span className="text-[#348992] font-semibold">most trusted</span> communication partner, 
                  recognized for delivering <span className="text-[#d73c77] font-semibold">impactful narratives</span> 
                  that drive business success and build lasting reputations.
                </p>
              </div>
              <motion.div 
                className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-br from-[#348992]/20 to-[#d73c77]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Philosophy Card */}
          <motion.div
            className="group relative overflow-hidden"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl h-full border border-white/20 group-hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d73c77] to-[#2d6389] rounded-t-3xl" />
              <motion.div 
                className="flex items-center mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#d73c77] to-[#2d6389] rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Lightbulb className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#d73c77] group-hover:text-[#2d6389] transition-colors duration-300">
                  Our Philosophy 
                </h3>
              </motion.div>
              <div className="relative">
                <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-[#d73c77] to-[#2d6389] rounded-full opacity-30" />
                <p className="text-gray-700 leading-relaxed text-lg pl-6">
                  We&apos;re inspired by the belief that one can use communications to 
                  <span className="text-[#d73c77] font-semibold"> change the world</span> and 
                  the way it responds to <span className="text-[#2d6389] font-semibold">brands, reputations, and ideas</span>.
                </p>
              </div>
              <motion.div 
                className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-br from-[#d73c77]/20 to-[#2d6389]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </motion.div>
        {/* Enhanced Core Values */}
        <motion.div 
          variants={itemVariants}
          className="bg-white/70 backdrop-blur-xl p-8 md:p-16 rounded-3xl shadow-2xl border border-white/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#348992]/5 via-transparent to-[#d73c77]/5"></div>
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-16 h-16 bg-gradient-to-br from-[#d73c77] to-[#348992] rounded-2xl flex items-center justify-center mx-auto mb-8"
            >
              <Heart className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d6389] text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  title: 'Integrity', 
                  desc: 'We believe in honest, trustworthy, and ethical communication services',
                  icon: <CheckCircle className="w-6 h-6" />,
                  gradient: 'from-[#2d6389] to-[#348992]'
                },
                { 
                  title: 'Innovation', 
                  desc: 'We relentlessly focus on bringing creativity and innovation to all our work',
                  icon: <Zap className="w-6 h-6" />,
                  gradient: 'from-[#348992] to-[#d73c77]'
                },
                { 
                  title: 'Impact', 
                  desc: 'We drive real business results for our clients through strategic communication',
                  icon: <TrendingUp className="w-6 h-6" />,
                  gradient: 'from-[#d73c77] to-[#2d6389]'
                },
                { 
                  title: 'Excellence', 
                  desc: 'We maintain the highest standards in everything we deliver',
                  icon: <Award className="w-6 h-6" />,
                  gradient: 'from-[#2d6389] to-[#d73c77]'
                }
              ].map((value, index) => (
                <motion.div 
                  key={index}
                  className={`bg-gradient-to-br ${value.gradient} p-6 rounded-2xl text-white text-center group cursor-pointer relative overflow-hidden`}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5
                  }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 flex justify-center mb-4"
                  >
                    {value.icon}
                  </motion.div>
                  <h4 className="relative z-10 text-xl font-bold mb-4">{value.title}</h4>
                  <p className="relative z-10 text-sm leading-relaxed opacity-90">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div 
          variants={itemVariants}
          className="bg-gradient-to-br from-[#2d6389]/5 via-white/80 to-[#d73c77]/5 backdrop-blur-xl p-8 md:p-16 rounded-3xl shadow-2xl border border-white/20 relative overflow-hidden mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#348992]/3 via-transparent to-[#d73c77]/3"></div>
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-16 h-16 bg-gradient-to-br from-[#d73c77] to-[#348992] rounded-2xl flex items-center justify-center mx-auto mb-8"
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d6389] text-center mb-12">
              Why Choose Konnections IMAG?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Award-Winning Excellence",
                  desc: "Recognized for outstanding work in PR and communications with multiple industry awards and accolades",
                  icon: <Award className="w-6 h-6" />,
                  gradient: "from-[#2d6389] to-[#348992]"
                },
                {
                  title: "360-Degree Solutions",
                  desc: "Comprehensive integrated communication services under one roof for seamless brand experiences",
                  icon: <Target className="w-6 h-6" />,
                  gradient: "from-[#348992] to-[#d73c77]"
                },
                {
                  title: "Industry Expertise", 
                  desc: "Deep domain knowledge across 30+ industry verticals with specialized sector insights",
                  icon: <TrendingUp className="w-6 h-6" />,
                  gradient: "from-[#d73c77] to-[#2d6389]"
                },
                {
                  title: "Strategic Partnerships",
                  desc: "Strong relationships with media, influencers, and stakeholders built over 14+ years",
                  icon: <Heart className="w-6 h-6" />,
                  gradient: "from-[#2d6389] to-[#d73c77]"
                },
                {
                  title: "Innovation-Driven",
                  desc: "Cutting-edge digital tools and creative strategies that deliver measurable results",
                  icon: <Lightbulb className="w-6 h-6" />,
                  gradient: "from-[#348992] to-[#2d6389]"
                },
                {
                  title: "Crisis-Ready",
                  desc: "24/7 crisis management capabilities with proven track record in reputation recovery",
                  icon: <Zap className="w-6 h-6" />,
                  gradient: "from-[#d73c77] to-[#348992]"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="group cursor-pointer"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-white/40 h-full">
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg transition-all duration-300 text-white`}>
                      {feature.icon}
                    </div>
                    <h4 className="text-lg font-bold text-[#2d6389] mb-3 group-hover:text-[#348992] transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;