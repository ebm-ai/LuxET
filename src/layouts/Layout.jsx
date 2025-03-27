import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Nav from "./nav/Nav";

const Layout = () => {
  return (
    <div className=" flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow mt-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
