/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/hila-landing",
  assetPrefix: "/hila-landing",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
