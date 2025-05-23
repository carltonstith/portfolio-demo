import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "http://localhost:3000/api/projects",
      },
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
