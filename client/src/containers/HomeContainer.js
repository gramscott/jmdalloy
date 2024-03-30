import React, { useEffect, useRef} from 'react'
import About from '../components/HomeComponents/About'
import ContactDetails from '../components/HomeComponents/ContactDetails'
import HomeVideo from '../components/HomeComponents/HomeVideo'
import { Element } from 'react-scroll';


const HomeContainer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleVideoEnd = () => {
      videoElement.play();
    };

    videoElement.addEventListener('ended', handleVideoEnd);

    return () => {
      videoElement.removeEventListener('ended', handleVideoEnd);
    };
    }
  }, []);

  return (

    <Element name='home'>
      <HomeVideo ref={videoRef}/>
       <About/>
       <ContactDetails/>
    </Element>

  )
}

export default HomeContainer