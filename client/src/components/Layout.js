import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <>
      <div>
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
