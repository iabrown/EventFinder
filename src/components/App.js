import React from 'react';
import Axios from 'Axios';
import SearchBar from './SearchBar';
import EventList from './EventList';

class App extends React.Component {
  onSearchSubmit(term){
    console.log(term);
  }

  render(){
    return(
      <div>
      <SearchBar SearchSubmit={this.onSearchSubmit}/>
      <EventList />

      </div>
    );
  }
}

export default App;
