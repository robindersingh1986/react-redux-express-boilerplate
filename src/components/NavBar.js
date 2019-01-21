import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/index.scss';

class NavBar extends Component {
  render() {
    return ( <div className='NavBar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/counter'>Counter</NavLink>
    </div>
    );
  }
}

export default NavBar;
