import React from 'react';

class EventCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      spans: 0,
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
      e.target.style.opacity="100%";
      e.target.style.background="#141414";
      e.target.style.transition="1.5s"
      e.target.style.color="#ffffff";
      e.target.style.cursor="pointer";
  }

  cardHoverOut = (e) => {
    e.target.style.transition="0.5s"
    e.target.style.opacity="";
    e.target.style.background="";
    e.target.style.color="";
  }

  render(){
    const {description, urls,id} = this.props.image;
    return(
      <div className="EventCard" id={id} style={{gridRowEnd:`span ${this.state.spans}`}} onMouseEnter={this.cardHover} onMouseLeave={this.cardHoverOut}onMouseOut={this.cardHoverOut}>
        <img alt={description}  ref={this.imageRef} src={urls.regular}/>
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
