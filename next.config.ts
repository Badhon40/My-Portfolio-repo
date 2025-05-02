import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.dev.to', // Example: dev.to, unsplash.com, etc.
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
