import React from 'react'
import withTranslation from 'next-translate/withTranslation'
import GuideList from '../Guide/GuideList'
import { withI18n } from '../../i18n'

function Home(props) {
  return <GuideList category="new" {...props} />
}

export default withI18n(withTranslation(Home))
