import { useState } from "react";
import { createContext } from "react";
import { contextPropTypes } from "../proptype";
export const CartContext = createContext({
  cartItems: [],
});

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const value = { cartItems, setCartItems, isDropdownOpen, setIsDropdownOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

CartContextProvider.propTypes = contextPropTypes;
