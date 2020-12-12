import React from 'react';

class Footer extends React.Component{
  constructor(){
    super();
    this.state = {
      year:"2020"
    }
  }




  render(){
    return(
      <div className="container-fluid Footer">
      <h1>Copyright &copy; {this.state.year} IAB Designs LLC. Theme designed by Bengs One</h1>
      <p> Connect on Instagram & Twitter: @Bengs_one</p>

      </div>
    );
  }
}

export default Footer;
