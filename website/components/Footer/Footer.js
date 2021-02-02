import React from 'react'
import Link from 'next/link'

import Icon from '../Icon/Icon'
import Container from '../Container/Container'
import SubscribeForm from '../Contact/SubscribeForm'
import { ReactComponent as Logo } from './HSlogo.svg'

function Footer() {
  return (
    <header className="Footer">
      <Container>
        <div className="Footer-top">
          <div className="Footer-nav">
            <a className="Footer-nav-item" href="/">Home</a>
            <a className="Footer-nav-item" target="_blank" rel="noopener noreferrer" href="https://horizontalsystems.io">About</a>
            <a className="Footer-nav-item" target="_blank" rel="noopener noreferrer" href="https://t.me/unstoppable_development">Contact</a>
            <a className="Footer-nav-item" target="_blank" rel="noopener noreferrer" href="http://unstoppable.money/">Unstoppable Wallet</a>
            <Link href="/disclaimer" as="/disclaimer">
              <a className="Footer-nav-item">Disclaimer</a>
            </Link>
          </div>
          <div className="Footer-subscribe">
            <SubscribeForm formCode="m3g0e6" formId="1561498" />
            <div className="Footer-subscribe-info">
              Subscribe to our newsletter to get new products, guides and cheat sheets when they are published.
            </div>
          </div>
        </div>

        <hr className="Divider" />

        <div className="Footer-bottom">
          <a href="https://horizontalsystems.io" target="_blank" rel="noopener noreferrer" >
            <Logo className="Logo" />

            <div className="Logo-icon">
              <Icon name="logo" fill="#05C46B" viewBox="0 0 40 40" size="40" />
            </div>
          </a>

          <span>@ 2019 HorizontalSystems</span>
        </div>
      </Container>
    </header>
  )
}

export default Footer
