import { useContext } from "react";
import { CartContext } from "../../context/cartcontext";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";
function CartIcon() {
  const { isDropdownOpen, setIsDropdownOpen, cartCount } =
    useContext(CartContext);
  const toggleDropDown = () => setIsDropdownOpen(!isDropdownOpen);
  return (
    <CartIconContainer onClick={toggleDropDown}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
