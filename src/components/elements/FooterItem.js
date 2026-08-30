import React from "react";

function FooterItem({ text }) {
  return (
    <li className="flex items-center gap-x-2 hover:text-orange-300 text-nowrap">
      <span className="block h-1 w-2 rounded-[23px] bg-gray-300 hover:bg-orange-300"></span>
      {text}
    </li>
  );
}

export default FooterItem;
