import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
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
        destination: '/legal/terms-of-service',
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
        source: '/legal/terms_of_service',
        destination: '/legal/terms-of-service',
        permanent: true,
      },
    ];
  },
}

export default nextConfig
