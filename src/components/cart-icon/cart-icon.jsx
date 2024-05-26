import "./cart-icon.scss";
import shoppingSvg from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cartcontext";
function CartIcon() {
  const { isDropdownOpen, setIsDropdownOpen } = useContext(CartContext);
  const toggleDropDown = () => setIsDropdownOpen(!isDropdownOpen);
  return (
    <div className="cart-icon-container" onClick={toggleDropDown}>
      <img className="shopping-icon" src={shoppingSvg} alt="a shopping icon" />
      <span className="item-count">0</span>
    </div>
  );
}

export default CartIcon;
