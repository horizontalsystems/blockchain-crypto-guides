import Head from 'next/head'
import Layout from '../Layout'
import GuideNext from './GuideNext'
import Markdown from '../Markdown'

export default function Guide({ guide }) {
  const render = ({ setModal }) => {
    return (
      <>
        <Head>
          {guide.title && <title>{guide.title}</title>}
          {guide.image && <meta property="og:image" content={guide.image} />}
        </Head>
        <Markdown guide={guide} setModal={setModal} />
        <GuideNext list={guide.next} />
      </>
    )
  }

  return <Layout render={render} />
}
