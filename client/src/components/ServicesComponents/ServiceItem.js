import React, { forwardRef} from 'react'
import { useNavigate } from 'react-router-dom';

const ServiceItem = forwardRef((props, ref) => {
  const { service } = props;
  
  let navigate = useNavigate();


  const handleFindOutMore = (path) => {
    navigate(path)
  };

  return (

    <div className='service-list-item'>
    <div className='service-ad'>
    {service.type === 'image' ? 
    <img src={service.media} alt={service.alt} /> 
    : <video src={service.media} alt={service.alt} autoPlay loop muted playsInline ref={ref}/>}
    <h4>{service.name}</h4>
    <button className='find-out-more' onClick={() => handleFindOutMore(service.path)}>Find out more</button>
    </div>
    </div>
  )
})

export default ServiceItem