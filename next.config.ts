import type { NextConfig } from "next";

const nextConfig: NextConfig = {
output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [new URL("https://github.com/ajaypaulfrancis/cloud_portfolio/**")],
  },
};
export default nextConfig;
