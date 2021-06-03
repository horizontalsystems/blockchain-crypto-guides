import React from 'react'
import Link from 'next/link'
import Container from '../Container'
import Card from '../Card'
import Button from '../Button'
import cn from 'classnames'
import Icon from '../Icon'
import isSafari from '../helper'

class PostsList extends React.Component {
  state = {
    items: [],
    pages: [],
    pageActive: 1,
    filterSize: 12
  }

  constructor({ posts }) {
    super();
    this.resetState(posts, false)
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.resetState(nextProps.posts, true)
  }

  scrollToGuide() {
    if (this.posts) {
      this.posts.scrollIntoView()

      if (isSafari()) {
        document.documentElement.scrollTop = document.documentElement.scrollTop - 200
      }
    }
  }

  resetState(posts = [], forceUpdate) {
    const state = this.state

    state.items = posts.slice(0, state.filterSize)
    state.pages = this.pages(posts.length)
    state.pageActive = 1

    if (forceUpdate) {
      this.setState(state)
    }
  }

  pages(count) {
    const { filterSize } = this.state

    let page = 1
    const pages = []
    for (let i = 0; i <= count; i += 1) {
      if (i % filterSize === 0) {
        pages.push(page)
        page += 1
      }
    }

    return pages
  }

  selectPage = active => {
    const { posts } = this.props
    const { pageActive, filterSize } = this.state
    if (pageActive === active) {
      return
    }

    const pageEnd = active * filterSize

    this.scrollToGuide()
    this.setState({
      pageActive: active,
      items: posts.slice(pageEnd - filterSize, pageEnd)
    })
  }

  render() {
    const { items } = this.state

    return (
      <Container clipped={false}>
        <div className="Guides grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 pt-4 mt-4" ref={r => this.posts = r}>
          {items.map((post, i) =>
            <Link key={i} href="/posts/[...slug]" as={`/posts/${post.slug}`}>
              <a><Card title={post.title} date={post.date} image={`/posts/${post.image}`} /></a>
            </Link>
          )}
        </div>

        <div className="Guides-pagination">
          {this.renderPagination()}
        </div>
      </Container>
    )
  }

  renderPagination() {
    const { pages, pageActive } = this.state

    if (pages.length < 2) {
      return null
    }

    return (
      <div className="text-center">
        <div className={cn('Button-circle mr-6', { 'Button-circle-yellow': pageActive !== 1 })}
             onClick={() => this.selectPage(Math.max(pageActive - 1, 1))}>
          <Icon name="arrow" />
        </div>

        {pages.map(page =>
          <Button
            key={page}
            title={page}
            onClick={() => this.selectPage(page)}
            className={cn('Button-page-number', {
              'text-yellow': page === pageActive,
              'text-grey': page !== pageActive
            })}
          />
        )}

        <div onClick={() => this.selectPage(Math.min(pageActive + 1, pages.length))}
             className={cn('Button-circle Arrow-right ml-6', {
               'Button-circle-yellow': pageActive !== pages.length
             })}>
          <Icon name="arrow" />
        </div>
      </div>
    )
  }
}

export default PostsList
