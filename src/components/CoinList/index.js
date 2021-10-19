import { MEDIA_URL } from '../../shared/constants'
import CoinTile from '../CoinTile'
import './CoinList.css'

function CoinList({ data }) {
  return (
    <div className="coin-list-container">
      {data.map((coin) => (
        <CoinTile
          key={coin.CoinInfo?.Id}
          symbol={coin.CoinInfo?.Name ?? coin.CoinInfo?.Internal}
          name={coin.CoinInfo?.FullName}
          price={coin.DISPLAY?.USD?.PRICE}
          image={`${MEDIA_URL}${coin.CoinInfo?.ImageUrl}`}
        />
      ))}
    </div>
  )
}

export default CoinList
