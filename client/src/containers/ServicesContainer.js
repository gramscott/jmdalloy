import React from 'react'
import ServiceList from '../components/ServicesComponents/ServiceList'
import alloyWheelMainPic from '../images/alloy_wheel_ref_pic.JPG'
import diamondCuttingMainPic from '../images/diamond_cutting_main_pic.jpg'
import colourChanges2 from '../images/colour_change2.jpeg'
import customColoursVideo from '../images/custom_colours_video.mp4'
import brakeCaliperMain from '../images/brake_caliper_main_pic.jpg'
import SlideShow from '../components/ServicesComponents/SlideShow'
import slideShow1 from '../images/slideshow1.jpeg'
import slideShow2 from '../images/slideshow2.jpeg'
import slideShow3 from '../images/slideshow3.jpeg'
import slideShow4 from '../images/slideshow4.jpeg'
import slideShow5 from '../images/slideshow5.jpeg'
import slideShow6 from '../images/slideshow6.jpeg'
import slideShow7 from '../images/slideshow7.jpeg'

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
      image: slideShow1,
      alt: 'slide 1'
    },
    {
      id: 2,
      image: slideShow2,
      alt: 'slide 2'
    },
    {
      id: 3,
      image: slideShow3,
      alt: 'slide 3'
    },
    {
      id: 4,
      image: slideShow4,
      alt: 'slide 4'
    },
    {
      id: 5,
      image: slideShow5,
      alt: 'slide 5'
    }, 
    {
      id: 6,
      image: slideShow6,
      alt: 'slide 6'
    },
    {
      id: 7,
      image: slideShow7,
      alt: 'slide 7'
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