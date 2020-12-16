import React from 'react';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import SearchBar from './SearchBar';
import EventList from './EventList';
import Footer from './Footer';

class App extends React.Component {
  onSearchSubmit(term){
  }

  render(){
    return(
      <div className="container-fluid Main" style={{padding:'0px'}}>
      <ReactScrollWheelHandler  upHandler={(e)=>console.log("scroll up")} downHandler={(e)=>console.log("scroll down")}>

        <SearchBar SearchSubmit={this.onSearchSubmit}/>
        <EventList/>

      </ReactScrollWheelHandler>
      <Footer />
      </div>
    );
  }
}

export default App;
