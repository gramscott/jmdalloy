import React from 'react'
import About from '../components/HomeComponents/About'
import ContactDetails from '../components/HomeComponents/ContactDetails'
import HomeImage from '../components/HomeComponents/HomeImage'
import './HomeContainer.css'

const HomeContainer = () => {

  return (

    <div>
       <About/>
       <div className='parent-container'>
       <ContactDetails/>
       <HomeImage/>
       </div>
    </div>

  )
}

export default HomeContainer