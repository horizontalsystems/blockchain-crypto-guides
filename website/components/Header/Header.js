import Link from 'next-translate/Link'
import withTranslation from 'next-translate/withTranslation'
import Router from 'next-translate/Router'
import { withRouter } from 'next/router'
import Container from '../Container'
import Icon from '../Icon'
import Button from '../Button'
import SubscribeFormModal from '../Contact/SubscribeFormModal'
import { ReactComponent as HeaderLogo } from './HeaderLogo.svg'
import { ReactComponent as Logo } from '../Footer/HSlogo.svg'

class Header extends React.Component {
  dropdown = false

  onToggleMenu = () => {
    const close = this.menuClose
    const toggle = this.menuToggle
    const dropdownNav = this.dropdownNav

    if (this.dropdown) {
      dropdownNav.style.display = 'none'
      close.style.display = 'none'
      toggle.style.display = 'block'
    } else {
      dropdownNav.style.display = 'block'
      close.style.display = 'block'
      toggle.style.display = 'none'
    }

    this.dropdown = !this.dropdown
  }

  onClickSubscribe = () => {
    const { showModal } = this.props
    showModal(<SubscribeFormModal formId="2166978" formCode="d8h6h7" onClose={() => showModal(null)} />)
  }

  onChangeLng = lang => {
    const { i18n, router } = this.props
    const { query } = router

    if (!query.slug || !query.lang) {
      router.push(`/${lang}`)
      // Router.pushI18n({ url: '/', options: { lang } })
      return
    }

    const re = new RegExp(`^\/${query.lang}`, 'i');
    const newRoute = router.asPath.replace(re, '')

    Router.pushI18n({ url: newRoute, options: { lang } })
  }

  render() {
    const { darkMode, i18n } = this.props

    const navigation = (
      <div className="nav">
        <a href="https://horizontalsystems.io">
          <div className="Button-nav nav-item">{i18n.t('common:about')}</div>
        </a>
        <a href="https://t.me/unstoppable_development">
          <div className="Button-nav nav-item">{i18n.t('common:contact')}</div>
        </a>
        <div className="nav-icon nav-language">
          <Icon name="globe" />
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" onClick={() => this.onChangeLng('en')}>English</a>
            <a className="dropdown-item" onClick={() => this.onChangeLng('ru')}>Russian</a>
          </div>
        </div>
        <div className="nav-icon" onClick={darkMode.toggle}>
          <Icon name="dark-light" />
        </div>
        <Button
          className="Button-yellow nav-item nav-item-subscribe" title={i18n.t('common:subscribe')}
          onClick={this.onClickSubscribe}
        />
      </div>
    )

    return (
      <header className="Header">
        <Container clipped={false}>
          <div className="navbar">
            <Link href="/[lang]" as="/">
              <a><HeaderLogo className="Header-logo" /></a>
            </Link>

            {navigation}

            <div className="Menu-wrap" onClick={this.onToggleMenu}>
              <div className="Menu-close" ref={r => this.menuClose = r}>
                <Icon name="menu-close" />
              </div>
              <div className="Menu-toggle" ref={r => this.menuToggle = r}>
                <Icon name="menu" />
              </div>
            </div>
          </div>
        </Container>
        <div className="navbar-dropdown" ref={r => this.dropdownNav = r}>
          {navigation}
          <div className="nav-logo">
            <Logo className="Logo" />
          </div>
        </div>
      </header>
    )
  }
}

export default withTranslation(withRouter(Header))
