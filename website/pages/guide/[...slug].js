import remark from 'remark'
import html from 'remark-html'
import slug from 'remark-slug'
import autolink from 'remark-autolink-headings'
import Guide from '../../components/Guide'
import { withTranslation } from '../../i18n'
import getAllGuides, { getGuideBySlug } from '../../api/guides-api'

export default withTranslation()(Guide)

async function parse(markdown) {
  const processor = remark()
    .use(slug)
    .use(autolink)
    .use(html)

  const result = await processor.process(markdown)
  const parsed = await processor.parse(markdown)

  return {
    node: parsed,
    content: result.toString()
  }
}

function mapChild(children) {
  const result = []

  children.forEach(item => {
    const data = { type: item.type }

    if (item.depth) {
      data.depth = item.depth
    }

    if (item.value) {
      data.value = item.value
    }

    if (item.children) {
      data.children = mapChild(item.children)
    }

    result.push(data)
  })

  return result
}

export async function getStaticProps(ctx) {
  console.log('==========================')
  console.log(ctx)
  const slug = ctx.params.slug.join('/')
  const guide = getGuideBySlug(slug, [
    'type', 'title', 'image', 'date', 'slug', 'content', 'next'
  ])

  const { content, node } = await parse(guide.content)
  const children = node.children.filter(child => child.type === 'heading')
  const headings = mapChild(children)

  return {
    props: {
      guide: {
        ...guide,
        headings,
        content
      }
    }
  }
}

export async function getStaticPaths() {
  const guides = getAllGuides(['slug'])

  return {
    paths: guides.map(guide => ({
      params: {
        slug: ['ru',  ...guide.slug.split('/')]
      }
    })),
    fallback: false
  }
}
