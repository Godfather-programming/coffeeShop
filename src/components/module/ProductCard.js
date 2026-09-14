import { headerShoppingCartSvg } from "@/src/constants/headerSvgs";
import { arrowsRightLeft, star } from "@/src/constants/homePageSvgs";
import { BASE_PATH } from "@/src/config/site";
import Image from "next/image";
import Link from "next/link";
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
      // className={`relative flex w-full flex-col rounded-2xl bg-white p-2 shadow-app md:p-5 dark:bg-zinc-700
      //  ${display && "max-sm:hidden"}`}
      className={`relative flex w-full flex-col rounded-2xl bg-white p-2 shadow-app md:p-5 dark:bg-zinc-700`}
    >
      {discount && (
        <div className="absolute right-4 flex h-5 w-10 items-center justify-center rounded-full bg-orange-300 pt-1.5 font-Dana text-xs font-semibold text-white lg:h-7.5 lg:w-12.5 lg:text-base dark:text-zinc-700">
          {" "}
          {discount}{" "}
        </div>
      )}{" "}
      <div className="mx-auto size-32 lg:size-65">
        <Link href="#">
          <Image
            alt="product-photo"
            width={128}
            height={128}
            loading="lazy"
            src={`${BASE_PATH}/images/products/p${number}.png`}
            className="h-full w-full"
          />{" "}
        </Link>
      </div>
      <h3 className="mt-2 line-clamp-2 h-10 font-Dana text-sm font-medium transition-colors duration-200 hover:cursor-pointer hover:text-emerald-500 md:mt-5 md:h-14 md:leading-7 lg:text-xl dark:text-white dark:hover:text-teal-500">
        {title}
      </h3>
      <div
        className={`mt-1 font-Dana font-semibold md:mt-2.5 ${subTitle && "font-normal"}`}
      >
        {subTitle && (
          <span className="text-red-400 lg:text-xl"> فعلا موجود نیست </span>
        )}

        {price && strikethroughPrice && (
          <div className="flex">
            <p className="flex items-center gap-x-1 text-teal-600 dark:text-emerald-500">
              <span className="md:text-xl"> {price}</span>
              <span className="letter font-Dana text-xs font-normal tracking-tighter sm:text-sm">
                تومان
              </span>
            </p>

            <span className="relative mr-1 flex items-center font-Dana text-sm font-normal text-gray-400 md:text-xl">
              {strikethroughPrice}
              <span className="hidden text-sm sm:block"> تومان </span>
              <span className="absolute inset-0 bottom-px m-auto h-px w-full bg-red-500">
                {" "}
              </span>
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
        <div className="flex items-center gap-x-3">
          <span className="group flex size-6 cursor-pointer items-center justify-center rounded-full bg-gray-100 transition-colors duration-200 ease-in-out hover:bg-teal-600 sm:size-9 dark:bg-zinc-800 dark:hover:bg-emerald-500">
            {" "}
            <span className="inline-block size-4 text-gray-400 transition-colors duration-200 ease-in-out group-hover:text-white sm:size-5.5">
              {" "}
              {headerShoppingCartSvg}{" "}
            </span>{" "}
          </span>
          <span className="inline-block h-4 w-4 cursor-pointer text-gray-400 transition-colors duration-200 ease-in-out hover:text-teal-600 sm:h-6 sm:w-6 dark:hover:text-emerald-500">
            {arrowsRightLeft}
          </span>
        </div>

        <span className="flex">
          <span className="text-gray-300 dark:text-gray-400"> {star} </span>
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

