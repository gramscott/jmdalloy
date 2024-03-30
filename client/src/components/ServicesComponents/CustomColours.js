import React, { useRef, forwardRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NextPageServiceStyles.css';
import customColoursVideo from '../../images/custom_colours_video.mp4';


const CustomColours = forwardRef((props, ref) => {


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
    <div {...settings} ref={sliderRef}>
    <video src={customColoursVideo} autoPlay loop muted playsInline ref={ref}/>
    {/* <Slider className="next-page-service-slides">
        <video src={customColoursVideo} autoPlay loop muted />
    </Slider> */}
    </div>

    {/* <div className="button-navigation">
    <button className="prev-button" onClick={goToPrevSlide}>Previous</button>
    <button className="next-button" onClick={goToNextSlide} >Next</button> */}
    {/* </div> */}


    <div className="next-page-service-info-container">
        <h2>Custom Colours</h2>
        <p>
        <strong>Custom colour</strong> is a great way to make your <strong>car stand out</strong> from the rest!
        </p>
        <p className='pb-4'>
        We offer a range of <strong>candy and flip paints</strong> that can be tailored to your <strong>individual style and preference</strong>.
        </p>
        <a href='/Jmd_Alloy' className='home-button'>Home</a>
        </div>

    
    </div>

  ) 
})

export default CustomColours