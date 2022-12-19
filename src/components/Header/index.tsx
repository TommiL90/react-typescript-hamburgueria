import { FiSearch, FiLogOut } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { Container } from "../../styles/Container";
import Logo from "../Logo";
import { IconBtn, StyledHeader } from "./style";
import SearchForm from "../InputSearch";
import { useContext, useState } from "react";
import Cart from "../cart";
import { CartContext } from "../../contexts/CartContext";
import { StyledButton } from "../../styles/buttons";
import { useNavigate } from "react-router-dom";


const Header = () => {

  const navigate = useNavigate()
  const { currentCart } = useContext(CartContext)
  const { showCart, setShowCart, products, setProducts } = useContext(CartContext);
  const [showFormSearh, setShowFormSearch] = useState(false);


  const countSelectProducts = currentCart.reduce((av, cv) => {
    
    if(cv.count){
      return av + cv.count
    }else{
      return 0
    }

  }, 0);

  const handleReset = () => {
      setProducts(products)
      setShowFormSearch(false)
  }

  const logOut = () => {

      localStorage.removeItem("@BurguerKenzie:Token")
      localStorage.removeItem("@BurguerKenzie:Id")
      navigate("/login")
  }

  return (
    <StyledHeader>
      <Container className="containerHeader">
        <div>
        <Logo />
        { showFormSearh && <StyledButton 
        onClick={handleReset}
        buttonSize="default" buttonStyle="solidPrimary">Limpar pesquisa</StyledButton> }
        </div>
        <nav>
          {!showFormSearh ? (
            <>
              <IconBtn onClick={() => setShowFormSearch(true)}>
                <FiSearch />
              </IconBtn>
              <div className="cart">
                { currentCart.length >= 1 && <p>{ countSelectProducts }</p> }
                <IconBtn onClick={() => setShowCart(true)}>
                <FaShoppingCart />
                </IconBtn>
              </div>
              <IconBtn onClick={logOut}>
                <FiLogOut />
              </IconBtn>
            </>
          ) : (
            <SearchForm />
          )}
        </nav>
        {showCart && <Cart />}
      </Container>
    </StyledHeader>
  );
};

export default Header;
