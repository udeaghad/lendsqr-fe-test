"use client";
import { createContext, useState } from "react";
import { ChildrenProps, UsersDetailsProps, UsersContextProps } from "@/types";

export const UsersContext = createContext<UsersContextProps | null>(null);

const UsersContextProvider = ({ children }: ChildrenProps) => {
  const [userdetails, setUserDetails] = useState<UsersDetailsProps | null>(
    null
  );
  return (
    <UsersContext.Provider value={{ userdetails, setUserDetails }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
