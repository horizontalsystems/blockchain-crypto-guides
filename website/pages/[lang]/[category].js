import React from 'react'
import GuideList from '../../components/Guide/GuideList'
import { getI18nPaths, getI18nProps } from '../../i18n'
import { getAllCategories, getAllGuides } from '../../api/guides-api'

export async function getStaticProps(ctx) {
  const i18nProps = await getI18nProps(ctx, ['common'])
  const fields = ['id', 'type', 'title', 'description', 'date', 'image', 'slug']

  const { lang, category } = ctx.params
  const guides = getAllGuides(fields, lang, category)
  const categories = getAllCategories()

  return {
    props: {
      ...i18nProps,
      category,
      categories,
      guides
    }
  }
}

export const getStaticPaths = async () => {
  const categories = getAllCategories()
  const i18nPaths = getI18nPaths()
  const paths = []

  Object.keys(categories).forEach(category => {
    i18nPaths.forEach(i18n => {
      paths.push({
        params: {
          lang: i18n.params.lang,
          category: category
        }
      })
    })
  })

  return {
    paths,
    fallback: false,
  }
}

export default GuideList
