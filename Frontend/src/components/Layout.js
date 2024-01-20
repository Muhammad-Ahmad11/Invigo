import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideMenu from "./SideMenu";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <div className="lg:h-16">
        <Header />
      </div>
      <div className="grid grid-cols-12 bg-gray-100 items-baseline">
        <div className="col-span-2 h-full sticky top-0 hidden lg:flex">
          <SideMenu />
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
