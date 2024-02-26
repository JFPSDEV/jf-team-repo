import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer({
  reactStrictMode: false,

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
