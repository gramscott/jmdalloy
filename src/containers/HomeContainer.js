import React from 'react'
import About from '../components/HomeComponents/About'
import ContactDetails from '../components/HomeComponents/ContactDetails'
import HomeVideo from '../components/HomeComponents/HomeVideo'
import { Element } from 'react-scroll'

const HomeContainer = () => {

  return (

    <Element name="home">
      <HomeVideo/>
       <About/>
       <ContactDetails/>
    </Element>

  )
}

export default HomeContainer