import React from 'react'
import Link from 'next-translate/Link'
import Container from '../Container'
import Card from '../Card'
import Button from '../Button'
import cn from 'classnames'
import Icon from '../Icon'
import isSafari from '../helper'

class GuideList extends React.Component {
  state = {
    items: [],
    pages: [],
    pageActive: 1,
    filterSize: 12
  }

  constructor({ guides }) {
    super();
    this.resetState(guides, false)
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.resetState(nextProps.guides, true)
  }

  scrollToGuide() {
    if (this.guides) {
      this.guides.scrollIntoView()

      if (isSafari()) {
        document.documentElement.scrollTop = document.documentElement.scrollTop - 200
      }
    }
  }

  resetState(guides = [], forceUpdate) {
    const state = this.state

    state.items = guides.slice(0, state.filterSize)
    state.pages = this.pages(guides.length)
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
    const { guides } = this.props
    const { pageActive, filterSize } = this.state
    if (pageActive === active) {
      return
    }

    const pageEnd = active * filterSize

    this.scrollToGuide()
    this.setState({
      pageActive: active,
      items: guides.slice(pageEnd - filterSize, pageEnd)
    })
  }

  render() {
    const { i18n } = this.props
    const { items } = this.state

    return (
      <Container clipped={false}>
        <div className="Guides-filter">
          {this.renderFilters()}
        </div>

        <div className="Guides grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4" ref={r => this.guides = r}>
          {items.map((guide, i) =>
            <Link key={i} href="/[lang]/[...slug]" as={`/${guide.slug}`}>
              <a><Card title={guide.title} date={guide.date} image={`/${i18n.lang}/${guide.image}`} /></a>
            </Link>
          )}
        </div>

        <div className="Guides-pagination">
          {this.renderPagination()}
        </div>
      </Container>
    )
  }

  renderFilters() {
    const { categories, category, i18n } = this.props

    return Object.keys(categories).map((key, i) => {
      const categoryName = (key === 'recent')
        ? i18n.t('common:recent')
        : categories[key][i18n.lang]

      return (
        <Link key={i} href="/[lang]/[category]" as={`/${key}`}>
          <a>
            <Button
              title={categoryName}
              className={cn('Button-filter mr-4', {
                'Button-yellow': key === category,
                'Button-filter-inactive': key !== category
              })}
            />
          </a>
        </Link>
      )
    })
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

export default GuideList
