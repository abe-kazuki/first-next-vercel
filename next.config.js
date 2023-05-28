/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      appDir: true,
    },
    compiler: {
      styledComponents: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'storage.googleapis.com',
          port: '',
        },
      ],
    },
}

module.exports = nextConfig
