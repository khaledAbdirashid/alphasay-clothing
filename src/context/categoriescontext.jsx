import { createContext, useEffect, useReducer } from "react";
import { contextPropTypes } from "../proptype";
import { getCategoriesAndDocuments } from "../utils/firebase";
import { createAction } from "../utils/reducer";

export const CategoriesContext = createContext({
  categoryMap: {},
});

const InitialState = {
  categoryMap: {},
};

const CategoriesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CATEGORY_MAP":
      return {
        ...state,
        categoryMap: payload,
      };
    default:
      throw new Error(`unhandled type of ${type}`);
  }
};

// product context provider changed to categories context provider
export const CategoriesContextProvider = ({ children }) => {
  const [{ categoryMap }, dispatch] = useReducer(
    CategoriesReducer,
    InitialState
  );

  useEffect(() => {
    (async () => {
      try {
        const categoryMap = await getCategoriesAndDocuments();
        dispatch(createAction("SET_CATEGORY_MAP", categoryMap));
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
