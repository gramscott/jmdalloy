import ServiceItem from './ServiceItem'
import './ServiceList.css'

const ServiceList = ( {serviceData, isMobile }) => {

  const halfWayIndex = Math.ceil(serviceData.length / 2);
  const firstRowServices = serviceData.slice(0, halfWayIndex);
  const secondRowServices = serviceData.slice(halfWayIndex);

  return (

    <div className='service-container'>
    <h2>Services</h2>
    <div className='service-list'>
    {firstRowServices.map(service => (
      <ServiceItem key={service.id} service={service} isMobile={isMobile} />
    ))}
    </div>
    <div className='service-list'>
    {secondRowServices.map(service => (
      <ServiceItem key={service.id} service={service} isMobile={isMobile}
      />
    ))}
    </div>
    </div>
    );
};

export default ServiceList;