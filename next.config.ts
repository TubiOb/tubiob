import type { NextConfig } from "next";
import createMDX from "@next/mdx"

const withMDX = createMDX({});

const nextConfig: NextConfig = {
  // /* config options here */
  pageExtensions: ["ts", "tsx", "mdx"],
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
  },
};

export default withMDX(nextConfig);
