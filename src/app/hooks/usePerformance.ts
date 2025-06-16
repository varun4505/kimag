import { useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  interactionTime: number;
}

/**
 * Custom hook for performance monitoring and optimization
 */
export const usePerformance = () => {
  const measurePerformance = useCallback((): PerformanceMetrics | null => {
    if (typeof window === 'undefined' || !window.performance) {
      return null;
    }

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    return {
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      renderTime: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      interactionTime: navigation.domInteractive - navigation.fetchStart
    };
  }, []);

  const prefetchResource = useCallback((url: string, type: 'image' | 'script' | 'style' = 'image') => {
    if (typeof window === 'undefined') return;

    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    
    if (type === 'image') {
      link.as = 'image';
    } else if (type === 'script') {
      link.as = 'script';
    } else if (type === 'style') {
      link.as = 'style';
    }
    
    document.head.appendChild(link);
  }, []);

  const preloadResource = useCallback((url: string, type: 'image' | 'script' | 'style' = 'image') => {
    if (typeof window === 'undefined') return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = type;
    
    document.head.appendChild(link);
  }, []);

  const debounce = useCallback(<T extends (...args: unknown[]) => void>(
    func: T,
    delay: number
  ): ((...args: Parameters<T>) => void) => {
    let timeoutId: NodeJS.Timeout;
    
    return (...args: Parameters<T>) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  }, []);

  const throttle = useCallback(<T extends (...args: unknown[]) => void>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }, []);

  useEffect(() => {
    // Log performance metrics on mount
    const metrics = measurePerformance();
    if (metrics && process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', metrics);
    }
  }, [measurePerformance]);

  return {
    measurePerformance,
    prefetchResource,
    preloadResource,
    debounce,
    throttle
  };
};
