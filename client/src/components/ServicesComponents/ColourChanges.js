import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NextPageServiceStyles.css';
import colourChangesMainPic from '../../images/colour_change_main_pic.jpg';
import colourChanges2 from '../../images/colour_change2.jpg';

const ColourChanges = () => {

  const sliderRef = useRef(null); 

  const settings = {
    dots: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext(); 
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };
  

  return (

    <div className='next-page-service-container'>
    <Slider {...settings} ref={sliderRef}>
    <div className="next-page-service-slides">
        <img src={colourChanges2} alt='Colour Change 2' />
      </div>
      <div className="next-page-service-slides">
        <img src={colourChangesMainPic} alt='Colour Change' />
      </div>

      </Slider>
      <div className="button-navigation">
    <button className="prev-button" onClick={goToPrevSlide}>Previous</button>
    <button className="next-button" onClick={goToNextSlide} >Next</button>
    </div>

    <div className="next-page-service-info-container">
        <h2>Colour Changes</h2>
        <p className='pb-4'>We provide an <strong>alloy wheel colour change service</strong> that can <strong>completely transform</strong> the look of your alloys. <strong>Rather than investing in a new set of alloys</strong>, transform your current ones with a respray and give them a <strong>new lease of life</strong>.</p>
        <a href='/' className='home-button'>Home</a>
        </div>
    </div>





  )
}

export default ColourChanges