// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: '**',
              // pathname: '**'
          },
          {
            protocol: 'https',
            hostname: '**.wikia.nocookie.net',
            pathname: '/wutheringwaves/images/**',
          },
      ],
    },
    experimental: {
      timeout: 30000, // 30 detik
    },
};

export default nextConfig;