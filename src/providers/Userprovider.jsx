import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;

  const [userInfo, setUserinfo] = useState(null);

  return (
    <UserContext.Provider value={{ userInfo, setUserinfo }}>
      {children}
    </UserContext.Provider>
  );
};
