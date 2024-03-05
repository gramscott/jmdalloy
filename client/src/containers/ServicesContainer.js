import React from 'react'
import ServiceList from '../components/ServicesComponents/ServiceList'
import { Element } from 'react-scroll';
import alloyWheelMainPic from '../images/alloy_wheel_ref_pic.JPG'
import diamondCuttingMainPic from '../images/diamond_cutting_main_pic.jpg'
import colourChangesMainPic from '../images/colour_change_main_pic.jpg'
import brakeCaliperMain from '../images/brake_caliper_main_pic.jpg'

const ServicesContainer = () => {

  const serviceData = [

    {
      id: 4,
      name: 'Alloy Wheel Refurbishment',
      image: alloyWheelMainPic,
      alt: 'Alloy Wheel Refurbishment',
      path: '/alloy-wheel-refurbishment'
    },

    {
      id: 1,
      name: 'Brake Caliper Resprays',
      image: brakeCaliperMain,
      alt: 'Brake Caliper Resprays',
      path: '/brake-caliper-resprays'
    },
    {
      id: 2,
      name: 'Colour Changes',
      image: colourChangesMainPic,
      alt: 'Colour Changes',
      path: '/colour-changes'
    },
    {
      id: 3,
      name: 'Diamond Cutting',
      image: diamondCuttingMainPic,
      alt: 'Diamond Cutting'
    }
    
  ];


  return (

    <Element name='services'>
    <ServiceList  serviceData={serviceData}/>
    </Element>

  )
}

export default ServicesContainer