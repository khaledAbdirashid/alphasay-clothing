import { Outlet, Link } from "react-router-dom";
import "./navigation.scss";
import crownIcon from "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../context/usercontext";
import { signOutUser } from "../../utils/firebase";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import { CartContext } from "../../context/cartcontext";

function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { isDropdownOpen } = useContext(CartContext);
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={crownIcon} alt="a crown logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGNOUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGNUP
            </Link>
          )}
          <CartIcon />
        </div>
        {isDropdownOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
