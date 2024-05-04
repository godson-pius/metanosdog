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
    const[isCatActive, setIsCatActive] = useState(false);

  return (
    <>
      <Hero catActive={isCatActive} setCatActive={setIsCatActive} />
      <Features />
      <Ads />
      <Trending />
      <SpecialOffer />
      <CustomersReview />
    </>
  )
}

export default NHome