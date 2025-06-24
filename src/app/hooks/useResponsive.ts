import { useState, useEffect } from 'react';

interface BreakpointConfig {
  mobile: number;
  tablet: number;
  desktop: number;
  widescreen: number;
}

const defaultBreakpoints: BreakpointConfig = {
  mobile: 768,
  tablet: 1024,
  desktop: 1440,
  widescreen: 1920
};

/**
 * Custom hook for responsive design breakpoints
 */
export const useResponsive = (breakpoints: Partial<BreakpointConfig> = {}) => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop' | 'widescreen'>('desktop');

  useEffect(() => {
    const config = { ...defaultBreakpoints, ...breakpoints };
    
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setScreenSize({ width, height });
      
      if (width < config.mobile) {
        setDeviceType('mobile');
      } else if (width < config.tablet) {
        setDeviceType('tablet');
      } else if (width < config.desktop) {
        setDeviceType('desktop');
      } else {
        setDeviceType('widescreen');
      }
    };

    // Set initial values
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoints]);

  return {
    screenSize,
    deviceType,
    isMobile: deviceType === 'mobile',
    isTablet: deviceType === 'tablet',
    isDesktop: deviceType === 'desktop',
    isWidescreen: deviceType === 'widescreen',
    isTabletOrMobile: deviceType === 'mobile' || deviceType === 'tablet',
    isDesktopOrWider: deviceType === 'desktop' || deviceType === 'widescreen'
  };
};
