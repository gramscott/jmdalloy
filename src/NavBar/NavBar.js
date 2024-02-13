import React from 'react';
import './NavBar.css';
import logo from '../images/JMD Alloys.jpeg';

const NavBar = () => {
  return (
    <nav className="navbar-expand-lg navy">
      <div className="logo-container">
        <a href="/" className="navbar-brand">
          <img src={logo} alt="logo" className="logo active"/>
        </a>
      </div>

      <ul className="nav">
      <li className="nav-item">
      <a className="nav-link active" href="/services">Services</a>
      </li>
      <li className="nav-item">
        <a className='nav-link active' href='/get-a-quote'>Get a Quote</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/about-josh">About Josh</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/faq">Frequently Asked Questions</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/terms-conditions">Terms & Conditions</a>
        </li>
      </ul>

      </nav>

  );
};

export default NavBar;
