"use client";

import { chevronDown } from "@/src/constants/chevrons";
import coffeeList from "@/src/constants/coffeeList";
import { lightSvg } from "@/src/constants/homePageSvgs";
import { mobileMenuItems2 } from "@/src/constants/mobileMenuItems";
import React, { useEffect, useState } from "react";

function Item({
  selected,
  open,
  title,
  style,
  className,
  svg,
  clickHandler,
  setMobileItems1,
  setMobileItems2,
}) {
  const [dark, setDark] = useState(false);
  const [list, setLists] = useState(false);

  const darkSvg = mobileMenuItems2.find(item => item.id === 2).svg

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    console.log(theme);


    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDark(false);
    }
  }, []);

  const switchThemeHandler = () => {
    setMobileItems1((prev) =>
      prev.map((item) => ({
        ...item,
        selected: false,
      })),
    );

    const isDark = document.documentElement.classList.toggle("dark");
    console.log(isDark);

    setMobileItems2((prev) =>
      prev.map((item) =>
        item.id === 2
          ? {
              ...item,
              title: isDark ? "تم روشن" : "تم تیره",
              svg: isDark ? lightSvg : darkSvg,
              selected: item.title === title,
            }
          : { ...item, selected: item.title === title },
      ),
    );

    setDark(isDark);

    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <>
      <div className="group">
        <li
          className={`group relative flex cursor-pointer items-center justify-between rounded-md p-4 ${className} ${
            selected ? "bg-[#fed7aa20] text-orange-300" : "text-zinc-700"
          } dark:text-white ${className && "hover:text-orange-300!} before:absolute before:top-1/2 before:right-6 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-orange-300 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"}`}
          // className={`${open === true ?  `group relative flex cursor-pointer items-center justify-between rounded-md p-4 ${className} ${
          //   selected ? "bg-[#fed7aa20] text-orange-300" : "text-zinc-700"
          // } dark:text-white ${className && "hover:text-orange-300!} before:absolute before:top-1/2 before:right-6 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-orange-300 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"} `: className}`}
          onClick={
            title === "تم تیره" || title === "تم روشن"
              ? switchThemeHandler
              : clickHandler
          }
        >
          <div className="flex items-center gap-x-3">
            <span className="h-6 w-6"> {svg} </span>
            {title}
          </div>

          {title === "فروشگاه" && chevronDown}
        </li>

        {title === "فروشگاه" && (
          <ul className="max-h-0 -translate-y-2 overflow-hidden pr-4 opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-96 group-hover:translate-y-0 group-hover:opacity-100">
            {/* <Item title="قهوه ویژه" className="py-2 pr-13" />
            <Item title="ویژه در سطح جهانی" className="py-2 pr-13" />
            <Item title="قهوه درجه یک" className="py-2 pr-13" />
            <Item title="ترکیبات تجاری" className="py-2 pr-13" />
            <Item title="کپسول قهوه" className="py-2 pr-13" />
            <Item title="قهوه زینو برزیلی" className="py-2 pr-13" /> */}

            {coffeeList.map((item) => (
              <Item
                key={item.id}
                title={item.title}
                className="py-2 pr-3 transition-colors duration-200 hover:text-orange-300"
              />
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Item;
