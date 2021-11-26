import React from 'react'
import Container from '../Container'
import Button from '../Button'
import { ReactComponent as UWallet } from './uw.svg'

export default function Banner() {
  return (
    <div className="Banner-wrap-wallet">
      <Container className="Container-banner-wallet" clipped={false}>
        <div className="Banner Banner-wallet flex-col md:flex-row">
          <div className="Banner-start">
            <div className="Banner-icon">
              <UWallet />
            </div>
            <div className="Banner-desc">
              <div className="Banner-text">Discover, store, grow while staying private.</div>
              <div className="Banner-action">
                <a href="http://unstoppable.money">
                  <Button className="Button-yellow" title="Learn More" />
                </a>
              </div>
            </div>
          </div>
          <img
            className="Banner-end object-cover md:object-left"
            src="/images/uw.png"
            srcSet={`/images/uw@2x.png 2x, /images/uw@3x.png 3x`}
            alt="Learn, Invest, Make"
          />
          <div className="Banner-image-gradient" />
        </div>
      </Container>
    </div>
  )
}
