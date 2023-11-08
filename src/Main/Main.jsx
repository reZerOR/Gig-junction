import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../ShearedComponents/Navbar";
import Footer from "../ShearedComponents/Footer";

const Main = () => {
  return (
    <div className="font-josefin">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
