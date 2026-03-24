import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 80, 85],
    deviceSizes: [640, 1080, 1920],
    imageSizes: [256, 384, 640],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/soins',
        destination: '/accompagnements',
        permanent: true,
      },
      {
        source: '/copie-de-formations',
        destination: '/formations',
        permanent: true,
      },
      {
        source: '/bilans',
        destination: '/accompagnements',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
