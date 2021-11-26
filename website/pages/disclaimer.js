import React from 'react'
import Head from 'next/head'
import withTranslation from 'next-translate/withTranslation'
import renderToString from 'next-mdx-remote/render-to-string'
import Container from '../components/Container'
import Layout from '../components/Layout'
import disclaimer from '../components/Markdown/disclaimer.md'

import { getI18nPaths, getI18nProps, withI18n } from '../i18n'

function Disclaimer({ markdown }) {
  return (
    <Layout>
      <Head>
        <title>Disclaimer</title>
      </Head>
      <Container className="Markdown-container" clipped={false}>
        <div className="Markdown Markdown-full-width">
          <div
            className="Markdown-content"
            dangerouslySetInnerHTML={{ __html: markdown }}
          />
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps(ctx) {
  const i18nProps = await getI18nProps(ctx, ['common'])
  const doc = await renderToString(disclaimer.markdown)

  return {
    props: {
      ...i18nProps,
      markdown: doc.renderedOutput
    }
  }
}

export default withI18n(withTranslation(Disclaimer))
