import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['cdn.sanity.io','upload.wikimedia.org'], // Add the Sanity CDN hostname
  },

};

export default nextConfig;
