import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'


const HomeView = () => {
  return (
    <>
      <MainMenuSection />
      <ProductGridSection title="Featured Products"/>
      <FooterSection />
    </>
  )
}

export default HomeView