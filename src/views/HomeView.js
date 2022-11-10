import React, { useState } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'
import SaleUp from '../sections/SaleUp'
import Banners from '../sections/Banners'
import FlashSaleSection from '../sections/FlashSaleSection'
import FlashSaleSection2 from '../sections/FlashSaleSection2'
import InfoBottomSection from '../sections/InfoBottomSection'


const HomeView = () => {
  window.top.document.title = 'Fixxo.'

  const [products, setProducts] = useState([
    { id: 1, name: "White Shirt", category: "Fashion", price: "$10.00", rating: 5, img: "https://images.pexels.com/photos/2059104/pexels-photo-2059104.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 2, name: "Jeans", category: "Fashion", price: "$29.00", rating: 5, img: "https://images.pexels.com/photos/7368295/pexels-photo-7368295.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 3, name: "Shorts", category: "Fashion", price: "$15.00", rating: 5, img: "https://images.pexels.com/photos/7790589/pexels-photo-7790589.jpeg?auto=compress&cs=tinysrgb&w=2600" },
    { id: 4, name: "Black Sirt", category: "Fashion", price: "$20.00", rating: 5, img: "https://images.pexels.com/photos/2100027/pexels-photo-2100027.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 5, name: "Sneakers", category: "Fashion", price: "$65.00", rating: 5, img: "https://images.pexels.com/photos/880861/pexels-photo-880861.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 6, name: "Long Sleeved Shirts", category: "Fashion", price: "$20.00", rating: 5, img: "https://images.pexels.com/photos/2409681/pexels-photo-2409681.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 7, name: "Costumes", category: "Fashion", price: "$20.00", rating: 5, img: "https://images.pexels.com/photos/5600071/pexels-photo-5600071.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 8, name: "Jackets", category: "Fashion", price: "$55.00", rating: 5, img: "https://images.pexels.com/photos/2245433/pexels-photo-2245433.jpeg?auto=compress&cs=tinysrgb&w=1600" },
   

  ])
  


    return (
      <>
        <MainMenuSection />
        <SaleUp />
        <ProductGridSection title="Featured Products" products={products} />
        <Banners />
        <FlashSaleSection />
        <FlashSaleSection2 />
        <InfoBottomSection />
        <FooterSection />
      </>
    )
  }

export default HomeView