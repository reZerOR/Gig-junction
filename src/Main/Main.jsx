import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../ShearedComponents/Navbar";

const Main = () => {
  return (
    <div className="font-josefin">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
