import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Production optimizations
  poweredByHeader: false, // Remove X-Powered-By header for security
  compress: true, // Enable gzip compression
  
  // Image optimization
  images: {
    domains: ['images.unsplash.com', 'www.konnectionsimag.com'],
    formats: ['image/webp', 'image/avif'], // Modern image formats
  },
  
  // Performance optimizations
  // experimental: {
  //   optimizeCss: true, // Disabled due to critters dependency issue
  // },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
