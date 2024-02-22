import React from 'react'
import customColoursPlaceholder from '../../images/alloy_custom_colour_placeholder.jpeg'

const CustomColours = () => {
  return (
    <div className='service-ad'>
    <img src={customColoursPlaceholder} alt='Custom Colours' 
    style = {{width: '70%', height: 'auto', borderRadius: '10px'}}

    />

    <h3>Custom Colours</h3>
    <button>Find out more</button>
    </div>
  )
}

export default CustomColours