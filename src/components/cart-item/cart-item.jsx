import { cartItemPropTypes } from "../../proptype";
import { CartItemContainer, ItemDetails } from "./cart-item.styles";
function CartItem({ cartItem }) {
  const { name, quantity, imageUrl, price } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
}

CartItem.propTypes = cartItemPropTypes;
export default CartItem;
