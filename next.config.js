/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  async redirects () {
    return [
      {
        source: '/',
        destination: '/iniciar-sesion',
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
