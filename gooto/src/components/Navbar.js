import React from 'react';
import './Navbar.css';
import logo from '../images/logo.png';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div><a href='#'><img className='logo' src={logo} alt='logo'/></a></div>
      <ul className="nav-links">
        <li><a href="#">Destination</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Pricing</a></li>
      </ul>
      <div className="auth-buttons">
      <button type="button" className="btn btn-light">Log In</button>
      <button type="button" className="btn btn-dark">Sign Up</button>

      </div>
    </nav>
  );
};

export default Navbar;
