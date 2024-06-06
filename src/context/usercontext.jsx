import { useEffect, useReducer, createContext } from "react";

import { contextPropTypes } from "../proptype";
import { onAuthStateChangeListener, createUserDoc } from "../utils/firebase";
import { createAction } from "../utils/reducer";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

const InitialState = {
  currentUser: null,
};

const UserReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`unhandled type error of ${type}`);
  }
};

export function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(UserReducer, InitialState);
  const { currentUser } = state;
  const setCurrentUser = (user) => {
    dispatch(createAction("SET_CURRENT_USER", user));
  };
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    const unSubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDoc(user);
      }
      setCurrentUser(user);
    });

    return unSubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

UserContextProvider.propTypes = contextPropTypes;
