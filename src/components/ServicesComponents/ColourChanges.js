import React from 'react'
import colourChangesPlaceholder from '../../images/alloy_colour_changes_placeholder.jpeg'

const ColourChanges = () => {
  return (
    <div className='service-ad'>
      <img src={colourChangesPlaceholder} alt='Colour Changes' />

      <h3>Colour Changes</h3>
      <button>Find out more</button>
    </div>
  )
}

export default ColourChanges