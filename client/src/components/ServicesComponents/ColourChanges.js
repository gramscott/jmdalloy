import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NextPageServiceStyles.css';
import colourChanges2 from '../../images/colour_change2.jpeg';
import colourChange3 from '../../images/colour_change3.jpg';

const ColourChanges = () => {

  
  const sliderRef = useRef(null); 
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    afterChange: (current) => setCurrentSlide(current),
    onInit: () => {
      if (sliderRef.current) {
          setSlideCount(sliderRef.current.props.children.length);
      }
  }
};

const goToNextSlide = () => {
  if (sliderRef.current) { 
    sliderRef.current.slickNext();
  }
};

const goToPrevSlide = () => {
  if (sliderRef.current) { 
    sliderRef.current.slickPrev();
  }
};

  return (

    <div className='next-page-service-container'>
    <Slider {...settings} ref={sliderRef}>
    <div className="next-page-service-slides">
        <img src={colourChanges2} alt='Colour Change 2' />
      </div> 
      <div className="next-page-service-slides">
        <img src={colourChange3} alt='Colour Change 3' /> 
      </div>
     
      </Slider>
      <div className="button-navigation">
        {currentSlide > 0 && (
          <button className="prev-button" onClick={goToPrevSlide}>Previous</button>
        )}
        {currentSlide < slideCount - 1 && (
          <button className="next-button" onClick={goToNextSlide}>Next</button>
        )}
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