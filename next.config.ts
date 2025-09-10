import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enabling React Strict Mode
  swcMinify: true, // Enabling SWC minification for faster builds
  images: {
    domains: ['www.example.com', 'another-example.com'], // Add your image domains here
  },


}

export default nextConfig
