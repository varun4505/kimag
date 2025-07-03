'use client';
import { useEffect } from "react";
import { useLenis } from "../hooks/useLenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { OurServices } from "./components/Services";
import { projects } from "./components/text/Services";
import AboutUs from "./components/AboutUs";
import CaseStudies from "./components/CaseStudies";
import ContactUs from "./components/ContactUs";
import { Footer } from "./components/Footer";


export default function Home() {
  const { scrollToElement } = useLenis();

  useEffect(() => {
    // Handle URL fragment scrolling when page loads with Lenis
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        // Add a delay to ensure Lenis is initialized and page is rendered
        setTimeout(() => {
          scrollToElement(element, {
            duration: 1.5,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }, 500);
      }
    }
  }, [scrollToElement]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <OurServices items={projects}/>
      <CaseStudies/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}
