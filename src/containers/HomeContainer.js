import React from 'react'
import About from '../components/HomeComponents/About'
import ContactDetails from '../components/HomeComponents/ContactDetails'
import HomeVideo from '../components/HomeComponents/HomeVideo'

const HomeContainer = () => {

  return (

    <div>
      <HomeVideo/>
       <About/>
       <ContactDetails/>
    </div>

  )
}

export default HomeContainer