import { useEffect, useState } from "react";
import { createContext } from "react";

import { userContextPropTypes } from "../proptype";
import { onAuthStateChangeListener, createUserDoc } from "../utils/firebase";

//actual data you want to access
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

//the actual component that provides the context
export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
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

UserProvider.propTypes = userContextPropTypes;
