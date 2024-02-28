import React from 'react'

const ServiceItem = ({ service }) => {

  return (

    <div className='service-list-item'>
    <div className='service-ad'>
    <img src={service.image} alt={service.name}/>
    <h3>{service.name}</h3>
    <button className='find-out-more'>Find out more</button>
    </div>
    </div>
  )
}

export default ServiceItem