import Guide from '../../components/Guide'
import { getAllGuideSlugs, getGuideByLang } from '../../api/guides-api'
import { getI18nPaths, getI18nProps, withI18n } from '../../i18n'
import { mapChild, parse } from '../../api/parser'

export default withI18n(Guide)

export async function getStaticProps(ctx) {
  const i18nProps = await getI18nProps(ctx, ['common'])
  const { lang, slug } = ctx.params

  const guide = getGuideByLang(lang, slug, [
    'id', 'type', 'title', 'description', 'image', 'date', 'slug', 'content', 'next'
  ])

  const { content, node } = await parse(guide.content)
  const children = node.children.filter(child => child.type === 'heading')
  const headings = mapChild(children)

  return {
    props: {
      ...i18nProps,
      guide: {
        ...guide,
        headings,
        content
      }
    }
  }
}

export const getStaticPaths = async () => {
  const paths = []
  const slugs = getAllGuideSlugs()
  const i18nPaths = getI18nPaths()

  slugs.forEach(slug => {
    i18nPaths.forEach(i18n => {
      paths.push({
        params: {
          lang: i18n.params.lang,
          slug: slug.split('/')
        }
      })
    })
  })

  return {
    paths,
    fallback: false
  }
}
