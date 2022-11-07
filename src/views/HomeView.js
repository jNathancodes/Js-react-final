import React, { useState } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'


const HomeView = () => {

  const [products, setProducts] = useState([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/2059104/pexels-photo-2059104.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/7368295/pexels-photo-7368295.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/7790589/pexels-photo-7790589.jpeg?auto=compress&cs=tinysrgb&w=2600" },
    { id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/2100027/pexels-photo-2100027.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 5, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/880861/pexels-photo-880861.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 6, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/2409681/pexels-photo-2409681.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 7, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/5600071/pexels-photo-5600071.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 8, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/2245433/pexels-photo-2245433.jpeg?auto=compress&cs=tinysrgb&w=1600" }

  ])

  return (
    <>
      <MainMenuSection />
      <ProductGridSection title="Featured Products" products={products} />
      <FooterSection />
    </>
  )
}

export default HomeView