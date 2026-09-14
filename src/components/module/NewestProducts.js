import { chevronLeft } from "@/src/constants/chevrons";
import React from "react";
import ProductCard from "./ProductCard";
import productItems from "@/src/constants/productItems";

function NewestProducts() {
  return (
    <div className="container dark:text-white">
      <h2 className="font-Morabba text-2xl font-medium lg:text-5xl">
        {" "}
        جدیدترین محصولات{" "}
      </h2>

      <div className="mt-0.5 flex justify-between md:mt-1">
        <p className="font-Morabba text-lg lg:text-3xl">
          {" "}
          فرآوری شده از دانه قهوه{" "}
        </p>
        <p className="flex cursor-pointer items-center rounded-md pr-3 pl-1.5 tracking-tightest text-orange-300 transition-colors duration-200 ease-in-out md:gap-x-0.5 md:hover:bg-[#FED7AA33]">
          {" "}
          مشاهده همه <span className="hidden md:block"> محصولات </span>{" "}
          <span className="size-5"> {chevronLeft} </span>
        </p>
      </div>

      <div className="mt-6 grid gap-3.5 md:gap-5 xs:grid-cols-2 md:mt-10 md:grid-cols-3 xl:grid-cols-4 place-items-center">
        {productItems.map((item) => (
          <ProductCard
            key={item.id}
            number={item.number}
            discount={item.discount}
            title={item.title}
            subTitle={item.subTitle}
            price={item.price}
            strikethroughPrice={item.strikethroughPrice}
          />
        ))}
      </div>
    </div>
  );
}

export default NewestProducts;
