import "./product-card.scss";
import Button from "../common/button/button";
import { productCardPropTypes } from "../../proptype";
import { useContext } from "react";
import { CartContext } from "../../context/cartcontext";
function ProductCard({ product }) {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        ADD TO CART
      </Button>
    </div>
  );
}

ProductCard.propTypes = productCardPropTypes;
export default ProductCard;
