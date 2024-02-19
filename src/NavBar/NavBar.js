import React, { useState} from 'react';
import './NavBar.css';
import logo from '../images/JMD_Alloys_logo.jpg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

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
          <ScrollLink to="/" spy={true} smooth={true} duration={500} className="nav-link active">Home</ScrollLink>
        </li>
        <li className="nav-item">
        <ScrollLink to="services"  smooth={true} duration={500} className="nav-link active" >Services</ScrollLink>
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
