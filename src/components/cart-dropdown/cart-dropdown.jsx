import "./cart-dropdown.scss";
import Button from "../common/button/button";
import CartItem from "../cart-item/cart-item";
import { useContext } from "react";
import { CartContext } from "../../context/cartcontext";
import { useNavigate } from "react-router-dom";

function CartDropdown() {
  const { cartItems, isDropdownOpen, setIsDropdownOpen } =
    useContext(CartContext);

  const navigate = useNavigate();
  const navigateToCheckoutpage = () => {
    navigate("/checkout");
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button buttonType="normal" onClick={navigateToCheckoutpage}>
        GO TO CHECKOUT
      </Button>
    </div>
  );
}

export default CartDropdown;
