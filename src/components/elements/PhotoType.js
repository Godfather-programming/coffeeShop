import React from "react";

function PhotoType({ photo, title, subTitle }) {
  return (
    <div
      className={`relative h-40 w-full rounded-2xl ${photo} bg-cover bg-center sm:h-50`}
    >
      <div className="absolute inset-y-0 right-0 left-0 mr-12 flex flex-col gap-y-3 font-Dana text-white justify-center">
        <h2 className="text-2xl font-semibold sm:text-4xl md:text-2xl">
          {" "}
          {title}{" "}
        </h2>
        <p className="text-xl md:text-base"> {subTitle} </p>
      </div>
    </div>
  );
}

export default PhotoType;
