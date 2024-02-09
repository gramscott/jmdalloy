import React from 'react';
import './NavBar.css'; 
import logo from '../images/JMD Alloys.jpeg';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid flex-column align-items-center align-items-lg-start">
        <a href="/" className="navbar-brand mb-3 mb-lg-0">
          <img src={logo} alt="logo" className="logo"/>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a to="/services" className="nav-link">Services</a>
            </li>
            <li className="nav-item">
              <a to="/contact" className="nav-link">Contact</a>
            </li>
            <li className="nav-item">
              <a to="/meet-josh" className="nav-link">Meet Josh</a>
            </li>
            <li className="nav-item">
              <a to="/faq" className="nav-link">FAQ</a>
            </li>
            <li className="nav-item">
              <a to="/terms-and-conditions" className="nav-link">Terms and conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
