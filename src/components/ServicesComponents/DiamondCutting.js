import React from 'react'
import diamondCuttingPlaceholder from '../../images/alloy_diamond_cutting_placeholder.jpeg'

const DiamondCutting = () => {
  return (
    <div className='service-ad'>
    <img src={diamondCuttingPlaceholder} alt='Diamond Cutting'
    style = {{width: '70%', height: 'auto', borderRadius: '10px'}}/>
    <h3>
    Diamond Cutting
    </h3>

    <button>Find out more</button>
    </div>
  )
}

export default DiamondCutting