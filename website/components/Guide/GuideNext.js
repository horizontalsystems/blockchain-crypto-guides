import Link from 'next-translate/Link'
import Container from '../Container'
import Card from '../Card'
import Slider from '../Slider/Slider'

export default function GuideNext({ list, lang }) {
  if (!list || !list.length) {
    return null
  }

  const count = Math.max(2, list.length)
  const chunkCount = Math.min(4, count)

  return (
    <div className="Guide-next-wrap">
      <Container className="Container-banner" clipped={false}>
        <div className="Guide-next">
          <div className="Guide-next-title">
            Next Guides
          </div>
          <Slider slidesToScroll={chunkCount} slidesToShow={chunkCount}>
            {list.map((item, i) =>
              <Link key={i} href="/[lang]/[...slug]" as={`/${item.slug}`}>
                <a className="Guide-next-card">
                  <Card title={item.title} date={item.date} image={`/${lang}/${item.image}`} />
                </a>
              </Link>
            )}
          </Slider>
        </div>
      </Container>
    </div>
  )
}
