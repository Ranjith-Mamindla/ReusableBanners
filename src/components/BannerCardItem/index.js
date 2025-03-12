import './index.css'

const Card = props => {
  const {bannerCardsList} = props
  const {headerText, description, className} = bannerCardsList
  return (
    <li className={className}>
      <h1>{headerText}</h1>
      <p>{description}</p>
      <button className="btn" type="button">
        Show More
      </button>
    </li>
  )
}
export default Card
