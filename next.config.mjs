/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    const securityHeaders = [
      {
        key: "Content-Security-Policy",
        value: [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data: https:",
          "font-src 'self' data: https:",
          "connect-src 'self'",
          "object-src 'none'",
          "frame-src 'none'",
          "frame-ancestors 'self'",
          "base-uri 'self'",
          "form-action 'self'",
          "upgrade-insecure-requests",
          "block-all-mixed-content"
        ].join("; ")
      },
      {
        key: "Cross-Origin-Embedder-Policy",
        value: "require-corp"
      },
      {
        key: "Cross-Origin-Opener-Policy",
        value: "same-origin"
      },
      {
        key: "Cross-Origin-Resource-Policy",
        value: "same-origin"
      },
      {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin"
      },
      {
        key: "X-Content-Type-Options",
        value: "nosniff"
      },
      {
        key: "X-DNS-Prefetch-Control",
        value: "off"
      },
      {
        key: "X-Frame-Options",
        value: "DENY"
      },
      {
        key: "X-XSS-Protection",
        value: "0"
      },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=()"
      },
      {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload"
      }
    ];

    const corsHeaders = [
      { key: "Access-Control-Allow-Origin", value: "*" },
      { key: "Access-Control-Allow-Methods", value: "GET,POST,PUT,PATCH,DELETE,OPTIONS" },
      { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
      { key: "Access-Control-Max-Age", value: "86400" }
    ];

    return [
      {
        source: "/(.*)",
        headers: securityHeaders
      },
      {
        source: "/api/:path*",
        headers: corsHeaders
      }
    ];
  }
};

export default nextConfig
