/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['cdn.akamai.steamstatic.com', 'localhost', 'steam-store-clone.vercel.app']
  }
}

module.exports = nextConfig
