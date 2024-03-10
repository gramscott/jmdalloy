import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ColourChanges.css';
import './GeneralNextPageStyles.css';
import colourChangesMainPic from '../../images/colour_change_main_pic.jpg';
import colourChanges2 from '../../images/colour_change2.jpg';

const ColourChanges = () => {

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
        <img src={colourChanges2} alt='Colour Change 2' />
      </div>
      <div className='next-page-pics'>
        <img src={colourChangesMainPic} alt='Colour Change' />
      </div>

      </Slider>

      <div className='mt-5 colour-changes-container'>
        <h2>Colour Changes</h2>
        <p className='colour-changes-description'>We provide an <strong>alloy wheel colour change service</strong> that can <strong>completely transform</strong> the look of your alloys. <strong>Rather than investing in a new set of alloys</strong>, transform your current ones with a respray and give them a <strong>new lease of life</strong>.</p>
        <hr>
        </hr>
        <a href='/' className='home-button'>Home</a>
        </div>
    </div>





  )
}

export default ColourChanges