import { API_KEY, API_URL } from './constants'

/**
 * Helper function that return a valid `CryptoCompare` API Url, along with query params
 * @param {*} path API path
 * @param {*} params Object containing the desired Query params
 * @returns String Well formed API url
 */
const getAPIURL = (path, params) => {
  const _params = {
    ...params,
    api_key: API_KEY,
  }
  const queryString = Object.keys(_params).map(key => key + '=' + _params[key]).join('&');
  return `${API_URL}${path}?${queryString}`
}

const topCoinPath = '/data/top/totalvolfull'
/**
 * RESPONSE:
 * {
 *    Message: String,
 *    Count: Number,
 *    Data: Array[
 *      {
 *        CoinInfo: {
 *          Id: String,
 *          Name: String,
 *          FullName: String,
 *          Internal: String,
 *          ImageUrl: String,
 *          Url: String,
 *          Algorithm: String
 *          ProofType: String,
 *          MaxSupply: String,
 *          ...More
 *        }
 *      },
 *      ...More
 *    ]
 *    HasWarning: Boolean
 * }
 */
// TASK_1: Fetch data
export const getTopCoinList = (limit = 25, page = 1) => {
  const params = {
    limit,
    page,
    tsym: 'USD' // NOTE This param is required
  }
  return Promise.resolve([])
}

/**
 * RESPONSE
 * {
 *    Data: {
 *      Name: String,
 *      Symbol: String,
 *      Description: String,
 *      ImageUrl: String,
 *      AssetWebsiteUrl: String,
 *      ... More
 *   }
 * }
 */
const detailCoinPath = '/data/all/coinlist'
export const getCoinDetail = (symbol) => {
  const params = { fsym: symbol }
  return Promise.resolve({})
}
