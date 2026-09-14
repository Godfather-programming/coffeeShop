import React from "react";
import { headerSvg, headerShoppingCartSvg } from "../constants/headerSvgs";

function Header({ open, hamburgerHandler, openShoppingCartHandler }) {
  return (
    <div className="fixed top-0 right-0 left-0 z-40 flex h-16 items-center justify-between bg-white border-e-white px-5 md:hidden dark:bg-zinc-700">
      <div>
        <span
          className="hamburger-line"
          onClick={hamburgerHandler}
        />
      </div>

      <span> {headerSvg} </span>

      <span
        onClick={openShoppingCartHandler}
        className="h-6 w-6"
      >
        {headerShoppingCartSvg}{" "}
      </span>
    </div>
  );
}

export default Header;
