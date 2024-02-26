import bundleAnalyzer from '@next/bundle-analyzer';
import withPWA from 'next-pwa';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer({
  reactStrictMode: true,

  ...withPWA({
    dest: 'public',
    register: true,
    skipWaitin: true,
    disable: process.env.NODE_ENV === 'development',
  }),

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
    domains: ['res.cloudinary.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
});
