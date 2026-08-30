import React from "react";

function CoffeeClubEventElement({ title, svg }) {
  return (
    <div className="font-Dana flex w-18 h-full flex-col items-center justify-center gap-y-2 rounded-2xl bg-white p-2 text-emerald-600 lg:w-24.5 lg:h-24.5">
      <p className="w-8 h-8 lg:w-12 lg:h-12"> {svg} </p>
      <p className="text-xs font-medium lg:text-sm"> {title} </p>
    </div>
  );
}

export default CoffeeClubEventElement;
