import {React, useState } from 'react'
import ProductCard from '../assets/scss/components/ProductCard'
import { NavLink } from 'react-router-dom'
import img5 from './../assets/icons/flash.webp'
import SmallGridSection from './SmallGridSection'



 
function Flashsale()  {

  const [SmallProductList] = useState ([
    { id: 1, name: "Summer Shirt", category: "Fashion", price: "$10.00", rating: 5, img: "https://images.pexels.com/photos/3075970/pexels-photo-3075970.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 2, name: "Hoodie", category: "Fashion", price: "$29.99", rating: 5, img: "https://images.pexels.com/photos/2932731/pexels-photo-2932731.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 3, name: "Black Shirt", category: "Fashion", price: "$15.00", rating: 5, img: "https://images.pexels.com/photos/3760280/pexels-photo-3760280.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 4, name: "Summer Dress", category: "Fashion", price: "$19.99", rating: 5, img: "https://images.pexels.com/photos/2878764/pexels-photo-2878764.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    
  ])

  return (
    <section className="flashsale">
        <div className="flash-left">
            <img className="img5" src={img5} alt=""/>
            <div className="flash-text"><h1>2 FOR USD $29</h1></div>
            <NavLink to={`/products/`} className="btn-white">
                <span className="corner-w-left"></span>
                <span className="corner-w-right"></span>
                FLASH SALE
            </NavLink>
        </div>
        <div className="flash-right">
        <SmallGridSection products={SmallProductList} />
        </div>
    </section>

  )
}



     export default Flashsale;