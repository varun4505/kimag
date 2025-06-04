'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Enhanced GSAP animations with better timing
    const tl = gsap.timeline({ delay: 0.5 });
      // Animate particles first
    if (particlesRef.current) {
      gsap.set(particlesRef.current.children, { opacity: 0, scale: 0, rotation: 45 });
      gsap.to(particlesRef.current.children, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "back.out"
      });
    }
    
    // Title animation with enhanced effect
    if (titleRef.current) {
      tl.fromTo(titleRef.current.children,
        { y: 120, opacity: 0, rotationX: 90, transformOrigin: "bottom" },
        { 
          y: 0, 
          opacity: 1, 
          rotationX: 0, 
          duration: 1.8, 
          stagger: 0.2,
          ease: "power4.out" 
        }
      );
    }
    
    // Subtitle with typewriter effect
    if (subtitleRef.current) {
      tl.fromTo(subtitleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
        "-=1.2"
      );
    }
    
    // CTA buttons with spring animation
    if (ctaRef.current) {
      tl.fromTo(Array.from(ctaRef.current.children),
        { y: 50, opacity: 0, scale: 0.8 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1, 
          duration: 1.2, 
          stagger: 0.15, 
          ease: "elastic.out" 
        },
        "-=0.8"
      );
    }
  }, []);
  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      {/* Enhanced Background with Modern Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(45,99,137,0.1),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(52,137,146,0.1),transparent_50%),radial-gradient(ellipse_at_center,rgba(215,60,119,0.05),transparent_50%)]"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(45,99,137,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(45,99,137,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-br from-[#2d6389]/20 to-[#348992]/20 blur-xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-40 right-32 w-24 h-24 rounded-full bg-gradient-to-br from-[#d73c77]/20 to-[#348992]/20 blur-xl"
            animate={{
              x: [0, -25, 0],
              y: [0, 25, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-32 left-32 w-40 h-40 rounded-full bg-gradient-to-br from-[#348992]/15 to-[#2d6389]/15 blur-xl"
            animate={{
              x: [0, 20, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* Modern Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {/* Triangle Particles */}
        <motion.div 
          className="absolute top-[20%] left-[15%]"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 120, 240],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-[#2d6389]/20 filter drop-shadow-lg"></div>
        </motion.div>

        <motion.div 
          className="absolute top-[30%] right-[20%]"
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -90, -180],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-6 bg-gradient-to-br from-[#d73c77]/30 to-[#348992]/30 rotate-45 rounded-sm filter drop-shadow-lg"></div>
        </motion.div>

        <motion.div 
          className="absolute bottom-[25%] left-[25%]"
          animate={{ 
            y: [0, -25, 0],
            x: [0, 15, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-8 h-8 bg-gradient-to-tr from-[#348992]/25 to-[#2d6389]/25 rounded-full filter drop-shadow-lg"></div>
        </motion.div>

        <motion.div 
          className="absolute bottom-[35%] right-[15%]"
          animate={{ 
            y: [0, 20, 0],
            x: [0, -10, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-[#d73c77]/20 filter drop-shadow-lg"></div>
        </motion.div>

        <motion.div 
          className="absolute top-[50%] left-[40%]"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 60, 120]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-4 h-4 bg-gradient-to-bl from-[#2d6389]/30 to-[#d73c77]/30 rotate-45 filter drop-shadow-lg"></div>
        </motion.div>

        <motion.div 
          className="absolute top-[70%] right-[30%]"
          animate={{ 
            y: [0, 25, 0],
            rotate: [0, -45, -90]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-5 h-5 bg-gradient-to-tl from-[#348992]/25 to-[#2d6389]/25 rounded-sm filter drop-shadow-lg"></div>
        </motion.div>      </div>      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-24 md:pt-16">
        {/* Trendy Badge with Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "backOut" }}
          className="inline-flex items-center px-6 py-2 mb-8 mt-4 bg-gradient-to-r from-[#2d6389]/10 via-[#348992]/10 to-[#d73c77]/10 backdrop-blur-xl border border-white/30 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group cursor-default"
        >
          <div className="relative flex h-2 w-2 mr-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#348992] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#348992] shadow-sm"></span>
          </div>
          <span className="text-[#2d6389] font-semibold text-sm tracking-wider uppercase">
            Strategic Communications Excellence
          </span>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="ml-3 text-[#348992]"
          >
            ✦
          </motion.div>
        </motion.div>        {/* Ultra Modern Main Title */}
        <div className="relative mb-8">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight mb-4"
          >
            <span className="block relative">
              <span className="absolute inset-0 bg-gradient-to-r from-[#2d6389] via-[#348992] to-[#d73c77] bg-clip-text text-transparent blur-lg opacity-30"></span>
              <span className="relative text-[#2d6389] drop-shadow-xl">Transform</span>
            </span>
            <span className="block relative mt-1">
              <span className="bg-gradient-to-r from-[#348992] via-[#d73c77] to-[#2d6389] bg-clip-text text-transparent drop-shadow-xl">
                Your Story
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-[#348992]/15 via-[#d73c77]/15 to-[#2d6389]/15 blur-2xl opacity-50 -z-10"></div>
            </span>
          </h1>
            {/* Floating accent elements */}
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#d73c77]/30 to-[#348992]/30 rounded-full blur-lg"
          />
          <motion.div
            animate={{ rotate: -360, scale: [1, 0.9, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-[#2d6389]/40 to-[#348992]/40 rounded-full blur-md"
          />
        </div>

        {/* Enhanced Modern Subtitle */}
        <div className="relative max-w-4xl mx-auto mb-10">
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl lg:text-2xl text-slate-700 leading-relaxed font-light tracking-wide"
          >
            We craft <span className="relative inline-block">
              <span className="text-[#348992] font-semibold bg-gradient-to-r from-[#348992]/20 to-transparent px-2 py-1 rounded-lg">compelling narratives</span>
            </span> that captivate audiences, build <span className="relative inline-block">
              <span className="text-[#d73c77] font-semibold bg-gradient-to-r from-[#d73c77]/20 to-transparent px-2 py-1 rounded-lg">authentic connections</span>
            </span>, and drive <span className="relative inline-block">
              <span className="text-[#2d6389] font-semibold bg-gradient-to-r from-[#2d6389]/20 to-transparent px-2 py-1 rounded-lg">measurable results</span>
            </span>
          </p>
          
          {/* Decorative underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#348992] via-[#d73c77] to-[#2d6389] rounded-full mt-4"
          />
        </div>        {/* Ultra-Modern CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          {/* Primary CTA - Glass Morphism Style */}
          <motion.button
            whileHover={{ 
              scale: 1.02, 
              y: -8,
              rotateX: 5,
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-[#2d6389] via-[#348992] to-[#2d6389] text-white font-bold rounded-2xl shadow-2xl hover:shadow-[#2d6389]/30 transition-all duration-500 text-base min-w-[240px] overflow-hidden backdrop-blur-sm border border-white/20"
          >
            <span className="relative z-10 flex items-center justify-center">
              <span className="mr-3">✨</span>
              Explore Our Work
              <motion.svg 
                className="w-5 h-5 ml-3" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#348992] via-[#d73c77] to-[#348992] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
          
          {/* Secondary CTA - Neumorphism Style */}
          <motion.button
            whileHover={{ 
              scale: 1.02, 
              y: -8,
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              boxShadow: "0 20px 40px rgba(45, 99, 137, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.6)"
            }}
            whileTap={{ scale: 0.98 }}
            className="relative px-8 py-4 bg-white/80 backdrop-blur-xl text-[#2d6389] font-bold rounded-2xl transition-all duration-500 text-base min-w-[240px] shadow-lg hover:shadow-xl border border-white/40 group"
          >
            <span className="flex items-center justify-center">
              <span className="mr-3">🚀</span>
              Start Your Journey
              <motion.svg 
                className="w-5 h-5 ml-3" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#348992]/10 via-[#d73c77]/10 to-[#2d6389]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </motion.button>
        </div>

        {/* Stats Bar - Trendy addition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12 max-w-3xl mx-auto"
        >
          <div className="flex items-center space-x-2 px-6 py-3 bg-white/60 backdrop-blur-md rounded-full border border-white/30 shadow-lg">
            <div className="w-3 h-3 bg-[#348992] rounded-full animate-pulse"></div>
            <span className="text-[#2d6389] font-semibold text-sm">500+ Projects</span>
          </div>
          <div className="flex items-center space-x-2 px-6 py-3 bg-white/60 backdrop-blur-md rounded-full border border-white/30 shadow-lg">
            <div className="w-3 h-3 bg-[#d73c77] rounded-full animate-pulse"></div>
            <span className="text-[#2d6389] font-semibold text-sm">98% Success Rate</span>
          </div>
          <div className="flex items-center space-x-2 px-6 py-3 bg-white/60 backdrop-blur-md rounded-full border border-white/30 shadow-lg">
            <div className="w-3 h-3 bg-[#2d6389] rounded-full animate-pulse"></div>
            <span className="text-[#2d6389] font-semibold text-sm">10+ Years Experience</span>
          </div>
        </motion.div>        {/* Ultra-Modern Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-slate-500 group cursor-pointer">
            <motion.span 
              className="text-xs font-medium mb-4 tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll to explore
            </motion.span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-6 h-12 border-2 border-slate-300/60 rounded-full flex justify-center bg-white/40 backdrop-blur-md shadow-xl group-hover:shadow-2xl group-hover:border-[#348992]/60 transition-all duration-300"
            >
              <motion.div
                animate={{ y: [2, 20, 2], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-gradient-to-b from-[#2d6389] via-[#348992] to-[#d73c77] rounded-full mt-2 shadow-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#348992]/10 to-[#d73c77]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
