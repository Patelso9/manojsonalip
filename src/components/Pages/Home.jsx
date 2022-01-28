import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import cover from '../img/prop_announcement_hor.JPG'
import footerImg from '../img/prop_skyline_hor.jpg'

var groom = "Manoj Padmanabhan";
var bride = "Sonali Patel"
var weddingDate = "6.27.2023"
var weddingVenue = "Suburban Showplace"

export class Home extends Component {
  render() {
    return <div>

      <Nav />

      <img src={cover} alt="our faces proposal" style= {{ width: "100%" }} />


      <div className='welcome-details'>
        <h1></h1>
        <h2>Welcome to our wedding website!</h2>
        <h2>{groom} weds {bride}</h2>
        <p>on</p>
        <h2>{weddingDate}</h2>
        <p>at</p>
        <h2> {weddingVenue}</h2>        


      </div>

      <img src={footerImg} alt="our faces proposal" style= {{ width: "100%" }} />

    </div>;
  }
}

export default Home;
