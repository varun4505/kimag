'use client';

import { ReactNode } from 'react';
import { smoothScrollTo } from '../lib/smoothScroll';

interface SmoothScrollLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  offset?: number;
  duration?: number;
  onClick?: () => void;
}

export default function SmoothScrollLink({
  href,
  children,
  className = '',
  offset = 0,
  duration = 1.2,
  onClick,
}: SmoothScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Call custom onClick if provided
    if (onClick) {
      onClick();
    }
    
    // Handle smooth scrolling
    if (href.startsWith('#')) {
      smoothScrollTo(href, { duration, offset });
    } else if (href.startsWith('/')) {
      // For internal routes, navigate normally
      window.location.href = href;
    } else {
      // For external links, open in new tab
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <a 
      href={href} 
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
