import React, { forwardRef} from 'react'
import myVideo from '../../images/black_and_white_alloy.mp4'
import './HomeVideo.css'

const HomeVideo = forwardRef((props, ref) => {



  return (
    <div className='video-container'>
    <video autoPlay loop muted playsInline ref={ref}>
      <source src={myVideo} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
    </div>

  )
})

export default HomeVideo;