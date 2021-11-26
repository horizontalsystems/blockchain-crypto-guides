import Container from '../Container'

export default function Banner({ title, info }) {
  return (
    <div className="Banner-wrap">
      <div className="Banner-half" />
      <Container className="Container-banner" clipped={false}>
        <div className="Banner flex-col md:flex-row">
          <div className="Banner-info md:w-1/2">
            <div className="Banner-title">{title}</div>
            <div className="Banner-description">{info}</div>
          </div>
          <img
            className="Banner-light md:h-full md:w-1/2 object-contain"
            src="/images/banner.png"
            srcSet={`/images/banner@2x.png 2x, /images/banner@3x.png 3x`}
            alt={title}
          />
          <img
            className="Banner-dark md:h-full md:w-1/2 object-contain"
            src="/images/banner-d.png"
            srcSet={`/images/banner-d@2x.png 2x, /images/banner-d@3x.png 3x`}
            alt={title}
          />
        </div>
      </Container>
    </div>
  )
}
