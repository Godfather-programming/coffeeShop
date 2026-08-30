import React from "react";

function FooterAddressItem({ svg, text }) {
  return (
    <p className="flex gap-x-2 hover:text-orange-300">
      {" "}
      <span className="block size-5">{svg}</span> {text}
    </p>
  );
}

export default FooterAddressItem;
