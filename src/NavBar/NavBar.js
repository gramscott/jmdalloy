import React from 'react'
import './NavBar.css'
import logo from '../images/JMD Alloys.jpeg'

const NavBar = () => {

  return (
    
    <nav>
    <div>
    <li className='text-center'>
      <img src = {logo} alt = 'logo'/>
      </li>

 <ul>
      <li>Services</li>
      <li>Picture</li>
      <li>Contact</li>
      <li>Meet Josh</li>
      <li>FAQ</li>
      <li>Terms and conditions</li>
    </ul>
    </div>
    </nav>

  )
}

export default NavBar