import React from 'react'
import ProductCard from '../assets/scss/components/ProductCard'

const SmallGridSection = ({ products}) => {
  return (
<section className="small-product-grid small-product-grid2 product-grid">
        <div className="smallcontainer">
        <div className="row row-cols-2 row-cols-md-2">
            {
            products.map(product => <ProductCard key={product.id} product={product} />)
            }
        </div>
    </div>
</section>
  )
}

export default SmallGridSection