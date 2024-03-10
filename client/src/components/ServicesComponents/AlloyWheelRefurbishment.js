import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './AlloyWheelRefurbishment.css';
import './GeneralNextPageStyles.css';
import AlloyWheelRefurbishment1 from '../../images/alloy_wheel_ref_pic.JPG';
import AlloyWheelRefurbishment2 from '../../images/alloy_wheel_ref_2.jpg';
import AlloyWheelRefurbishment3 from '../../images/alloy_wheel_ref_3.jpg';
import AlloyWheelRefurbishment4 from '../../images/alloy_wheel_ref_4.jpg';


const AlloyWheelRefurbishment = () => {

  const slideRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <div aria-hidden="true"></div>,
    prevArrow: <div aria-hidden="true"></div>,
  };
  

  return (
    <div>
      <Slider ref={slideRef} {...settings}>
        <div className='next-page-pics'>
          <img src={AlloyWheelRefurbishment1} alt='Alloy Wheel Refurbishment' />
        </div>
        {/* <div className='next-page-pics'>
          <img src={AlloyWheelRefurbishment2} alt='Alloy Wheel Refurbishment 2' />
        </div> */}
        <div className='next-page-pics'>
          <img src={AlloyWheelRefurbishment3} alt='Alloy Wheel Refurbishment 3' />
        </div>
        <div className='next-page-pics'>
          <img src={AlloyWheelRefurbishment4} alt='Alloy Wheel Refurbishment 4' />
        </div>
      </Slider>

      <div className='mt-5 alloy-container'>
        <h2>Alloy Wheel Refurbishment</h2>
        <p className='alloy-description'>Alloy wheels can become damaged and weathered over time. Refurbishment can bring them back to <strong>new-like condition</strong>.</p>

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
}

export default AlloyWheelRefurbishment;
