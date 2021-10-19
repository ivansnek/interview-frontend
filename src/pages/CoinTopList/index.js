import CoinList from '../../components/CoinList'
import InputSearch from '../../components/InputSearch'
import PageTitle from '../../components/PageTitle'
import * as API from '../../shared/api'

import './CoinTopList.css'

function CoinTopList() {
  // TASK_1: Fetch list data & update CoinList component
  // E.G API.getTopCoinList(limit, page)

 // TASK_3: Add the proper code to filter the current list's items by name

  return (
    <div className="list-container">
      <PageTitle label="Top Coin List" />
      {/** TASK_3: Uncomment  */}
      {/* <InputSearch value={search} onChange={handleOnChange}/> */}
      <CoinList data={[]} />
    </div>
  )
}

export default CoinTopList
