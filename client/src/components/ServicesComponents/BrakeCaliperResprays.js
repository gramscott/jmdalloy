import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NextPageServiceStyles.css';
import brakeCaliperMain from '../../images/brake_caliper_main_pic.jpg'
import brakeCaliper2 from '../../images/brake_caliper2.jpg'
import brakeCaliper3 from '../../images/brake_caliper3.jpg'
import brakeCaliper4 from '../../images/brake_caliper4.jpg'


const BrakeCaliperResprays = () => {

  const sliderRef = useRef(null); 
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
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
            <img src={brakeCaliperMain} alt="pic-1" className="img-fluid" />
        </div>
        <div className="next-page-service-slides">
            <img src={brakeCaliper2} alt="pic-2" className="img-fluid" />
        </div>
        <div className="next-page-service-slides">
            <img src={brakeCaliper3} alt="pic-3" className="img-fluid" />
        </div>
        <div className="next-page-service-slides">
            <img src={brakeCaliper4} alt="pic-4" className="img-fluid" />
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
        <h2>Brake Caliper Resprays</h2>
        <p>We use <strong>high quality paint</strong> designed to <strong>withstand the heat from brakes</strong>. We offer a <strong>range of colours and finishes</strong> and can add <strong>decals for that final touch</strong>.</p>
        <hr>
        </hr>
        <h3>Process</h3>
        <ol className="process-list">
        <li className='process'>Calipers are cleaned and the surfaces are prepped removing any corrosion and brake dust</li>
        <li className='process'>Car, calipers and arches are masked to prevent overspray</li>
        <li className='process'>Heat resistant primer is applied followed by heat resistant paint</li>
        <li className='process'>Decals added if desired</li>
        <li className='process'>Heat resistant lacquer is applied for shine and protection</li>
        </ol>
        <a href='https://jmdalloys.co.uk' className='home-button'>Home</a>
        </div>

    </div>

  )
}

export default BrakeCaliperResprays