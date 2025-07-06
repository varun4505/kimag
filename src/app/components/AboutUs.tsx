'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useMobile } from '../../hooks/useMobile';
import { 
  Target, 
  Eye, 
  Lightbulb, 
  Heart, 
  Zap, 
  Award, 
  Sparkles,
  TrendingUp,
  Globe,
  Calendar,
  Building
} from 'lucide-react';

// Counter component for animated statistics
const AnimatedCounter: React.FC<{ end: number; duration?: number; suffix?: string }> = ({ 
  end, 
  duration = 2, 
  suffix = "" 
}) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const AboutUs: React.FC = () => {
  const { isMobile, isTablet } = useMobile();
  const [currentAwardIndex, setCurrentAwardIndex] = useState(0);
  const [isAwardModalOpen, setIsAwardModalOpen] = useState(false);
  
  // Debug logging
  useEffect(() => {
    console.log('AboutUs component - isMobile:', isMobile, 'isTablet:', isTablet);
  }, [isMobile, isTablet]);
  
  // Awards data
  const awards = [
    { src: "/awards/chanak.jpg", alt: "Chanak Award", title: "Excellence in Communication" },
    { src: "/awards/client1.jpg", alt: "Client Recognition Award", title: "Outstanding Client Service" },
    { src: "/awards/client2.jpeg", alt: "Industry Award", title: "Industry Leadership Award" },
    { src: "/awards/client5.jpg", alt: "Client Excellence Award", title: "Client Excellence Recognition" },
    { src: "/awards/IMG-20220405-WA0052.jpg", alt: "Achievement Award", title: "Outstanding Achievement" },
    { src: "/awards/tvaward.jpeg", alt: "TV Award", title: "Media Excellence Award" }
  ];

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
        duration: 0.6
      }
    }
  };


  // Mobile award navigation functions
  const nextAward = useCallback(() => {
    setCurrentAwardIndex((prev) => (prev + 1) % awards.length);
  }, [awards.length]);

  // Auto-advance awards on mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(nextAward, 4000);
      return () => clearInterval(interval);
    }
  }, [isMobile, nextAward]);

  return (
    <section id="about" className="relative py-20 mobile-container bg-white overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-64 h-64 bg-[#348992]/3 rounded-full blur-3xl"
          animate={{ 
            x: [0, 30, -30, 0],
            y: [0, -20, 20, 0],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-80 h-80 bg-[#348992]/2 rounded-full blur-3xl"
          animate={{ 
            x: [0, -40, 40, 0],
            y: [0, 30, -30, 0],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-[#d73c77]/2 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#348992]/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
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
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
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

          {/* Right Column - Enhanced Company Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="aspect-square rounded-xl overflow-hidden shadow-2xl border border-white/20 relative group">
              {/* Image with enhanced effects */}
              <motion.img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Professional business meeting with diverse team discussing strategy in modern corporate environment"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                loading="lazy"
                initial={{ scale: 1.1, filter: "blur(10px)" }}
                animate={{ scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2 }}
              />
              {/* Enhanced overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#348992]/20 via-transparent to-[#d73c77]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Enhanced decorative elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-8 h-8 bg-[#348992]/20 rounded-full"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#d73c77]/20 rounded-full"
              animate={{ scale: [1, 0.8, 1], rotate: [0, -180, -360] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            
            {/* Additional floating elements */}
            <motion.div 
              className="absolute top-1/2 -left-6 w-4 h-4 bg-[#348992]/30 rounded-full"
              animate={{ y: [0, -10, 0], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </motion.div>
        {/* Our Reach Section */}
        <div className="bg-gradient-to-br from-[#348992]/10 to-[#d73c77]/10 p-8 rounded-2xl border border-[#348992]/20 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-[#2d6389] text-center mb-8">Our Reach</h3>
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-20 h-1 bg-gradient-to-r from-[#d73c77] to-[#2d6389] rounded-full mx-auto mb-8"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <motion.div 
              className="group relative p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#2d6389] to-[#348992] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2d6389] to-[#348992] bg-clip-text text-transparent mb-2">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <p className="text-gray-700 font-medium">Years of Excellence</p>
            </motion.div>
            
            <motion.div 
              className="group relative p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#348992] to-[#d73c77] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Building className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#348992] to-[#d73c77] bg-clip-text text-transparent mb-2">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <p className="text-gray-700 font-medium">Brands Served</p>
            </motion.div>
            
            <motion.div 
              className="group relative p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#d73c77] to-[#2d6389] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#d73c77] to-[#2d6389] bg-clip-text text-transparent mb-2">
                <AnimatedCounter end={30} suffix="+" />
              </div>
              <p className="text-gray-700 font-medium">Industry Verticals</p>
            </motion.div>
            
            <motion.div 
              className="group relative p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#2d6389] to-[#d73c77] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#2d6389] to-[#d73c77] bg-clip-text text-transparent mb-2">Pan-India</div>
              <p className="text-gray-700 font-medium">Presence</p>
            </motion.div>
          </div>
        </div>

        {/* Awards Section - Mobile Optimized */}
        <div id="awards" className="relative bg-gradient-to-br from-white via-white/95 to-[#348992]/5 backdrop-blur-xl p-4 sm:p-6 lg:p-8 rounded-3xl border border-[#348992]/20 mb-12 overflow-hidden shadow-2xl">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#348992]/10 to-[#d73c77]/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#d73c77]/10 to-[#348992]/10 rounded-full blur-xl"></div>

          <div className="relative z-10">
            {/* Awards Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#348992]/10 to-[#d73c77]/10 rounded-full mb-4 border border-[#348992]/20">
                <Award className="w-4 h-4 text-[#348992]" />
                <span className="text-sm font-medium text-[#348992]">AWARDS & RECOGNITION</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Our <span className="bg-gradient-to-r from-[#348992] to-[#d73c77] bg-clip-text text-transparent">Achievements</span>
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Recognition for excellence in communication and client service
              </p>
            </div>

            {/* Mobile Awards - Improved Grid Layout */}
            {isMobile ? (
              <div className="flex flex-col items-center justify-center px-0 py-4 select-none w-full">
                <div className="flex flex-col items-center w-full mx-auto">
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-3 bg-white/80 shadow-lg border border-[#348992]/10 relative" style={{ minHeight: 260 }}>
                    <Image
                      src={awards[currentAwardIndex].src}
                      alt={awards[currentAwardIndex].alt}
                      fill
                      sizes="75vw"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      onClick={() => setIsAwardModalOpen(true)}
                      style={{ objectFit: 'cover', width: '100%', height: '100%', position: 'absolute', left: 0, top: 0 }}
                    />
                    {/* Title overlay */}
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 py-3">
                      <div className="text-base font-semibold text-white text-center truncate w-full drop-shadow-md" title={awards[currentAwardIndex].title}>
                        {awards[currentAwardIndex].title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Desktop/Tablet Awards Carousel */
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#348992]/5 via-transparent to-[#d73c77]/5 p-6">
                {/* Gradient overlays for smooth edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
                
                <motion.div
                  className="flex items-center gap-6 lg:gap-8"
                  animate={{ x: ["0%", "-100%"] }}
                  transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ width: "200%" }}
                >
                  {/* First set of awards */}
                  {awards.map((award, index) => (
                    <div key={`first-${index}`} className="relative group cursor-pointer">
                      <div className="w-60 h-60 lg:w-80 lg:h-80 overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 border-2 border-white/50 group-hover:border-[#348992]/30 rounded-2xl relative">
                        <Image 
                          src={award.src}
                          alt={award.alt}
                          width={320}
                          height={320}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <h4 className="font-bold text-lg mb-1">{award.title}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Duplicate set for continuous scrolling */}
                  {awards.map((award, index) => (
                    <div key={`second-${index}`} className="relative group cursor-pointer">
                      <div className="w-60 h-60 lg:w-80 lg:h-80 overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 border-2 border-white/50 group-hover:border-[#348992]/30 rounded-2xl relative">
                        <Image 
                          src={award.src}
                          alt={award.alt}
                          width={320}
                          height={320}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <h4 className="font-bold text-lg mb-1">{award.title}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            )}
          </div>
        </div>

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
                <motion.p 
                  className="text-gray-700 leading-relaxed text-lg pl-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  To help brands find their{' '}
                  <motion.span 
                    className="text-[#2d6389] font-semibold"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    authentic voice
                  </motion.span>, tell{' '} 
                  <motion.span 
                    className="text-[#348992] font-semibold"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    compelling stories
                  </motion.span>, and build{' '} 
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    meaningful connections
                  </motion.span> with their stakeholders through strategic communication.
                </motion.p>
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
                <motion.p 
                  className="text-gray-700 leading-relaxed text-lg pl-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  To be India&apos;s{' '}
                  <motion.span 
                    className="text-[#348992] font-semibold"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                  >
                    most trusted
                  </motion.span> communication partner, recognized for delivering{' '} 
                  <motion.span 
                    className="text-[#d73c77] font-semibold"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
                  >
                    impactful narratives
                  </motion.span>{' '} 
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    that drive business success and build lasting reputations.
                  </motion.span>
                </motion.p>
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
                <motion.p 
                  className="text-gray-700 leading-relaxed text-lg pl-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  We&apos;re inspired by the belief that one can use communications to{' '}
                  <motion.span 
                    className="text-[#d73c77] font-semibold"
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                  >
                    change the world
                  </motion.span> and the way it responds to{' '}
                  <motion.span 
                    className="text-[#2d6389] font-semibold"
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.7, type: "spring" }}
                  >
                    brands, reputations, and ideas
                  </motion.span>.
                </motion.p>
                <motion.div
                  className="absolute -right-2 -bottom-2 w-20 h-20 bg-[#d73c77]/5 rounded-full blur-xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <motion.div 
                className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-br from-[#d73c77]/20 to-[#2d6389]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </motion.div>
        
        {/* Removed Our Core Values section */}

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
            <motion.div 
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
              className="w-24 h-1 bg-gradient-to-r from-[#348992] via-[#d73c77] to-[#2d6389] rounded-full mx-auto mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  title: "Client-Centric Approach",
                  desc: "Tailored communication strategies that align with your unique business goals, brand values, and target audience preferences",
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
                  desc: "Strong relationships with media, influencers, and stakeholders built over 15+ years",
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
                  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-white/40 h-full flex flex-col items-center justify-start text-center">
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg transition-all duration-300 text-white mx-auto`}>
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

        {/* Key Achievements & Certifications */}
        <motion.div 
          variants={itemVariants}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#2d6389] via-[#348992] to-[#d73c77] bg-clip-text text-transparent mb-4">
              Trusted by Industry Leaders
            </h3>
            <motion.div 
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="w-20 h-1 bg-gradient-to-r from-[#2d6389] to-[#d73c77] rounded-full mx-auto mb-8"
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { 
                label: "IIM Bangalore", 
                subtext: "Recognised", 
                color: "from-[#2d6389] to-[#348992]",
                image: "/iimbang.png"
              },
              { 
                label: "NSRCEL", 
                subtext: "Incubated", 
                color: "from-[#348992] to-[#d73c77]",
                image: "/nsrcel.png"
              },
              { 
                label: "PRCI", 
                subtext: "Awarded", 
                color: "from-[#d73c77] to-[#2d6389]",
                image: "/prci.png"
              }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="bg-white p-4 rounded-xl shadow-lg cursor-pointer relative overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                  <div className="w-full h-16 mb-3 flex items-center justify-center">
                    <Image 
                      src={achievement.image} 
                      alt={achievement.label} 
                      width={64}
                      height={64}
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="font-bold text-sm text-[#2d6389] mb-1">{achievement.label}</div>
                  <div className="text-xs text-gray-600">{achievement.subtext}</div>
                </div>
                
                {/* Floating sparkle effect */}
                <motion.div
                  className="absolute top-1 right-1 w-2 h-2 bg-[#348992]/30 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      
      {/* Mobile Award Modal */}
      <AnimatePresence>
        {isMobile && isAwardModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setIsAwardModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={awards[currentAwardIndex].src}
                alt={awards[currentAwardIndex].alt}
                width={500}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setIsAwardModalOpen(false)}
                  className="w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300"
                >
                  ✕
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                <h4 className="text-white font-bold text-xl mb-2">{awards[currentAwardIndex].title}</h4>
                <p className="text-white/90 text-sm">{awards[currentAwardIndex].alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutUs;