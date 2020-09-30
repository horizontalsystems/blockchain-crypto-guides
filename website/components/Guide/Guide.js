import React from 'react'
import Head from 'next/head'
import Layout from '../Layout'
import GuideNext from './GuideNext'
import Markdown from '../Markdown'

export default function Guide({ guide, lang }) {
  const render = ({ setModal }) => (
    <>
      <Head>
        <title>{guide.title}</title>
        {guide.image && <meta property="og:image" content={`/${lang}/${guide.image}`} />}
        {guide.description && <meta property="description" content={guide.description} />}
      </Head>
      <Markdown guide={guide} setModal={setModal} />
      <GuideNext list={guide.next} lang={lang} />
    </>
  )

  return <Layout render={render} />
}
