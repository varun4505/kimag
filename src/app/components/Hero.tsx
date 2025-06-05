'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import ThreeDBackground from './ThreeDBackground';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Enhanced GSAP animations with better timing
    const tl = gsap.timeline({ delay: 1.0 });
    
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
    
    // CTA buttons animation
    if (ctaRef.current) {
      tl.fromTo(ctaRef.current.children,
        { y: 80, opacity: 0, scale: 0.8 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1, 
          duration: 1.2, 
          stagger: 0.2,
          ease: "back.out(1.7)" 
        },
        "-=0.8"
      );
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden" ref={heroRef}>
      {/* 3D Background */}
      <ThreeDBackground />
      
      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-flex items-center px-6 py-2 mb-8 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group cursor-default"
          >
            <span className="text-white font-semibold text-sm tracking-wider uppercase">
              ✨ Welcome to the Future
            </span>
            <motion.span
              className="ml-3 text-purple-300"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              ⚡
            </motion.span>
          </motion.div>

          {/* Main Title */}
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.85] tracking-tighter mb-6"
          >
            <div className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent blur-lg opacity-30"></span>
              <span className="relative text-white drop-shadow-2xl">Transform</span>
            </div>
            <br />
            <div className="relative inline-block">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent drop-shadow-2xl">
                Your Vision
              </span>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-full blur-lg"></div>
            </div>
            <br />
            <div className="relative inline-block">
              <span className="text-white drop-shadow-2xl">Into Reality</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 rounded-full mt-4"></div>
            </div>
          </h1>

          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed font-light tracking-wide max-w-4xl mx-auto mb-12"
          >
            We craft 
            <span className="text-purple-300 font-semibold bg-gradient-to-r from-purple-300/20 to-transparent px-2 py-1 rounded-lg mx-2">
              compelling narratives
            </span>
            that drive 
            <span className="text-pink-300 font-semibold bg-gradient-to-r from-pink-300/20 to-transparent px-2 py-1 rounded-lg mx-2">
              authentic connections
            </span>
            and deliver 
            <span className="text-orange-300 font-semibold bg-gradient-to-r from-orange-300/20 to-transparent px-2 py-1 rounded-lg mx-2">
              measurable results
            </span>
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-between gap-2 min-w-[220px] backdrop-blur-sm"
            >
              <span className="text-yellow-300 mr-2">✦</span>
              Explore Our Work
              <svg 
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
            
            {/* Secondary CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 bg-white/20 backdrop-blur-xl text-white font-medium rounded-full shadow-lg hover:shadow-lg transition-all duration-300 flex items-center justify-between gap-2 min-w-[220px] border border-white/20"
            >
              <span className="text-pink-400 mr-2">✧</span>
              Start Your Journey
              <svg 
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center text-white/70 group cursor-pointer">
              <span className="text-xs font-medium tracking-wider uppercase mb-2 opacity-80">
                SCROLL TO EXPLORE
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-8 bg-gradient-to-b from-purple-400 via-pink-400 to-orange-400 rounded-full shadow-sm"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
