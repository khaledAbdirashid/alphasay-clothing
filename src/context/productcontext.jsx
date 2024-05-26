import { createContext, useState } from "react";
import SHOP_DATA from "../shop-data.json";
import { contextPropTypes } from "../proptype";

export const ProductContext = createContext({
  products: [],
});

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);
  const value = { products, setProducts };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

ProductContextProvider.propTypes = contextPropTypes;
