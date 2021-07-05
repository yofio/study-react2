import React, { createContext } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const conetextName = "aiu";

  return (
    <UserContext.Provider value={{ conetextName }}>
      {children}
    </UserContext.Provider>
  );
};
