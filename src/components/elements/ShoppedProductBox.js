import Image from "next/image";
import Link from "next/link";
import { BASE_PATH } from "../../config/site";
import React from "react";

function ShoppedProductBox({
  item,
  sizeImg,
  titleSize,
  discountSize,
  priceSize,
  priceSpanSize,
  reverseRow,
}) {
  return (
    <>
      <div className="mt-4 flex items-center justify-center p-2 pb-0 text-zinc-700">
        <div className={`shrink-0`}>
          <Image
            src={`${BASE_PATH}${item.img}`}
            alt="product-photo"
            width={Number(sizeImg)}
            height={Number(sizeImg)}
            className={``}
          />
        </div>

        <div className="space-y-2 font-Dana font-medium dark:text-white">
          <p className={`${titleSize} line-clamp-2 max-w-53`}>{item.title}</p>
          <p className={`${discountSize} tracking-tighter text-teal-600 dark:text-emerald-500`}>
            {" "}
            {item.discount}{" "}
          </p>
          <p className={`font-Dana font-semibold ${priceSize}`}>
            {" "}
            {item.price}{" "}
            <span className={`font-Dana font-normal ${priceSpanSize}`}>
              {" "}
              تومان{" "}
            </span>{" "}
          </p>
        </div>
      </div>

      <p className="mx-auto mt-5 h-px w-9/10 bg-gray-100 dark:bg-white/10"></p>
    </>
  );
}

export default ShoppedProductBox;
