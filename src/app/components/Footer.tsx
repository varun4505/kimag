"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const services = [
    { name: "Public Relations", href: "/services/public-relations" },
    { name: "Crisis Management", href: "/services/crisis-management" },
    { name: "Digital Media", href: "/services/digital-media" },
    { name: "Corporate Communications", href: "/services/corporate-communications" },
    { name: "Financial Communications", href: "/services/financial-communications" },
    { name: "Specialized Services", href: "/services/specialized-services" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#ourservies" },
    { name: "Contact", href: "#contact" },
    { name: "Book Appointment", href: "/appointment" },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#2d6389] to-[#348992] text-white py-16 mobile-container mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-18 l:gap-x-16 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Konnections IMAG</h3>
            <p className="text-white/72 text-base leading-relaxed text-left">
              A leading communications agency specializing in public relations, crisis management, 
              and strategic communications. We help brands build meaningful connections with their audiences.
            </p>
            <div className="flex space-x-4 pt-2">
              <FooterIcon
                href="https://www.facebook.com/Konnections/"
                label="Facebook"
                icon={<Facebook className="w-5 h-5" />}
              />
              <FooterIcon
                href="https://www.instagram.com/konnections.imag/"
                label="Instagram"
                icon={<Instagram className="w-5 h-5" />}
              />
              <FooterIcon
                href="https://www.linkedin.com/company/konnectionsimag/posts/?feedView=all"
                label="LinkedIn"
                icon={<Linkedin className="w-5 h-5" />}
              />
              <FooterIcon
                href="mailto:info@konnections.co.in"
                label="Email"
                icon={<Mail className="w-5 h-5" />}
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-white/80 hover:text-white text-base transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href}
                    className="text-white/80 hover:text-white text-base transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white/80 mt-0.5 flex-shrink-0" />
                <p className="text-white/80 text-base">
                  Konnections IMAG, <br /> 6-3-596/102F, <br />2nd Floor, Navin Nagar,
<br /> Banjara Hills, Hyderabad,<br /> Telangana - 500004
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white/80" />
                <a 
                  href="tel:+917032939360"
                  className="text-white/80 hover:text-white text-base transition-colors duration-300"
                >
                  +91 7032939360
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white/80" />
                <a 
                  href="mailto:info@konnections.co.in"
                  className="text-white/80 hover:text-white text-base transition-colors duration-300"
                >
                  info@konnections.co.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-base text-white/80 text-center md:text-left">
              © 2025 <span className="font-semibold text-white">Konnections IMAG</span>. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-base text-white/80">
              <Link href="/privacy-policy" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterIcon = ({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) => (
  <Link
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white/80 hover:text-[#d73c77] transition-all duration-300 hover:scale-110"
  >
    {icon}
  </Link>
);
