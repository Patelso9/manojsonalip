import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const coupleInitals = "M & S"

export class Nav extends Component {
  render() {
    return <div>
      <div className='nav-bar'>

      <div className='couple-name'>
        <h1>{coupleInitals}</h1>
      </div>

      <div className='nav-items'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/events">Wedding Details</NavLink>
        <NavLink to="/pics">Pictures</NavLink>
        <NavLink to="/registry">Registry</NavLink>
        <NavLink to="/about">About us</NavLink>
     </div>

     </div>

    </div>;
  }
}

export default Nav;
