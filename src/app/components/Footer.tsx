"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#2d6389] to-[#348992] text-white py-10 px-6 mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Footer Text */}
        <p className="text-sm text-center md:text-left font-medium tracking-wide">
          © 2025 <span className="font-semibold text-white">Konnections IMAG</span>. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-5">
          <FooterIcon
            href="https://facebook.com"
            label="Facebook"
            icon={<Facebook className="w-5 h-5" />}
          />
          <FooterIcon
            href="https://instagram.com"
            label="Instagram"
            icon={<Instagram className="w-5 h-5" />}
          />
          <FooterIcon
            href="https://linkedin.com"
            label="LinkedIn"
            icon={<Linkedin className="w-5 h-5" />}
          />
          <FooterIcon
            href="mailto:info@konnectionsimag.com"
            label="Email"
            icon={<Mail className="w-5 h-5" />}
          />
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
    className="text-white hover:text-[#d73c77] transition-colors duration-300"
  >
    {icon}
  </Link>
);
