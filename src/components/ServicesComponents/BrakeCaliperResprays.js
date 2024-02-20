import React from 'react'
import caliperRespraysPlaceholder from '../../images/caliperpainting_placeholder.jpeg'

const BrakeCaliperResprays = () => {
  return (
    <div className='service-ad'>
    <img src={caliperRespraysPlaceholder} alt='Brake Caliper Resprays'
    style = {{width: '70%', height: 'auto', borderRadius: '10px'}}
    />
    <h3>BrakeCaliper Resprays</h3>
    <button>Find out more</button>
    </div>
  )
}

export default BrakeCaliperResprays