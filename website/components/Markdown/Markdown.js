import React from 'react'
import GithubSlugger from 'github-slugger'
import throttle from 'lodash.throttle'
import { withRouter } from 'next/router'
import Container from '../Container'
import Icon from '../Icon'
import ShareModal from './ShareModal'
import { ReactComponent as Twitter } from '../Icon/twitter-small.svg'
import { ReactComponent as Telegram } from '../Icon/telegram-small.svg'
import { ReactComponent as Facebook } from '../Icon/facebook-small.svg'
import { ReactComponent as Copy } from '../Icon/copy-small.svg'
import { ReactComponent as Share } from '../Icon/share.svg'
import isSafari, { copyToClipboard } from '../helper'

class Markdown extends React.Component {
  state = {
    scrolled: 0,
    fontSize: 16,
    lineHeight: 22,
    fontSizeMax: 24,
    fontSizeMin: 12
  }

  constructor({ guide, router }) {
    super()

    this.state.title = encodeURIComponent(guide.title)
    this.state.url = 'https://litrex.academy' + router.asPath
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollProgress)

    this.mainNavLinks = document.querySelectorAll('.Markdown-menu a')
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  scrollProgress = () => {
    const doc = document.documentElement
    const scrollPx = doc.scrollTop
    const winHeightPx = doc.scrollHeight - doc.clientHeight
    const scrolled = `${scrollPx / winHeightPx * 100}%`

    this.setState({
      scrolled: scrolled
    })

    this.handleScroll()
  }

  handleScroll = throttle(() => {
    const fromTop = window.scrollY
    const actives = []

    this.mainNavLinks.forEach(link => {
      const id = link.hash.replace(/^#/, '')
      const section = document.getElementById(id)
      if (!section) return
      if (section.offsetTop <= fromTop) {
        actives.push(link)
      } else {
        link.classList.remove('current')
      }
    })

    actives.forEach((link, index) => {
      if (actives.length - 1 === index) {
        link.classList.add('current')
      } else {
        link.classList.remove('current')
      }
    })
  }, 100)

  mapMenu(headings, closeOnClick) {
    const slugger = new GithubSlugger()
    const menu = []

    for (let i = 0; i < headings.length; i++) {
      let item = headings[i]
      let value

      if (!item.children) {
        continue
      }

      const child = item.children[0]
      const slug = slugger.slug(child.value)
      const link = (
        <a href={`#${slug}`} onClick={v => this.onClickLink(v, closeOnClick)}>
          {child.value}
        </a>
      )
      switch (item.depth) {
        case 2:
          value = <div className="pl-3">{link}</div>
          break
        case 3:
          value = <div className="pl-6">{link}</div>
          break
        default:
          value = <div className="Markdown-menu-head">{link}</div>
          break
      }

      menu.push(
        <div key={i} className="Markdown-menu-item">
          {value}
        </div>
      )
    }

    return menu
  }

  onClickToggle(forceHide) {
    const menu = document.querySelectorAll('.Markdown-menu')
    if (!menu.length) return
    const { display } = menu[0].style

    let newDisplay
    if (forceHide) {
      newDisplay = 'none'
    } else if (display === 'none' || display === '') {
      newDisplay = 'block'
    } else {
      newDisplay = 'none'
    }

    menu.forEach(item => {
      item.style.display = newDisplay
    })
  }

  onClickLink(event, closeSidebar) {
    event.preventDefault()
    const id = event.target.hash.replace(/^#/, '')
    const target = document.getElementById(id)
    if (!target) return

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    if (isSafari()) {
      document.documentElement.scrollTop = document.documentElement.scrollTop - 160
    }

    if (closeSidebar) {
      this.onClickToggle(true)
    }
  }

  onChangeTexSize(fontSize) {
    this.setState({
      fontSize,
      lineHeight: Math.floor(fontSize * 1.5)
    })
  }

  sidebar({ fontSize, fontSizeMax, fontSizeMin }, closeOnClick, share) {
    return (
      <div className="Markdown-side-content">
        <div className="Markdown-side-title Markdown-menu-bordered">
          <div className="Markdown-side-head cursor-pointer" onClick={() => this.onClickToggle()}>Contents</div>
          <div className="Markdown-text-actions">
            <div className="Markdown-share-icon cursor-pointer" onClick={this.onShare}>
              <Share />
            </div>
            <div className="Markdown-text-size">
              <div className="Markdown-text-icon"
                   onClick={() => this.onChangeTexSize(Math.min(fontSize + 1, fontSizeMax))}>
                <Icon name="tbig" />
              </div>
              <div className="Markdown-title-divider" />
              <div className="Markdown-text-icon"
                   onClick={() => this.onChangeTexSize(Math.max(fontSize - 1, fontSizeMin))}>
                <Icon name="tsmall" />
              </div>
            </div>
          </div>
        </div>
        <div className="Markdown-menu">
          {this.mapMenu(this.props.guide.headings, closeOnClick)}
        </div>
        <div className="Markdown-side-title Markdown-side-bottom">
          {share}
        </div>
      </div>
    )
  }

  onShare = () => {
    const { title, url } = this.state
    const { setModal } = this.props
    setModal(<ShareModal title={title} url={url} onClose={() => setModal(null)} />)
  }

  share() {
    const { title, url } = this.state
    const urlEncoded = encodeURIComponent(url)

    return (
      <div className="share">
        <div className="share-text">Share:</div>
        <div className="share-links">
          <a href={`https://twitter.com/intent/tweet/?text=${title}.&url=${urlEncoded}`} target="_blank" rel="noopener">
            <Twitter width="18" height="18" className="share-button" />
          </a>
          <a href={`https://telegram.me/share/url?text=${title}&url=${urlEncoded}`} target="_blank" rel="noopener">
            <Telegram width="18" height="18" className="share-button" />
          </a>

          <a href={`https://facebook.com/sharer/sharer.php?u=${urlEncoded}`} target="_blank" rel="noopener">
            <Facebook width="18" height="18" className="share-button" />
          </a>

          <a href="#" onClick={() => copyToClipboard(url)}>
            <Copy width="18" height="18" className="share-button" />
          </a>
        </div>
      </div>
    )
  }

  render() {
    const { scrolled, fontSize, lineHeight } = this.state
    const { guide } = this.props
    const share = this.share()

    return (
      <Container className="Markdown-container" clipped={false}>
        <div className="Progress-container">
          <div className="Progress-bar" style={{ width: scrolled }} />
        </div>

        <div className="Markdown">
          <div className="Markdown-sidebar Markdown-side-top">
            {this.sidebar(this.state, true, share)}
          </div>
          <div
            className="Markdown-content"
            style={{ fontSize, lineHeight: `${lineHeight}px` }}
            dangerouslySetInnerHTML={{ __html: guide.content }}
          />
        </div>
        <div className="Markdown-sidebar Markdown-side">
          {this.sidebar(this.state, false, share)}
        </div>
      </Container>
    )
  }
}

export default withRouter(Markdown)
