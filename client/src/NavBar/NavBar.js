import React, { useState } from 'react';
import './NavBar.css';
import logo from '../images/JMD_Alloys_logo.jpg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
    console.log('Is nav expanded:', !isNavExpanded); 
  };

  const handleNavLinkClick = () => {
    setIsNavExpanded(false);
  };

  return (
    <nav className="nav navbar-expand-lg">
      <div className="container-fluid">
        <button className='burger' onClick={toggleNav} aria-label={isNavExpanded ? "Close Menu" : "Open Menu"}>
          {isNavExpanded ? <FaTimes color='black' /> : <FaBars color='black'/>}
        </button>

        <div className="logo-container">
          <a className="navbar-brand logo">
            <img src={logo} alt="logo" className="logo active" />
          </a>
        </div>

        <div className={`nav-menu ${isNavExpanded ? 'nav-menu-expanded' : ''}`}>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className='nav-link active' to="home" spy={true} smooth={true} offset={-1020} duration={1000} onClick={handleNavLinkClick}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="services" className='nav-link active' spy={true} smooth={true} offset={-100} duration={1000} onClick={handleNavLinkClick}>Services</Link>
            </li>
            <li className="nav-item">
              <Link to="quote" className='nav-link active' spy={true} smooth={true} offset={-600} duration={1000} onClick={handleNavLinkClick}>Quote</Link>
            </li>
            <li className="nav-item">
              <Link to='testimonials' className="nav-link active"  spy={true} smooth={true} offset={-550} duration={1000} onClick={handleNavLinkClick}>Testimonials</Link>
            </li>
            <li className="nav-item">
              <Link to='faq' className="nav-link active"  spy={true} smooth={true} offset={-70} duration={1000}onClick={handleNavLinkClick}>Frequently Asked Questions</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
