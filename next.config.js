/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['cdn.akamai.steamstatic.com', 'localhost']
  }
}

module.exports = nextConfig
