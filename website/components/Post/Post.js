import React from 'react'
import Head from 'next/head'
import Layout from '../Layout'
import Markdown from '../Markdown'

function Post({ post }) {
  const render = ({ setModal }) => (
    <>
      <Head>
        <title>{post.title}</title>
        {post.image && <meta property="og:image" content={`/posts/${post.image}`} />}
        {post.description && <meta property="description" content={post.description} />}
      </Head>
      <Markdown guide={post} setModal={setModal} />
    </>
  )

  return <Layout render={render} />
}

export default Post
