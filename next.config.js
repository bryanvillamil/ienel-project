/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net'
      }
    ]
  },
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  eslint: {
    dirs: ['__tests__', 'pages', 'templates', 'components', 'lib', 'src', 'app']
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    })
    return config
  }
}

module.exports = nextConfig
