import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.thecocktaildb.com'], // Allow images from TheCocktailDB
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  // Enable experimental features we might need
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000'],
    },
    serverComponentsExternalPackages: ['sharp'],
  },
  // Configure headers for security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      }
    ];
  },
  // Configure redirects if needed
  async redirects() {
    return [];
  },
  // Configure rewrites if needed
  async rewrites() {
    return [];
  }
};

export default nextConfig;
