import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/creation-de-site-internet-haut-rhin",
        destination: "/creation-site-internet",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
