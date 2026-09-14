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
  setOpenShoppingCart,
  setOpen,
}) {
  const [mobileItems1, setMobileItems1] = useState(mobileMenuItems1);
  const [mobileItems2, setMobileItems2] = useState(mobileMenuItems2);
  const [list, setList] = useState(false);

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

    // if(id === 2) setList(!list)

    // console.log(list);

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
        className="relative z-10 flex aspect-2/1 w-full items-center justify-end"
      >
        {/* Background Image */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-home-mobile bg-cover bg-center bg-no-repeat lg:bg-home-desktop" />
        </div>

        {/* Main Content */}
        <div className="container ml-0 flex overflow-hidden h-full w-5/10 flex-col justify-center gap-y-2.25 text-white xs:w-5/10">
          <h2 className="font-Morabba text-base font-bold sm:text-4xl md:mt-14 lg:mt-0 xl:text-6xl">
            قهوه عربیکا تانزانیا
          </h2>

          <h4 className="font-Morabba text-sm font-light sm:text-2xl lg:mt-1.5 xl:text-5xl">
            یک فنجان بالانس!
          </h4>

          <span className="my-0 block h-px w-25 bg-orange-300 shadow-app sm:my-1 md:my-0 lg:my-3 lg:h-0.5 xl:my-6"></span>

          <p className="max-w-114 font-Dana text-[10px] sm:text-xl xl:text-2xl">
            قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است
            که در نواحی مختلف کمربند قهوه کشت میشود.
          </p>
        </div>

        {/* Center Area */}
        <div className="absolute -bottom-11.25 left-1/2 z-10 h-24 w-64 -translate-x-1/2 rounded-t-[50%] bg-transparent max-md:hidden" />

        {/* Outer Semicircle */}
        <div className="absolute bottom-9 left-1/2 z-11 h-30 w-60 -translate-x-1/2 rounded-t-full border border-white/25 max-md:hidden" />

        {/* Middle Semicircle */}
        <div className="absolute bottom-9 left-1/2 z-12 h-23 w-46 -translate-x-1/2 rounded-t-full border border-white/50 max-md:hidden" />

        {/* Inner Semicircle */}
        <div className="absolute bottom-9 left-1/2 z-13 h-15 w-30 -translate-x-1/2 rounded-t-full border border-white/80 max-md:hidden" />

        {/* Chevron */}
        {/* <svg
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
        </svg> */}

        {/* Wave SVG */}
<svg
  className="absolute -bottom-px left-0 z-20 h-15 w-full text-gray-100 max-md:hidden dark:text-zinc-800"
  viewBox="0 0 390 60"
  preserveAspectRatio="none"
>
  <path
    d="
      M0 22
      C35 22 75 22 110 22
      C140 22 160 21 175 17
      C184 14 190 7 193 0
      C194  -2 195 -5 195 -8
      C195 -5 196 -2 197 0
      C200 7 206 14 215 17
      C230 21 250 22 280 22
      C315 22 355 22 390 22
      V60
      H0
      Z
    "
    fill="currentColor"
    stroke="none"
  />
</svg>

        {/* Button */}
        <button
          className="absolute bottom-6.5 left-1/2 z-30 flex size-7.5 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-orange-300 bg-white max-md:hidden dark:bg-zinc-700 dark:text-white"
          onClick={downHandler}
        >
          <span className="block size-5">{chevronDown}</span>
        </button>
      </section>

      <div
        className={`fixed top-0 z-50 h-full w-64 overflow-y-auto bg-white p-3 text-amber-500 transition-all duration-500 ${open ? "right-0" : "-right-74"} dark:bg-zinc-700`}
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
            className={`hamburger-line h-0.75 w-6 hamburger-line-open transition-all duration-500`}
            onClick={hamburgerHandler}
          >
            {" "}
          </span>
        </div>

        <p className="mt-6 h-px w-56 bg-gray-100 dark:bg-white/10"></p>

        <ul className="mt-4">
          {mobileItems1.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              open={open}
              title={item.title}
              className="text-zinc-700"
              svg={item.svg}
              list={list}
              setList={setList}
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

        <p className="mt-6 h-px w-56 bg-gray-100 dark:bg-white/10"></p>

        <ul className="mt-4">
          {mobileItems2.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              title={item.title}
              svg={item.svg}
              selected={item.selected}
              className="text-orange-300"
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

        <p className="mt-6 h-px w-56 bg-gray-300 dark:bg-white/10"> </p>

        <div className="custom-scrollbar custom-scrollbar-50 flex h-full flex-col justify-between overflow-y-auto">
          <div className="mb-5">
            {shoppingCartItems.map((item) => (
              <div key={item.id}>
                {/* <p className="mt-4 h-px w-56 bg-[#D1D5DB]"></p> */}

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

          <RegisteredOrder fontSize="text-base" style="mb-12" />
        </div>
      </div>

      <div
        className={`fixed inset-0 z-45 h-full w-full bg-black/40 transition-opacity duration-300 md:hidden ${
          open || openShoppingCart
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => {
          if (open === true) setOpen(false);
          if (openShoppingCart === true) setOpenShoppingCart(false);
        }}
      ></div>
    </>
  );
}

export default Introduction;
