import React, { useState } from 'react'
import ProductCard from '../assets/scss/components/ProductCard'



const ProductGridSection = ({title}) => {

  const [products, setProducts] = useState([
    { id: 1, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, Img: "card-Img.jpg" },
    { id: 2, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, Img: "card-Img.jpg" },
    { id: 3, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, Img: "card-Img.jpg" },
    { id: 4, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, Img: "card-Img.jpg" }
  ])
  return (
<section className="product-grid">
    <h1>{title}</h1> 
        <div className="container">
            <div class="row row-cols-1 row-cols-md-4 g-4">
              {
                products.map(products => <ProductCard />)
              }

            </div>
        </div>
    </section>
  )
}


export default ProductGridSection