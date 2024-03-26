import React from 'react'
import ServiceList from '../components/ServicesComponents/ServiceList'
import alloyWheelMainPic from '../images/alloy_wheel_ref_pic.JPG'
import diamondCuttingMainPic from '../images/diamond_cutting_main_pic.jpg'
import colourChanges2 from '../images/colour_change2.jpeg'
import customColoursVideo from '../images/custom_colours_video.mp4'
import brakeCaliperMain from '../images/brake_caliper_main_pic.jpg'
import SlideShow from '../components/ServicesComponents/SlideShow'

const ServicesContainer = () => {

  const serviceData = [

    {
      id: 4,
      name: 'Alloy Wheel Refurbishment',
      media: alloyWheelMainPic,
      alt: 'Alloy Wheel Refurbishment',
      path: '/alloy-wheel-refurbishment',
      type: 'image'

    },

    {
      id: 1,
      name: 'Brake Caliper Resprays',
      media: brakeCaliperMain,
      alt: 'Brake Caliper Resprays',
      path: '/brake-caliper-resprays',
      type: 'image'
    },
    {
      id: 2,
      name: 'Colour Changes',
      media: colourChanges2,
      alt: 'Colour Changes',
      path: '/colour-changes',
      type: 'image'

    },
    {
      id: 5,
      name: 'Custom Colours',
      media: customColoursVideo,
      alt: 'Custom Colours',
      path: '/custom-colours',
      type: 'video'
    },
    {
      id: 3,
      name: 'Diamond Cutting',
      media: diamondCuttingMainPic,
      alt: 'Diamond Cutting',
      path: '/diamond-cutting',
      type: 'image'
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