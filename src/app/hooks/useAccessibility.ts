import { useEffect, useCallback } from 'react';

interface AccessibilityOptions {
  focusManagement?: boolean;
  keyboardNavigation?: boolean;
}

/**
 * Custom hook for accessibility features and ARIA support
 */
export const useAccessibility = (options: AccessibilityOptions = {}) => {
  const {
    focusManagement = true,
    keyboardNavigation = true
  } = options;

  const announceToScreenReader = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    if (typeof window === 'undefined') return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  const focusElement = useCallback((selector: string | HTMLElement) => {
    if (typeof window === 'undefined') return;

    const element = typeof selector === 'string' 
      ? document.querySelector(selector) as HTMLElement
      : selector;
    
    if (element && element.focus) {
      element.focus();
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  const trapFocus = useCallback((container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
      
      if (e.key === 'Escape') {
        const closeButton = container.querySelector('[data-close]') as HTMLElement;
        if (closeButton) {
          closeButton.click();
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);
    
    // Focus first element
    if (firstElement) {
      firstElement.focus();
    }

    return () => {
      container.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const addSkipLink = useCallback((targetId: string, linkText: string = 'Skip to main content') => {
    if (typeof window === 'undefined') return;

    const existingSkipLink = document.querySelector('.skip-link');
    if (existingSkipLink) return;

    const skipLink = document.createElement('a');
    skipLink.href = `#${targetId}`;
    skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded';
    skipLink.textContent = linkText;
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  }, []);

  useEffect(() => {
    if (keyboardNavigation) {
      const handleKeyDown = (e: KeyboardEvent) => {
        // Add keyboard navigation for custom components
        if (e.key === 'Enter' || e.key === ' ') {
          const target = e.target as HTMLElement;
          if (target.getAttribute('role') === 'button' && !target.closest('button')) {
            e.preventDefault();
            target.click();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [keyboardNavigation]);

  useEffect(() => {
    if (focusManagement) {
      // Add focus management for page changes
      const handleRouteChange = () => {
        const mainContent = document.querySelector('main, [role="main"]') as HTMLElement;
        if (mainContent) {
          mainContent.focus();
        }
      };

      // Add event listener for Next.js route changes
      window.addEventListener('popstate', handleRouteChange);
      return () => window.removeEventListener('popstate', handleRouteChange);
    }
  }, [focusManagement]);

  return {
    announceToScreenReader,
    focusElement,
    trapFocus,
    addSkipLink
  };
};
