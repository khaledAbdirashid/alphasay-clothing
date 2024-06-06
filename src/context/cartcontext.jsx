import { useReducer, createContext } from "react";
import { contextPropTypes } from "../proptype";
import { createAction } from "../utils/reducer";

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

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== productToRemove.id);
  }
  return cartItems.map((item) =>
    item.id === productToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const clearCartItem = (cartItems, productToRemove) => {
  return cartItems.filter((item) => item.id !== productToRemove.id);
};

const InitialState = {
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  isDropdownOpen: false,
};

const CartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        ...payload,
      };
    case "SET_CART_DROP_DOWN":
      return {
        ...state,
        isDropdownOpen: payload,
      };
    default:
      throw new Error(`unhandled type error of ${type}`);
  }
};

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  isDropdownOpen: false,
  setIsDropdownOpen: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(CartReducer, InitialState);
  const { cartItems, cartCount, cartTotal, isDropdownOpen } = state;

  const setIsDropdownOpen = (isOpen) => {
    dispatch(createAction("SET_CART_DROP_DOWN", isOpen));
  };
  const updateCartReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispatch(
      createAction("SET_CART_ITEMS", {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartReducer(newCartItems);
  };
  const removeItemFromCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartReducer(newCartItems);
  };
  const ClearItemFromCart = (productToRemove) => {
    const newCartItems = clearCartItem(cartItems, productToRemove);
    updateCartReducer(newCartItems);
  };
  const value = {
    cartItems,
    isDropdownOpen,
    setIsDropdownOpen,
    addItemToCart,
    cartCount,
    removeItemFromCart,
    ClearItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

CartContextProvider.propTypes = contextPropTypes;
