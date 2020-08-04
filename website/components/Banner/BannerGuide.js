export default function BannerGuide({ title, type, image }) {
  return (
    <div className="Banner Banner-guide flex-col md:flex-row">
      <div className="Banner-info md:w-1/2">
        <div className="Banner-description">{type}</div>
        <div className="Banner-title">{title}</div>
      </div>
      <img
        className="Banner-image md:h-full md:w-1/2 object-cover md:object-left"
        src={image}
        alt={title}
      />
    </div>
  )
}
