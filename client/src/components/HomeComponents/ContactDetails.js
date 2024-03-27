import React from 'react'
import './ContactDetails.css'
import { Telephone, Instagram, Facebook, GeoAlt } from 'react-bootstrap-icons'
import { FaEnvelope } from 'react-icons/fa'; 
const ContactDetails = () => {
  return (
    <div className='contact-wrapper'>
      <div className='contact-section'>
        <h3>Contact Details</h3>
        <div className='contact-item'>
       <b>
      <Telephone size={25} className='icon-spacing' />
      <a href="tel:+07900382953">07900382953</a>
      </b>
      </div>
        <div className='contact-item'>
          <b>
            <a href="mailto:jmdalloyrepairs@gmail.com">
              <FaEnvelope size={25} className='icon-spacing'/>jmdalloyrepairs@gmail.com
            </a>
          </b>
        </div>
        <div className='contact-item'>
          <b>
            <Instagram size={25} className='icon-spacing' /><a href="https://www.instagram.com/jmdalloys/">Instagram Page</a>
          </b>
        </div>
        <div className='contact-item'>
          <b>
            <Facebook size={25} className='icon-spacing' /><a href='https://www.facebook.com/profile.php?id=100087670551689'>Facebook Page</a>
          </b>
        </div>
      </div>
      
      <div className='contact-section'>
        <h3>Opening Hours/Location</h3>
        <div className='contact-item'>
        <b>
          <GeoAlt size={25} className='icon-spacing' /><a
           href="https://www.google.com/maps/place/178+Hyndford+Rd,+Lanark+ML11+9BH/@55.6671518,-3.7564874,17z/data=!3m1!4b1!4m6!3m5!1s0x48880ee881db889f:0x4fc60d146f023541!8m2!3d55.6671518!4d-3.7564874!16s%2Fg%2F11crvydy8h?entry=ttu">178 Hyndford Road, Lanark, ML11 9BH</a>
</b>
        </div>
        <div className='contact-item'>
          <b>Monday-Friday: 08:30 - 17:00</b>
        </div>
        <div className='contact-item'>
          <b>Saturday-Sunday: Closed</b>
        </div>
      </div>

    </div>
  )
}

export default ContactDetails
