import React from 'react'
import AlloyWheelRef from './AlloyWheelRef'
import BrakeCaliperResprays from './BrakeCaliperResprays'
import ColourChanges from './ColourChanges'
import CustomColours from './CustomColours'
import DiamondCutting from './DiamondCutting'
import './ServiceList.css'

const ServiceList = () => {

  return (
    <div className='service-container'>
    <h2>Our Services</h2>
     <div className='service-list'>
     <div className='service-list-item'>
     <AlloyWheelRef/>
     </div>
     <div className='service-list-item brake-calliper'>
     <BrakeCaliperResprays/>
     </div>
     <div className='service-list-item'>
     <ColourChanges/>
     </div>
     <div className='service-list-item'>
     <CustomColours/>
     </div>

     <div className='service-list-item'>
     <DiamondCutting/>
     </div>
     </div>
     </div>

  )
}

export default ServiceList