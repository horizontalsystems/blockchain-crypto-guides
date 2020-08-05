import { appWithTranslation } from '../i18n'
import './styles/index.scss'

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default appWithTranslation(App)
