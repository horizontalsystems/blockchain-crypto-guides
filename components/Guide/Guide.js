import Head from 'next/head'
import Markdown from '../Markdown'
import Layout from '../Layout'

export default function Guide({ guide }) {
  return (
    <Layout>
      <Head>
        <title>{guide.title}</title>
        <meta property="og:image" content={guide.image} />
      </Head>
      <Markdown guide={guide} />
    </Layout>
  )
}
