# Frontend Interview

Using API for Crypto Currency Data from: [CryptoCompare](https://min-api.cryptocompare.com/).

### Please complete the following tasks:


## TASK_1: Fetch data from an API
 1. Edit `src/pages/CoinTopList/index.js` accordingly to fetch the Top Coin list from CryptoCompare, feel free to use `fetch`, `axios` or any other library.
 2. Uncomment `CoinList` component and set `data` property
 3. Edit `src/pages/CoinDetail/index.js` accordingly to fetch the Coin detail from CryptoCompare, feel free to use `fetch`, `axios` or any other library.
 4. Please review the file `src/shared/api.js` for more API information, there's some placeholder code inside.

## TASK_2: Style coin list to be responsive & add missing styles to CoinTile component
 1. Edit `src/components/CoinList/CoinList.css` to match the designs
 2. Edit `src/components/PageTitle/PageTitle.css` to match the designs
 3. Use Grid or Flexbox to make the list & title responsive as shown on the images
 4. Add missing styles to the `src/components/CoinTile/CoinTile.css`

### Desktop:
![Alt text](src/assets/DesktopView.png?raw=true "Desktop")

### Mobile:
![Alt text](src/assets/MobileView.png?raw=true "Mobile")

## TASK_3: Implement a simple search input
 1. Uncomment `InputSearch` component inside `src/pages/CoinTopList/index.js`
 2. Add the proper code to filter the the current list, it should be only local, don't worry about filtering using the API

## EXTRA_TASK: Allow the user to select the page size for the API call
  1. Add 3 buttons at the bottom that will represent the API call page size
  2. Can be any value, we suggest `20, 50, 100`
  3. Refresh the coin list every time the user press one of this buttons