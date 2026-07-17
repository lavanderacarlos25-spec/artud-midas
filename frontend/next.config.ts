import type { NextConfig } from "next";

/**
 * PWA Phase 2:
 * Install `@ducanh2912/next-pwa`, then wrap this config:
 *
 *   import withPWAInit from "@ducanh2912/next-pwa";
 *   const withPWA = withPWAInit({ dest: "public", disable: process.env.NODE_ENV === "development" });
 *   export default withPWA(nextConfig);
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
