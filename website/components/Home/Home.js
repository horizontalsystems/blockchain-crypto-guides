import React from 'react'
import Head from 'next/head'
import withTranslation from 'next-translate/withTranslation'
import Layout from '../Layout'
import Banner from '../Banner'
import BannerWallet from '../Banner/BannerWallet'
import GuideList from '../Guide/GuideList'
import { withI18n } from '../../i18n'

function Home(props) {
  return (
    <Layout>
      <Head>
        <title>{props.i18n.t('common:title')}</title>
      </Head>

      <Banner
        title="Learn, Invest, Make"
        info="Master fundamentals and learn about crypto projects in simple terms."
      />

      <GuideList category="recent" {...props} />
      <BannerWallet />
    </Layout>
  )
}

export default withI18n(withTranslation(Home))
