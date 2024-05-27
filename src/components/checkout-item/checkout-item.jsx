import "./checkout-item.scss";
import { cartItemPropTypes } from "../../proptype";
import { useContext } from "react";
import { CartContext } from "../../context/cartcontext";

function CheckOutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, ClearItemFromCart } =
    useContext(CartContext);
  const handleAddItemToCart = () => addItemToCart(cartItem);
  const handleRemoveItemFromCart = () => removeItemFromCart(cartItem);
  const handleClearItemFromCart = () => ClearItemFromCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleRemoveItemFromCart}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleAddItemToCart}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleClearItemFromCart}>
        &#10005;
      </div>
    </div>
  );
}

CheckOutItem.propTypes = cartItemPropTypes;
export default CheckOutItem;
