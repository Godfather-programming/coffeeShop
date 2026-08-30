import Link from "next/link";
import React from "react";

function RegisteredOrder({ reverseRow, fontSize }) {
  return (
    <div
      className={`mb-8 flex items-center ${reverseRow ? "mt-5 justify-between px-6" : "gap-x-3"} ${reverseRow} px-2 font-Dana`}
    >
      <Link
        href="#"
        className={`font-Dana ${fontSize === "text-base" ? "h-11" : "h-14"} ${fontSize === "text-base" ? "w-28" : "w-36"} rounded-xl bg-teal-600 text-center ${fontSize === "text-base" ? "leading-11" : "leading-14"} ${fontSize} text-white hover:bg-teal-700`}
      >
        ثبت سفارش
      </Link>
      <div className={`space-y-1.5 ${reverseRow && "text-zinc-700"}`}>
        <p className="text-xs font-medium text-gray-300"> مبلغ قابل پرداخت </p>
        <p className="font-semibold dark:text-white">
          {" "}
          350,000{" "}
          <span className="font-Dana text-xs font-normal"> تومان </span>{" "}
        </p>
      </div>
    </div>
  );
}

export default RegisteredOrder;
