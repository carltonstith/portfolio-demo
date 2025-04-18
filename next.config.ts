import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.ceejaysmedia.com",
        port: "",
        pathname: "/dotCeeJayS/wp-content/uploads/**",
      },
    ],
  }
};

export default nextConfig;
