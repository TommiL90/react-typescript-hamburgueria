import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import ProductCard from './ProductCard'
import { StyledProductsList } from './style'

const ProductsList = () => {

  const { products } = useContext(CartContext)
  

  return (
    <StyledProductsList>
        {products.map( product => <ProductCard product={product} />)}
    </StyledProductsList>
  )
}

export default ProductsList