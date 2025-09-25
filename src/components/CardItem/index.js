// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`listStyle ${className}`}>
      <div className="cardContainer">
        <h1 className="head">{title}</h1>
        <p className="description">{description}</p>
      </div>
      <img className="image" src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem
