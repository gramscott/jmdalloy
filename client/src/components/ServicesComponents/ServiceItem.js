import React from 'react'
import { useNavigate } from 'react-router-dom';

const ServiceItem = ({ service, isMobile }) => {
  let navigate = useNavigate();


  const handleFindOutMore = (path) => {
    navigate(path)
  };

  
  return (
    <div className='service-list-item'>
      <div className='service-ad'>
        {service.type === 'image' ? (
          <img src={service.media} alt={service.alt} />
        ) : (
          <video
            src={service.media}
            alt={service.alt}
            loop
            muted
            autoPlay={!isMobile}
          />
        )}
        <h4>{service.name}</h4>
        <button
          className='find-out-more'
          onClick={() => handleFindOutMore(service.path)}
        >
          Find out more
        </button>
      </div>
    </div>
  );
};


export default ServiceItem