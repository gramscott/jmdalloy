import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './DiamondCutting.css';
import diamondCuttingMainPic from '../../images/diamond_cutting_main_pic.jpg';
import diamondCutting2 from '../../images/diamond_cutting2.jpg';
import diamondCutting3 from '../../images/diamond_cutting3.jpg';

const DiamondCutting = () => {

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
        <img src={diamondCuttingMainPic} alt='Diamond Cutting' />
     </div>
        <div className='next-page-pics'>
            <img src={diamondCutting2} alt='Diamond Cutting 2' />
        </div>
        <div className='next-page-pics'>
            <img src={diamondCutting3} alt='Diamond Cutting 3' />
        </div>
        </Slider>
        <div className='mt-5 diamond-cutting-container'>
            <h2>Diamond Cutting</h2>
            <p className='diamond-cutting-description'><strong>Diamond cut alloys</strong> are cut in our cnc lathe to the <strong>highest standard</strong> keeping the original equipment manufacturer <strong>(OEM) </strong> profile with <strong>no sharp edges</strong>.
            </p>
            <p className='diamond-cutting-description'>
            An <strong>anti corrosive lacquer</strong> is applied followed by a <strong>high quality clear coat</strong> to preserve your alloys for longer.</p>
            <hr>
            </hr>
            <a href='/' className='home-button'>Home</a>
            </div>
    </div>
  )
}

export default DiamondCutting