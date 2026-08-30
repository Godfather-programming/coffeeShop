"use client";

import bestSellingProducts from "@/src/constants/bestSellingProducts";
import { chevronLeft, chevronRight } from "@/src/constants/chevrons";
import React, { useState } from "react";
import ProductCard from "./ProductCard";

function BestSellingProducts() {
  const [bestSellingCorps, setBestSellingCorps] =
    useState(bestSellingProducts);

  return (
    <div className="mt-8 dark:text-white">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-Morabba text-2xl font-medium lg:text-5xl">
            {" "} 
            محصولات پرفروش{" "}
          </h2>
          <p className="mt-3 font-Morabba text-lg font-light lg:text-3xl">
            {" "}
            پیشنهاد قهوه خورها...{" "}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-full bg-white lg:size-11 hover:bg-gray-300 transition-colors duration-200 ease-in-out dark:text-white dark:bg-zinc-700 dark:hover:bg-white dark:hover:text-zinc-700">
            {chevronRight}
          </span>

          <span className="flex size-9 items-center justify-center rounded-full bg-white lg:size-11 hover:bg-gray-300 transition-colors duration-200 ease-in-out dark:text-white dark:bg-zinc-700 dark:hover:bg-white dark:hover:text-zinc-700">
            {chevronLeft}
          </span>
        </div>
      </div>

      <div className="mb-20 grid gap-x-5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {bestSellingCorps.map((item) => (
          <ProductCard
            key={item.id}
            discount={item.discount}
            number={item.number}
            price={item.price}
            strikethroughPrice={item.strikethroughPrice}
            subTitle={item.subTitle}
            title={item.title}
            display={item.display}
          />
        ))}
      </div>
    </div>
  );
}

export default BestSellingProducts;
