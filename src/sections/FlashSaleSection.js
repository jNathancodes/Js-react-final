import {React, useState } from 'react'
import ProductCard from '../assets/scss/components/ProductCard'
import { NavLink } from 'react-router-dom'
import img5 from './../assets/icons/Flashsale1.jpg'
import SmallGridSection from './SmallGridSection'




function Flashsale()  {

  const [SmallProductList] = useState ([
    { id: 1, name: "Jeans", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/7368295/pexels-photo-7368295.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 2, name: "Jeans", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/7368295/pexels-photo-7368295.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 3, name: "Jeans", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/7368295/pexels-photo-7368295.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 4, name: "Jeans", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/7368295/pexels-photo-7368295.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    
  ])

  return (
    <section className="flashsale">
        <div className="flash-left">
            <img className="img5" src={img5} alt=""/>
            <h1>2 FOR USD $29</h1>
            <NavLink to={`/products/`} className="btn-white">
                <span className="corner-w-left"></span>
                <span className="corner-w-right"></span>
                FLASH SALE
            </NavLink>
        </div>
        <SmallGridSection products={SmallProductList} />
    </section>

  )
}



     export default Flashsale;