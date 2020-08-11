import React from 'react'
import GithubSlugger from 'github-slugger'
import throttle from 'lodash.throttle'
import Container from '../Container'
import BannerGuide from '../Banner/BannerGuide'
import Icon from '../Icon'

class Markdown extends React.Component {
  state = {
    scrolled: 0,
    fontSize: 16,
    lineHeight: 22,
    fontSizeMax: 24,
    fontSizeMin: 12
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollProgress);

    this.mainNavLinks = document.querySelectorAll('.Markdown-menu a');
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  scrollProgress = () => {
    const doc = document.documentElement
    const scrollPx = doc.scrollTop;
    const winHeightPx = doc.scrollHeight - doc.clientHeight;
    const scrolled = `${scrollPx / winHeightPx * 100}%`;

    this.setState({
      scrolled: scrolled
    });

    this.handleScroll()
  }

  handleScroll = throttle(() => {
    const fromTop = window.scrollY;
    const actives = []

    this.mainNavLinks.forEach(link => {
      const id = link.hash.replace(/^#/, '')
      const section = document.getElementById(id)
      if (!section) return
      if (section.offsetTop <= fromTop) {
        actives.push(link)
      } else {
        link.classList.remove('current');
      }
    })

    actives.forEach((link, index) => {
      if (actives.length - 1 === index) {
        link.classList.add('current');
      } else {
        link.classList.remove('current');
      }
    })
  }, 100)

  mapMenu(headings) {
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
      const link = <a href={`#${slug}`} onClick={this.onClickLink}>{child.value}</a>
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

  onClickToggle() {
    const menu = document.querySelectorAll('.Markdown-menu')
    if (!menu.length) return
    const { display } = menu[0].style

    let newDisplay
    if (display === 'none' || display === '') {
      newDisplay = 'block'
    } else {
      newDisplay = 'none'
    }

    menu.forEach(item => {
      item.style.display = newDisplay
    })
  }

  onClickLink(event) {
    event.preventDefault();
    const id = event.target.hash.replace(/^#/, '')
    const target = document.getElementById(id);
    if (!target) return

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  onChangeTexSize(fontSize) {
    this.setState({
      fontSize,
      lineHeight: Math.floor(fontSize * 1.5)
    })
  }

  sidebar({ fontSize, fontSizeMax, fontSizeMin }) {
    return (
      <div className="Markdown-side-content">
        <div className="Markdown-side-title Markdown-menu-bordered">
          <div className="Markdown-side-head cursor-pointer" onClick={() => this.onClickToggle()}>Contents</div>
          <div className="Markdown-title-action">
            <div className="Markdown-title-icon"
                 onClick={() => this.onChangeTexSize(Math.min(fontSize + 1, fontSizeMax))}>
              <Icon name="tbig" />
            </div>
            <div className="Markdown-title-divider" />
            <div className="Markdown-title-icon"
                 onClick={() => this.onChangeTexSize(Math.max(fontSize - 1, fontSizeMin))}>
              <Icon name="tsmall" />
            </div>
          </div>
        </div>
        <div className="Markdown-menu">
          {this.mapMenu(this.props.guide.headings)}
        </div>
        <div className="Markdown-side-title Markdown-side-bottom" />
      </div>
    )
  }

  render() {
    const { scrolled, fontSize, lineHeight } = this.state
    const { guide } = this.props

    return (
      <Container className="Markdown-container" clipped={false}>
        <div className="Progress-container">
          <div className="Progress-bar" style={{ width: scrolled }} />
        </div>

        <div className="md:w-3/4 sm:w-full">
          <div className="md:w-1/4 sm:w-full Markdown-side-fixed sm-show md-hidden">
            {this.sidebar(this.state)}
          </div>
          <div>
            <div className="Markdown-banner">
              <BannerGuide title={guide.title} image={guide.image} type={guide.type} />
            </div>

            <div
              className="Markdown-content"
              style={{ fontSize, lineHeight: `${lineHeight}px` }}
              dangerouslySetInnerHTML={{ __html: guide.content }} />
          </div>

        </div>
        <div className="md:w-1/4 sm:w-full Markdown-side sm-hidden">
          {this.sidebar(this.state)}
        </div>
      </Container>
    )
  }
}

export default Markdown
