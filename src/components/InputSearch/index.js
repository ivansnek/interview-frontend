import './InputSearch.css'
import SearchIcon  from '../../assets/search.png'

function InputSearch({ value, onChange, inputProps }) {
  return (
    <div className="input-search-wrapper">
      <img src={SearchIcon} alt="Search" className="search-icon"/>
      <input
        type="search"
        className="input-search"
        value={value}
        onChange={onChange}
        {...inputProps}
      />
    </div>
  )
}

export default InputSearch