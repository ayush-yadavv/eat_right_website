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
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self'; connect-src 'self' https://vitals.vercel-insights.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';",
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
        source: '/privacy-policy',
        destination: '/legal/privacy-policy',
        permanent: true,
      },
      {
        source: '/privacy_policy',
        destination: '/legal/privacy-policy',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/legal/terms-of-use',
        permanent: true,
      },
      {
        source: '/terms-of-service',
        destination: '/legal/terms-of-use',
        permanent: true,
      },
      {
        source: '/terms_of_service',
        destination: '/legal/terms-of-use',
        permanent: true,
      },
      {
        source: '/terms-of-use',
        destination: '/legal/terms-of-use',
        permanent: true,
      },
      {
        source: '/terms_of_use',
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
