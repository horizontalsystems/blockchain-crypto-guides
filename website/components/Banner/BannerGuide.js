export default function BannerGuide({ title, type, image }) {
  return (
    <div className="Banner Banner-guide flex-col md:flex-row">
      <img className="Banner-image" src={image} alt={title} />
    </div>
  )
}
