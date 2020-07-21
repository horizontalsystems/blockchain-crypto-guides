import remark from 'remark'
import html from 'remark-html'
import getAllGuides, { getGuideBySlug } from '../../guides/api'

export { default } from '../../components/Guide'

async function markdownToHtml(markdown) {
  const result = await remark()
    .use(html)
    .process(markdown)

  return result.toString()
}

export async function getStaticProps({ params }) {
  const slug = params.slug.join('/')
  const guide = getGuideBySlug(slug, ['slug', 'content'])
  const content = await markdownToHtml(guide.content)

  return {
    props: {
      guide: { content }
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
