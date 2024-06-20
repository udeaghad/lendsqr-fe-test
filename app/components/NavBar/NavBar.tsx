"use client";
import { useState } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const NavBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div style={{position: 'relative'}}>
      <TopBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <SideBar isCollapsed={isCollapsed} />
    </div>
  );
};

export default NavBar;
