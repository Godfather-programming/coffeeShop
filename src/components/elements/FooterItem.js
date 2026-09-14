import React from "react";

function FooterItem({ text }) {
  return (
    <li className="flex items-center gap-x-2 md:gap-x-3 text-nowrap hover:text-orange-300 transition-colors duration-200 cursor-pointer">
      <span className="block h-1 w-2 rounded-full bg-current"></span>
      {text}
    </li>
  );
}

export default FooterItem;
