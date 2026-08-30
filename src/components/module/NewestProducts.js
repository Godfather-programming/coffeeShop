import { chevronLeft } from "@/src/constants/chevrons";
import React from "react";
import ProductCard from "./ProductCard";
import productItems from "@/src/constants/productItems";

function NewestProducts() {
  return (
    <div className="mt-50 dark:text-white">
      <h2 className="font-Morabba text-2xl font-medium lg:text-5xl"> جدیدترین محصولات </h2>

      <div className="mt-2 flex justify-between">
        <p className="font-Morabba text-lg lg:text-3xl"> فرآوری شده از دانه قهوه </p>
        <p className="flex items-center gap-x-0.5 text-orange-300 hover:bg-[#FED7AA33] p-3 hover:rounded-md transition-colors duration-200 ease-in-out cursor-pointer">
          {" "}
          مشاهده همه <span className="hidden md:block"> محصولات </span>  <span className="size-5"> {chevronLeft} </span>
        </p>
      </div>

      <div className="mt-2 grid xs:grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4">
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
