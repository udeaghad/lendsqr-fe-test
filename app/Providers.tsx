"use client";
import { ChildrenProps } from "../types";
import { CustomProvider } from "rsuite";
import UsersContextProvider from "./store/context/UsersContext";

const Providers = ({ children }: ChildrenProps) => {
  return (
    <CustomProvider>
      <UsersContextProvider>{children}</UsersContextProvider>
    </CustomProvider>
  );
};

export default Providers;
