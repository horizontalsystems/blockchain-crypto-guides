import Container from '../Container'

export default function Banner() {
  return (
    <Container className="Container-banner" clipped={false}>
      <div className="Banner flex items-center flex-col md:flex-row">
        <div className="Banner-info md:w-1/2">
          <div className="Banner-title">Learn, Invest, Make</div>
          <div className="Banner-description">
            Master fundamentals and learn about crypto projects in simple terms.
          </div>
        </div>
        <img
          className="Banner-image md:h-full md:w-1/2 object-cover md:object-left"
          src="/images/banner.png"
          srcSet={`/images/banner@2x.png 2x, /images/banner@3x.png 3x`}
          alt="Learn, Invest, Make"
        />
      </div>
    </Container>
  )
}
