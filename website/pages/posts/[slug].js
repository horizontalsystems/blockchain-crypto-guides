import Post from '../../components/Post/Post'
import { getAllPosts, getPostBySlug } from '../../api/posts-api'
import { mapChild, parse } from '../../api/parser'
import { getI18nPaths, getI18nProps, withI18n } from '../../i18n'

export async function getStaticProps(ctx) {
  const i18nProps = await getI18nProps(ctx, ['common'])

  const post = getPostBySlug(ctx.params.slug, [
    'title',
    'date',
    'description',
    'author',
    'content'
  ])

  const { content, node } = await parse(post.content || '')
  const children = node.children.filter(child => child.type === 'heading')
  const headings = mapChild(children)

  return {
    props: {
      ...i18nProps,
      post: {
        ...post,
        headings,
        content
      },
    },
  }
}

export async function getStaticPaths() {
  const paths = []
  const posts = getAllPosts(['slug'])
  const i18nPaths = getI18nPaths()

  posts.forEach(post => {
    i18nPaths.forEach(i18n => {
      paths.push({
        params: {
          lang: i18n.params.lang,
          slug: post.slug
        }
      })
    })
  })

  return {
    paths,
    fallback: false,
  }
}

export default withI18n(Post)
