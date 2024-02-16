import React from 'react'
import myVideo from '../../images/alloy_video.mp4'
import './HomeVideo.css'

const HomeVideo = () => {



  return (
    <div className='video-container'>
    <video autoPlay loop muted>
      <source src={myVideo} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
    </div>

  )
}

export default HomeVideo