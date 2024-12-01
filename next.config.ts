import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/v1/chat/completions",
        destination: "https://spark-api-open.xf-yun.com/v1/chat/completions",
      },
    ];
  },
  env: {
    IFLYTEC_TOKEN: process.env.IFLYTEC_TOKEN
  }
};

export default nextConfig;
