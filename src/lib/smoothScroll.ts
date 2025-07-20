export const scrollToTop = () => {
  smoothScrollTo(0, { duration: 1.5 });
};

export const scrollToSection = (sectionId: string, offset: number = 0) => {
  smoothScrollTo(`#${sectionId}`, { offset });
};
import Lenis from 'lenis';

export const smoothScrollTo = (target: string | HTMLElement | number, options?: {
  duration?: number;
  easing?: (t: number) => number;
  offset?: number;
}) => {
  const lenis = (window as typeof window & { lenis?: Lenis }).lenis;
  
  if (lenis) {
    const defaultOptions = {
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      offset: 0,
      ...options,
    };
    
    lenis.scrollTo(target, defaultOptions);
  } else {
    // Fallback for when Lenis is not available
    if (typeof target === 'string') {
      const element = document.querySelector(target) || document.getElementById(target.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (typeof target === 'number') {
      window.scrollTo({ top: target, behavior: 'smooth' });
    }
  }
};

// Removed unused scrollToTop and scrollToSection exports
