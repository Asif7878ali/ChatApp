import React from 'react'
import Navbar from './componenets/Navbar'
import Footer from './componenets/Footer'
import SectionOne from './componenets/SectionOne'
import SectionTwo from './componenets/SectionTwo'
import SectionThree from './componenets/SectionThree'
import SectionFour from './componenets/SectionFour'

const LandingPage = () => {
  return (
    <>
     <Navbar/>
     <SectionOne/>
     <SectionTwo/>
     <SectionThree/>
     <SectionFour/>
     <Footer/>
    </>
  )
}

export default LandingPage