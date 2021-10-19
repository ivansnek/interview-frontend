import { Link, useParams } from 'react-router-dom'
import PageTitle from '../../components/PageTitle'
import { useQuery } from '../../hooks/use-query'
import * as API from '../../shared/api'
import { MEDIA_URL } from '../../shared/constants'

import './CoinDetail.css'

function CoinDetail() {
  // TASK_1: Fetch data and set it to `icon` var
  // TODO: Replace this with API DATA
  const coin = {}
  const { symbol } = useParams()

  // FETCH with API.getCoinDetail(symbol) <- Symbol come from path params

  const query = useQuery() // Grab the page title from query params

  return (
    <>
      <PageTitle label={query?.get?.('name') ?? 'No Name in query params'} showBack/>
      {coin && (
        <section className="coin-detail-wrapper">
          <img className="img-detail" src={`${MEDIA_URL}${coin?.ImageUrl}`} alt={coin.Name}/>
          <div className="coin-detail-info">
            <h4>SYMBOL: </h4>
            <p>{coin.Symbol}</p>
            <h4>Description: </h4>
            <p>{coin.Description}</p>
            <h4>Project</h4>
            <a target="_blank" href={coin.AssetWebsiteUrl}>{coin.AssetWebsiteUrl}</a>
          </div>
        </section>
      )}
    </>
  )
}

export default CoinDetail