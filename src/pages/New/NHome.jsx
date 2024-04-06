import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Ads from './components/Ads'
import Trending from './components/Trending'
import SpecialOffer from './components/SpecialOffer'
import CustomersReview from './components/CustomersReview'
import Footer from './components/Footer'

const NHome = () => {
    const[isMenuActive, setIsMenuActive] = useState(false);

  return (
    <>
      <Navbar active={isMenuActive} setActive={setIsMenuActive}/>
      <Hero active={isMenuActive} />
      <Features />
      <Ads />
      <Trending />
      <SpecialOffer />
      <CustomersReview />
      <Footer />
    </>
  )
}

export default NHome