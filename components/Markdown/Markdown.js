import React from 'react'
import GithubSlugger from 'github-slugger'
import Container from '../Container'

class Markdown extends React.Component {
  mapMenu(headings) {
    const slugger = new GithubSlugger()
    const menu = []

    for (let i = 0; i < headings.length; i++) {
      let item = headings[i]
      let value

      const child = item.children[0]
      const slug = slugger.slug(child.value)
      const link = <a href={`#${slug}`}>{child.value}</a>
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

  toggleMenu() {
    const { display } = this.menu.style
    if (display === 'none') {
      this.menu.style.display = 'block'
    } else {
      this.menu.style.display = 'none'
    }
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
            <div className="Markdown-side-title Markdown-menu-bordered" onClick={() => this.toggleMenu()}>
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
