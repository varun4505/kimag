import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  text?: string;
  className?: string;
}

/**
 * Loading Spinner Component with customizable size and color
 */
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = '#348992',
  text,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-2 ${className}`}>
      {/* Spinner */}
      <motion.div
        className={`${sizeClasses[size]} border-2 border-gray-200 rounded-full`}
        style={{ borderTopColor: color }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      
      {/* Loading Text */}
      {text && (
        <motion.p
          className={`${textSizeClasses[size]} text-gray-600 font-medium`}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

/**
 * Full page loading overlay
 */
export const LoadingOverlay: React.FC<{
  isVisible: boolean;
  text?: string;
}> = ({ isVisible, text = 'Loading...' }) => {
  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <LoadingSpinner size="lg" text={text} />
    </motion.div>
  );
};

/**
 * Button with loading state
 */
export const LoadingButton: React.FC<{
  isLoading: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  loadingText?: string;
}> = ({ 
  isLoading, 
  children, 
  onClick, 
  disabled, 
  className = '',
  loadingText = 'Loading...'
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`relative transition-all duration-200 ${className} ${
        isLoading || disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {isLoading ? (
        <span className="flex items-center justify-center space-x-2">
          <LoadingSpinner size="sm" />
          <span>{loadingText}</span>
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default LoadingSpinner;
