import remark from 'remark'
import html from 'remark-html'
import slug from 'remark-slug'
import autolink from 'remark-autolink-headings'
import getAllGuides, { getGuideBySlug } from '../../guides/api'

export { default } from '../../components/Guide'

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

export async function getStaticProps({ params }) {
  const slug = params.slug.join('/')
  const guide = getGuideBySlug(slug, ['type', 'title', 'image', 'date', 'slug', 'content'])

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
        slug: guide.slug.split('/')
      }
    })),
    fallback: false
  }
}
