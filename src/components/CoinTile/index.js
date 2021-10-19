import { Link } from 'react-router-dom'
import './CoinTile.css'
function CoinTile({ image, name, symbol, price }) {
  return (
    <Link to={`/coin/${symbol}?name=${name}`} >
      <div className="coin-tile-container">
        <img className="coin-tile-img" src={image} alt={name}/>
        <div className="coin-tile-details">
          <h2>{name}</h2>
          <section className="coin-tile-info">
            <div>
              <span>SYMBOL: </span>{symbol}
            </div>
            <div>
              <span>PRICE: </span>{price || 'N/A'}
            </div>
          </section>
        </div>
      </div>
    </Link>
  )
}

export default CoinTile