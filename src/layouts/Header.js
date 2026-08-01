import React from "react";
import { headerSvg, headerShoppingCartSvg } from "../constants/headerSvgs";

function Header({ open, hamburgerHandler }) {
  return (
    <div className="fixed top-0 right-0 left-0 z-10 flex h-16 items-center justify-between border-e-white dark:bg-zinc-700">
      <div>
        <span
          className={
            open ? "hamburger-line hamburger-line-open" : "hamburger-line"
          }
          onClick={hamburgerHandler}
        />
      </div>

      {headerSvg}

      <span>{headerShoppingCartSvg} </span>
    </div>
  );
}

export default Header;
