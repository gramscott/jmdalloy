import React from 'react'
import './ContactDetails.css'
import { Telephone, Envelope } from 'react-bootstrap-icons'

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
    <Envelope size={25} className='icon-spacing'/>
    jmdalloyrepairs@gmail.com
    </b>
     </div>
     </div>

     <div className='address-wrapper'>
    <ul className='address'>
     <li>
     178 hyndford road,
     </li>
    <li>
    ML11 9BH,
    </li>
    <li>
    Lanark
    </li>
     </ul>
    </div>
    <div>

    <div className='table-container'>
  <h3 className='opening-hours'>Opening Hours</h3>
  <div className="hours-grid">
    <div>
      <p>Monday</p>
      <p>08:30 - 17:00</p>
      <p>Tuesday</p>
      <p>08:30 - 17:00</p>
      <p>Wednesday</p>
      <p>08:30 - 17:00</p>
    </div>
    <div>
      <p>Thursday</p>
      <p>08:30 - 17:00</p>
      <p>Friday</p>
      <p>08:30 - 17:00</p>
        <p>Saturday</p>
        <p>Closed</p>
        <p>Sunday</p>
        <p>Closed</p>
    </div>
  </div>
</div>
</div>
    </div>

  )
}

export default ContactDetails