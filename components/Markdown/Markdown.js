import React from 'react'
import GithubSlugger from 'github-slugger'
import throttle from 'lodash.throttle'
import Container from '../Container'

class Markdown extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', throttle(this.handleScroll, 100));

    this.mainNavLinks = document.querySelectorAll('.Markdown-menu a');
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const fromTop = window.scrollY;
    const actives = []

    this.mainNavLinks.forEach(link => {
      const section = document.querySelector(link.hash)
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
  }

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
    const { display } = this.menu.style
    if (display === 'none' || display === '') {
      this.menu.style.display = 'block'
    } else {
      this.menu.style.display = 'none'
    }
  }

  onClickLink(event) {
    event.preventDefault();
    const target = document.querySelector(event.target.hash);
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  render() {
    const { guide } = this.props

    return (
      <Container className="Markdown-container" clipped={false}>
        <div
          className="Markdown-section Markdown-content"
          dangerouslySetInnerHTML={{ __html: guide.content }}
        />
        <div className="Markdown-section Markdown-side">
          <div className="Markdown-side-content">
            <div className="Markdown-side-title Markdown-menu-bordered" onClick={() => this.onClickToggle()}>
              Contents
            </div>
            <div className="Markdown-menu" ref={r => this.menu = r}>
              {this.mapMenu(guide.headings)}
            </div>
            <div className="Markdown-side-title Markdown-side-bottom">
            </div>
          </div>
        </div>
      </Container>
    )
  }
}

export default Markdown
