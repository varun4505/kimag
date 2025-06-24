'use client';
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { OurServices } from "./components/Services";
import { projects } from "./components/text/Services";
import AboutUs from "./components/AboutUs";
import CaseStudies from "./components/CaseStudies";
import ContactUs from "./components/ContactUs";
import { Footer } from "./components/Footer";


export default function Home() {
  useEffect(() => {
    // Handle URL fragment scrolling when page loads
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        // Add a small delay to ensure the page is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="">
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
