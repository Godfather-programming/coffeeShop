import { appLogoType, arrowLeft } from "@/src/constants/homePageSvgs";
import Image from "next/image";
import React from "react";

function Article({ number, title, dateNumber, dateMonth, date }) {
  return (
    <div className="flex h-37.5 w-full items-center rounded-2xl bg-white px-3 py-8 md:h-68 md:flex-col md:p-3 dark:bg-zinc-700 group cursor-pointer">

      <div className="relative h-31.5 w-4/10 shrink-0 overflow-hidden rounded-2xl md:h-45 md:w-full">
      <div className="absolute bg-[linear-gradient(90deg,#FED7AA_0%,#FDBA74_100%)] flex items-center justify-center h-full w-full text-amber-900 opacity-0 group-hover:opacity-80 transition-opacity duration-200 ease-in-out">
        {" "}
        <span className="block w-35 h-9.5"> {appLogoType} </span>{" "}
      </div>
        <Image
          src={`/images/blogs/blog-${number}.png`}
          alt="reading-article"
          width={110}
          height={110}
          className="block h-full w-full object-cover"
        />
      </div>

      <div className="mr-4 w-full space-y-4 font-Dana md:mt-2 md:flex md:items-center md:justify-between md:pl-4">
        <h3 className="mt-1.5 line-clamp-2 text-sm/7 font-medium md:max-w-35 md:text-lg xl:max-w-45 2xl:max-w-55 dark:text-white">
          {title}
        </h3>

        {/* <div className="md:flex w-full h-full items-center "> */}
        <p className="mt-6 h-px w-full bg-gray-100 md:h-75/100 md:w-px dark:bg-[#ffffff1a]"></p>

        <div className="flex items-center justify-between text-xs">
          <span className="text-nowrap text-teal-600">
            {" "}
            <span className="md:block md:text-2xl"> {dateNumber} </span>{" "}
            <span className="md:block"> {dateMonth} </span>
            <span className="md:block"> {date} </span>
          </span>

          <span className="flex items-center justify-center gap-x-1 rounded-md bg-orange-200/20 px-2 py-1.5 text-orange-300 md:hidden">
            مطالعه
            <span className="block size-4">{arrowLeft}</span>
          </span>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Article;
