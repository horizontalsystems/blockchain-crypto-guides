function Card({ title, date, image }) {
  return (
    <div className="Card">
      <img className="Card-image" src={image} alt={title} />
      <div className="Card-info">
        <div className="Card-date">{date}</div>
        <div className="Card-title">{title}</div>
      </div>
    </div>
  )
}

export default Card
