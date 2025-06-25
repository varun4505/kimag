'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Get the Lenis instance from the window if it exists
    const lenis = (window as typeof window & { lenis?: Lenis }).lenis;
    if (lenis) {
      lenisRef.current = lenis;
    }
  }, []);

  const scrollTo = (target: string | number, options?: Record<string, unknown>) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, options);
    }
  };

  const scrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 1.5 });
    }
  };

  const scrollToElement = (element: string | HTMLElement, options?: Record<string, unknown>) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(element, options);
    }
  };

  return {
    lenis: lenisRef.current,
    scrollTo,
    scrollToTop,
    scrollToElement,
  };
}
