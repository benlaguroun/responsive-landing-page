/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    domains: ['images.unsplash.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/auth/:path*',
        destination: 'http://localhost:3001/auth/:path*',
      },
    ];
  },
};

module.exports = nextConfig;