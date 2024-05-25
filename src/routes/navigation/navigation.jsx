import { Outlet, Link } from "react-router-dom";
import "./navigation.scss";
import crownIcon from "../../assets/crown.svg";

function Navigation() {
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
          <Link className="nav-link" to="/auth">
            SIGNUP
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
