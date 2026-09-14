import Link from "next/link";
import React from "react";

function PhotoType({ photo, title, subTitle }) {
  return (
      <Link href='#' className={`relative h-40 w-full rounded-2xl ${photo} bg-cover bg-center sm:h-50`}>
    {/* <div> */}
        <span className="absolute inset-y-0 right-0 left-0 mr-10 flex flex-col justify-center gap-y-3 font-Dana text-white md:mr-12 md:gap-y-4">
          <span className="text-2xl font-semibold md:text-2xl"> {title} </span>
          <span className="text-xl md:text-base"> {subTitle} </span>
        </span>
    {/* </div> */}
      </Link>
  );
}

export default PhotoType;
