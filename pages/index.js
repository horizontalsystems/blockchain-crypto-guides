import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import Container from '../components/Container'
import getAllGuides from '../guides/api'

export default function Home({ guides }) {
  return (
    <Layout>
      <Head>
        <title>Cryptopedia</title>
      </Head>
      <Container>
        <ul>
          {guides.map((item, i) => (
            <li key={i}>
              <Link href="/guide/[...slug]" as={`/guide/${item.slug}`}>
                <a>{item.slug}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const guides = getAllGuides(['slug'])

  return {
    props: { guides },
  }
}

