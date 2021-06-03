import Link from 'next/link'
import withTranslation from 'next-translate/withTranslation'
import { withRouter } from 'next/router'
import { ReactComponent as HeaderLogo } from './HeaderLogo.svg'
import { ReactComponent as Logo } from '../Footer/HSlogo.svg'

import Container from '../Container'
import Icon from '../Icon'
import Button from '../Button'
import SubscribeFormModal from '../Contact/SubscribeFormModal'

class Header extends React.Component {
  dropdown = false
  state = {
    language: null
  }

  onToggleMenu = () => {
    if (this.state.language) {
      this.setState({ language: null })
      return
    }

    const close = this.menuClose
    const toggle = this.menuToggle
    const dropdownNav = this.dropdownNav

    if (this.dropdown) {
      dropdownNav.style.display = 'none'
      close.style.display = 'none'
      toggle.style.display = 'block'
    } else {
      dropdownNav.style.display = 'flex'
      close.style.display = 'block'
      toggle.style.display = 'none'
    }

    this.dropdown = !this.dropdown
  }

  onClickSubscribe = () => {
    const { showModal } = this.props
    showModal(<SubscribeFormModal formId="2166978" formCode="d8h6h7" onClose={() => showModal(null)} />)
  }

  showLanguages = () => {
    const { style } = this.dropdownNav
    if (style.display === 'none') {
      return
    }

    this.setState({ language: !this.state.language })
  }

  render() {
    const { query } = this.props.router
    const { language } = this.state

    return (
      <header className="Header">
        <Container clipped={false}>
          <div className="navbar">
            <Link href="/[lang]" as={`/${query.lang || 'en'}`}>
              <a><HeaderLogo className="Header-logo" /></a>
            </Link>

            {this.navigationMenu(this.props)}

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
        <div className="navbar-dropdown" ref={r => this.dropdownNav = r} style={{ display: 'none' }}>
          {language ? this.languageMenu() : this.navigationMenu(this.props)}
          <div className="nav-logo">
            <Logo className="Logo" />
          </div>
        </div>
      </header>
    )
  }

  navigationMenu = ({ darkMode, i18n }) => (
    <div className="nav">
      <a href="https://horizontalsystems.io" target="_blank" rel="noopener noreferrer">
        <div className="Button-nav nav-item">{i18n.t('common:about')}</div>
      </a>
      <a href="https://horizontalsystems.io" target="_blank" rel="noopener noreferrer">
        <div className="Button-nav nav-item">{i18n.t('common:contact')}</div>
      </a>
      <Link href="/posts" as="/posts">
        <div className="Button-nav nav-item">Blog</div>
      </Link>
      <div className="nav-icon nav-language" onClick={this.showLanguages}>
        <Icon name="globe" />
        <div className="dropdown-menu dropdown-menu-center">
          <Link href="/[lang]" as="/en" replace><a className="dropdown-item">English</a></Link>
          <Link href="/[lang]" as="/ru" replace><a className="dropdown-item">Russian</a></Link>
          <Link href="/[lang]" as="/fr" replace><a className="dropdown-item">French</a></Link>
          <Link href="/[lang]" as="/de" replace><a className="dropdown-item">Dutch</a></Link>
          <Link href="/[lang]" as="/fa" replace><a className="dropdown-item">Farsi</a></Link>
        </div>
      </div>
      <div className="nav-icon" onClick={darkMode.toggle}>
        <Icon name="dark-light" />
      </div>
      <Button
        className="Button-yellow nav-item-subscribe" title={i18n.t('common:subscribe')}
        onClick={this.onClickSubscribe}
      />
    </div>
  )

  languageMenu = () => (
    <div className="nav">
      <Link href="/[lang]" as="/en"><a className="Button-nav nav-item">English</a></Link>
      <Link href="/[lang]" as="/ru"><a className="Button-nav nav-item">Russian</a></Link>
      <Link href="/[lang]" as="/fr"><a className="Button-nav nav-item">French</a></Link>
      <Link href="/[lang]" as="/de"><a className="Button-nav nav-item">Dutch</a></Link>
      <Link href="/[lang]" as="/fa"><a className="Button-nav nav-item">Farsi</a></Link>
    </div>
  )
}

export default withTranslation(withRouter(Header))
