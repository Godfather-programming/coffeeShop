import Link from "next/link";
import React from "react";

function FooterAddressItem({ id, svg, text, text1, text2 }) {
  return (
    <div className={`flex items-start gap-x-2 hover:text-orange-300 md:gap-x-3 text-base/[26px] md:text-xl ${id === 2 && "text-orange-200"}`}>
      {" "}
      <span className="block size-5 mt-0.5 shrink-0">{svg}</span>
      {id === 3 ? (
        <div className="flex gap-x-5 md:gap-x-6">
          <span dir="ltr" className="text-wrap xl:max-w-md 2xl:max-w-none">
            {" "}
            {text1}{" "}
          </span>
          <span dir="ltr" className="text-wrap xl:max-w-md 2xl:max-w-none">
            {" "}
            {text2}{" "}
          </span>
        </div>
      ) : id === 2 ? (
        <Link href={`mailto:${text}`} className="text-wrap xl:max-w-md 2xl:max-w-none"> {text} </Link>
      ) : <span className="text-wrap xl:max-w-md 2xl:max-w-none"> {text} </span>}
    </div>
  );
}

export default FooterAddressItem;
