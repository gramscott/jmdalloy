import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './BrakeCaliperResprays.css';
import brakeCaliperMain from '../../images/brake_caliper_main_pic.jpg'
import brakeCaliper2 from '../../images/brake_caliper2.jpg'
import brakeCaliper3 from '../../images/brake_caliper3.jpg'
import brakeCaliper4 from '../../images/brake_caliper4.jpg'


const BrakeCaliperResprays = () => {

    const slideRef = useRef(null);

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <div aria-hidden="true"></div>,
      prevArrow: <div aria-hidden="true"></div>
    };

  return (
    <div>
      <Slider ref={slideRef} {...settings}>
        <div className='next-page-pics'>
            <img src={brakeCaliperMain} alt='Brake Caliper Resprays' />
        </div>
        <div className='next-page-pics'>
            <img src={brakeCaliper2} alt='Brake Caliper Resprays 2' />
        </div>
        <div className='next-page-pics'>
            <img src={brakeCaliper3} alt='Brake Caliper Resprays 3' />
        </div>
        <div className='next-page-pics'>
            <img src={brakeCaliper4} alt='Brake Caliper Resprays 4' />
        </div>

      </Slider>
        <div className='mt-5 caliper-container'>
        <h2>Brake Caliper Resprays</h2>
        <p className='caliper-description'>We use <strong>high quality paint</strong> designed to <strong>withstand the heat from brakes</strong>. We offer a <strong>range of colours and finishes</strong> and can add <strong>decals for that final touch</strong>.</p>
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
        <a href='/' className='home-button'>Home</a>

        </div>

    </div>

  )
}

export default BrakeCaliperResprays