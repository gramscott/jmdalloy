import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NextPageServiceStyles.css';
import AlloyWheelRefurbishment1 from '../../images/alloy_wheel_ref_pic.JPG';
import AlloyWheelRefurbishment3 from '../../images/alloy_wheel_ref_3.jpg';
import AlloyWheelRefurbishment4 from '../../images/alloy_wheel_ref_4.jpg';

const AlloyWheelRefurbishment = () => { 

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
           <img src={AlloyWheelRefurbishment1} alt="pic-1" className="img-fluid" />
         </div>
         <div className="next-page-service-slides">
           <img src={AlloyWheelRefurbishment3} alt="pic-2" className="img-fluid"/>
         </div>
         <div className="next-page-service-slides">
           <img src={AlloyWheelRefurbishment4} alt="pic-3" className="img-fluid" /> 
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
      <h2>Alloy Wheel Refurbishment</h2>
      <p>Alloy wheels can become damaged and weathered over time. Refurbishment can bring them back to <strong>new-like condition</strong>.</p>
      <hr>
      </hr>
      <h3>Benefits</h3>
        <ul>
        <li className='benefits'>Improve your car's appearance and value.</li>
        <li className='benefits'>Prevent heavy lease return penalties.</li>
        </ul>
         <hr>
         </hr>

      <h3>Process</h3>
       <ol className="process-list">
      <li className='process'>Tyres and wheel weights are removed.</li>
       <li className='process'>Kerb damage is removed and surfaces   are prepped for paint.</li>
      <li className='process'>Primer and base coat are applied in our spray booth (All factory wheels are spray painted using the same materials we use).</li>
       <li className='process'>Lacquer is applied to give a gloss, satin or Matt finish then baked and cured.</li>
      <li className='process'>Tyres are fitted back on the wheels then fully balanced and fitted back on the car.</li>
      </ol>
      <a href='/' className='home-button'>Home</a>
      </div>

    </div>
   
  );
};

  

export default AlloyWheelRefurbishment;
