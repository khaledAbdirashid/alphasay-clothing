import { createContext, useState, useEffect } from "react";
import { contextPropTypes } from "../proptype";
import { getCategoriesAndDocuments } from "../utils/firebase";

export const CategoriesContext = createContext({
  categoryMap: {},
});

// product context provider changed to categories context provider
export const CategoriesContextProvider = ({ children }) => {
  const [categoryMap, setCategoryMap] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const categoryMap = await getCategoriesAndDocuments();
        setCategoryMap(categoryMap);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    })();
  }, []);

  const value = { categoryMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

CategoriesContextProvider.propTypes = contextPropTypes;
