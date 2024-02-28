import ServiceItem from './ServiceItem'
import './ServiceList.css'

const ServiceList = ( {serviceData }) => {

  return (

    <div className='service-container'>
    <h2>Our Services</h2>
    <div className='service-list'>
    {serviceData.map(service => (
      <ServiceItem key={service.id} service={service} />
    ))}
    </div>
    </div>
    );
};

export default ServiceList;