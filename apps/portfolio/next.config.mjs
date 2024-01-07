import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer({
  reactStrictMode: false,
  transpilePackages: [
    "@jfteam/material",
    "@jfteam/phaser-next",
    "@jfteam/theme",
    "@jfteam/portfolio-game",
    "@jfteam/hooks",
    "@jfteam/icons",
  ],
  eslint: {
    ignoreDuringBuilds: true,
  },
});
