import React from 'react'
import ServiceList from '../components/ServicesComponents/ServiceList'
import alloyWheelMainPic from '../images/alloy_wheel_ref_pic.JPG'
import diamondCuttingMainPic from '../images/diamond_cutting_main_pic.jpg'
import colourChanges2 from '../images/colour_change2.jpg'
import brakeCaliperMain from '../images/brake_caliper_main_pic.jpg'
import SlideShow from '../components/ServicesComponents/SlideShow'

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
      image: colourChanges2,
      alt: 'Colour Changes',
      path: '/colour-changes'
    },
    {
      id: 5,
      name: 'Custom Colours',
      // image: diamondCuttingMainPic,
      alt: 'Custom Colours',
      path: '/custom-colours'
    },
    {
      id: 3,
      name: 'Diamond Cutting',
      image: diamondCuttingMainPic,
      alt: 'Diamond Cutting',
      path: '/diamond-cutting'
    }
  
    
  ];

  const slideshowData = [

    {
      id: 1,
      image: diamondCuttingMainPic,
      alt: 'Diamond Cutting',
    },

    {
      id: 2,
      image: brakeCaliperMain,
      alt: 'Brake Caliper Resprays',
    },

    {
      id: 3,
      image: colourChanges2,
      alt: 'Colour Changes',
    },

    {
      id: 4,
      image: alloyWheelMainPic,
      alt: 'Alloy Wheel Refurbishment',
    }
  ]


  return (

    <div name='services'>
    <ServiceList  serviceData={serviceData}/>
    <SlideShow slideshowData={slideshowData}/>
    </div>

  )
}

export default ServicesContainer