import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "petelpro.com",
      },
    ],
  },
};

export default nextConfig;
