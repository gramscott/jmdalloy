import React from 'react';
import { FaEnvelope } from 'react-icons/fa'; 
import './QuoteLink.css';

const QuoteLink = () => {


  

  return (
    <div className='quote-container'>
      <h2 className='quote-title'>Get Your Free Quote Today!</h2>
      <a href='mailto:jmdalloyrepairs@gmail.com' className='quote-link'>
        <FaEnvelope className='email-icon'/> 
        Click here and send us an email with your requirements! 
      </a>
      <p className='quote-instruction'>
        Josh will get back to you as soon as possible.
      </p>
    </div>
  );
}

export default QuoteLink;
