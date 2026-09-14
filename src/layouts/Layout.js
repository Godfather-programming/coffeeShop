"use client";

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "../components/templates/HomePage";

function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const [openShoppingCart, setOpenShoppingCart] = useState(false);

  const hamburgerHandler = () => {
    setOpen((prev) => !prev);
  };

  const openShoppingCartHandler = () => {
    setOpenShoppingCart((prev) => !prev);
    console.log(openShoppingCart);
  };
  return (
    <>
      <Header
        open={open}
        hamburgerHandler={hamburgerHandler}
        openShoppingCartHandler={openShoppingCartHandler}
      />
      <main className="relative">
        <HomePage
          open={open}
          hamburgerHandler={hamburgerHandler}
          openShoppingCart={openShoppingCart}
          openShoppingCartHandler={openShoppingCartHandler}
          setOpenShoppingCart={setOpenShoppingCart}
          setOpen={setOpen}
        />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
