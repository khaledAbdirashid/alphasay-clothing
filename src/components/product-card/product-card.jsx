import Button from "../common/button/button";
import { productCardPropTypes } from "../../proptype";
import { useContext } from "react";
import { CartContext } from "../../context/cartcontext";
import {
  Footer,
  ProductCardContainer,
  Name,
  Price,
} from "./product-card.styles";

function ProductCard({ product }) {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType="inverted" onClick={addProductToCart}>
        ADD TO CART
      </Button>
    </ProductCardContainer>
  );
}

ProductCard.propTypes = productCardPropTypes;
export default ProductCard;
