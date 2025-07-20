import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import CardSwap, { Card } from './CardSwap';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaNewspaper, FaShieldAlt, FaLaptop, FaBuilding, FaBullseye } from 'react-icons/fa';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const titleFirstRef = useRef<HTMLSpanElement>(null);
  const titleSecondRef = useRef<HTMLSpanElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const cardSwapRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(1200);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Use a consistent breakpoint that works for both server and client
  const isMobile = isMounted ? windowWidth < 768 : false;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleFirstRef.current, titleSecondRef.current, descriptionRef.current, buttonRef.current], {
        opacity: 0,
        y: 50
      });
      
      gsap.set(cardSwapRef.current, {
        opacity: 0,
        x: 100,
        scale: 0.8
      });

      // Create timeline
      const tl = gsap.timeline({ delay: 0.2 });

      // Animate elements in sequence
      tl.to(titleFirstRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      })
      .to(titleSecondRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4")
      .to(descriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.3")
      .to(buttonRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.2")
      .to(cardSwapRef.current, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out"
      }, "-=0.4");

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
  <div
    ref={heroRef}
    style={{
      height: isMobile ? 'auto' : '600px',
      minHeight: isMobile ? 'auto' : '600px',
      position: 'relative',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: isMobile ? 'center' : 'space-between',
      padding: isMobile ? '60px 16px 60px 16px' : '0 4vw',
      boxSizing: 'border-box',
      gap: isMobile ? 60 : 0,
      width: '100%',
      maxWidth: '1600px',
      margin: '0 auto',
      background: '#fafdff',
      overflow: 'hidden',
      marginTop: isMobile ? '0px' : '42px',
    }}
  >
    {/* Decorative Triangles in Blank Space */}
    <div style={{position:'absolute',left:isMobile?'10%':'7%',top:isMobile?'32%':'28%',zIndex:2,pointerEvents:'none'}}>
      <svg width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="19,0 38,34 0,34" fill="#348992" fillOpacity="0.13" />
      </svg>
    </div>
    <div style={{position:'absolute',left:isMobile?'18%':'13%',top:isMobile?'44%':'38%',zIndex:2,pointerEvents:'none'}}>
      <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="12,0 24,22 0,22" fill="#d73c77" fillOpacity="0.11" />
      </svg>
    </div>
    <div style={{position:'absolute',left:isMobile?'7%':'4%',top:isMobile?'60%':'54%',zIndex:2,pointerEvents:'none'}}>
      <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="9,0 18,16 0,16" fill="#2d6389" fillOpacity="0.10" />
      </svg>
    </div>
    {/* Background SVG grid and circles */}
    <svg
      width="100%"
      height="100%"
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      viewBox="0 0 1600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Grid */}
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e3eef7" strokeWidth="1" />
        </pattern>
        <radialGradient id="radial1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="radial2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#ff7eb3" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1600" height="600" fill="url(#grid)" />
      {/* Radial circles */}
      <circle cx="1200" cy="300" r="220" fill="url(#radial1)" />
      <circle cx="1200" cy="300" r="120" fill="url(#radial2)" />
      <circle cx="400" cy="100" r="120" fill="url(#radial1)" />
    </svg>
    {/* Modern Floating Particles */}
  <div ref={particlesRef} className="absolute inset-0 pointer-events-none" style={{zIndex: 1}}>

      {/* Triangle Particles - Increased and Varied */}
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
        className="absolute top-[10%] left-[30%]"
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div className="w-0 h-0 border-l-[16px] border-r-[16px] border-b-[28px] border-l-transparent border-r-transparent border-b-[#d73c77]/20 filter drop-shadow-lg"></div>
      </motion.div>

      <motion.div 
        className="absolute top-[35%] left-[10%]"
        animate={{ 
          y: [0, -18, 0],
          rotate: [0, 90, 180],
          scale: [1, 1.08, 1]
        }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-[#348992]/20 filter drop-shadow-lg"></div>
      </motion.div>

      <motion.div 
        className="absolute bottom-[10%] left-[20%]"
        animate={{ 
          y: [0, 22, 0],
          rotate: [0, 60, 120],
          scale: [1, 1.12, 1]
        }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      >
        <div className="w-0 h-0 border-l-[18px] border-r-[18px] border-b-[30px] border-l-transparent border-r-transparent border-b-[#2d6389]/15 filter drop-shadow-lg"></div>
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
    <svg
      width="100%"
      height="100%"
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      viewBox="0 0 1600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Grid */}
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e3eef7" strokeWidth="1" />
        </pattern>
        <radialGradient id="radial1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="radial2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#ff7eb3" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1600" height="600" fill="url(#grid)" />
      {/* Radial circles */}
      <circle cx="1200" cy="300" r="220" fill="url(#radial1)" />
      <circle cx="1200" cy="300" r="120" fill="url(#radial2)" />
      <circle cx="400" cy="100" r="120" fill="url(#radial1)" />
    </svg>
    {/* Left side text */}
    <div
      style={{
        flex: isMobile ? 'none' : '0 0 800px',
        width: isMobile ? '100%' : 'auto',
        zIndex: 2,
        maxWidth: isMobile ? '100%' : 800,
        minWidth: isMobile ? 'auto' : 350,
        background: 'transparent',
        borderRadius: '28px',
        boxShadow: 'none',
        padding: '0 0 0 0',
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? 16 : 16,
        position: 'relative',
        overflow: 'visible',
        justifyContent: 'center',
        height: isMobile ? 'auto' : '100%',
        marginTop: 0,
        alignSelf: 'center',
        textAlign: isMobile ? 'center' : 'left',
      }}
    >
      <h1
        style={{
          fontFamily: 'Poppins, Arial, sans-serif',
          fontSize: isMobile ? '2.2rem' : windowWidth < 1024 ? '3.2rem' : '4.2rem',
          fontWeight: 700,
          color: '#181f2a',
          lineHeight: 1.2,
          margin: 0,
          letterSpacing: '-0.01em',
          textAlign: isMobile ? 'center' : 'left',
          filter: 'none',
          textShadow: 'none',
        }}
      >
        <span ref={titleFirstRef} style={{
          display: 'block',
          fontSize: isMobile ? '2rem' : windowWidth < 1024 ? '2.8rem' : '3.8rem',
          fontWeight: 700,
          color: '#181f2a',
          lineHeight: 1.2,
          letterSpacing: '-0.01em',
          textAlign: isMobile ? 'center' : 'left',
          marginBottom: isMobile ? '0.15em' : '0.2em',
          fontFamily: 'Poppins, Arial, sans-serif',
        }}>
          We Shape Narratives.
        </span>
        <span ref={titleSecondRef} style={{
          display: 'block',
          fontSize: isMobile ? '2rem' : windowWidth < 1024 ? '2.8rem' : '3.8rem',
          fontWeight: 700,
          color: 'transparent',
          background: 'linear-gradient(90deg, #14b8a6 0%, #e91e63 95%, #4a90c2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 1.1,
          letterSpacing: '-0.01em',
          textAlign: isMobile ? 'center' : 'left',
          fontFamily: 'Poppins, Arial, sans-serif',
        }}>
          We Build Reputations.
        </span>
      </h1>
      <p
        ref={descriptionRef}
        style={{
          fontSize: isMobile ? '1rem' : '1.3rem',
          color: '#2d3748',
          maxWidth: isMobile ? '100%' : 540,
          lineHeight: 1.6,
          margin: isMobile ? '12px 0 0 0' : '12px 0 0 0',
          fontWeight: 500,
          opacity: 0.95,
          textShadow: '0 1px 2px rgba(0,0,0,0.02)',
          fontFamily: 'Poppins, Arial, sans-serif',
          textAlign: isMobile ? 'center' : 'left',
          paddingLeft: isMobile ? '8px' : '0',
          paddingRight: isMobile ? '8px' : '0',
        }}
      >
        India&apos;s leading integrated communications agency trusted for strategic PR, reputation management, crisis response, and corporate storytelling across diverse industries.
      </p>
      <button
        ref={buttonRef}
        onClick={() => router.push('/appointment')}
        style={{
          marginTop: isMobile ? 16 : 20,
          padding: isMobile ? '12px 24px' : '14px 28px',
          fontSize: isMobile ? '1rem' : '1.1rem',
          fontWeight: 500,
          color: '#14b8a6',
          background: 'transparent',
          border: '2px solid #14b8a6',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          width: 'fit-content',
          display: 'flex',
          alignItems: 'center',
          alignSelf: isMobile ? 'center' : 'flex-start',
          fontFamily: 'Poppins, Arial, sans-serif',
          letterSpacing: '0.2px',
          boxShadow: 'none',
        }}
        onMouseEnter={e => {
          const btn = e.currentTarget;
          btn.style.backgroundColor = '#14b8a6';
          btn.style.color = '#fff';
          const arrow = btn.querySelector('.arrow-animation') as HTMLElement;
          if (arrow) {
            arrow.style.transform = 'translateX(4px)';
          }
        }}
        onMouseLeave={e => {
          const btn = e.currentTarget;
          btn.style.backgroundColor = 'transparent';
          btn.style.color = '#14b8a6';
          const arrow = btn.querySelector('.arrow-animation') as HTMLElement;
          if (arrow) {
            arrow.style.transform = 'translateX(0px)';
          }
        }}
      >
        <span>{isMobile ? 'Book Consultation' : 'Get the PR that Matters'}</span>
        <span 
          style={{
            marginLeft: '8px',
            display: 'inline-block',
            transition: 'transform 0.3s ease',
            fontSize: '1em',
          }}
          className="arrow-animation"
        >
          →
        </span>
      </button>
    </div>
    {/* Right side CardSwap */}
    <div
      style={{
        flex: isMobile ? 'none' : 1,
        width: isMobile ? '100%' : 'auto',
        position: 'relative',
        minWidth: 0,
        display: 'flex',
        justifyContent: isMobile ? 'center' : 'flex-end',
        alignItems: 'center',
        height: isMobile ? 'auto' : '100%',
        overflow: 'visible',
        marginTop: isMobile ? '120px' : '-80px',
        zIndex: 2,
      }}
    >
      <div
        ref={cardSwapRef}
        style={{
          position: 'relative',
          width: isMobile ? 280 : windowWidth < 1024 ? 480 : 640,
          height: isMobile ? 280 : windowWidth < 1024 ? 480 : 640,
          maxWidth: isMobile ? '280px' : '100%',
          maxHeight: isMobile ? '280px' : '100%',
          marginTop: isMobile ? 0 : -70,
          margin: isMobile ? '0 auto' : 'auto',
        }}
      >
        <CardSwap
          cardDistance={isMobile ? 30 : 60}
          verticalDistance={isMobile ? 35 : 70}
          delay={5000}
          pauseOnHover={false}
        >
          {/* Slide 1: Public Relations */}
          <Card href="/services/public-relations" style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start',background:'rgba(255,255,255,0.95)',padding:0,overflow:'hidden',boxShadow:'0 4px 20px rgba(0,0,0,0.08)'}}>
            <div style={{width:'100%',padding: isMobile ? '12px 0 6px 14px' : '16px 0 8px 18px',textAlign:'left',color:'#348992',fontWeight:700,letterSpacing:0.3,fontSize: isMobile ? '0.95rem' : '1.1rem',display:'flex',alignItems:'center',gap: isMobile ? 8 : 10}}>
              <FaNewspaper style={{color:'#348992',fontSize: isMobile ? '1.1em' : '1.3em'}} /> Public Relations
            </div>
            <Image src="/hero/PR.png" alt="PR" width={600} height={500} style={{width:'100%',height:'78%',objectFit:'cover',borderRadius:'0 0 18px 18px',marginTop:0}} draggable={false} />
          </Card>
          {/* Slide 2: Crisis Management */}
          <Card href="/services/crisis-management" style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start',background:'rgba(255,255,255,0.95)',padding:0,overflow:'hidden',boxShadow:'0 4px 20px rgba(0,0,0,0.08)'}}>
            <div style={{width:'100%',padding: isMobile ? '12px 0 6px 14px' : '16px 0 8px 18px',textAlign:'left',color:'#348992',fontWeight:700,letterSpacing:0.3,fontSize: isMobile ? '0.95rem' : '1.1rem',display:'flex',alignItems:'center',gap: isMobile ? 8 : 10}}>
              <FaShieldAlt style={{color:'#348992',fontSize: isMobile ? '1.1em' : '1.3em'}} /> Crisis Management
            </div>
            <Image src="/hero/crisis.png" alt="Crisis Mgmt" width={600} height={500} style={{width:'100%',height:'78%',objectFit:'cover',borderRadius:'0 0 18px 18px',marginTop:0}} draggable={false} />
          </Card>
          {/* Slide 3: Corporate Communications */}
          <Card href="/services/corporate-communications" style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start',background:'rgba(255,255,255,0.95)',padding:0,overflow:'hidden',boxShadow:'0 4px 20px rgba(0,0,0,0.08)'}}>
            <div style={{width:'100%',padding: isMobile ? '12px 0 6px 14px' : '16px 0 8px 18px',textAlign:'left',color:'#348992',fontWeight:700,letterSpacing:0.3,fontSize: isMobile ? '0.95rem' : '1.1rem',display:'flex',alignItems:'center',gap: isMobile ? 8 : 10}}>
              <FaBuilding style={{color:'#348992',fontSize: isMobile ? '1.1em' : '1.3em'}} /> Corporate Communications
            </div>
            <Image src="/hero/corporate.png" alt="Corporate Comm" width={600} height={500} style={{width:'100%',height:'78%',objectFit:'cover',borderRadius:'0 0 18px 18px',marginTop:0}} draggable={false} />
          </Card>
          {/* Slide 4: Influencer Management */}
          <Card href="/services/digital-media" style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start',background:'rgba(255,255,255,0.95)',padding:0,overflow:'hidden',boxShadow:'0 4px 20px rgba(0,0,0,0.08)'}}>
            <div style={{width:'100%',padding: isMobile ? '12px 0 6px 14px' : '16px 0 8px 18px',textAlign:'left',color:'#348992',fontWeight:700,letterSpacing:0.3,fontSize: isMobile ? '0.95rem' : '1.1rem',display:'flex',alignItems:'center',gap: isMobile ? 8 : 10}}>
              <FaLaptop style={{color:'#348992',fontSize: isMobile ? '1.1em' : '1.3em'}} /> Influencer Management
            </div>
            <Image src="/hero/digital.png" alt="Influencer Management" width={600} height={500} style={{width:'100%',height:'78%',objectFit:'cover',borderRadius:'0 0 18px 18px',marginTop:0}} draggable={false} />
          </Card>
          {/* Slide 5: Specialized Services */}
          <Card href="/services/specialized-services" style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start',background:'rgba(255,255,255,0.95)',padding:0,overflow:'hidden',boxShadow:'0 4px 20px rgba(0,0,0,0.08)'}}>
            <div style={{width:'100%',padding: isMobile ? '12px 0 6px 14px' : '16px 0 8px 18px',textAlign:'left',color:'#348992',fontWeight:700,letterSpacing:0.3,fontSize: isMobile ? '0.95rem' : '1.1rem',display:'flex',alignItems:'center',gap: isMobile ? 8 : 10}}>
              <FaBullseye style={{color:'#348992',fontSize: isMobile ? '1.1em' : '1.3em'}} /> Specialized Services
            </div>
            <Image src="/hero/spl.png" alt="Specialized Services" width={600} height={500} style={{width:'100%',height:'78%',objectFit:'cover',borderRadius:'0 0 18px 18px',marginTop:0}} draggable={false} />
          </Card>
        </CardSwap>
      </div>
    </div>
  </div>
  );
};

export default Hero;
