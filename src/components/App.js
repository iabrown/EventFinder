import React from 'react';
import SearchBar from './SearchBar';
import EventList from './EventList';

class App extends React.Component {

  render(){
    return(
      <div>
      <SearchBar />
      <EventList />

      </div>
    );
  }
}

export default App;
