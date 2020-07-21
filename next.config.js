const path = require('path')
const withImages = require('next-images')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'public/styles')],
  },
  withImages: withImages(),
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  }
}
