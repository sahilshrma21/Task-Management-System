<<<<<<< HEAD
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Style/Navbar.css';
=======
import React from 'react'
import logo from '../assets/logo.avif'
import '../Style/Navbar.css'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 11d2534 (with login page)
=======
>>>>>>> 11d2534 (with login page)
=======
>>>>>>> 11d2534 (with login page)
=======
>>>>>>> 11d2534 (with login page)

function Navbar() {
  return (
    <div className='navbar'>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <NavLink className='logo' to="/">TMS</NavLink>
      <div className='nav-buttons'>
        <button className='nav-button'>
          <NavLink className='nav-link' to="/login">Login</NavLink>
        </button>
        <button className='nav-button register'>
          <NavLink className='nav-link' to="/register">Register</NavLink>
        </button>
      </div>
=======
      <img src={logo} alt='' className='navbar-logo '/>
      <button className='logout-btn'>Logout</button>
>>>>>>> 11d2534 (with login page)
=======
      <img src={logo} alt='' className='navbar-logo '/>
      <button className='logout-btn'>Logout</button>
>>>>>>> 11d2534 (with login page)
=======
      <img src={logo} alt='' className='navbar-logo '/>
      <button className='logout-btn'>Logout</button>
>>>>>>> 11d2534 (with login page)
=======
      <img src={logo} alt='' className='navbar-logo '/>
      <button className='logout-btn'>Logout</button>
>>>>>>> 11d2534 (with login page)
    </div>
  );
}

export default Navbar;
