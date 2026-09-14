import React from "react";

function AboutUsCard({ svg, title, subTitle }) {
  return (
    <div className="flex flex-col items-center justify-center text-center font-Dana lg:items-center lg:justify-center xl:flex-row xl:text-right xl:gap-x-2">
      <div
        className={`flex h-18 w-17 items-center justify-center md:size-25 ${title === "پشتیبانی شبانه روزی" && "mt-"}`}
      >
        {" "}
        {svg}{" "}
      </div>
      <div>
        <h3 className="mt-4 text-sm font-semibold md:text-lg/6"> {title} </h3>
        <p className="mt-2.5 text-xs md:text-sm/6"> {subTitle} </p>
      </div>
    </div>
  );
}

export default AboutUsCard;
