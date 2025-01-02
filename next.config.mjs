/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: 'https', hostname: 'i.scdn.co' }],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
