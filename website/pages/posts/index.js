import React from 'react'
import Posts from '../../components/Post/Posts'
import { getAllPosts } from '../../api/posts-api'
import { getI18nProps } from '../../i18n'

export async function getStaticProps(ctx) {
  const i18nProps = await getI18nProps(ctx, ['common'])
  const posts = getAllPosts(['title', 'description', 'date', 'image', 'slug'])

  return {
    props: {
      ...i18nProps,
      posts
    }
  }
}

export default Posts
