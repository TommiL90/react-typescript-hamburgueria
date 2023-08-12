import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import ProductCard from './ProductCard'
import { StyledProductsList } from './style'

const ProductsList = () => {
  const { products, filteredList } = useContext(CartContext)

  return (
    <StyledProductsList>
      {filteredList.length
        ? filteredList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        : products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </StyledProductsList>
  )
}

export default ProductsList
