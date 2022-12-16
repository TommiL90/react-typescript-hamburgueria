import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { StyledButton } from "../../../styles/buttons";
import { StyledTitle } from "../../../styles/typography";
import { StyledProductCard } from "./style";

interface iProduct{
 product: {
  category:string;
  id: number;
  img: string;
  name: string;
  price: number;
 }
}


const ProductCard = ({ product }: iProduct) => {
  const { handleAddProduct } = useContext(CartContext);

  const { img, name, category, price } = product

  return (
    <StyledProductCard>
      <img src={img} alt={name} />
      <div>
        <StyledTitle tag="h3" fontSize="h3">
          {name}
        </StyledTitle>
        <small>{category}</small>
        <p>R$ {price}</p>
        <StyledButton
          onClick={() => handleAddProduct(product)}
          buttonSize="medium"
          buttonStyle="outline1"
        >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
