import {React, useState } from 'react'
import ProductCard from '../assets/scss/components/ProductCard'
import { NavLink } from 'react-router-dom'
import img5 from './../assets/icons/flash-pic.jpeg'
import SmallGridSection from './SmallGridSection'



 
function Flashsale()  {

  const [SmallProductList2] = useState ([
    { id: 1, name: "Jacket", category: "Fashion", price: "$25.00", rating: 5, img: "https://images.pexels.com/photos/3220558/pexels-photo-3220558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 2, name: "Top", category: "Fashion", price: "$9.00", rating: 5, img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 3, name: "Scarf", category: "Fashion", price: "$18.00", rating: 5, img: "https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 4, name: "Black n White dress", category: "Fashion", price: "$40.00", rating: 5, img: "https://images.pexels.com/photos/923210/pexels-photo-923210.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    
  ])

  return (
    <section className="flashsale2">
        <div className="flash-right2">
            <SmallGridSection products={SmallProductList2} />
        </div>
        <div className="flash-left2">
            <img className="img5" src={img5} alt=""/>
            <div className="flash-text2"><h1>2 FOR USD $29</h1></div>
            <NavLink to={`/products/`} className="btn-white">
                <span className="corner-w-left"></span>
                <span className="corner-w-right"></span>
                FLASH SALE
            </NavLink>
        </div>
    </section>

  )
}



     export default Flashsale;