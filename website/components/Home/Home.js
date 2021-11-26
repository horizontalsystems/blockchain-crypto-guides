import React from 'react'
import Head from 'next/head'
import withTranslation from 'next-translate/withTranslation'
import Layout from '../Layout'
import BannerSlider from '../Banner/BannerSlider'
import GuideList from '../Guide/GuideList'
import CookieConsent from '../CookieConsent/CookieConsent'
import { withI18n } from '../../i18n'

function Home(props) {
  return (
    <Layout>
      <Head>
        <title>{props.i18n.t('common:title')}</title>
      </Head>
      <BannerSlider />
      <GuideList category="recent" {...props} />
      <CookieConsent />
    </Layout>
  )
}

export default withI18n(withTranslation(Home))
