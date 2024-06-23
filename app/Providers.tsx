"use client";
import { ChildrenProps } from "../types";
import UsersContextProvider from "./context/UsersContext";

const Providers = ({ children }: ChildrenProps) => {
  return <UsersContextProvider>{children}</UsersContextProvider>;
};

export default Providers;
