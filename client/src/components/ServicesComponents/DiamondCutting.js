import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NextPageServiceStyles.css';
import diamondCuttingMainPic from '../../images/diamond_cutting_main_pic.jpg';
import diamondCutting2 from '../../images/diamond_cutting2.jpg';
import diamondCutting3 from '../../images/diamond_cutting3.jpg';
import diamondCutting4 from '../../images/diamond_cutting4.jpeg';

const DiamondCutting = () => {

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
        <img src={diamondCuttingMainPic} alt='Diamond Cutting' />
     </div>
     <div className="next-page-service-slides">
            <img src={diamondCutting2} alt='Diamond Cutting 2' />
        </div>
        <div className="next-page-service-slides">
            <img src={diamondCutting3} alt='Diamond Cutting 3' />
        </div>
        <div className="next-page-service-slides">
            <img src={diamondCutting4} alt='Diamond Cutting 4' />
        </div>
        </Slider>
        <div className="button-navigation">
    <button className="prev-button" onClick={goToPrevSlide}>Previous</button>
    <button className="next-button" onClick={goToNextSlide} >Next</button>
    </div>
    <div className="next-page-service-info-container">
            <h2>Diamond Cutting</h2>
            <p><strong>Diamond cut alloys</strong> are cut in our cnc lathe to the <strong>highest standard</strong> keeping the original equipment manufacturer <strong>(OEM) </strong> profile with <strong>no sharp edges</strong>.
            </p>
            <p className='pb-4'>
            An <strong>anti corrosive lacquer</strong> is applied followed by a <strong>high quality clear coat</strong> to preserve your alloys for longer.</p>
            <a href='/' className='home-button'>Home</a>
            </div>
    </div>
  )
}

export default DiamondCutting