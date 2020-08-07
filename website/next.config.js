const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-svgr')
const withImages = require('next-images')

module.exports = withPlugins([
  [withImages],
  [withSvgr]
])
