import Head from 'next/head'
import Container from '../Container'
import Markdown from '../Markdown'
import Layout from '../Layout'

export default function Guide({ guide = {} }) {
  return (
    <Layout>
      <Head>
        <title>Guide</title>
        <meta property="og:image" content="/image.png" />
      </Head>
      <Container>
        <article className="mb-32">
          <Markdown content={guide.content || ''} />
        </article>
      </Container>
    </Layout>
  )
}
