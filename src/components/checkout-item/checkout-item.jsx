import { cartItemPropTypes } from "../../proptype";
import { useContext } from "react";
import { CartContext } from "../../context/cartcontext";
import {
  Arrow,
  BaseSpan,
  CheckOutImageContainer,
  CheckOutItemContainer,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.styles";

function CheckOutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, ClearItemFromCart } =
    useContext(CartContext);
  const handleAddItemToCart = () => addItemToCart(cartItem);
  const handleRemoveItemFromCart = () => removeItemFromCart(cartItem);
  const handleClearItemFromCart = () => ClearItemFromCart(cartItem);
  return (
    <CheckOutItemContainer>
      <CheckOutImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </CheckOutImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={handleRemoveItemFromCart}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={handleAddItemToCart}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={handleClearItemFromCart}>&#10005;</RemoveButton>
    </CheckOutItemContainer>
  );
}

CheckOutItem.propTypes = cartItemPropTypes;
export default CheckOutItem;
