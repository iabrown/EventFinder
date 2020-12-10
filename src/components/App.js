import React from 'react';
// import axios from 'axios';
import passport from 'passport-bnet';
import SearchBar from './SearchBar';
import EventList from './EventList';

class App extends React.Component {
  onSearchSubmit(term){
    // axios.get('https://api.meetup.com/find/upcoming_events',{
    //
    // });
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
