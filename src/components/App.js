import React from 'react';
import unsplash from '../api/unsplash';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import SearchBar from './SearchBar';
import EventList from './EventList';
import Footer from './Footer';

class App extends React.Component {
  state = { images: [] };



  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };


  render(){
    return(
      <div className="container-fluid Main" style={{padding:'0px'}}>
      <ReactScrollWheelHandler  upHandler={(e)=>console.log("scroll up")} downHandler={(e)=>console.log("scroll down")}>

        <SearchBar SearchSubmit={this.onSearchSubmit}/>
        <EventList images={this.state.images}/>

      </ReactScrollWheelHandler>
      <Footer />
      </div>
    );
  }
}

export default App;
