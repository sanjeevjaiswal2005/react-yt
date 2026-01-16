import React, { createContext } from "react";

export const UserContextData = createContext();

const UserContext = ({ children }) => {
  const data = {
    id: 1,
    name: "sanjeev",
  };
  return (
    <div>
      <UserContextData.Provider value={data}>
        {children}
      </UserContextData.Provider>
    </div>
  );
};

export default UserContext;
