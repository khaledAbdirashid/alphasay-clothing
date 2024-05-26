import { useEffect, useState } from "react";
import { createContext } from "react";
import { contextPropTypes } from "../proptype";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  isDropdownOpen: false,
  setIsDropdownOpen: () => {},
  cartCount: 0,
});

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    const newCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCount);
  }, [cartItems, cartCount]);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const value = {
    cartItems,
    setCartItems,
    isDropdownOpen,
    setIsDropdownOpen,
    addItemToCart,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

CartContextProvider.propTypes = contextPropTypes;
