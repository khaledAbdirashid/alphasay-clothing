import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { signOutUser } from "../../utils/firebase";
import {
  LogoContainer,
  NavLink,
  NavLinkContainer,
  NavigationContainer,
} from "./navigation.styles.js";
import crownIcon from "../../assets/crown.svg";
import { UserContext } from "../../context/usercontext";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import { CartContext } from "../../context/cartcontext";

function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { isDropdownOpen } = useContext(CartContext);
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={crownIcon} alt="a crown logo" />
        </LogoContainer>
        <NavLinkContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGNOUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGNUP</NavLink>
          )}
          <CartIcon />
        </NavLinkContainer>
        {isDropdownOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
}

export default Navigation;
