"use client";

import React, { useEffect, useState } from "react";

function Item({
  selected,
  title,
  className,
  svg,
  clickHandler,
  setMobileItems1,
  setMobileItems2,
}) {
  const [dark, setDark] = useState(false);
  const [list, setLists] = useState(false);

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
          onClick={
            title === "تم تیره" || title === "تم روشن"
              ? switchThemeHandler
              : clickHandler
          }
        >
          <div className="flex items-center gap-x-3">
            {svg}
            {title}
          </div>

          {title === "فروشگاه" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 transition-transform duration-500 group-hover:rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </li>

        {title === "فروشگاه" && (
          <ul className="max-h-0 -translate-y-2 overflow-hidden pr-4 opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-96 group-hover:translate-y-0 group-hover:opacity-100">
            <Item title="قهوه ویژه" className="py-2 pr-13" />
            <Item title="ویژه در سطح جهانی" className="py-2 pr-13" />
            <Item title="قهوه درجه یک" className="py-2 pr-13" />
            <Item title="ترکیبات تجاری" className="py-2 pr-13" />
            <Item title="کپسول قهوه" className="py-2 pr-13" />
            <Item title="قهوه زینو برزیلی" className="py-2 pr-13" />
          </ul>
        )}
      </div>
    </>
  );
}

export default Item;


