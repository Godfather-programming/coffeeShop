"use client";

import { appLogo, appLogoType } from "@/src/constants/homePageSvgs";
import React, { useState } from "react";
import Item from "../elements/Item";
import {
  mobileMenuItems1,
  mobileMenuItems2,
} from "@/src/constants/mobileMenuItems";
import Image from "next/image";
import shoppingCartItems from "@/src/constants/Shopping-cart";
import Link from "next/link";
import ShoppedProductBox from "../elements/ShoppedProductBox";
import RegisteredOrder from "../elements/RegisteredOrder";
import { chevronDown } from "@/src/constants/chevrons";

function Introduction({
  open,
  hamburgerHandler,
  openShoppingCart,
  openShoppingCartHandler,
}) {
  const [mobileItems1, setMobileItems1] = useState(mobileMenuItems1);
  const [mobileItems2, setMobileItems2] = useState(mobileMenuItems2);

  const clickHandler = (
    id,
    items1,
    items2,
    setMobileItems1,
    setMobileItems2,
  ) => {
    const newItems = items1.map((item) => ({
      ...item,
      selected: item.id === id,
    }));

    setMobileItems1(newItems);

    const refreshedItems = items2.map((item) => ({ ...item, selected: false }));
    setMobileItems2(refreshedItems);
  };

  const downHandler = () => {
    const footer = document.getElementById("footer");

    const topFooter = footer.offsetTop;

    window.scrollTo({
      top: topFooter - 150,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section
        id="صفحه اصلی"
        className="relative aspect-390/200 w-full overflow-hidden bg-home-mobile bg-cover bg-center bg-no-repeat max-xs:h-75 lg:bg-home-desktop"
      >
        <div className="container ml-6 flex h-full w-5/10 flex-col justify-center gap-y-2.25 text-white xs:w-5/10 xl:w-5/10 2xl:w-4/10">
          <h2 className="font-Morabba text-base font-bold sm:text-4xl xl:text-6xl">
            {" "}
            قهوه عربیکا تانزانیا{" "}
          </h2>
          <h4 className="font-Morabba text-sm font-light sm:text-2xl lg:mt-1.5 xl:text-5xl">
            {" "}
            یک فنجان بالانس!{" "}
          </h4>
          <span className="block h-px w-25 bg-orange-300 shadow-app lg:my-3 lg:h-0.5">
            {" "}
          </span>
          <p className="max-w-114 font-Dana text-[10px] sm:text-xl xl:text-2xl">
            {" "}
            قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است
            که در نواحی مختلف کمربند قهوه کشت میشود.{" "}
          </p>
        </div>

        {/* <div className="absolute right-0 left-0 top-175"> */}
        <div className="absolute -bottom-11.25 left-1/2 z-10 h-24 w-64 -translate-x-1/2 rounded-t-[50%] bg-transparent max-md:hidden" />

        {/* Outer semicircle */}
        <div className="absolute bottom-10 left-1/2 z-11 h-30 w-60 -translate-x-1/2 rounded-t-full border border-white/25 max-md:hidden" />

        {/* Middle semicircle */}
        <div className="absolute bottom-10 left-1/2 z-12 h-23 w-46 -translate-x-1/2 rounded-t-full border border-white/50 max-md:hidden" />

        {/* Inner semicircle */}
        <div className="absolute bottom-10 left-1/2 z-13 h-15 w-30 -translate-x-1/2 rounded-t-full border border-white/80 max-md:hidden" />

        {/* Button */}

        <svg
          className="size-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M6 15L12 9L18 15"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* SVG موج */}
        <svg
          className="absolute bottom-0 left-0 z-20 h-15 w-full text-gray-100 max-md:hidden dark:text-zinc-800"
          viewBox="0 0 390 60"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="
        M0 22
        C70 22 105 21 145 20
        C170 19 185 16 195 0
        C205 16 220 19 245 20
        C285 21 320 22 390 22
        V60
        H0
        Z
      "
            fill="currentColor"
          />
        </svg>

        <button
          className="absolute bottom-5 left-1/2 z-30 flex size-7.5 -translate-x-1/2 items-center justify-center rounded-full border-2 border-orange-300 bg-white max-md:hidden dark:bg-zinc-700 dark:text-white cursor-pointer"
          onClick={downHandler}
        >
          <span className="block size-5">{chevronDown}</span>
        </button>
        {/* </div> */}
      </section>

      <div
        className={`fixed top-0 z-50 h-full w-64 bg-white p-3 text-amber-500 transition-all duration-500 ${open ? "right-0" : "-right-64"} dark:bg-zinc-700`}
      >
        <div className="flex items-center justify-between">
          <div className="z-30 flex gap-x-4">
            <span className="block h-10 w-10 text-orange-300"> {appLogo}</span>
            <span className="block h-10 w-25 text-orange-300">
              {" "}
              {appLogoType}{" "}
            </span>
          </div>

          <span
            // className={`hamburger-line transition-all duration-500 ${open ? "hamburger-line-open" : ""} mr-10`}
            className={`hamburger-line h-0.75 w-9 hamburger-line-open transition-all duration-500`}
            onClick={hamburgerHandler}
          >
            {" "}
          </span>
        </div>

        <p className="mt-6 h-px w-56 bg-zinc-700"></p>

        <ul className="mt-4">
          {mobileItems1.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              open={open}
              title={item.title}
              svg={item.svg}
              selected={item.selected}
              clickHandler={() =>
                clickHandler(
                  item.id,
                  mobileItems1,
                  mobileItems2,
                  setMobileItems1,
                  setMobileItems2,
                )
              }
            />
          ))}
        </ul>

        <p className="mt-6 h-px w-56 bg-zinc-700"></p>

        <ul className="mt-4">
          {mobileItems2.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              title={item.title}
              svg={item.svg}
              selected={item.selected}
              clickHandler={() =>
                clickHandler(
                  item.id,
                  mobileItems2,
                  mobileItems1,
                  setMobileItems2,
                  setMobileItems1,
                )
              }
              setMobileItems1={setMobileItems1}
              setMobileItems2={setMobileItems2}
            />
          ))}
        </ul>
      </div>

      <div
        className={`fixed top-0 z-50 h-full w-64 bg-white p-3 pt-6 shadow-app ${openShoppingCart ? "left-0" : "-left-64"} transition-all duration-500 dark:bg-zinc-700`}
      >
        <div className="flex items-center justify-between">
          <span
            className={`hamburger-line h-0.75 w-6 hamburger-line-open transition-all duration-500`}
            onClick={openShoppingCartHandler}
          >
            {" "}
          </span>
          <span className="font-Dana font-medium dark:text-white">
            {" "}
            سبد خرید{" "}
          </span>
        </div>

        {/* <p className="mt-6 h-px w-56 bg-[#D1D5DB]"> </p> */}

        <div className="flex h-full flex-col justify-between">
          <div className="mt-4">
            {shoppingCartItems.map((item) => (
              <div key={item.id}>
                <p className="mt-4 h-px w-56 bg-[#D1D5DB]"></p>

                <ShoppedProductBox
                  item={item}
                  sizeImg="90"
                  titleSize="text-sm"
                  discountSize="text-xs"
                  priceSpanSize="text-xs"
                />
              </div>
            ))}
          </div>

          <RegisteredOrder fontSize="text-base" />
        </div>
      </div>
    </>
  );
}

export default Introduction;
