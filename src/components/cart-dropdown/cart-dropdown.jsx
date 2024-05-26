import "./cart-dropdown.scss";
import Button from "../common/button/button";

function CartDropdown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button buttonType="normal">CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;
