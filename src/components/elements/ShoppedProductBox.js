import Image from "next/image";
import Link from "next/link";
import React from "react";

function ShoppedProductBox({
  item,
  sizeImg,
  titleSize,
  discountSize,
  priceSize,
  priceSpanSize,
  reverseRow
}) {
  return (
    <>
      <div className="mt-4 flex items-center justify-center p-2 text-zinc-700">
        <div className={`shrink-0`}>
          <Image
            src={item.img}
            alt="product-photo"
            width={Number(sizeImg)}
            height={Number(sizeImg)}
            className={``}
          />
        </div>

        <div className="space-y-2 font-Dana font-medium dark:text-white">
          <p className={`${titleSize} max-w-53`}>{item.title}</p>
          <p className={`${discountSize} text-teal-600`}> {item.discount} </p>
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

      {/* {reverseRow && <p className="h-px w-90 bg-gray-300 mt-5 mx-auto flex-row-reverse"></p>}

      <div className={`mb-8 flex justify-between px-2 font-Dana ${reverseRow}`}>
        <Link
          href="#"
          className="h-11 w-28 rounded-xl bg-teal-600 text-center leading-11 text-white"
        >
          ثبت سفارش
        </Link>
        <div className="space-y-1.5">
          <p className="text-xs font-medium text-gray-300">
            {" "}
            مبلغ قابل پرداخت{" "}
          </p>
          <p className="font-semibold dark:text-white">
            {" "}
            350,000{" "}
            <span className="font-Dana text-xs font-normal"> تومان </span>{" "}
          </p>
        </div>
      </div> */}

      
    </>
  );
}

export default ShoppedProductBox;
