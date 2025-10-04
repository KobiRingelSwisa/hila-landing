/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  // Only use basePath for production (GitHub Pages)
  ...(isProd && {
    basePath: "/hila-landing",
    assetPrefix: "/hila-landing",
  }),
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
