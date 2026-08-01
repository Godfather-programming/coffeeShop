"use client"

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "../components/templates/HomePage";

function Layout({ children }) {
  const [open, setOpen] = useState(false);

  const hamburgerHandler = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <Header open={open} hamburgerHandler={hamburgerHandler}/>
      <HomePage open={open} hamburgerHandler={hamburgerHandler}/>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
