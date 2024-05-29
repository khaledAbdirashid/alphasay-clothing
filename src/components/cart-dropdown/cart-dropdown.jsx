import Button from "../common/button/button";
import CartItem from "../cart-item/cart-item";
import { useContext } from "react";
import { CartContext } from "../../context/cartcontext";
import { useNavigate } from "react-router-dom";
import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";

function CartDropdown() {
  const { cartItems, isDropdownOpen, setIsDropdownOpen } =
    useContext(CartContext);

  const navigate = useNavigate();
  const navigateToCheckoutpage = () => {
    navigate("/checkout");
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is Empty</EmptyMessage>
        )}
      </CartItems>

      <Button buttonType="normal" onClick={navigateToCheckoutpage}>
        GO TO CHECKOUT
      </Button>
    </CartDropDownContainer>
  );
}

export default CartDropdown;
