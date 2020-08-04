import Link from 'next/link'
import Container from '../Container'
import Icon from '../Icon'
import Button from '../Button'
import SubscribeFormModal from '../Contact/SubscribeFormModal'
import { ReactComponent as HeaderLogo } from './HeaderLogo.svg'
import { ReactComponent as Logo } from '../Footer/HSlogo.svg'
import events from '../EventEmitter'

class Header extends React.Component {
  dropdown = false

  static defaultProps = {
    navigate: true
  }

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
    events.showModal(<SubscribeFormModal formId="2166978" formCode="d8h6h7" />)
  }

  render() {
    const { darkMode } = this.props

    const navigation = (
      <div className="nav">
        <a href="https://horizontalsystems.io">
          <div className="Button-nav nav-item">About</div>
        </a>
        <a href="https://t.me/unstoppable_development">
          <div className="Button-nav nav-item">Contact</div>
        </a>
        <div className="nav-icon" onClick={darkMode.toggle}>
          <Icon name="dark-light" />
        </div>
        <Button
          className="Button-yellow nav-item nav-item-subscribe" title="Subscribe"
          onClick={this.onClickSubscribe}
        />
      </div>
    )

    return (
      <header className="Header">
        <Container>
          <div className="navbar">
            <Link href="/">
              <HeaderLogo className="Header-logo" />
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

export default Header
