import bundleAnalyzer from '@next/bundle-analyzer';
import nextPWA from 'next-pwa';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withPWA = nextPWA({
  dest: 'public',
  register: true,
  skipWaitin: true,
});

const nextConfig = withBundleAnalyzer({
  ...withPWA,

  reactStrictMode: true,
  transpilePackages: [
    '@jfteam/material',
    '@jfteam/phaser-next',
    '@jfteam/theme',
    '@jfteam/carousel',
    '@jfteam/portfolio-game',
    '@jfteam/hooks',
    '@jfteam/icons',
    '@jfteam/animated',
    '@jfteam/form',
    '@jfteam/utils',
    '@jfteam/types',
    '@jfteam/mail',
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/fr',
        permanent: true,
      },
    ];
  },
});

export default nextConfig;
