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
  Users,
  Sparkles,
  TrendingUp,
  Globe,
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

  const floatingVariants = {
    float: {
      y: [-20, 20, -20],
      rotate: [0, 180, 360],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden px-4 py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-[#348992]/10 to-[#d73c77]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-[#d73c77]/8 to-[#348992]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-2xl"></div>
      </div>

      {/* Modern Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          variants={floatingVariants}
          animate="float"
          className="absolute top-[15%] left-[10%] w-6 h-6 bg-gradient-to-br from-[#348992]/30 to-[#2d6389]/30 rounded-full"
        />
        <motion.div 
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "1s" }}
          className="absolute top-[25%] right-[15%] w-4 h-4 bg-gradient-to-br from-[#d73c77]/30 to-[#348992]/30 rotate-45"
        />
        <motion.div 
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "2s" }}
          className="absolute bottom-[30%] left-[20%] w-8 h-8 bg-gradient-to-br from-[#2d6389]/20 to-[#d73c77]/20 rounded-full"
        />
        <motion.div 
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "3s" }}
          className="absolute bottom-[20%] right-[25%] w-5 h-5 bg-gradient-to-br from-[#348992]/25 to-[#2d6389]/25 rotate-45"
        />
      </div>

      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Enhanced Hero Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#348992]/10 to-[#d73c77]/10 rounded-full mb-6 border border-[#348992]/20">
            <Sparkles className="w-4 h-4 text-[#348992]" />
            <span className="text-sm font-medium text-[#348992]">Our Story</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#2d6389] via-[#348992] to-[#d73c77] bg-clip-text text-transparent">
              About Us
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Building Bridges Through Strategic Communication
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="w-32 h-1 bg-gradient-to-r from-[#2d6389] via-[#348992] to-[#d73c77] mx-auto rounded-full mt-6"
          />
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
            <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed max-w-5xl mx-auto">
              Konnections IMAG is an award-winning independent multi-disciplinary communications company 
              offering 360-degree solutions to brands across India. Founded in 2010 and incubated at 
              NSRCEL Indian Institute of Management, Bangalore, we have evolved into one of India's 
              leading integrated marketing communication consultancies.
            </p>
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
                  To be India's <span className="text-[#348992] font-semibold">most trusted</span> communication partner, 
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
                  We're inspired by the belief that one can use communications to 
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
      </motion.div>
    </section>
  );
};

export default AboutUs;