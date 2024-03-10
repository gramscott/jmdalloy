import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CustomColours.css';
import './GeneralNextPageStyles.css';


const CustomColours = () => {

    const slideRef = useRef(null);

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <div aria-hidden="true"></div>,
      prevArrow: <div aria-hidden="true"></div>
    };
  

  return (

    <div>
    <Slider ref={slideRef} {...settings}>
    <div className='next-page-pics'>
        <img src='https://res.cloudinary.com/dk4rjadwm/image/upload/v1631970282/colour_change_main_pic_2_ggk8qy.jpg' alt='Colour Change' />
    </div>
    </Slider>

    <div className='mt-5 custom-colours-container'>
        <h2>Custom Colours</h2>
        <p className='custom-colours-description'>
        <strong>Custom colour</strong> is a great way to make your <strong>car stand out</strong> from the rest!
        </p>
        <p className='custom-colours-description'>
        We offer a range of <strong>candy and flip paints</strong> that can be tailored to your <strong>individual style and preference</strong>.
        </p>
        <hr>
        </hr>
        <a href='/' className='home-button'>Home</a>
        </div>

    
    </div>

  )
}

export default CustomColours