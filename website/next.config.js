const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-svgr')
const withImages = require('next-images')

const { localeSubpaths } = require('./i18n')
const { nextI18NextRewrites } = require('next-i18next/rewrites')

module.exports = withPlugins([[withImages], [withSvgr]], {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: { localeSubpaths }
})
s
