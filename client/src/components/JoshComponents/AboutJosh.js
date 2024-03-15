import React from 'react'
import './AboutJosh.css'
import josh from '../../images/josh.jpg'

const AboutJosh = () => {
  return (
    <div className='josh-container pt-5'>
        <h2>Joshua Douglas</h2>
        <div className='content-container'>
    <img src={josh} alt='Josh pic' className='img-fluid'/>
    <div className='text-container'>
    <p className='row'>Joshua Douglas is a professional alloy wheel refurbisher with over 10 years experience in the industry. He has worked on a wide variety of vehicles, from small cars to large commercial vehicles. He has a passion for cars and takes pride in his work, ensuring that every wheel is finished to the highest standard.</p>

    <p className='row'>Joshua is based in the North East of Scotland and offers a mobile service, so he can come to you at a time and place that suits you. He is also able to offer a collection and delivery service if you would prefer to have your wheels refurbished off the vehicle.</p>
    </div>
    </div>

    </div>
  )
}

export default AboutJosh