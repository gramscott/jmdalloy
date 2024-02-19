import React, { useState} from 'react';
import './NavBar.css';
import logo from '../images/JMD_Alloys_logo.jpg';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navbar-expand-lg">
    <button className='burger' onClick={() => setIsNavExpanded(!isNavExpanded)}>
        {isNavExpanded ? <FaTimes /> : <FaBars />}
      </button>
      <div className="logo-container">
        <a className="navbar-brand logo">
          <img src={logo} alt="logo" className="logo active"/>
        </a>
      </div>

      
      <div className={`nav-menu ${isNavExpanded ? 'nav-menu-expanded' : ''}`}>
      <ul className="nav justify-content-center">
      <li className="nav-item">
      <a href="/" className="nav-link active" href="/">Home</a>
      </li>
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
      </div>
      </nav>

  );
};

export default NavBar;
