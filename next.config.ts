import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/privacy',
        destination: '/legal/privacy-policy',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/legal/terms-of-use',
        permanent: true,
      },
      {
        source: '/legal/privacy_policies',
        destination: '/legal/privacy-policy',
        permanent: true,
      },
      {
        source: '/legal/privacy-policies',
        destination: '/legal/privacy-policy',
        permanent: true,
      },
      {
        source: '/legal/terms-of-service',
        destination: '/legal/terms-of-use',
        permanent: true,
      },
      {
        source: '/legal/terms_of_service',
        destination: '/legal/terms-of-use',
        permanent: true,
      },
      {
        source: '/legal/terms_of_use',
        destination: '/legal/terms-of-use',
        permanent: true,
      },
    ];
  },
}

export default nextConfig
