import React from "react";

function AboutUsCard({ svg, title, subTitle }) {
  return (
    <div className="flex flex-col items-center justify-center font-Dana xl:flex-row lg:items-center lg:justify-center text-center">
      <div className="flex h-18 w-17 items-center justify-center md:size-25"> {svg} </div>
      <div>
        <h3 className="mt-4 text-sm font-semibold md:text-lg"> {title} </h3>
        <p className="mt-2.5 text-xs md:text-sm"> {subTitle} </p>
      </div>
    </div>
  );
}

export default AboutUsCard;
