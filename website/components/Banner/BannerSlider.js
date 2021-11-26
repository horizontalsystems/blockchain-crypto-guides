import React from 'react'
import cn from 'classnames'
import Container from '../Container'
import { ReactComponent as Dot } from '../Icon/dot.svg'
import { ReactComponent as Arrow } from '../Icon/arrow-next.svg'

function BannerItem({ name }) {
  let info
  let image = name
  let imageDark = image

  switch (name) {
    case 'guides':
      imageDark = `${name}-d`
      info = (
        <div className="Banner-info md:w-1/2">
          <div className="Banner-title animate__animated animate__fadeInUp animate__faster">
            Learn, Invest, Make
          </div>
          <div className="Banner-description animate__animated animate__fadeInUp animate__fast">
            Master fundamentals and learn about crypto projects in simple terms.
          </div>
        </div>
      )
      break
    case 'wallet':
      info = (
        <div className="Banner-info md:w-1/2">
          <div className="Banner-title animate__animated animate__fadeInUp animate__faster">
            Discover, store, grow while staying private.
          </div>
          <div className="Banner-description animate__animated animate__fadeInUp animate__fast text-yellow">
            <a href="https://unstoppable.money/" target="_blank" rel="noopener noreferrer">
              Learn More <Arrow className="ml-2 inline" />
            </a>
          </div>
        </div>
      )
      break
    default:
      return null
  }

  return (
    <React.Fragment>
      {info}
      <img
        className="Banner-light md:h-full md:w-1/2 object-contain animate__animated animate__fadeInUp animate__faster"
        src={`/images/banner/${image}.png`}
        srcSet={`/images/banner/${image}@2x.png 2x, /images/banner/${image}@3x.png 3x`}
        alt={name}
      />
      <img
        className="Banner-dark md:h-full md:w-1/2 object-contain animate__animated animate__fadeInUp animate__faster"
        src={`/images/banner/${imageDark}.png`}
        srcSet={`/images/banner/${imageDark}@2x.png 2x, /images/banner/${imageDark}@3x.png 3x`}
        alt={name}
      />
    </React.Fragment>
  )
}

class BannerSlider extends React.Component {
  state = {
    active: 'guides',
    items: ['guides', 'wallet']
  }

  switcher = () => setInterval(() => {
    const { active, items } = this.state
    let index = items.indexOf(active) + 1
    if (index >= items.length) {
      index = 0
    }

    this.setState({ active: items[index] })
  }, 5000)

  interval = this.switcher()

  onChange = active => {
    this.setState({ active })
    clearInterval(this.interval)
    this.interval = this.switcher()
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { items, active } = this.state

    return (
      <div className="Banner-wrap">
        <div className="Banner-half" />
        <Container className="Container-banner" clipped={false}>
          <div className="Banner flex-col md:flex-row">
            <BannerItem key={active} name={active} />
          </div>
        </Container>
        <ul className="Banner-dots">
          {items.map(item =>
            <li key={item} className={cn('Banner-dot', { 'Banner-dot-active': item === active })} onClick={() => this.onChange(item)}>
              <Dot />
            </li>)}
        </ul>
      </div>
    )
  }
}

export default BannerSlider
