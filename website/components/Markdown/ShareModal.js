import React from 'react'
import { ReactComponent as Twitter } from '../Icon/twitter.svg'
import { ReactComponent as Telegram } from '../Icon/telegram.svg'
import { ReactComponent as Facebook } from '../Icon/facebook.svg'
import { ReactComponent as Copy } from '../Icon/copy.svg'
import { copyToClipboard } from '../helper'

function ShareModal({ onClose }) {
  const copyAndClose = () => {
    copyToClipboard('https://litrex.academy/')
    onClose()
  }

  return (
    <div className="Share-modal">
      <div className="close-form">
        <span className="close" onClick={onClose}>&times;</span>
      </div>
      <div className="share">
        <div className="share-text">Share:</div>
        <div className="share-links">
          <a
            onClick={onClose}
            href="https://twitter.com/intent/tweet/?text=Master%20fundamentals%20and%20learn%20about%20crypto%20projects%20in%20simple%20terms.&url=https%3A%2F%2Flitrex.academy"
            target="_blank" rel="noopener">
            <Twitter width="32" height="32" className="share-button" />
          </a>
          <a
            onClick={onClose}
            href="https://telegram.me/share/url?text=Master%20fundamentals%20and%20learn%20about%20crypto%20projects%20in%20simple%20terms.&url=https%3A%2F%2Flitrex.academy"
            target="_blank" rel="noopener">
            <Telegram width="32" height="32" className="share-button" />
          </a>

          <a
            onClick={onClose}
            href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Flitrex.academy"
            target="_blank"
            rel="noopener">
            <Facebook width="32" height="32" className="share-button" />
          </a>

          <a href="#" onClick={copyAndClose}>
            <Copy width="32" height="32" className="share-button" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ShareModal
