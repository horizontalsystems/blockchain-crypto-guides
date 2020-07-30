import Head from 'next/head'
import Layout from '../Layout'
import GuideNext from './GuideNext'
import Markdown from '../Markdown'

export default function Guide({ guide }) {
  return (
    <Layout>
      <Head>
        <title>{guide.title}</title>
        <meta property="og:image" content={guide.image} />
      </Head>
      <Markdown guide={guide} />
      <GuideNext list={guide.next} />
    </Layout>
  )
}
