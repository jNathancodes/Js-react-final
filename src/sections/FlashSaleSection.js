import React from 'react'
import ProductCard from '../assets/scss/components/ProductCard'
import { NavLink } from 'react-router-dom'
import img5 from './../assets/icons/Flashsale1.jpg'




function Flashsale() { 


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
    </section>
  )
}


     export default Flashsale;