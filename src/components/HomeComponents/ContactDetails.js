import React from 'react'
import './ContactDetails.css'
import { Telephone, Envelope } from 'react-bootstrap-icons'

const ContactDetails = () => {
  return (
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
  )
}

export default ContactDetails