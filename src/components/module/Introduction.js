"use client";

import { appLogo, appLogoType } from "@/src/constants/homePageSvgs";
import React, { useState } from "react";
import Item from "../elements/Item";
import {
  mobileMenuItem1,
  mobileMenuItem2,
} from "@/src/constants/mobileMenuItems";
import Image from "next/image";
import shoppingCartItems from "@/src/constants/Shopping-cart";

function Introduction({ open, hamburgerHandler }) {
  const [mobileItems1, setMobileItems1] = useState(mobileMenuItem1);
  const [mobileItems2, setMobileItems2] = useState(mobileMenuItem2);

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

  return (
    <>
      <section className="bg-home-mobile relative aspect-390/200 w-full overflow-hidden bg-cover bg-center bg-no-repeat">
        <div className="container ml-0 flex h-full w-6/10 flex-col justify-center gap-y-2.25 text-white">
          <h2 className="font-Morabba text-2xl font-bold">
            {" "}
            قهوه عربیکا تانزانیا{" "}
          </h2>
          <h4 className="font-Morabba text-xl font-light">
            {" "}
            یک فنجان بالانس!{" "}
          </h4>
          <span className="block h-px w-25 bg-orange-300 shadow-app"> </span>
          <p className="font-Dana text-xs">
            {" "}
            قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است
            که در نواحی مختلف کمربند قهوه کشت میشود.{" "}
          </p>
        </div>
      </section>
      <div
        className={`fixed top-0 z-20 h-full w-64 bg-white p-3 text-amber-500 transition-all duration-500 ${open ? "right-0" : "-right-64"} dark:bg-zinc-700`}
      >
        <div className="flex items-center justify-between">
          <div className="flex gap-x-4">
            <span> {appLogo} </span>
            <span> {appLogoType} </span>
          </div>

          <span
            className={`hamburger-line-open transition-all duration-500 ${open ? "hamburger-line" : ""} h-0.75 w-6`}
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

      <div className="fixed top-0 left-0 z-20 h-full w-64 bg-cyan-400 p-3 pt-6">
        <div className="flex items-center justify-between">
          <span
            className={`hamburger-line-open transition-all duration-500 ${open && "hamburger-line"} h-0.75 w-6`}
          >
            {" "}
          </span>
          <span className="font-Dana font-medium"> سبد خرید </span>
        </div>

        {/* <p className="mt-6 h-px w-56 bg-[#D1D5DB]"> </p> */}

        <div className="mt-6">
          {shoppingCartItems.map((item) => (
            <div key={item.id}>
              <p className="mt-4 h-px w-56 bg-[#D1D5DB]"></p>

              <div
                className="flex items-center justify-center p-2 mt-4"
              >
                <div className="h-22.5 w-22.5 shrink-0">
                  <Image
                    src={item.img}
                    alt="product-photo"
                    width={90}
                    height={90}
                  />
                </div>

                <div className="space-y-2 font-Dana font-medium">
                  <p className="text-sm">{item.title}</p>
                  <p className="text-xs text-teal-600"> {item.discount} </p>
                  <p className="font-Dana font-semibold"> {item.price} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Introduction;
