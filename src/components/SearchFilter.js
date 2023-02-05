const SearchFilter = (props) => {
  return(
    <div>
      Search: <input value={props.searchValue} onChange={props.handleInput}/>
    </div>
  )
}

export default SearchFilter;