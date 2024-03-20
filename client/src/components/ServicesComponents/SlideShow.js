import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SlideShow.css';

const SlideShow = ({ slideshowData }) => {

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef();
  const slider2 = useRef();

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const mainSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    fade: true, 
    asNavFor: nav2, 
  };

  const thumbSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: nav1, 
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    speed: 1000,

  };

  return (
    <div className='slideshow-container pt-5'>
      <Slider {...mainSettings} ref={slider1}>
        {slideshowData.map(slide => (
          <div key={slide.id} className='slide'>
            <img src={slide.image} alt={slide.alt} className="slide-image img-fluid" />
          </div>
        ))}
      </Slider>

      <div className="thumbnail-container">
        <Slider {...thumbSettings} ref={slider2}>
          {slideshowData.map(slide => (
            <div key={slide.id} className="thumbnail-slide">
              <img src={slide.image} alt={slide.alt} className="thumbnail" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SlideShow;
