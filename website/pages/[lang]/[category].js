import React from 'react'
import Head from 'next/head'
import withTranslation from 'next-translate/withTranslation'
import Layout from '../../components/Layout'
import GuideList from '../../components/Guide/GuideList'
import { getI18nPaths, getI18nProps, withI18n } from '../../i18n'
import { getAllCategories, getAllGuides } from '../../api/guides-api'

function Category(props) {
  return (
    <Layout>
      <Head>
        <title>{props.i18n.t('common:title')}</title>
      </Head>

      <GuideList {...props} />
    </Layout>
  )
}

export async function getStaticProps(ctx) {
  const i18nProps = await getI18nProps(ctx, ['common'])
  const fields = ['id', 'type', 'title', 'description', 'date', 'image', 'slug']

  const { lang, category } = ctx.params
  const guides = getAllGuides(fields, lang, category)
  const categories = getAllCategories(lang)

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
  const i18nPaths = getI18nPaths()

  const paths = []
  i18nPaths.forEach(({ params }) => {
    const categories = getAllCategories(params.lang)
    Object.keys(categories).forEach(category => {
      paths.push({
        params: { category, lang: params.lang }
      })
    })
  })

  return {
    paths,
    fallback: false,
  }
}

export default withI18n(withTranslation(Category))
