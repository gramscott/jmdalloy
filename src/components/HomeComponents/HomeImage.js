import React from 'react'
import alloyHomePic from '../../images/alloy_home_pic.jpg';
import './HomeImage.css'

const HomeImage = () => {
  return (
    <div>
   <img src = {alloyHomePic} alt="alloyHomePic" className="alloy-home-pic"/>
    </div>

  )
}

export default HomeImage