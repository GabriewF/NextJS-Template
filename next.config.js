/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  // Compiler
  compilerOptions: {
    removeConsole: true,
    jsxImportSource: 'preact',
  },
  swcMinify: false,

  // Other's configs
  poweredByHeader: true,
  generateEtags: true,
  keepAlive: true,
  compression: true,
  generateBuildId: async () => {
    return '0.1.0'
  },
  trailingSlash: true,
  reactStrictMode: true,

  // Development
  devIndicators: {
    buildActivityPosition: 'top-right',
    buildActivity: true,
  },

  // Headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
