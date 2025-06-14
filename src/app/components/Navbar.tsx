"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaFacebook, FaInstagram, FaEnvelope, FaLinkedinIn, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";

interface SocialLink {
  icon: React.ReactElement;
  href: string;
  hoverColor: string;
  label: string;
}

interface NavigationLink {
  href: string;
  text: string;
  description?: string;
  isExternal?: boolean;
}

interface ServiceDropdownItem {
  href: string;
  text: string;
  description: string;
  icon: string;
}

const ModernHamburger: React.FC<{
  isOpen: boolean;
  onClick: () => void;
}> = ({ isOpen, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 group" 
      aria-label="Toggle Menu"
    >
      <div className="flex flex-col items-center justify-center w-6 h-6 space-y-1">
        <motion.div
          className="w-6 h-0.5 bg-gray-700 rounded-full"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 8 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="w-6 h-0.5 bg-gray-700 rounded-full"
          animate={{
            opacity: isOpen ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="w-6 h-0.5 bg-gray-700 rounded-full"
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -8 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </button>
  );
};

const MainNavbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    checkMobile();
    handleScroll();
    
    window.addEventListener("resize", checkMobile);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    // Close mobile menu if open
    setIsDrawerOpen(false);
  };

  const socialLinks: SocialLink[] = [
    {
      icon: <FaLinkedinIn size={20} />,
      href: "https://www.linkedin.com/company/konnections-imag",
      hoverColor: "hover:text-[#0077B5]",
      label: "LinkedIn"
    },
    {
      icon: <FaFacebook size={20} />,
      href: "https://facebook.com/konnectionsimag",
      hoverColor: "hover:text-[#1877F2]",
      label: "Facebook"
    },
    {
      icon: <FaInstagram size={20} />,
      href: "https://instagram.com/konnectionsimag",
      hoverColor: "hover:text-[#E4405F]",
      label: "Instagram"
    },
  ];

  const servicesDropdown: ServiceDropdownItem[] = [
    {
      href: "/services/public-relations",
      text: "Public Relations",
      description: "Media relations & reputation management",
      icon: "🗞️"
    },
    {
      href: "/services/crisis-management",
      text: "Crisis Management",
      description: "Strategic crisis communication",
      icon: "⚠️"
    },
    {
      href: "/services/digital-media",
      text: "Digital Media",
      description: "Social media & online presence",
      icon: "💻"
    },
    {
      href: "/services/corporate-communications",
      text: "Corporate Communications",
      description: "Internal & external communications",
      icon: "🏢"
    },
    {
      href: "/services/financial-communications",
      text: "Financial Communications",
      description: "Investor relations & financial PR",
      icon: "💰"
    },
    {
      href: "/services/specialized-services",
      text: "Specialized Services",
      description: "Events, CSR & strategic campaigns",
      icon: "🎯"
    }
  ];

  const navigationLinks: NavigationLink[] = [
    { 
      href: "#about", 
      text: "About", 
      description: "Learn about our agency" 
    },
    { 
      href: "#case-studies", 
      text: "Case Studies", 
      description: "Success stories & portfolio" 
    },
    { 
      href: "#ourservies", 
      text: "Services", 
      description: "Our comprehensive services" 
    },
    { 
      href: "#contact", 
      text: "Contact", 
      description: "Get in touch with us" 
    }
  ];

  return (
    <>
      {/* Top Contact Bar - Only visible at top of page */}
      <motion.div 
        className="hidden lg:block bg-gray-900 text-white py-2 overflow-hidden"
        initial={{ height: "auto", opacity: 1 }}
        animate={{ 
          height: isScrolled ? 0 : "auto", 
          opacity: isScrolled ? 0 : 1 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <FaPhone size={14} />
                <span>+91 7032939360</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope size={14} />
                <span>info@konnections.co.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt size={14} />
                <span>Banjara Hills, Hyderabad, Telangana - 500004</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-300 ${social.hoverColor} transition-colors duration-200`}
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <nav
        ref={navRef}
        className={`fixed left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'top-0 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
            : isMobile 
              ? 'top-0 bg-white/90 backdrop-blur-sm'
              : 'top-10 bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
            
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Link href="/" className="group">
                <div className="relative">
                  <Image
                    src="/logo-big.png"
                    alt="Konnections IMAG Logo"
                    width={isMobile ? 120 : 220}
                    height={isMobile ? 40 : 73}
                    priority
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              
              {/* Services Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-[#348992] font-medium transition-colors duration-200 py-2">
                  <span>Services</span>
                  <motion.svg
                    className="w-4 h-4"
                    animate={{ rotate: isServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      ref={servicesDropdownRef}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200/50 overflow-hidden"
                    >
                      <div className="py-4">
                        {servicesDropdown.map((service, index) => (
                          <Link
                            key={index}
                            href={service.href}
                            className="block px-6 py-3 hover:bg-gray-50 transition-colors duration-200 group"
                          >
                            <div className="flex items-start space-x-3">
                              <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                                {service.icon}
                              </span>
                              <div>
                                <div className="font-medium text-gray-900 group-hover:text-[#348992] transition-colors duration-200">
                                  {service.text}
                                </div>
                                <div className="text-sm text-gray-600 mt-1">
                                  {service.description}
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Regular Navigation Links */}
              {navigationLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(link.href)}
                  className="text-gray-700 hover:text-[#348992] font-medium transition-colors duration-200 relative group"
                >
                  {link.text}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#348992] transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}

              {/* CTA Button */}
              <Link
                href="/appointment"
                className="bg-gradient-to-r from-[#348992] to-[#2d6389] text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <ModernHamburger isOpen={isDrawerOpen} onClick={toggleDrawer} />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={toggleDrawer}
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-80 max-w-[90vw] h-full bg-white z-50 shadow-2xl lg:hidden"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <div className="flex items-center">
                  <Image
                    src="/logo-big.png"
                    alt="Konnections IMAG Logo"
                    width={140}
                    height={46}
                  />
                </div>
                <ModernHamburger isOpen={isDrawerOpen} onClick={toggleDrawer} />
              </div>

              {/* Navigation */}
              <div className="flex-1 overflow-y-auto p-6">
                {/* Services Section */}
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Services
                  </h3>
                  <div className="space-y-1">
                    {servicesDropdown.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                        onClick={toggleDrawer}
                      >
                        <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                          {service.icon}
                        </span>
                        <div>
                          <div className="font-medium text-gray-900 group-hover:text-[#348992] transition-colors duration-200">
                            {service.text}
                          </div>
                          <div className="text-xs text-gray-600">
                            {service.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Main Navigation */}
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Navigation
                  </h3>
                  <div className="space-y-1">
                    {navigationLinks.map((link, index) => (
                      <button
                        key={index}
                        onClick={() => handleNavClick(link.href)}
                        className="block w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-[#348992] transition-colors duration-200">
                          {link.text}
                        </div>
                        {link.description && (
                          <div className="text-xs text-gray-600 mt-1">
                            {link.description}
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="/appointment"
                  className="block w-full bg-gradient-to-r from-[#348992] to-[#2d6389] text-white text-center py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  onClick={toggleDrawer}
                >
                  Get Started
                </Link>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Contact Info</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <FaPhone size={12} />
                      <span>+91 7032939360</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaEnvelope size={12} />
                      <span>info@konnections.co.in</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <FaMapMarkerAlt size={12} className="mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">Konnections IMAG<br />6-3-596/102F, 2nd Floor, Navin Nagar,<br />Banjara Hills, Hyderabad, Telangana - 500004</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <Link
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-gray-600 ${social.hoverColor} transition-colors duration-200 p-2 rounded-lg hover:bg-gray-50`}
                        aria-label={social.label}
                      >
                        {social.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MainNavbar;
