import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

const groom = "Manoj"
const bride = "Sonli"

export class Nav extends PureComponent {
  render() {
    return <div>
      <div className='nav-bar'>

      <div className='couple-name'>
        <h1>{groom} + {bride}</h1>
      </div>

      <div className='nav-items'>
        <NavLink to="/">Home</NavLink>
        {/* <NavLink to="/events">Wedding Details</NavLink>
        <NavLink to="/social">Pictures</NavLink>
        <NavLink to="/registry">Registry</NavLink>
        <NavLink to="/about">About us</NavLink> */}
     </div>

     </div>

    </div>;
  }
}

export default Nav;
