import React from 'react'
import Head from 'next/head'
import withTranslation from 'next-translate/withTranslation'
import CookieConsent from '../CookieConsent/CookieConsent'
import Layout from '../Layout'
import PostsList from './PostsList'
import { withI18n } from '../../i18n'

function Home(props) {
  return (
    <Layout>
      <Head>
        <title>{props.i18n.t('common:title')}</title>
      </Head>
      <PostsList {...props} />
      <CookieConsent />
    </Layout>
  )
}

export default withI18n(withTranslation(Home))
