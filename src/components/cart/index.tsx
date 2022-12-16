import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { StyledButton } from "../../styles/buttons";
import { StyledTitle } from "../../styles/typography";
import ModalDefault from "../Modal";
import CardCart from "./CardCart";
import { CartContainer, FooterCart, HeaderCart, ProductsCart, StyledBox } from "./style";
import { AiOutlineClose } from 'react-icons/ai';

const Cart = () => {
  const {
    setShowCart,
    currentCart,
    setCurrentCart,
  } = useContext(CartContext);

  const totalPrice = currentCart.reduce((av, cv) => {
    return av + (cv.price*cv.count);
  }, 0);

  const ClearLists = () => {
    setCurrentCart([]);
  };
console.log(currentCart)
  return (
    <ModalDefault>
      <HeaderCart>
        <StyledTitle tag="h3" fontSize="h3">
          Carrinho de compras
        </StyledTitle>
        <button onClick={() => setShowCart(false)}><AiOutlineClose/></button>
      </HeaderCart>
      <CartContainer>
        { 
          !currentCart.length ? (
            <>
              <StyledBox>
                  <h3>Sua sacóla está vazía</h3>
                  <p>adicione itens</p>
              </StyledBox>
            </>
          ) : (
            <>
              <ProductsCart>
          {currentCart.map(({ id, img, name, count }) => (
            <CardCart key={id} id={id} img={img} name={name} count={count} />
          ))}
        </ProductsCart>
        <FooterCart>
          <div>
            <h4>Total</h4>
            <p>R$ {totalPrice.toFixed(2)}</p>
          </div>
          <StyledButton
            onClick={() => ClearLists()}
            buttonSize="default"
            buttonStyle="outline2"
          >
            Remover Todos
          </StyledButton>
        </FooterCart>            
            </>
          )       
        }
      </CartContainer>
    </ModalDefault>
  );
};

export default Cart;
