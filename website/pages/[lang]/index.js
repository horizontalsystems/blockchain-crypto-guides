import React from 'react'
import Home from '../../components/Home/Home'
import { getAllCategories, getAllGuides } from '../../api/guides-api'
import { getI18nPaths, getI18nProps } from '../../i18n'

export async function getStaticProps(ctx) {
  const i18nProps = await getI18nProps(ctx, ['common'])
  const fields = ['id', 'type', 'title', 'description', 'date', 'image', 'slug']
  const guides = getAllGuides(fields, i18nProps.lang)
  const categories = getAllCategories(i18nProps.lang)

  return {
    props: {
      ...i18nProps,
      guides,
      categories
    }
  }
}

export const getStaticPaths = async () => ({
  paths: getI18nPaths(),
  fallback: false
})

export default Home
