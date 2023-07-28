/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net'
      }
    ]
  },
  reactStrictMode: false,
  swcMinify: true,
  optimizeFonts: true,
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


// const withOptimizedImages = require('next-optimized-images');
// const optimizedImages = require('next-optimized-images');

// module.exports = withOptimizedImages({
//   imageminOptions: {
//     gifsicle: { interlaced: true },
//     mozjpeg: { quality: 80 }, // Ajusta la calidad de compresión para JPEG (0 - 100)
//     optipng: { optimizationLevel: 3 }, // Ajusta el nivel de optimización para PNG (0 - 7)
//     webp: { quality: 80 }, // Ajusta la calidad de compresión para WebP (0 - 100)
//   },
//   images: {
//     formats: ['image/webp'],
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'images.ctfassets.net',
//       },
//     ],
//   },
//   reactStrictMode: false,
//   swcMinify: true,
//   optimizeFonts: true,
//   compiler: {
//     styledComponents: true,
//   },
//   eslint: {
//     dirs: ['__tests__', 'pages', 'templates', 'components', 'lib', 'src', 'app'],
//   },
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/i,
//       issuer: /\.[jt]sx?$/,
//       use: ['@svgr/webpack'],
//     });
//     return config;
//   },
// });