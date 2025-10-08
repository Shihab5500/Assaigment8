

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";


export default function Root() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar></Navbar>
      <main className="flex-1">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
}
