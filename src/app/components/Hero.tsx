import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import CardSwap, { Card } from './CardSwap';
import Image from 'next/image';
import { FaNewspaper, FaShieldAlt, FaLaptop, FaBuilding, FaUniversity, FaBullseye } from 'react-icons/fa';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleFirstRef = useRef<HTMLSpanElement>(null);
  const titleSecondRef = useRef<HTMLSpanElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const cardSwapRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      height: windowWidth < 768 ? 'auto' : '600px',
      minHeight: windowWidth < 768 ? '100vh' : '600px',
      position: 'relative',
      display: 'flex',
      flexDirection: windowWidth < 768 ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: windowWidth < 768 ? 'center' : 'space-between',
      padding: windowWidth < 768 ? '80px 20px 40px 20px' : '0 4vw',
      boxSizing: 'border-box',
      gap: windowWidth < 768 ? 40 : 0,
      width: '100%',
      maxWidth: '1600px',
      margin: '0 auto',
      background: '#fafdff',
      overflow: 'hidden',
      marginTop: windowWidth < 768 ? '0px' : '42px',
    }}
  >
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
    {/* Left side text */}
    <div
      style={{
        flex: windowWidth < 768 ? 'none' : '0 0 800px',
        width: windowWidth < 768 ? '100%' : 'auto',
        zIndex: 2,
        maxWidth: windowWidth < 768 ? '100%' : 800,
        minWidth: windowWidth < 768 ? 'auto' : 350,
        background: 'transparent',
        borderRadius: '28px',
        boxShadow: 'none',
        padding: '0 0 0 0',
        display: 'flex',
        flexDirection: 'column',
        gap: windowWidth < 768 ? 20 : 16,
        position: 'relative',
        overflow: 'visible',
        justifyContent: 'center',
        height: windowWidth < 768 ? 'auto' : '100%',
        marginTop: 0,
        alignSelf: 'center',
        textAlign: windowWidth < 768 ? 'center' : 'left',
      }}
    >
      <h1
        style={{
          fontFamily: 'Outfit, Arial, sans-serif',
          fontSize: windowWidth < 768 ? '2.5rem' : windowWidth < 1024 ? '3.2rem' : '4.2rem',
          fontWeight: 700,
          color: '#181f2a',
          lineHeight: 1.1,
          margin: 0,
          letterSpacing: '-0.01em',
          textAlign: windowWidth < 768 ? 'center' : 'left',
          filter: 'none',
          textShadow: 'none',
        }}
      >
        <span ref={titleFirstRef} style={{
          display: 'block',
          fontSize: windowWidth < 768 ? '2.2rem' : windowWidth < 1024 ? '2.8rem' : '3.8rem',
          fontWeight: 700,
          color: '#181f2a',
          lineHeight: 1.1,
          letterSpacing: '-0.01em',
          textAlign: windowWidth < 768 ? 'center' : 'left',
          marginBottom: '0.2em',
          fontFamily: 'Outfit, Arial, sans-serif',
        }}>
          We Shape Narratives.
        </span>
        <span ref={titleSecondRef} style={{
          display: 'block',
          fontSize: windowWidth < 768 ? '2.2rem' : windowWidth < 1024 ? '2.8rem' : '3.8rem',
          fontWeight: 700,
          color: 'transparent',
          background: 'linear-gradient(90deg, #14b8a6 0%, #e91e63 95%, #4a90c2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 1,
          letterSpacing: '-0.01em',
          textAlign: windowWidth < 768 ? 'center' : 'left',
          fontFamily: 'Outfit, Arial, sans-serif',
        }}>
          We Build Reputations.
        </span>
      </h1>
      <p
        ref={descriptionRef}
        style={{
          fontSize: windowWidth < 768 ? '1.1rem' : '1.3rem',
          color: '#2d3748',
          maxWidth: windowWidth < 768 ? '100%' : 540,
          lineHeight: 1.7,
          margin: windowWidth < 768 ? '16px 0 0 0' : '12px 0 0 0',
          fontWeight: 500,
          opacity: 0.95,
          textShadow: '0 1px 2px rgba(0,0,0,0.02)',
          fontFamily: 'Outfit, Arial, sans-serif',
          textAlign: windowWidth < 768 ? 'center' : 'left',
        }}
      >
        India&apos;s leading integrated communications agency delivering strategic PR, corporate storytelling, and crisis leadership.
      </p>
      <button
        ref={buttonRef}
        style={{
          marginTop: windowWidth < 768 ? 20 : 12,
          padding: windowWidth < 768 ? '16px 32px' : '14px 36px',
          fontSize: windowWidth < 768 ? '1.05rem' : '1.15rem',
          fontWeight: 700,
          color: '#14b8a6',
          background: '#fff',
          border: '2px solid #14b8a6',
          borderRadius: '999px',
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(44,82,130,0.12)',
          position: 'relative',
          overflow: 'hidden',
          transition: 'color 0.3s, background 0.3s',
          width: 'fit-content',
          minWidth: windowWidth < 768 ? 240 : 260,
          maxWidth: windowWidth < 768 ? 320 : 340,
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          alignSelf: windowWidth < 768 ? 'center' : 'flex-start',
        }}
        onMouseEnter={e => {
          const btn = e.currentTarget;
          const bg = btn.querySelector('.btn-bg') as HTMLElement | null;
          const text = btn.querySelector('.btn-text') as HTMLElement | null;
          if (bg) bg.style.transform = 'translateY(0)';
          if (text) text.style.color = '#fff';
        }}
        onMouseLeave={e => {
          const btn = e.currentTarget;
          const bg = btn.querySelector('.btn-bg') as HTMLElement | null;
          const text = btn.querySelector('.btn-text') as HTMLElement | null;
          if (bg) bg.style.transform = 'translateY(100%)';
          if (text) text.style.color = '#14b8a6';
        }}
      >
        <span
          className="btn-bg"
          style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(0deg, #14b8a6 0%, #2c5282 100%)',
            zIndex: 0,
            transform: 'translateY(100%)',
            transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
          }}
        />
        <span className="btn-text" style={{ position: 'relative', zIndex: 1, display: 'inline-flex', alignItems: 'center', color: '#14b8a6', transition: 'color 0.3s' }}>
          Schedule a Consultation <span style={{marginLeft: 8}}>📅</span>
        </span>
      </button>
    </div>
    {/* Right side CardSwap */}
    <div
      style={{
        flex: windowWidth < 768 ? 'none' : 1,
        width: windowWidth < 768 ? '100%' : 'auto',
        position: 'relative',
        minWidth: 0,
        display: 'flex',
        justifyContent: windowWidth < 768 ? 'center' : 'flex-end',
        alignItems: 'center',
        height: windowWidth < 768 ? 'auto' : '100%',
        overflow: 'visible',
      }}
    >
      <div
        ref={cardSwapRef}
        style={{
          position: 'relative',
          width: windowWidth < 768 ? 280 : windowWidth < 1024 ? 480 : 640,
          height: windowWidth < 768 ? 280 : windowWidth < 1024 ? 480 : 640,
          maxWidth: windowWidth < 768 ? '280px' : '100%',
          maxHeight: windowWidth < 768 ? '280px' : '100%',
          marginTop: windowWidth < 768 ? 0 : -70,
        }}
      >
        <CardSwap
          cardDistance={windowWidth < 768 ? 30 : 60}
          verticalDistance={windowWidth < 768 ? 35 : 70}
          delay={5000}
          pauseOnHover={false}
        >
          {/* Slide 1: Public Relations */}
          <Card style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start',background:'rgba(255,255,255,0.95)',padding:0,overflow:'hidden',boxShadow:'0 4px 20px rgba(0,0,0,0.08)'}}>
            <div style={{width:'100%',padding: windowWidth < 768 ? '12px 0 6px 14px' : '16px 0 8px 18px',textAlign:'left',color:'#348992',fontWeight:700,letterSpacing:0.3,fontSize: windowWidth < 768 ? '0.95rem' : '1.1rem',display:'flex',alignItems:'center',gap: windowWidth < 768 ? 8 : 10}}>
              <FaNewspaper style={{color:'#348992',fontSize: windowWidth < 768 ? '1.1em' : '1.3em'}} /> Public Relations
            </div>
            <Image src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80" alt="PR" width={600} height={500} style={{width:'100%',height:'78%',objectFit:'cover',borderRadius:'0 0 18px 18px',marginTop:0}} />
          </Card>
          {/* Slide 2: Crisis Management */}
          <Card style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start',background:'rgba(255,255,255,0.95)',padding:0,overflow:'hidden',boxShadow:'0 4px 20px rgba(0,0,0,0.08)'}}>
            <div style={{width:'100%',padding: windowWidth < 768 ? '12px 0 6px 14px' : '16px 0 8px 18px',textAlign:'left',color:'#348992',fontWeight:700,letterSpacing:0.3,fontSize: windowWidth < 768 ? '0.95rem' : '1.1rem',display:'flex',alignItems:'center',gap: windowWidth < 768 ? 8 : 10}}>
              <FaShieldAlt style={{color:'#348992',fontSize: windowWidth < 768 ? '1.1em' : '1.3em'}} /> Crisis Management
            </div>
            <Image src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" alt="Crisis Mgmt" width={600} height={500} style={{width:'100%',height:'78%',objectFit:'cover',borderRadius:'0 0 18px 18px',marginTop:0}} />
          </Card>
          {/* Slide 3: Corporate Communications */}
          <Card style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start',background:'rgba(255,255,255,0.95)',padding:0,overflow:'hidden',boxShadow:'0 4px 20px rgba(0,0,0,0.08)'}}>
            <div style={{width:'100%',padding: windowWidth < 768 ? '12px 0 6px 14px' : '16px 0 8px 18px',textAlign:'left',color:'#348992',fontWeight:700,letterSpacing:0.3,fontSize: windowWidth < 768 ? '0.95rem' : '1.1rem',display:'flex',alignItems:'center',gap: windowWidth < 768 ? 8 : 10}}>
              <FaBuilding style={{color:'#348992',fontSize: windowWidth < 768 ? '1.1em' : '1.3em'}} /> Corporate Communications
            </div>
            <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80" alt="Corporate Comm" width={600} height={500} style={{width:'100%',height:'78%',objectFit:'cover',borderRadius:'0 0 18px 18px',marginTop:0}} />
          </Card>
          {/* Slide 4: Digital Media */}
          <Card style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start',background:'rgba(255,255,255,0.95)',padding:0,overflow:'hidden',boxShadow:'0 4px 20px rgba(0,0,0,0.08)'}}>
            <div style={{width:'100%',padding: windowWidth < 768 ? '12px 0 6px 14px' : '16px 0 8px 18px',textAlign:'left',color:'#348992',fontWeight:700,letterSpacing:0.3,fontSize: windowWidth < 768 ? '0.95rem' : '1.1rem',display:'flex',alignItems:'center',gap: windowWidth < 768 ? 8 : 10}}>
              <FaLaptop style={{color:'#348992',fontSize: windowWidth < 768 ? '1.1em' : '1.3em'}} /> Digital Media
            </div>
            <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="DigitalM" width={600} height={500} style={{width:'100%',height:'78%',objectFit:'cover',borderRadius:'0 0 18px 18px',marginTop:0}} />
          </Card>
          {/* Slide 5: Financial Communication */}
          <Card style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start',background:'rgba(255,255,255,0.95)',padding:0,overflow:'hidden',boxShadow:'0 4px 20px rgba(0,0,0,0.08)'}}>
            <div style={{width:'100%',padding: windowWidth < 768 ? '12px 0 6px 14px' : '16px 0 8px 18px',textAlign:'left',color:'#348992',fontWeight:700,letterSpacing:0.3,fontSize: windowWidth < 768 ? '0.95rem' : '1.1rem',display:'flex',alignItems:'center',gap: windowWidth < 768 ? 8 : 10}}>
              <FaUniversity style={{color:'#348992',fontSize: windowWidth < 768 ? '1.1em' : '1.3em'}} /> Financial Communication
            </div>
            <Image src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" alt="Fincom" width={600} height={500} style={{width:'100%',height:'78%',objectFit:'cover',borderRadius:'0 0 18px 18px',marginTop:0}} />
          </Card>
          {/* Slide 6: Specialized Services */}
          <Card style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start',background:'rgba(255,255,255,0.95)',padding:0,overflow:'hidden',boxShadow:'0 4px 20px rgba(0,0,0,0.08)'}}>
            <div style={{width:'100%',padding: windowWidth < 768 ? '12px 0 6px 14px' : '16px 0 8px 18px',textAlign:'left',color:'#348992',fontWeight:700,letterSpacing:0.3,fontSize: windowWidth < 768 ? '0.95rem' : '1.1rem',display:'flex',alignItems:'center',gap: windowWidth < 768 ? 8 : 10}}>
              <FaBullseye style={{color:'#348992',fontSize: windowWidth < 768 ? '1.1em' : '1.3em'}} /> Specialized Services
            </div>
            <Image src="https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?auto=format&fit=crop&w=600&q=80" alt="Specialized Services" width={600} height={500} style={{width:'100%',height:'78%',objectFit:'cover',borderRadius:'0 0 18px 18px',marginTop:0}} />
          </Card>
        </CardSwap>
      </div>
    </div>
  </div>
  );
};

export default Hero;