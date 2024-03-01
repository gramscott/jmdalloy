import React, { useRef } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './AlloyWheelRefurbishment.css'
import AlloyWheelRefurbishment1 from '../../images/alloy_wheel_ref_main_pic.JPG'

const AlloyWheelRefurbishment = () => {

  const slideRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1, 
    nextArrow: <div></div>,
    prevArrow: <div></div>
  };

  return (

    <div>
    <Slider ref={slideRef} {...settings}>
      <div className='next-page-pics'>
        <img src={AlloyWheelRefurbishment1} alt='Alloy Wheel Refurbishment' />
      </div>
    </Slider> 

    <div className='container mt-5'>
    <div className='service-description col-12'>
    <h2>Alloy Wheel Refurbishment</h2> 
    <p className='alloy-description'>Alloy wheels can become damaged and weathered over time. Refurbishment can bring them back to<strong>new-like condition</strong>, <strong>enhancing not only the appearance</strong> but also the <strong>value of your car</strong>.</p>
    </div>
{/* 
    <div className='row service-description'>
    <div className='col-md-6'>
    <h3>Benefits</h3>
    <ul>
      <li className='benefits'>Improve your cars appearance and value</li>
      <li className='benefits'>Prevent heavy lease return penalties</li>
    </ul>
    </div>
    </div>
    

    <div className='row service-description'>
    <div className='col-md-6'>
    <h3>Process</h3>
    <ol>
      <li>Tyres and wheel weights are removed</li>
      <li>Kerb damage is removed and surfaces are prepped for paint</li>
      <li>Primer and base coat are applied in our spray booth  (All factory wheels are spray painted using the same materials we use)</li>
      <li>Lacquer is applied to give a gloss, satin or Matt finish then baked and cured</li>
      <li>Tyres are fitted back on the wheels then fully balanced and fitted back on the car</li>
      </ol>
      </div> */}
      </div>
      {/* </div> */}
      </div>

  )
}

export default AlloyWheelRefurbishment