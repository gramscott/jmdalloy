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
    <table className='table'>
    <h3>
    Opening Hours
    </h3>
    </table>
    </div>
    </div>



    

  )
}

export default ContactDetails