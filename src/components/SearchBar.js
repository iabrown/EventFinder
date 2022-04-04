import '../css/AppStylesheet.css';
import React from 'react';

const SearchBar = (props) => {

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.SearchSubmit();
  }


  return(
    <div className="container-fluid SearchBar">
     <form onSubmit={onFormSubmit} autoComplete="off">
     <input type="text" id="SearchBar" value={props.term} onChange={props.setTerm} placeholder="Event Search..."/>
     </form>
    </div>
  )
}

export default SearchBar;
