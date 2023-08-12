import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import { CartProvider } from '../../contexts/CartContext'

import { Container } from '../../styles/Container'
import { StyledMain } from './style'

const DashBoard = () => {
  return (
    <CartProvider>
      <Header />
      <Container>
        <StyledMain>
          <ProductsList />
        </StyledMain>
      </Container>
    </CartProvider>
  )
}

export default DashBoard
