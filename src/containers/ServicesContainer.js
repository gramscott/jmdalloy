import React from 'react'
import ServiceList from '../components/ServicesComponents/ServiceList'
import { Element } from 'react-scroll';

const ServicesContainer = () => {

  return (

    <Element name='services'>
    <ServiceList/>
    </Element>

  )
}

export default ServicesContainer