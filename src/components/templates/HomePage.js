import React from "react";
import Introduction from "../module/Introduction";

function HomePage({open, hamburgerHandler}) {
  return (
    <div className="font-Dana mt-16">
      <Introduction open={open} hamburgerHandler={hamburgerHandler}/>
    </div>
  );
}

export default HomePage;
