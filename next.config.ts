import type { NextConfig } from "next";
import createMDX from "@next/mdx"

const withMDX = createMDX({});

const nextConfig: NextConfig = {
  // /* config options here */
  pageExtensions: ["ts", "tsx", "mdx"],
  reactStrictMode: true,
  // images: {
  //   domains: ["localhost"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default withMDX(nextConfig);
