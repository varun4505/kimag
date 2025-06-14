'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleExploreWork = () => {
    // Navigate to services section
    document.getElementById('ourservies')?.scrollIntoView({ behavior: 'smooth' });
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
      </div>

      {/* Main Content - Split Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 flex flex-col justify-center">
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-gray-100 border border-gray-200 rounded-full"
            >
              <span className="text-gray-700 font-medium text-sm">
                Integrated Marketing & Communications
              </span>
            </motion.div>

            {/* Clean, Professional Title */}
            <div>
              <h1 
                ref={titleRef}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-gray-900"
              >
                <span className="block">
                  Connecting Visions
                </span>
                <span className="block bg-gradient-to-r from-[#348992] via-[#2d6389] to-[#d73c77] bg-clip-text text-transparent">
                  Creating Impact
                </span>
              </h1>
              
              {/* Konnections IMAG Slogan */}
              <div className="mt-4">
                <p className="text-lg lg:text-xl font-medium text-gray-700 italic">
                  &ldquo;Where Strategic Communication Meets Creative Excellence&rdquo;
                </p>
              </div>
            </div>

            {/* Professional Subtitle */}
            <div>
              <p 
                ref={subtitleRef}
                className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-xl"
              >
                We help businesses build stronger relationships with their stakeholders through 
                strategic communications, crisis management, and integrated marketing solutions.
              </p>
            </div>

            {/* Professional CTA Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                onClick={handleExploreWork}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-[#348992] text-white font-semibold rounded-lg hover:bg-[#2d6389] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Our Services
              </motion.button>
              
              <motion.button
                onClick={handleStartJourney}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-transparent text-[#348992] font-semibold rounded-lg border-2 border-[#348992] hover:bg-[#348992] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Get Started
              </motion.button>
            </div>
          </div>

          {/* Right Side - Improved Card Grid */}
          <div className="relative hidden lg:block">
            <div className="flex gap-3 h-[700px] overflow-hidden justify-center">
              
              {/* First Column - Moving Up Infinitely */}
              <motion.div
                className="flex flex-col gap-3 w-[140px]"
                animate={{
                  y: [-400, 0]
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }}
              >
                {/* Duplicate sets for seamless infinite scroll */}
                {[...Array(4)].map((_, setIndex) => (
                  <React.Fragment key={`col1-${setIndex}`}>
                    {/* Card 1 */}
                    <div className="h-44 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <div className="h-full relative">
                        <Image
                          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                          alt="Strategic Communication Services"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="h-52 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <div className="h-full relative">
                        <Image
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                          alt="Crisis Management Services"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="h-40 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <div className="h-full relative">
                        <Image
                          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                          alt="Analytics & Insights"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Card 4 */}
                    <div className="h-48 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <div className="h-full relative">
                        <Image
                          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                          alt="Stakeholder Relations"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </motion.div>

              {/* Second Column - Moving Down Infinitely */}
              <motion.div
                className="flex flex-col gap-3 w-[140px] mt-12"
                animate={{
                  y: [0, -400]
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }}
              >
                {/* Duplicate sets for seamless infinite scroll */}
                {[...Array(4)].map((_, setIndex) => (
                  <React.Fragment key={`col2-${setIndex}`}>
                    {/* Card 5 */}
                    <div className="h-48 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <div className="h-full relative">
                        <Image
                          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                          alt="Creative Content"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Card 6 */}
                    <div className="h-40 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <div className="h-full relative">
                        <Image
                          src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                          alt="Digital Media"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Card 7 */}
                    <div className="h-52 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <div className="h-full relative">
                        <Image
                          src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                          alt="Financial Communications"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Card 8 */}
                    <div className="h-44 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <div className="h-full relative">
                        <Image
                          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                          alt="Corporate Services"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </motion.div>

              {/* Third Column - Moving Up Infinitely */}
              <motion.div
                className="flex flex-col gap-3 w-[140px] mt-6"
                animate={{
                  y: [-400, 0]
                }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }}
              >
                {/* Duplicate sets for seamless infinite scroll */}
                {[...Array(4)].map((_, setIndex) => (
                  <React.Fragment key={`col3-${setIndex}`}>
                    {/* Card 9 */}
                    <div className="h-50 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <div className="h-full relative">
                        <Image
                          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                          alt="Public Relations"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Card 10 */}
                    <div className="h-42 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <div className="h-full relative">
                        <Image
                          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                          alt="Business Strategy"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Card 11 */}
                    <div className="h-46 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <div className="h-full relative">
                        <Image
                          src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                          alt="Digital Marketing"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Card 12 */}
                    <div className="h-48 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <div className="h-full relative">
                        <Image
                          src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                          alt="Data Analysis"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </React.Fragment>
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
