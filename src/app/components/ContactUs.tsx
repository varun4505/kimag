'use client';

import React, { useEffect, useState } from 'react';

const ContactUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBookAppointment = () => {
    // This would redirect to your appointment booking page
    window.open('/appointment', '_blank');
  };

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
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-[#2d6389]/90 font-light">
            Let&apos;s Start a Conversation That Matters
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Address Card */}
          <div className={`group relative overflow-hidden transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="relative bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl h-full hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2d6389] to-[#348992] rounded-t-3xl" />
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2d6389] to-[#348992] rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#2d6389] group-hover:text-[#348992] transition-colors duration-300">
                  Address
                </h3>
              </div>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#2d6389] to-[#348992] rounded-full opacity-30" />
                <p className="text-gray-700 leading-relaxed text-lg font-medium pl-4">
                  <span className="block text-[#2d6389] font-semibold mb-2">Konnections IMAG</span>
                  123 Communication Street,<br />
                  Business District,<br />
                  Bangalore - 560001,<br />
                  Karnataka, India
                </p>
              </div>
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-br from-[#2d6389]/20 to-[#348992]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Phone Numbers Card */}
          <div className={`group relative overflow-hidden transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="relative bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl h-full hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#348992] to-[#d73c77] rounded-t-3xl" />
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#348992] to-[#d73c77] rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#348992] group-hover:text-[#d73c77] transition-colors duration-300">
                  Phone
                </h3>
              </div>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#348992] to-[#d73c77] rounded-full opacity-30" />
                <div className="text-gray-700 leading-relaxed text-lg font-medium pl-4 space-y-3">
                  <div>
                    <span className="block text-[#348992] font-semibold text-sm">Mobile 1</span>
                    <a href="tel:+919876543210" className="hover:text-[#348992] transition-colors duration-300">
                      +91 98765 43210
                    </a>
                  </div>
                  <div>
                    <span className="block text-[#348992] font-semibold text-sm">Mobile 2</span>
                    <a href="tel:+919123456789" className="hover:text-[#348992] transition-colors duration-300">
                      +91 91234 56789
                    </a>
                  </div>
                  <div>
                    <span className="block text-[#d73c77] font-semibold text-sm">Landline</span>
                    <a href="tel:+918012345678" className="hover:text-[#d73c77] transition-colors duration-300">
                      +91 80 1234 5678
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-br from-[#348992]/20 to-[#d73c77]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Email Card */}
          <div className={`group relative overflow-hidden transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="relative bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl h-full hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d73c77] to-[#2d6389] rounded-t-3xl" />
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#d73c77] to-[#2d6389] rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#d73c77] group-hover:text-[#2d6389] transition-colors duration-300">
                  Email
                </h3>
              </div>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#d73c77] to-[#2d6389] rounded-full opacity-30" />
                <div className="text-gray-700 leading-relaxed text-lg font-medium pl-4">
                  <span className="block text-[#d73c77] font-semibold text-sm mb-2">Get in Touch</span>
                  <a 
                    href="mailto:hello@konnectionsimag.com" 
                    className="hover:text-[#d73c77] transition-colors duration-300 break-all"
                  >
                    hello@konnectionsimag.com
                  </a>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-br from-[#d73c77]/20 to-[#2d6389]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Book Appointment Card */}
          <div className={`group relative overflow-hidden transition-all duration-700 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="relative bg-gradient-to-br from-[#2d6389] to-[#348992] p-8 rounded-3xl shadow-xl h-full hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Meet Us
                </h3>
              </div>
              <div className="text-white leading-relaxed mb-6">
                <p className="text-lg font-medium mb-4">
                  Ready to transform your brand&apos;s story?
                </p>
                <p className="text-sm opacity-90">
                  Schedule a consultation with our expert team and discover how we can elevate your communication strategy.
                </p>
              </div>
              <button
                onClick={handleBookAppointment}
                className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 hover:transform hover:translateY(-1px) border border-white/20 hover:border-white/30"
              >
                Book Appointment
              </button>
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full opacity-50" />
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/10 rounded-full opacity-30" />
            </div>
          </div>
        </div>

        

        {/* Office Hours */}
        <div className={`bg-gradient-to-r from-[#2d6389] to-[#348992] p-12 md:p-16 rounded-3xl shadow-2xl transition-all duration-1000 delay-1300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-12">
            Office Hours
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Weekdays</h3>
              <div className="space-y-3 text-white/90">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Weekend</h3>
              <div className="space-y-3 text-white/90">
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default ContactUs;