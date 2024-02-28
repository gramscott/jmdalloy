import React from 'react'
import { useNavigate } from 'react-router-dom';

const ServiceItem = ({ service }) => {
  let navigate = useNavigate();

  const handleFindOutMore = (path) => {
    navigate(path)
  };

  return (

    <div className='service-list-item'>
    <div className='service-ad'>
    <img src={service.image} alt={service.name}/>
    <h3>{service.name}</h3>
    <button className='find-out-more' onClick={() => handleFindOutMore(service.path)}>Find out more</button>
    </div>
    </div>
  )
}

export default ServiceItem