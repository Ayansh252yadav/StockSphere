import React from 'react'
import HeroSection from './HeroSection.jsx'
import Awards from './Awards'
import Stats from './Stats'
import Pricing from './Pricing'
import Education from './Education.jsx'
import OpenAccount from '../OpenAccount.jsx'
import Navbar from '../Navbar.jsx'
import Footer from '../Footer.jsx'
const HomePage = () => {
  return (
    <div>
     <HeroSection/>
     <Awards/>
     <Stats/>
     <Pricing/>
     <Education/>
     <OpenAccount/>

    </div>
  )
}

export default HomePage
