import { appLogoType, arrowLeft } from "@/src/constants/homePageSvgs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Article({ number, title, dateNumber, dateMonth, date }) {
  return (
    <div className="flex h-37.5 w-full items-center rounded-2xl bg-white px-2.5 py-8 md:h-68 md:flex-col md:p-3 dark:bg-zinc-700">
      <Link href="#" className="group relative h-31.5 w-4/10 shrink-0 overflow-hidden rounded-2xl rounded-bl-32 md:h-45 md:w-full">
        <div className="md:group-hover: absolute flex h-full w-full items-center justify-center bg-linear-to-r from-orange-200/80 to-orange-300/80 text-amber-900 transition-opacity duration-200 delay-150 ease-in-out invisible opacity-0 group-hover:visible group-hover:opacity-100">
          {" "}
          <span className="block h-9.5 w-35"> {appLogoType} </span>{" "}
        </div>
        <Image
          src={`/images/blogs/blog-${number}.png`}
          alt="reading-article"
          width={110}
          height={110}
          className="block h-full w-full object-cover"
        />
      </Link>

      <div className="mr-3 w-full space-y-4 font-Dana md:mr-4 md:mt-2 md:flex md:items-center md:justify-between md:pl-6">
        <h3 className="mt-1.5 line-clamp-2 max-w-70 text-sm/7 font-medium md:max-w-35 md:font-Dana md:text-lg xl:max-w-45 2xl:max-w-55 dark:text-white">
          {title}
        </h3>

        {/* <div className="md:flex w-full h-full items-center "> */}
        <p className="mt-4 h-px w-full ml-3 bg-gray-100 md:hidden lg:block md:h-75/100 md:w-px dark:bg-paleWhite"></p>

        <div className="flex items-center justify-between text-xs">
          <span className="text-nowrap text-teal-600 dark:text-emerald-500 text-left">
            {" "}
            <span className="md:block md:text-2xl h-6.5"> {dateNumber} </span>{" "}
            <span className="md:block"> {dateMonth} </span>
            <span className="md:block"> {date} </span>
          </span>

          <span className="flex items-center justify-center gap-x-1 rounded-md bg-orange-200/20 px-2 py-1.5 text-orange-300 md:hidden">
          <span className="mt-0.5"> مطالعه </span> 
            <span className="block size-4">{arrowLeft}</span>
          </span>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Article;
