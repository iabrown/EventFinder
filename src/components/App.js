import React from 'react';
import SearchBar from './SearchBar';
import EventList from './EventList';
import Footer from './Footer';

class App extends React.Component {
  onSearchSubmit(term){
  }

  render(){
    return(
      <div className="container-fluid" style={{padding:'0px'}}>
      <SearchBar SearchSubmit={this.onSearchSubmit}/>
      <EventList />

      <Footer />
      </div>
    );
  }
}

export default App;
