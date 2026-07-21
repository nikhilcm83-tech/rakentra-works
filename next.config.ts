import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize imports — tree-shakes lucide-react & framer-motion bundles
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
