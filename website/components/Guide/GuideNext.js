import Link from 'next-translate/Link'
import Container from '../Container'
import Card from '../Card'

export default function GuideNext({ list }) {
  if (!list || !list.length) {
    return null
  }

  return (
    <div className="Guide-next-wrap">
      <Container className="Container-banner" clipped={false}>
        <div className="Guide-next">
          <div className="Guide-next-title">
            Next Guides
          </div>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {list.map((item, i) =>
              <Link key={i} href="/[lang]/guide/[...slug]" as={`/guide/${item.slug}`}>
                <a className={i === 0 ? '' : 'sm-hidden'}>
                  <Card title={item.title} date={item.date} image={item.image} />
                </a>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}
