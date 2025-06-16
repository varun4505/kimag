import { useRef } from 'react';
import { gsap } from 'gsap';

/**
 * Custom hook for GSAP animations
 */
export const useGSAP = () => {
  const ref = useRef<HTMLElement>(null);

  const animateIn = (element: HTMLElement | null, options?: gsap.TweenVars) => {
    if (!element) return;
    
    return gsap.fromTo(
      element,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        ease: "power2.out",
        ...options 
      }
    );
  };

  const animateOut = (element: HTMLElement | null, options?: gsap.TweenVars) => {
    if (!element) return;
    
    return gsap.to(element, {
      opacity: 0,
      y: -30,
      duration: 0.4,
      ease: "power2.in",
      ...options
    });
  };

  const staggerIn = (elements: HTMLElement[] | NodeListOf<Element>, options?: gsap.TweenVars) => {
    return gsap.fromTo(
      elements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        ...options
      }
    );
  };

  return {
    ref,
    animateIn,
    animateOut,
    staggerIn
  };
};
