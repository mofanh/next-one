import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
        {
            source: '/api/v1/chat/completions',
            destination: 'https://spark-api-open.xf-yun.com/v1/chat/completions',
        }
    ];
}
};

export default nextConfig;
