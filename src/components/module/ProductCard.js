import { headerShoppingCartSvg } from "@/src/constants/headerSvgs";
import { arrowsRightLeft, star } from "@/src/constants/homePageSvgs";
import Image from "next/image";
import React from "react";

function ProductCard({
  number,
  title,
  discount,
  subTitle,
  price,
  strikethroughPrice,
  display,
}) {
  return (
    // <>
    <div
      className={`relative mt-10 flex flex-col rounded-2xl bg-white p-2.5 shadow-app dark:bg-zinc-700 ${display && "max-sm:hidden"}`}
    >
      {discount && (
        <div className="absolute right-4 flex h-5 w-10 items-center justify-center rounded-full bg-orange-300 pt-1.5 font-Dana text-xs font-semibold text-white lg:h-7.5 lg:w-12.5 lg:text-base dark:text-zinc-700">
          {" "}
          {discount}{" "}
        </div>
      )}{" "}
      <div className="mx-auto h-32 w-32">
        <Image
          alt="product-photo"
          width={128}
          height={128}
          src={`/images/products/p${number}.png`}
          className="h-full w-full"
        />{" "}
      </div>
      <h3 className="mt-2 line-clamp-2 font-Dana text-sm leading-7 font-medium lg:text-xl dark:text-white">
        {title}
      </h3>
      <div
        className={`mt-2 font-Dana font-semibold ${subTitle && "font-normal"}`}
      >
        {subTitle && (
          <span className="text-red-400 lg:text-xl"> فعلا موجود نیست </span>
        )}

        {price && strikethroughPrice && (
          <div className="flex">
            <p className="flex items-center gap-x-1 text-teal-600">
              <span className="lg:text-xl"> {price}</span>
              <span className="letter font-Dana text-xs font-normal tracking-tight lg:text-sm">
                تومان
              </span>
            </p>

            <span className="mr-1 flex items-center font-Dana text-xs font-normal text-gray-400 line-through decoration-red-500 lg:text-xl">
              {strikethroughPrice}
              <span className="hidden text-sm lg:block"> تومان </span>
            </span>
          </div>
        )}

        {price && !strikethroughPrice && (
          <div className="flex items-center gap-x-1 text-teal-600">
            <span className="lg:text-xl"> {price}</span>
            <span className="letter font-Dana text-xs font-normal tracking-tight lg:text-sm">
              تومان
            </span>
          </div>
        )}
      </div>
      <div className="mt-2.5 flex items-center justify-between">
        <div className="flex items-center gap-x-2.5">
          <span className="flex size-6 items-center justify-center rounded-full bg-gray-100 transition-colors duration-200 ease-in-out hover:bg-teal-600 sm:size-9 dark:bg-zinc-800 dark:hover:bg-emerald-500">
            {" "}
            <span className="inline-block size-4 text-gray-400 transition-colors duration-200 ease-in-out hover:text-white sm:size-5.5">
              {" "}
              {headerShoppingCartSvg}{" "}
            </span>{" "}
          </span>
          <span className="inline-block h-4 w-4 text-gray-400 transition-colors duration-200 ease-in-out hover:text-teal-600 sm:h-6 sm:w-6 dark:hover:text-emerald-500">
            {arrowsRightLeft}
          </span>
        </div>

        <span className="flex">
          <span className="text-gray-300"> {star} </span>
          <span className="flex text-yellow-400">
            {star}
            {star}
            {star}
            {star}
          </span>
        </span>
      </div>
    </div>

    // </>
  );
}

export default ProductCard;
