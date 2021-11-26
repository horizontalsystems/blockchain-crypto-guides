import React from 'react'
import Head from 'next/head'
import withTranslation from 'next-translate/withTranslation'
import renderToString from 'next-mdx-remote/render-to-string'
import Container from '../components/Container'
import Layout from '../components/Layout'
import privacy from '../components/Markdown/privacy.md'

import { getI18nPaths, getI18nProps, withI18n } from '../i18n'

function PrivacyPage({ markdown }) {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy</title>
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
  const doc = await renderToString(privacy.markdown)

  return {
    props: {
      ...i18nProps,
      markdown: doc.renderedOutput
    }
  }
}

export default withI18n(withTranslation(PrivacyPage))
