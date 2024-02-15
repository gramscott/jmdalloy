import React from 'react'
import './ContactDetails.css'
import { Telephone, Envelope, Instagram, Facebook } from 'react-bootstrap-icons'

const ContactDetails = () => {
  return (
    <div>

    <div className='contact-wrapper'>

    <div className='contacts'>
    <b>
    <Telephone size={25} />
    07900382953
    </b>

    <b>
    <a href="mailto:jmdalloyrepairs@gmail.com">
    <Envelope size={25} className='icon-spacing'/>
    jmdalloyrepairs@gmail.com </a>
    </b>

    <b>
    <Instagram size={25} className='icon-spacing' />
    <a href="https://www.instagram.com/jmdalloys/">Instagram Page</a>
    </b>

    <b>
      <Facebook size={25} className='icon-spacing' />
      <a href='https://www.facebook.com/profile.php?id=100087670551689'>Facebook Page</a>
    </b>

    <a href="https://www.google.com/maps/place/178+Hyndford+Rd,+Lanark+ML11+9BH/@55.6671518,-3.7564874,17z/data=!3m1!4b1!4m6!3m5!1s0x48880ee881db889f:0x4fc60d146f023541!8m2!3d55.6671518!4d-3.7564874!16s%2Fg%2F11crvydy8h?entry=ttu"> <b>178 Hyndford Road, ML11 9BH, Lanark</b></a>
     </div>
     </div>
      <div className='opening-hours-container'>

    <div className='table-container'>
  <h3 className='opening-hours'>Opening Hours</h3>
  <div className="hours-grid">
  <div>
    <div className="day">
        <p>Monday: 08:30 - 17:00</p>
    </div>
    <div className="day">
        <p>Tuesday: 08:30 - 17:00</p>
    </div>
    <div class="day">
        <p>Wednesday: 08:30 - 17:00</p>
    </div>
    </div>
    <div >
    <div className="day">
        <p>Thursday: 08:30 - 17:00</p>
    </div>
    <div className="day">
        <p>Friday: 08:30 - 17:00</p>
    </div>
    <div className="day">
        <p>Saturday: Closed</p>
    </div>
    </div>
    <div>
    <div className="day">
        <p>Sunday: Closed</p>
    </div>

    </div>
    </div>
    </div>
    </div>
    </div>
  

  )
}

export default ContactDetails