"use client";
import { useEffect, useState } from "react";
import { scrollToTop } from "@/lib/smoothScroll";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-br from-[#348992] to-[#d73c77] text-white shadow-lg hover:scale-110 transition-all duration-300 focus:outline-none"
      style={{ boxShadow: "0 4px 16px rgba(52,137,146,0.15)" }}
    >
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}
