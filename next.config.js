/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bucket.hahaho.dev",
        port: "",
        pathname: "/ecommerce/**",
      },
    ],
  },
};

module.exports = nextConfig;
