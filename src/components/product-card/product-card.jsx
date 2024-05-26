import "./product-card.scss";
import Button from "../common/button/button";
import { productCardPropTypes } from "../../proptype";
function ProductCard({ product: { imageUrl, name, price } }) {
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted">ADD TO CART</Button>
    </div>
  );
}

ProductCard.propTypes = productCardPropTypes;
export default ProductCard;
