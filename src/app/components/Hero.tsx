'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { smoothScrollTo } from '../../lib/smoothScroll';
import { useMobile } from '../../hooks/useMobile';
import { 
  FaNewspaper, 
  FaShieldAlt, 
  FaLaptop, 
  FaBuilding, 
  FaUniversity, 
  FaStar, 
  FaBullseye, 
  FaUsers,
  FaChartLine,
  FaHandshake,
  FaArrowUp
} from 'react-icons/fa';

const Hero: React.FC = () => {
  const { isMobile } = useMobile();
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sloganRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const handleExploreWork = () => {
    // Navigate to services section with Lenis smooth scroll
    smoothScrollTo('#ourservies', { 
      duration: 1.8,
      offset: -100 // Account for fixed header
    });
  };

  const handleStartJourney = () => {
    // Navigate to appointment page in the same tab
    router.push('/appointment');
  };

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
    
    // Slogan animation with fade-in and slide up effect
    if (sloganRef.current) {
      tl.fromTo(sloganRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        "-=1.4"
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(45,99,137,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(52,137,146,0.08),transparent_50%),radial-gradient(ellipse_at_center,rgba(215,60,119,0.04),transparent_50%)]"></div>
        
        {/* Animated Grid Pattern - More subtle on mobile */}
        <div className="absolute inset-0 opacity-30 lg:opacity-50">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(45,99,137,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(45,99,137,0.06)_1px,transparent_1px)] bg-[size:40px_40px] lg:bg-[size:60px_60px]"></div>
        </div>

        {/* Floating Geometric Elements - Reduced on mobile */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-16 h-16 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-[#2d6389]/15 to-[#348992]/15 lg:from-[#2d6389]/20 lg:to-[#348992]/20 blur-xl"
            animate={{
              x: [0, 20, 0],
              y: [0, -15, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-40 right-32 w-12 h-12 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-[#d73c77]/15 to-[#348992]/15 lg:from-[#d73c77]/20 lg:to-[#348992]/20 blur-xl"
            animate={{
              x: [0, -20, 0],
              y: [0, 20, 0],
              scale: [1, 0.95, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-32 left-32 w-20 h-20 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-[#348992]/12 to-[#2d6389]/12 lg:from-[#348992]/15 lg:to-[#2d6389]/15 blur-xl"
            animate={{
              x: [0, 15, 0],
              y: [0, -25, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* Modern Floating Particles - Optimized for mobile */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {/* Triangle Particles - Fewer on mobile */}
        <motion.div 
          className="absolute top-[25%] left-[10%] lg:top-[20%] lg:left-[15%]"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 120, 240],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] lg:border-l-[20px] lg:border-r-[20px] lg:border-b-[35px] border-l-transparent border-r-transparent border-b-[#2d6389]/15 lg:border-b-[#2d6389]/20 filter drop-shadow-sm"></div>
        </motion.div>

        <motion.div 
          className="absolute top-[35%] right-[15%] lg:top-[30%] lg:right-[20%]"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -90, -180],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-4 h-4 lg:w-6 lg:h-6 bg-gradient-to-br from-[#d73c77]/20 to-[#348992]/20 lg:from-[#d73c77]/30 lg:to-[#348992]/30 rotate-45 rounded-sm filter drop-shadow-sm"></div>
        </motion.div>

        {/* Hide some particles on mobile for cleaner look */}
        <motion.div 
          className="hidden sm:block absolute bottom-[30%] left-[20%] lg:bottom-[25%] lg:left-[25%]"
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-tr from-[#348992]/20 to-[#2d6389]/20 lg:from-[#348992]/25 lg:to-[#2d6389]/25 rounded-full filter drop-shadow-sm"></div>
        </motion.div>

        <motion.div 
          className="hidden lg:block absolute bottom-[35%] right-[15%]"
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
          className="hidden lg:block absolute top-[50%] left-[40%]"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 60, 120]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-4 h-4 bg-gradient-to-bl from-[#2d6389]/30 to-[#d73c77]/30 rotate-45 filter drop-shadow-lg"></div>
        </motion.div>

        <motion.div 
          className="hidden lg:block absolute top-[70%] right-[30%]"
          animate={{ 
            y: [0, 25, 0],
            rotate: [0, -45, -90]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-5 h-5 bg-gradient-to-tl from-[#348992]/25 to-[#2d6389]/25 rounded-sm filter drop-shadow-lg"></div>
        </motion.div>
      </div>

      {/* Main Content - Split Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-4 lg:pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[85vh] sm:min-h-[80vh] lg:min-h-[80vh]">
          
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left space-y-4 sm:space-y-6 lg:space-y-8 flex flex-col justify-center px-2 sm:px-0">
      
            {/* Title */}
            <div className="mb-4 sm:mb-6">
              <h1 
                ref={titleRef}
                className="text-5xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-3 sm:mb-4"
              >
                <span className="block mb-1 sm:mb-2">
                  Connecting Visions
                </span>
                <span className="block bg-gradient-to-r from-[#348992] via-[#2d6389] to-[#d73c77] bg-clip-text text-transparent">
                  Creating Impact
                </span>
              </h1>
              
              {/* Konnections IMAG Slogan */}
              <div ref={sloganRef} className="mt-3 sm:mt-4 lg:mt-6">
                <p className="text-base sm:text-lg lg:text-xl font-medium text-gray-700 italic leading-snug px-2 sm:px-0">
                  &ldquo;Where Strategic Communication Meets Creative Excellence&rdquo;
                </p>
              </div>
            </div>

            {/* Mobile Company Logo Section */}
            <div className="lg:hidden flex justify-center my-6 sm:my-8">
              <motion.div
                className="relative"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.0,
                  type: "spring",
                  bounce: 0.3
                }}
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/95 backdrop-blur-sm rounded-full shadow-xl border-3 border-gray-200/50 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/logo-small.png"
                    alt="Konnections IMAG Logo"
                    width={48}
                    height={48}
                    className="object-contain sm:w-14 sm:h-14"
                  />
                </div>
                
                {/* Glowing Ring around Logo - Mobile */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#348992]/50"
                  animate={{
                    boxShadow: [
                      "0 0 15px rgba(52, 137, 146, 0.3)",
                      "0 0 25px rgba(52, 137, 146, 0.6)",
                      "0 0 15px rgba(52, 137, 146, 0.3)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>



            {/* Professional Subtitle */}
            <div className="mb-4 sm:mb-6">
              <p 
                ref={subtitleRef}
                className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 px-2 sm:px-0"
              >
                We help businesses build stronger relationships through strategic communications, 
                crisis management, and integrated marketing solutions.
              </p>
            </div>

            {/* Mobile Feature Highlights */}
            <div className="lg:hidden grid grid-cols-2 gap-1.5 sm:gap-2 my-3 sm:my-4 px-4 sm:px-6">
              {[
                { icon: FaNewspaper, title: "PR Strategy", color: "from-blue-500 to-teal-500" },
                { icon: FaShieldAlt, title: "Crisis Management", color: "from-teal-500 to-green-500" },
                { icon: FaChartLine, title: "Brand Growth", color: "from-green-500 to-blue-500" },
                { icon: FaHandshake, title: "Stakeholder Relations", color: "from-purple-500 to-pink-500" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br ${item.color} p-1.5 sm:p-2 rounded-md shadow-sm text-white text-center`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.2 + index * 0.1,
                    type: "spring",
                    bounce: 0.3
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-sm sm:text-base mb-0.5 flex justify-center">
                    <item.icon />
                  </div>
                  <div className="text-[10px] sm:text-xs font-medium leading-tight">{item.title}</div>
                </motion.div>
              ))}
            </div>

            {/* Professional CTA Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-4 sm:pt-6 px-2 sm:px-0">
              <motion.button
                onClick={handleExploreWork}
                whileHover={{ scale: isMobile ? 1.02 : 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#348992] text-white font-semibold rounded-xl hover:bg-[#2d6389] transition-all duration-300 shadow-lg hover:shadow-xl text-center text-sm sm:text-base border-2 border-[#348992] hover:border-[#2d6389]"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>Our Services</span>
                  <FaArrowUp className="rotate-45" />
                </span>
              </motion.button>
              
              <motion.button
                onClick={handleStartJourney}
                whileHover={{ scale: isMobile ? 1.02 : 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#348992] font-semibold rounded-xl border-2 border-[#348992] hover:bg-[#348992] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl text-center text-sm sm:text-base"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>Get Started</span>
                  <FaStar />
                </span>
              </motion.button>
            </div>

            {/* Mobile Trust Indicators */}
            <div className="lg:hidden mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-200">
              <motion.div
                className="flex flex-col items-center text-center space-y-3 sm:space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <motion.span
                          key={i}
                          className="text-yellow-400 text-sm sm:text-base"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 2.0 + i * 0.1 }}
                        >
                          <FaStar />
                        </motion.span>
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-600 font-medium">5.0</span>
                  </div>
                  <div className="w-px h-6 bg-gray-300"></div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    <span className="font-semibold">50+</span> Success Stories
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 max-w-xs">
                  Trusted by leading brands across industries
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Side - Radar Visualization */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[700px] flex items-center justify-center">
              
              {/* Radar Container */}
              <motion.div 
                className="relative w-full max-w-2xl h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.3 }}
              >
                
                {/* Company Logo in Center */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 z-20"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 1.2, delay: 0.8, type: "spring", bounce: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="relative w-full h-full bg-white rounded-full shadow-xl border-4 border-white/50 backdrop-blur-sm overflow-hidden">
                    <Image
                      src="/logo-small.png"
                      alt="Konnections IMAG"
                      fill
                      className="object-contain p-2"
                    />
                    
                    {/* Glowing Ring around Logo */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-[#348992]/50"
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(52, 137, 146, 0.3)",
                          "0 0 40px rgba(52, 137, 146, 0.6)",
                          "0 0 20px rgba(52, 137, 146, 0.3)"
                        ]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </motion.div>

                {/* Radar Grid Background */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  {/* Concentric Circles */}
                  {[120, 180, 240, 300, 360, 420, 480].map((radius, index) => (
                    <motion.div
                      key={index}
                      className={`absolute border-2 rounded-full ${
                        index === 0 ? 'border-[#348992]/50' :
                        index === 1 ? 'border-[#2d6389]/40' :
                        index === 2 ? 'border-[#d73c77]/30' :
                        index === 3 ? 'border-[#348992]/25' :
                        index === 4 ? 'border-[#2d6389]/20' :
                        index === 5 ? 'border-[#d73c77]/15' :
                        'border-gray-300/10'
                      }`}
                      style={{
                        width: `${radius}px`,
                        height: `${radius}px`,
                        left: `${-radius/2}px`,
                        top: `${-radius/2}px`
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: [1, 1.02, 1],
                        opacity: [1, 0.8, 1],
                        rotate: index % 2 === 0 ? [0, 360] : [360, 0]
                      }}
                      transition={{ 
                        scale: {
                          duration: 4 + index * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        },
                        opacity: {
                          duration: 3 + index * 0.3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        },
                        rotate: {
                          duration: 20 + index * 2,
                          repeat: Infinity,
                          ease: "linear"
                        },
                        initial: {
                          duration: 0.8, 
                          delay: 0.6 + index * 0.1,
                          type: "spring"
                        }
                      }}
                    />
                  ))}
                  
                  {/* Radar Grid Lines */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
                    <motion.div
                      key={index}
                      className="absolute w-px h-60 bg-gradient-to-t from-transparent via-gray-300/30 to-transparent origin-bottom"
                      style={{
                        left: '-0.5px',
                        bottom: '0px',
                        transform: `rotate(${angle}deg)`,
                        transformOrigin: 'bottom center'
                      }}
                      initial={{ scaleY: 0, opacity: 0 }}
                      animate={{ 
                        scaleY: 1, 
                        opacity: [0.3, 0.7, 0.3],
                        height: ['240px', '250px', '240px']
                      }}
                      transition={{ 
                        scaleY: { duration: 0.6, delay: 0.8 + index * 0.05 },
                        opacity: { 
                          duration: 3, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: index * 0.2
                        },
                        height: {
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3
                        }
                      }}
                    />
                  ))}
                </motion.div>

                {/* Rotating Radar Line */}
                <motion.div
                  className="absolute top-1/2 left-1/2 z-10"
                  style={{
                    transformOrigin: '0 0'
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                >
                  {/* Main radar line */}
                  <div
                    className="w-px h-56"
                    style={{
                      background: 'linear-gradient(to top, rgba(52, 137, 146, 0.9), rgba(52, 137, 146, 0.6), rgba(52, 137, 146, 0.2), transparent)',
                      transformOrigin: 'bottom center'
                    }}
                  />
                </motion.div>

                {/* PR-Related Icons positioned around the radar */}
                {[
                  { 
                    name: "Media Relations", 
                    icon: FaNewspaper, 
                    angle: 0, 
                    description: "Press Releases & Media Outreach"
                  },
                  { 
                    name: "Crisis Management", 
                    icon: FaShieldAlt, 
                    angle: 45, 
                    description: "Risk Assessment & Crisis Response"
                  },
                  { 
                    name: "Digital Strategy", 
                    icon: FaLaptop, 
                    angle: 90, 
                    description: "Online Presence & Social Media"
                  },
                  { 
                    name: "Corporate Communications", 
                    icon: FaBuilding, 
                    angle: 135, 
                    description: "Internal & Executive Communications"
                  },
                  { 
                    name: "Public Affairs", 
                    icon: FaUniversity, 
                    angle: 180, 
                    description: "Government Relations & Policy"
                  },
                  { 
                    name: "Brand Management", 
                    icon: FaStar, 
                    angle: 225, 
                    description: "Brand Positioning & Reputation"
                  },
                  { 
                    name: "Event Management", 
                    icon: FaBullseye, 
                    angle: 270, 
                    description: "Strategic Events & Campaigns"
                  },
                  { 
                    name: "Stakeholder Engagement", 
                    icon: FaUsers, 
                    angle: 315, 
                    description: "Investor & Community Relations"
                  }
                ].map((item, index) => {
                  // Fixed radius for all icons to ensure equal distance
                  const radius = 180;
                  const angleRad = (item.angle * Math.PI) / 180;
                  const x = Math.cos(angleRad) * radius;
                  const y = Math.sin(angleRad) * radius;
                  
                  return (
                    <motion.div
                      key={index}
                      className="absolute group cursor-pointer z-15"
                      style={{
                        left: '50%',
                        top: '50%',
                        marginLeft: `${x - 28}px`, // 28px is half of icon width (56px/2)
                        marginTop: `${y - 28}px`,  // 28px is half of icon height (56px/2)
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: 1, 
                        opacity: 1, // Keep icons always visible
                        y: [-3, 3, -3] // Floating up and down animation
                      }}
                      transition={{ 
                        scale: {
                          duration: 0.6, 
                          delay: 1.2 + index * 0.1,
                          type: "spring",
                          bounce: 0.4
                        },
                        opacity: {
                          duration: 0.6,
                          delay: 1.2 + index * 0.1
                        },
                        y: {
                          duration: 2.5 + index * 0.2, // Slightly different durations for natural effect
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3 // Stagger the floating animation
                        }
                      }}
                      whileHover={{ 
                        scale: 1.2, 
                        zIndex: 30,
                        opacity: 1 // Full opacity on hover
                      }}
                    >
                      {/* Icon Container */}
                      <motion.div
                        className="relative w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full shadow-lg border-2 border-gray-200/50 flex items-center justify-center overflow-hidden group-hover:opacity-100"
                        whileHover={{
                          borderColor: "#348992",
                          boxShadow: "0 8px 25px rgba(52, 137, 146, 0.4)",
                          backgroundColor: "rgba(255, 255, 255, 1)"
                        }}
                      >
                        {/* Animated Background */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-[#348992]/10 to-[#d73c77]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                        />
                        
                        {/* Icon */}
                        <motion.div
                          className="text-xl z-10 relative filter drop-shadow-sm text-[#348992]"
                          animate={{ 
                            scale: [1, 1.05, 1]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.3
                          }}
                        >
                          <item.icon />
                        </motion.div>
                        
                        {/* Pulse Ring */}
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-[#348992]/40"
                          animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.6, 0, 0.6]
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeOut",
                            delay: index * 0.2
                          }}
                        />
                      </motion.div>
                      
                      {/* Tooltip */}
                      <motion.div
                        className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-gray-900/95 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-40 shadow-xl"
                      >
                        <div className="font-semibold">{item.name}</div>
                        <div className="text-gray-300 text-xs">{item.description}</div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 -mt-1"></div>
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* Signal Waves */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 rounded-full"
                    style={{
                      width: `${200 + i * 40}px`,
                      height: `${200 + i * 40}px`,
                      borderColor: `rgba(52, 137, 146, ${0.1 - i * 0.02})`
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0, 0.3]
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: i * 0.8
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
