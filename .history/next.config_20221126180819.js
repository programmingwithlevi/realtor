/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: ['https://bayut-production.s3.eu-central-1.amazonaws.com']
  }
}
