'use client';

import { useMobile } from '../hooks/useMobile';
import { useEffect } from 'react';

type MobileBodyStyle = CSSStyleDeclaration & {
  webkitOverflowScrolling?: string;
  webkitTapHighlightColor?: string;
};

export const MobileOptimizer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isMobile } = useMobile();

  useEffect(() => {
    if (isMobile) {
      // Add mobile-specific optimizations
      const bodyStyle = document.body.style as MobileBodyStyle;
      bodyStyle.webkitOverflowScrolling = 'touch';
      bodyStyle.webkitTapHighlightColor = 'transparent';
      
      // Improve touch responsiveness
      document.addEventListener('touchstart', function() {}, { passive: true });
      document.addEventListener('touchmove', function() {}, { passive: true });
    }

    return () => {
      // Cleanup
      if (isMobile) {
        const bodyStyle = document.body.style as MobileBodyStyle;
        bodyStyle.webkitOverflowScrolling = '';
        bodyStyle.webkitTapHighlightColor = '';
      }
    };
  }, [isMobile]);

  return <>{children}</>;
};
