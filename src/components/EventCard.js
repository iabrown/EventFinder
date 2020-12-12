import React from 'react';

class EventCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      spans: 0,
      imageNumber:(Math.floor(Math.random()*8)+1),
      //uniqueID is generatoring a random ID Number, this will not be needed when using an API request for images. Returned JSON from API request will include an unique ID.
      uniqueID:(Math.floor(Math.random()*26)+1)+(Math.floor(Math.random()*36)+26)+(Math.floor(Math.random()*46)+1)
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

  cardHover = (e) => {
    const parentElement = document.querySelector('#EventCard' + this.state.uniqueID);

    if (e.target !== parentElement){
      parentElement.style.opacity="100%";
      parentElement.style.background="#141414";
      parentElement.style.transition="1.5s"
      parentElement.style.color="#ffffff";

    } else {
      e.target.style.opacity="100%";
      e.target.style.background="#141414";
      e.target.style.transition="1.5s"
      e.target.style.color="#ffffff";

    }

  }

  cardHoverOut = (e) => {
    const parentElement = document.querySelector('#EventCard' + this.state.uniqueID);

    parentElement.style.transition="0.5s"
    parentElement.style.opacity="";
    parentElement.style.background="";
    parentElement.style.color="";
    e.target.style.transition="0.5s"
    e.target.style.opacity="";
    e.target.style.background="";
    e.target.style.color="";

  }

  render(){
    return(
      <div className="EventCard" id={"EventCard" + this.state.uniqueID} style={{gridRowEnd:`span ${this.state.spans}`}} onMouseEnter={this.cardHover} onMouseLeave={this.cardHoverOut}>
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
