const path = require('path')
const NextI18Next = require('next-i18next').default

const localeSubpaths = {
  ru: 'ru',
  de: 'de'
}

const nextI18Next = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: Object.keys(localeSubpaths),
  localeSubpaths,
  localePath: path.resolve('./public/locales')
})

nextI18Next.localeSubpaths = localeSubpaths

module.exports = nextI18Next
