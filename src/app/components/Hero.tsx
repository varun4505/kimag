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
        </motion.div>
      </div>      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Modern Badge */}
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: "backOut" }}
          className="inline-flex items-center px-8 py-3 mb-12 bg-white/70 backdrop-blur-md border border-white/20 rounded-full shadow-xl shadow-[#2d6389]/10"
        >
          <span className="relative flex h-3 w-3 mr-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#348992] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#348992]"></span>
          </span>
          <span className="text-[#2d6389] font-semibold text-base tracking-wide">Strategic Communications Excellence</span>
        </motion.div>

        {/* Enhanced Main Title */}
        <h1 
          ref={titleRef}
          className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tight"
        >
          <span className="block text-[#2d6389] mb-4 drop-shadow-sm">Transform</span>
          <span className="block bg-gradient-to-r from-[#348992] via-[#d73c77] to-[#2d6389] bg-clip-text text-transparent drop-shadow-sm">
            Your Story
          </span>
        </h1>

        {/* Enhanced Subtitle */}
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl lg:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
        >
          We craft compelling narratives that <span className="text-[#348992] font-medium">captivate audiences</span>, 
          build <span className="text-[#d73c77] font-medium">authentic connections</span>, and 
          drive <span className="text-[#2d6389] font-medium">measurable results</span> through strategic storytelling.
        </p>

        {/* Enhanced CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-32">
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              boxShadow: "0 25px 50px rgba(45, 99, 137, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-4 bg-gradient-to-r from-[#2d6389] via-[#348992] to-[#2d6389] text-white font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-700 text-lg min-w-[240px] overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center">
              Explore Our Work
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#348992] via-[#d73c77] to-[#348992] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </motion.button>
          
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              backgroundColor: "rgba(215, 60, 119, 0.1)",
              borderColor: "#d73c77"
            }}
            whileTap={{ scale: 0.95 }}
            className="relative px-12 py-4 border-2 border-slate-300 text-slate-700 font-bold rounded-full transition-all duration-500 text-lg min-w-[240px] backdrop-blur-sm bg-white/80 hover:bg-white/90 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center justify-center">
              Start Your Journey
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </motion.button>        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-slate-500">
            <span className="text-sm font-medium mb-4 tracking-wide">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center bg-white/50 backdrop-blur-sm shadow-lg"
            >
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-4 bg-gradient-to-b from-[#2d6389] to-[#348992] rounded-full mt-2"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
