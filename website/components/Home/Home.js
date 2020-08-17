import React from 'react'
import Head from 'next/head'
import Link from 'next-translate/Link'
import cn from 'classnames'
import withTranslation from 'next-translate/withTranslation'
import Layout from '../Layout'
import Container from '../Container'
import Banner from '../Banner'
import BannerWallet from '../Banner/BannerWallet'
import Button from '../Button'
import Card from '../Card'
import Icon from '../Icon'
import { withI18n } from '../../i18n'

class Home extends React.Component {
  state = {
    filterSize: 12,
    filterActive: 'All',
    filters: [],
    indexed: {},
    items: [],
    pages: [],
    pageActive: 1
  }

  constructor({ guides }) {
    super();

    const state = this.state
    const cache = guides.reduce((acc, cur) => {
      if (acc[cur.type]) {
        acc[cur.type].push(cur)
      } else {
        acc[cur.type] = [cur]
      }

      return acc
    }, { All: guides })

    state.indexed = cache
    state.filters = Object.keys(cache)
    state.items = cache['All'].slice(0, state.filterSize)
    state.pages = this.pages(guides.length)
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

  select = active => {
    const { indexed, filterSize } = this.state
    const items = indexed[active]

    this.setState({
      filterActive: active,
      items: items.slice(0, filterSize),
      pages: this.pages(items.length)
    })
  }

  selectPage = active => {
    const { page, indexed, filterActive, filterSize } = this.state
    if (page === active) {
      return
    }

    const data = indexed[filterActive]
    const pageEnd = active * filterSize

    this.setState({
      pageActive: active,
      items: data.slice(pageEnd - filterSize, pageEnd)
    })
  }

  render() {
    const { i18n } = this.props
    const { items, filters, filterActive, pages, pageActive } = this.state

    return (
      <Layout>
        <Head>
          <title>{i18n.t('common:title')}</title>
        </Head>
        <Banner
          title="Learn, Invest, Make"
          info="Master fundamentals and learn about crypto projects in simple terms."
        />

        <Container clipped={false}>
          <div className="Guides-filter">
            {filters.map((item, i) =>
              <Button
                key={i}
                title={item}
                onClick={() => this.select(item)}
                className={cn('Button-filter mr-4', {
                  'Button-yellow': item === filterActive,
                  'Button-filter-inactive': item !== filterActive
                })}
              />
            )}
          </div>
          <div className="Guides grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {items.map((item, i) =>
              <Link key={i} href="[lang]/guide/[...slug]" as={`/guide/${item.slug}`}>
                <a><Card title={item.title} date={item.date} image={item.image} /></a>
              </Link>
            )}
          </div>

          <div className="Guides-pagination text-center">
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
        </Container>
        <BannerWallet />
      </Layout>
    )
  }
}

export default withI18n(withTranslation(Home))
