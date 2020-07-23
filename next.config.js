const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-svgr')
const withImages = require('next-images')

module.exports = withPlugins([
  {
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: 'empty'
        }
      }

      return config
    }
  },
  [withImages],
  [withSvgr]
])
