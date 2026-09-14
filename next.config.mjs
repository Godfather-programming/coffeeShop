/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/coffeeShop" : "",
  assetPrefix: isProd ? "/coffeeShop/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;