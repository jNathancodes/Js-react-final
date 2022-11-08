import React from 'react'
import ProductCard from '../assets/scss/components/ProductCard'

const SmallGridSection = ({ products}) => {
  return (
<section className="product-grid">
        <div className="smallcontainer">
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {
            products.map(product => <ProductCard key={product.id} product={product} />)
            }
        </div>
    </div>
</section>
  )
}

export default SmallGridSection