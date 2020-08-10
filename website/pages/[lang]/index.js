import React from 'react'
import Home from '../../components/Home/Home'
import getAllGuides from '../../api/guides-api'
import { getI18nPaths, getI18nProps, withI18n } from '../../i18n'

export async function getStaticProps(ctx) {
  const i18nProps = await getI18nProps(ctx, ['common'])
  const guides = getAllGuides([
    'title',
    'date',
    'image',
    'slug',
    'type'
  ], i18nProps.lang)

  return {
    props: {
      ...i18nProps,
      guides
    },
  }
}

export const getStaticPaths = async () => ({
  paths: getI18nPaths(),
  fallback: false
})

export default Home
