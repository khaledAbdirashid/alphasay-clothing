import "./cart-dropdown.scss";
import Button from "../common/button/button";
import CartItem from "../cart-item/cart-item";
import { useContext } from "react";
import { CartContext } from "../../context/cartcontext";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button buttonType="normal">GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;
