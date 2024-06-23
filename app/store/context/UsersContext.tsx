import React, { createContext, useState } from "react";
import {
  UsersDetailsProps,
  UsersContextProps,
  ChildrenProps,
} from "../../../types";

export const UsersContext = createContext<UsersContextProps | null>(null);

const UsersContextProvider = ({ children }: ChildrenProps) => {
  const [users, setUsers] = useState<UsersDetailsProps[]>([]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
