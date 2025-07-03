import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ScrollProgressProps {
  color?: string;
  height?: number;
  showPercentage?: boolean;
  className?: string;
}

/**
 * Scroll Progress Bar Component
 * Shows reading progress as user scrolls through the page
 */
export const ScrollProgress: React.FC<ScrollProgressProps> = ({
  color = '#348992',
  height = 4,
  showPercentage = false,
  className = ''
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      const totalScrollableHeight = documentHeight - windowHeight;
      const currentProgress = (scrollTop / totalScrollableHeight) * 100;
      
      setScrollProgress(Math.min(Math.max(currentProgress, 0), 100));
    };

    const handleScroll = () => {
      requestAnimationFrame(calculateScrollProgress);
    };

    calculateScrollProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Progress Bar */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 bg-gray-200 ${className}`}
        style={{ height: `${height}px` }}
      >
        <motion.div
          className="h-full"
          style={{ 
            backgroundColor: color,
            background: `linear-gradient(90deg, ${color}, #2d6389, #d73c77)`
          }}
          initial={{ width: '0%' }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1, ease: 'easeOut' }}
        />
      </div>

      {/* Percentage Indicator */}
      {showPercentage && (
        <motion.div
          className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700 shadow-lg border border-gray-200"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: scrollProgress > 5 ? 1 : 0,
            scale: scrollProgress > 5 ? 1 : 0.8
          }}
          transition={{ duration: 0.2 }}
        >
          {Math.round(scrollProgress)}%
        </motion.div>
      )}
    </>
  );
};

export default ScrollProgress;
