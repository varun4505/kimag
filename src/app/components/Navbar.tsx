"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaFacebook, FaInstagram, FaEnvelope, FaLinkedinIn, FaPhone, FaMapMarkerAlt, FaNewspaper, FaShieldAlt, FaLaptop, FaBuilding, FaUniversity, FaBullseye } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { smoothScrollTo } from "../../lib/smoothScroll";

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
  icon: React.ReactElement;
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
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(scrollPercent, 100));
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
    // Close mobile services dropdown when closing drawer
    if (isDrawerOpen) {
      setIsMobileServicesOpen(false);
    }
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen((prev) => !prev);
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      // Check if we're on the homepage
      if (pathname === '/') {
        // We're on the homepage, use Lenis smooth scroll
        smoothScrollTo(href, { 
          duration: 1.5,
          offset: -80 // Account for fixed header
        });
      } else {
        // We're not on the homepage, navigate to homepage with hash
        router.push('/' + href);
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
      icon: <FaNewspaper className="text-[#348992]" />
    },
    {
      href: "/services/crisis-management",
      text: "Crisis Management",
      description: "Strategic crisis communication",
      icon: <FaShieldAlt className="text-[#348992]" />
    },
    {
      href: "/services/digital-media",
      text: "Digital Media",
      description: "Social media & online presence",
      icon: <FaLaptop className="text-[#348992]" />
    },
    {
      href: "/services/corporate-communications",
      text: "Corporate Communications",
      description: "Internal & external communications",
      icon: <FaBuilding className="text-[#348992]" />
    },
    {
      href: "/services/financial-communications",
      text: "Financial Communications",
      description: "Investor relations & financial PR",
      icon: <FaUniversity className="text-[#348992]" />
    },
    {
      href: "/services/specialized-services",
      text: "Specialized Services",
      description: "Events, CSR & strategic campaigns",
      icon: <FaBullseye className="text-[#348992]" />
    }
  ];

  const navigationLinks: NavigationLink[] = [
    { 
      href: "#about", 
      text: "About", 
      description: "Learn about our agency" 
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
        className="hidden lg:block bg-gray-900 text-white py-2.5 overflow-hidden"
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
            : 'top-0 lg:top-[44px] bg-white/90 backdrop-blur-sm'
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
                    src={isMobile ? "/logo-small.png" : "/logo-big.png"}
                    alt="Konnections IMAG Logo"
                    width={isMobile ? 40 : 220}
                    height={isMobile ? 10 : 73}
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
                <button 
                  onClick={() => handleNavClick("#ourservies")}
                  className="flex items-center space-x-1 text-gray-700 hover:text-[#348992] font-medium transition-colors duration-200 py-2"
                >
                  <span>Services</span>
                  <motion.svg
                    className="w-4 h-4"
                    animate={{ rotate: isServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the main button click
                      setIsServicesOpen(!isServicesOpen);
                    }}
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
                      className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-xl border border-gray-200/50 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="grid grid-cols-2 gap-2">
                          {servicesDropdown.map((service, index) => (
                            <Link
                              key={index}
                              href={service.href}
                              className="block p-3 hover:bg-gray-50 transition-colors duration-200 group rounded-lg"
                            >
                              <div className="flex items-start space-x-3">
                                <span className="text-lg group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                                  {service.icon}
                                </span>
                                <div className="min-w-0">
                                  <div className="font-medium text-gray-900 group-hover:text-[#348992] transition-colors duration-200 text-sm">
                                    {service.text}
                                  </div>
                                  <div className="text-xs text-gray-600 mt-1 line-clamp-2">
                                    {service.description}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
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

      {/* Scroll Progress Bar */}
      <div
        className={`hidden lg:block fixed left-0 w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? 'top-[64px] sm:top-[64px] lg:top-[80px]' 
            : 'top-[100px] sm:top-[104px] lg:top-[124px]'
        }`}
      >
        <div className="h-1 bg-gray-200/60 shadow-sm">
          <motion.div
            className="h-full bg-gradient-to-r from-[#348992] via-[#2d6389] to-[#d73c77] shadow-lg rounded-r-full"
            style={{
              boxShadow: '0 0 8px rgba(52, 137, 146, 0.4), 0 0 16px rgba(52, 137, 146, 0.2)'
            }}
            initial={{ width: "0%" }}
            animate={{ width: `${scrollProgress}%` }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          />
        </div>
      </div>

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
              className="fixed top-0 right-0 w-80 max-w-[90vw] h-full bg-white z-50 shadow-2xl lg:hidden overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200 flex-shrink-0">
                <div className="flex items-center">
                  <Image
                    src="/logo-small.png"
                    alt="Konnections IMAG Logo"
                    width={100}
                    height={33}
                  />
                </div>
                <ModernHamburger isOpen={isDrawerOpen} onClick={toggleDrawer} />
              </div>

              {/* Navigation - Scrollable */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-6 space-y-6">
                  {/* Services Section - Collapsible */}
                  <div>
                    <button
                      onClick={() => {
                        // If services dropdown is closed, first try to navigate to services section
                        if (!isMobileServicesOpen) {
                          handleNavClick("#ourservies");
                        } else {
                          // If already open, just toggle the dropdown
                          toggleMobileServices();
                        }
                      }}
                      className="flex items-center justify-between w-full text-left mb-3"
                    >
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                        Services
                      </h3>
                      <motion.svg
                        className="w-4 h-4 text-gray-500"
                        animate={{ rotate: isMobileServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent the main button click
                          toggleMobileServices();
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </button>
                    
                    <AnimatePresence>
                      {isMobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-2 gap-2 p-2">
                            {servicesDropdown.map((service, index) => (
                              <Link
                                key={index}
                                href={service.href}
                                className="flex items-start space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                                onClick={toggleDrawer}
                              >
                                <span className="text-base group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                                  {service.icon}
                                </span>
                                <div className="min-w-0">
                                  <div className="font-medium text-gray-900 group-hover:text-[#348992] transition-colors duration-200 text-sm">
                                    {service.text}
                                  </div>
                                  <div className="text-xs text-gray-600 line-clamp-2">
                                    {service.description}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Main Navigation */}
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

                  {/* CTA Button */}
                  <Link
                    href="/appointment"
                    className="block w-full bg-gradient-to-r from-[#348992] to-[#2d6389] text-white text-center py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                    onClick={toggleDrawer}
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200 flex-shrink-0">
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
