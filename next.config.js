/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "/store_nextJS/" : "",
};

module.exports = nextConfig;
