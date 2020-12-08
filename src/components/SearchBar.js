import '../css/AppStylesheet.css';
import React from 'react';

class SearchBar extends React.Component{
  state = {term: ''};


  render(){
    return(
     <div className="container-fluid SearchBar">
      <form onSubmit={this.onInputChange}>
      <label> Event Search...</label>
      <input type="text" id="SearchBar" value={this.state.term} onChange={e => this.setState({term: e.target.value})} />
      </form>
     </div>
   );
  }
}

export default SearchBar;
