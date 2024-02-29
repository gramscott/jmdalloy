import React, { useRef } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './AlloyWheelRefurbishment.css'

const AlloyWheelRefurbishment = () => {

  const slideRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const goToPrev = () => {
    slideRef.current.slickPrev();
  };

  const goToNext = () => {
    slideRef.current.slickNext();
  };

  return (

    <div>
    <Slider ref={slideRef} {...settings}>
    </Slider> 
    <div className='container mt-5'></div>
    <h2>Alloy Wheel Refurbishment</h2> 
    <p>Alloy wheels can become damaged and weathered over time. Refurbishment can bring them back to new-like condition, enhancing not only the appearance but also the value of your car.</p>

    <h3>Benefits</h3>
    <ul>
      <li className='benefits'>Improve your cars appearance and value</li>
      <li className='benefits'>Prevent heavy lease return penalties</li>
    </ul>

    <h3>Process</h3>
    <ol>
      <li>Tyres and wheel weights are removed</li>
      <li>Kerb damage is removed and surfaces are prepped for paint</li>
      <li>Primer and base coat are applied in our spray booth  (All factory wheels are spray painted using the same materials we use)</li>
      <li>Lacquer is applied to give a gloss, satin or Matt finish then baked and cured</li>
      <li>Tyres are fitted back on the wheels then fully balanced and fitted back on the car</li>
      </ol>
      </div>

  )
}

export default AlloyWheelRefurbishment