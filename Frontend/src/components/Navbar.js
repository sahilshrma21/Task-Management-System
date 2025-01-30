import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Style/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <NavLink className='logo' to="/">TMS</NavLink>
      <div className='nav-buttons'>
        <button className='nav-button'>
          <NavLink className='nav-link' to="/login">Login</NavLink>
        </button>
        <button className='nav-button register'>
          <NavLink className='nav-link' to="/register">Register</NavLink>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
