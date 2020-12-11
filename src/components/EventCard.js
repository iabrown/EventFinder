import React from 'react';

class EventCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      spans: 0,
      imageNumber:(Math.floor(Math.random()*8)+1)
    };

    this.imageRef = React.createRef();
  }

  componentDidMount(){
    this.imageRef.current.addEventListener('load', this.setSpans);

  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 15);

    this.setState({spans});
  };

//Function to generate a random number and update the state of Image Number, logic is hardcoded above in constructor for state.
  // randNumb = ()=> {
  //   const randNumb = Math.floor(Math.random()*8)+1;
  //   this.setState({imageNumber:randNumb});
  // };



  render(){
    return(
      <div className="EventCard" style={{gridRowEnd:`span ${this.state.spans}`}}>
        <img alt="car"  ref={this.imageRef} src={"images/image" + this.state.imageNumber + ".jpg"}/>
        <br />
        <h1>Event Title</h1>
        <p>Date: 12/10/2020</p>
        <p>Cost: $2,000</p>
        <p>Platform: Eventbrite</p>
      </div>

    );
  }
}

export default EventCard;
