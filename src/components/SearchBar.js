import '../css/AppStylesheet.css';
import React from 'react';

class SearchBar extends React.Component{
  state = {term: ''};

  onFormSubmit = (event) => {
    event.preventDefault();

  this.props.SearchSubmit(this.state.term)
  }

  render(){
    return(
     <div className="container-fluid SearchBar">
      <form onSubmit={this.onFormSubmit} autocomplete="off">
      <input type="text" id="SearchBar" value={this.state.term} onChange={e => this.setState({term: e.target.value})} placeholder="Event Search..."/>
      </form>
     </div>
   );
  }
}

export default SearchBar;
