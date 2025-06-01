'use client';

import React, { useEffect, useState } from 'react';

const AboutUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden px-5 py-20 mt-5">
      {/* Floating Triangles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-triangle triangle-1" />
        <div className="floating-triangle triangle-2" />
        <div className="floating-triangle triangle-3" />
        <div className="floating-triangle triangle-4" />
        <div className="floating-triangle triangle-5" />
        <div className="floating-triangle triangle-6" />
        <div className="floating-triangle triangle-7" />
        <div className="floating-triangle triangle-8" />
        <div className="floating-triangle triangle-9" />
        <div className="floating-triangle triangle-10" />
        <div className="floating-triangle triangle-11" />
        <div className="floating-triangle triangle-12" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-5xl md:text-6xl font-bold text-[#2d6389] mb-5 drop-shadow-lg">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-[#2d6389]/90 font-light">
            Building Bridges Through Strategic Communication
          </p>
        </div>

        {/* Company Overview */}
        <div className={`bg-white/95 backdrop-blur-sm p-12 md:p-16 rounded-3xl mb-16 shadow-2xl transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2d6389] text-center mb-8">
            Award-Winning Communications Excellence
          </h2>
          <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
            Konnections IMAG is an award-winning independent multi-disciplinary communications company 
            offering 360-degree solutions to brands across India. Founded in 2010 and incubated at 
            NSRCEL Indian Institute of Management, Bangalore, we have evolved into one of India's 
            leading integrated marketing communication consultancies.
          </p>
        </div>

        {/* Enhanced Mission, Vision, Philosophy Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Mission Card */}
          <div className={`group relative overflow-hidden transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="relative bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl h-full hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2d6389] to-[#348992] rounded-t-3xl" />
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2d6389] to-[#348992] rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#2d6389] group-hover:text-[#348992] transition-colors duration-300">
                  Our Mission
                </h3>
              </div>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#2d6389] to-[#348992] rounded-full opacity-30" />
                <p className="text-gray-700 leading-relaxed text-lg font-medium pl-4">
                  To help brands find their <span className="text-[#2d6389] font-semibold">authentic voice</span>, 
                  tell <span className="text-[#348992] font-semibold">compelling stories</span>, and build 
                  meaningful connections with their stakeholders through strategic communication.
                </p>
              </div>
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-br from-[#2d6389]/20 to-[#348992]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Vision Card */}
          <div className={`group relative overflow-hidden transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="relative bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl h-full hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#348992] to-[#d73c77] rounded-t-3xl" />
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#348992] to-[#d73c77] rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#348992] group-hover:text-[#d73c77] transition-colors duration-300">
                  Our Vision
                </h3>
              </div>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#348992] to-[#d73c77] rounded-full opacity-30" />
                <p className="text-gray-700 leading-relaxed text-lg font-medium pl-4">
                  To be India's <span className="text-[#348992] font-semibold">most trusted</span> communication partner, 
                  recognized for delivering <span className="text-[#d73c77] font-semibold">impactful narratives</span> 
                  that drive business success and build lasting reputations.
                </p>
              </div>
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-br from-[#348992]/20 to-[#d73c77]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Philosophy Card */}
          <div className={`group relative overflow-hidden transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="relative bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl h-full hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d73c77] to-[#2d6389] rounded-t-3xl" />
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#d73c77] to-[#2d6389] rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#d73c77] group-hover:text-[#2d6389] transition-colors duration-300">
                  Our Philosophy 
                </h3>
              </div>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#d73c77] to-[#2d6389] rounded-full opacity-30" />
                <p className="text-gray-700 leading-relaxed text-lg font-medium pl-4">
                  We're inspired by the belief that one can use communications to 
                  <span className="text-[#d73c77] font-semibold"> change the world</span> and 
                  the way it responds to <span className="text-[#2d6389] font-semibold">brands, reputations, and ideas</span>.
                </p>
              </div>
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-br from-[#d73c77]/20 to-[#2d6389]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className={`bg-white/95 backdrop-blur-sm p-12 md:p-16 rounded-3xl mb-16 shadow-2xl transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2d6389] text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Integrity', desc: 'We believe in honest, trustworthy, and ethical communication services', delay: 1000 },
              { title: 'Innovation', desc: 'We relentlessly focus on bringing creativity and innovation to all our work', delay: 1200 },
              { title: 'Impact', desc: 'We drive real business results for our clients through strategic communication', delay: 1400 },
              { title: 'Excellence', desc: 'We maintain the highest standards in everything we deliver', delay: 1600 }
            ].map((value, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-[#2d6389] to-[#348992] p-6 rounded-2xl text-white text-center transform hover:scale-105 transition-all duration-500 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ transitionDelay: `${value.delay}ms` }}
              >
                <h4 className="text-xl font-semibold mb-4">{value.title}</h4>
                <p className="text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Reach */}
        
      </div>

      <style jsx>{`
        .floating-triangle {
          position: absolute;
          width: 0;
          height: 0;
          opacity: 0.25;
          animation: float 8s ease-in-out infinite;
        }

        .triangle-1 {
          border-left: 30px solid transparent;
          border-right: 30px solid transparent;
          border-bottom: 52px solid #2d6389;
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .triangle-2 {
          border-left: 20px solid transparent;
          border-right: 20px solid transparent;
          border-bottom: 35px solid #d73c77;
          top: 30%;
          right: 10%;
          animation-delay: 2s;
        }

        .triangle-3 {
          border-left: 40px solid transparent;
          border-right: 40px solid transparent;
          border-bottom: 69px solid #348992;
          bottom: 20%;
          left: 8%;
          animation-delay: 4s;
        }

        .triangle-4 {
          border-left: 25px solid transparent;
          border-right: 25px solid transparent;
          border-bottom: 43px solid #d73c77;
          top: 60%;
          right: 5%;
          animation-delay: 6s;
        }

        .triangle-5 {
          border-left: 15px solid transparent;
          border-right: 15px solid transparent;
          border-bottom: 26px solid #2d6389;
          top: 80%;
          left: 50%;
          animation-delay: 1s;
        }

        .triangle-6 {
          border-left: 35px solid transparent;
          border-right: 35px solid transparent;
          border-bottom: 60px solid #d73c77;
          top: 15%;
          left: 70%;
          animation-delay: 3s;
        }

        .triangle-7 {
          border-left: 18px solid transparent;
          border-right: 18px solid transparent;
          border-bottom: 31px solid #348992;
          bottom: 40%;
          right: 15%;
          animation-delay: 5s;
        }

        .triangle-8 {
          border-left: 28px solid transparent;
          border-right: 28px solid transparent;
          border-bottom: 48px solid #d73c77;
          top: 40%;
          left: 15%;
          animation-delay: 7s;
        }

        .triangle-9 {
          border-left: 22px solid transparent;
          border-right: 22px solid transparent;
          border-bottom: 38px solid #2d6389;
          bottom: 60%;
          left: 85%;
          animation-delay: 1.5s;
        }

        .triangle-10 {
          border-left: 32px solid transparent;
          border-right: 32px solid transparent;
          border-bottom: 55px solid #348992;
          top: 70%;
          right: 25%;
          animation-delay: 3.5s;
        }

        .triangle-11 {
          border-left: 16px solid transparent;
          border-right: 16px solid transparent;
          border-bottom: 28px solid #d73c77;
          bottom: 10%;
          right: 40%;
          animation-delay: 5.5s;
        }

        .triangle-12 {
          border-left: 24px solid transparent;
          border-right: 24px solid transparent;
          border-bottom: 42px solid #2d6389;
          top: 85%;
          left: 25%;
          animation-delay: 7.5s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.25;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;