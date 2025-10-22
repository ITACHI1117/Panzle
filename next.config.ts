import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85, 95, 90, 100],
  },
};

export default nextConfig;
