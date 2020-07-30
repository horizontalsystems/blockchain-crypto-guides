import Link from 'next/link'
import Container from '../Container'
import HeaderLogo from './HeaderLogo.svg'
import Icon from '../Icon'
import Button from '../Button'
import SubscribeFormModal from '../Contact/SubscribeFormModal'
import events from '../EventEmitter'
import { ReactComponent as Logo } from '../Footer/HSlogo.svg'

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

  onClickMenu = () => {
    this.onToggleMenu()
    this.dropdownNav.style.display = 'none'

    if (!this.props.navigate) {
      window.location.href = '/'
    }
  }

  onClickSubscribe = () => {
    events.showModal(<SubscribeFormModal formId="2166978" formCode="d8h6h7" />)
  }

  render() {
    const navigation = (
      <div className="nav">
        <a href="https://horizontalsystems.io">
          <Button className="Button-filter Button-bordered text-dark nav-item" title="About" />
        </a>
        <a href="https://t.me/unstoppable_development">
          <Button className="Button-filter Button-bordered text-dark nav-item" title="Contact" />
        </a>
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
              <img className="Header-logo" src={HeaderLogo} alt="Home" />
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
