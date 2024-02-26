import React from 'react'
import colourChangesMainPic from '../../images/colour_change_main_pic.jpg'

const ColourChanges = () => {
  return (
    <div className='service-ad'>
      <img src={colourChangesMainPic} alt='Colour Changes' />

      <h3>Colour Changes</h3>
      <button>Find out more</button>
    </div>
  )
}

export default ColourChanges