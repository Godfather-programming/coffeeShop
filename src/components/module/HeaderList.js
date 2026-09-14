"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  mobileMenuItems1,
  mobileMenuItems2,
} from "@/src/constants/mobileMenuItems";
import { appLogo, lightSvg } from "@/src/constants/homePageSvgs";
import { headerShoppingCartSvg } from "@/src/constants/headerSvgs";
import Item from "../elements/Item";
import coffeeList from "@/src/constants/coffeeList";
import ShoppedProductBox from "../elements/ShoppedProductBox";
import shoppingCartItems from "@/src/constants/Shopping-cart";
import RegisteredOrder from "../elements/RegisteredOrder";
import { chevronLeft } from "@/src/constants/chevrons";
import userAccountItems from "@/src/constants/userAccountItems";
import { doc } from "prettier";

function HeaderList() {
  const [mobileItems1, setMobileItems1] = useState(mobileMenuItems1);
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("main section");
    const footer = document.querySelector("#footer");

    const observerSwitcher = (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        // اگر Footer دیده شد
        if (entry.target.id === "footer") {
          setMobileItems1((prevItems) =>
            prevItems.map((item) => ({
              ...item,
              selected: item.title === "صفحه اصلی",
            })),
          );

          return;
        }

        // اگر یک section دیده شد
        const sectionId = entry.target.id;

        setMobileItems1((prevItems) =>
          prevItems.map((item) => ({
            ...item,
            selected: item.title === sectionId,
          })),
        );
      });
    };

    const observer = new IntersectionObserver(observerSwitcher, {
      threshold: 0.2,
    });

    sections.forEach((section) => observer.observe(section));

    if (footer) {
      observer.observe(footer);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollingTarget = useRef(null);
  console.log(scrollingTarget);

  const items = mobileMenuItems2.filter(
    (item) => item.id === 2 || item.id == 1,
  );
  console.log(items);

  const darkSvg = items[1].svg;

  const transitionClass = "cursor-pointer transition-colors duration-200";

  const themeHandler = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    setTheme((theme) => !theme);
  };

  const selectHandler = (word) => {
    scrollingTarget.current === word;

    const newMobileItems = mobileItems1.map((item) => ({
      ...item,
      selected: item.title === word,
    }));
    setMobileItems1(newMobileItems);

    const element = document.getElementById(word);
    const distance = element?.offsetTop;

    if (element.id === "فروشگاه") {
      window.scrollTo({
        top: distance + 50,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: distance - 150,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="fixed top-6 right-0 left-0 z-50 mx-auto hidden h-24 items-center justify-between rounded-3xl bg-black/50 font-Dana text-xl tracking-tightest text-gray-300 backdrop-blur-[6px] md:flex md:w-95/100 md:px-2 md:text-base lg:w-9/10 lg:px-6">
      <nav className="flex items-center gap-x-6">
        <span className="size-15 text-orange-300"> {appLogo} </span>

        <ul className="flex gap-x-5 xl:gap-x-6">
          {mobileItems1.map((item) => (
            <div key={item.id} className="group">
              <li
                key={item.id}
                className={`${item.selected && "text-orange-300"} ${transitionClass} flex h-24 items-center hover:font-Dana hover:font-medium ${item.title === "فروشگاه" && "relative"}`}
                onClick={() => selectHandler(item.title)}
              >
                {" "}
                {item.title}{" "}
              </li>

              {item.title === "فروشگاه" && (
                <ul className="absolute top-20 flex max-h-0 translate-y-2 flex-col space-y-1.5 overflow-hidden rounded-2xl border-orange-300 bg-white tracking-normal text-zinc-700 opacity-0 shadow-app transition-all duration-500 ease-in-out group-hover:max-h-56 group-hover:translate-y-0 group-hover:border-t-[3px] group-hover:p-6 group-hover:opacity-100 dark:bg-zinc-700 dark:text-white">
                  {coffeeList.map((item) => (
                    <li
                      key={item.id}
                      className="w-fit cursor-pointer transition-colors duration-200 hover:text-orange-300"
                    >
                      {" "}
                      {item.title}{" "}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
      </nav>

      <div className="flex items-center">
        <div className="flex items-center gap-x-2.5">
          <div className="group flex items-center h-24 lg:w-7.5 xl:w-9">
            <span
              className={`${transitionClass} relative inline-block h-full w-6 hover:text-orange-300 lg:w-7.5 xl:w-9`}
            >
              {" "}
              {headerShoppingCartSvg}{" "}
            </span>
            <div
              // className="absolute top-20 left-66 h-77.5 w-100 rounded-2xl bg-white border-top-3 dark:bg-zinc-700"
              className="custom-scrollbar custom-scrollbar-8 absolute top-20 left-66 max-h-0 overflow-hidden overflow-y-auto rounded-2xl bg-white opacity-0 transition-all duration-500 border-top-3 group-hover:max-h-62 group-hover:opacity-100 dark:bg-zinc-700"
            >
              <div className="mt-6 flex items-center justify-between px-6 tracking-tighter">
                <span> 2مورد </span>
                <span className="flex cursor-pointer items-center tracking-tighter hover:text-orange-300">
                  {" "}
                  مشاهده سبد خرید
                  <span className="size-5"> {chevronLeft} </span>
                </span>
              </div>

              <div>
                <ShoppedProductBox
                  item={shoppingCartItems[0]}
                  sizeImg="120"
                  discountSize="text-xs"
                  priceSize="text-xl"
                  priceSpanSize="text-sm"
                  // reverseRow="flex-row-reverse"
                />

                {/* <p className="mx-auto mt-5 h-px w-9/10 bg-gray-300"></p> */}

                <ShoppedProductBox
                  item={shoppingCartItems[1]}
                  sizeImg="120"
                  discountSize="text-xs"
                  priceSize="text-xl"
                  priceSpanSize="text-sm"
                  // reverseRow="flex-row-reverse"
                />
              </div>
              <RegisteredOrder
                reverseRow="flex-row-reverse"
                fontSize="text-xl"
              />
              {/* <p className="mx-auto mt-5 h-px w-9/10 bg-gray-300 dark:bg-paleWhite"></p> */}
            </div>
          </div>

          {/* </span> */}
          <span
            className={`${transitionClass} hover:text-orange-300 md:size-6 lg:size-7 xl:size-8.5`}
            onClick={themeHandler}
          >
            {theme ? items[1].svg : lightSvg}
          </span>
        </div>

        <div className="h-14 w-px bg-[#FFFFFF33] md:mx-3 lg:mx-8"></div>

        <div
          className={`relative flex items-center gap-x-1.5 ${transitionClass} group ml-5 px-5 py-3 hover:text-orange-300`}
        >
          <span className="h-6 w-6 xl:h-8.5 xl:w-8.5">{items[0].svg}</span>

          <span className="hidden lg:inline-block"> {items[0].title} </span>

          <ul className="absolute top-15 left-10 flex max-h-0 w-50 translate-y-2 flex-col space-y-1.5 overflow-hidden rounded-2xl bg-white px-5 text-zinc-700 opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-100 group-hover:translate-y-0 group-hover:border-t-[3px] group-hover:p-6 group-hover:pt-3 group-hover:opacity-100 dark:bg-zinc-700 dark:text-white">
            {userAccountItems.map((item) => (
              <li
                key={item.id}
                className="flex cursor-pointer items-center justify-center gap-x-2.5 rounded-md py-3 text-nowrap transition-colors duration-200 ease-in-out hover:bg-[#FED7AA33] hover:text-orange-300"
              >
                <span className="block size-5">{item.svg}</span>

                <span>{item.title}</span>
              </li>
            ))}

            <div className="h-px w-full bg-gray-300 dark:bg-paleWhite" />

            <li className="flex cursor-pointer items-center justify-center gap-x-2.5 rounded-md py-3 text-nowrap transition-colors duration-200 ease-in-out hover:bg-[#F871711A] hover:text-red-400">
              <span className="block size-5">{items[0].svg}</span>

              <span>خروج از حساب</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderList;
