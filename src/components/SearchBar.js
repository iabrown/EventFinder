import '../css/AppStylesheet.css';
import React from 'react';

class SearchBar extends React.Component{
  onInputChange(event){
    console.log(event.target.value)
  }
  render(){
    return(
     <div className="container-fluid SearchBar">
      <form>
      <label> Event Search...</label>
      <input type="text" onChange={this.onInputChange}/>
      </form>
     </div>
   );
  }
}

export default SearchBar;
