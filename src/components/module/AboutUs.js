import React from "react";
import ServiceCard from "./AboutUsCard";
import servicesItems from "@/src/constants/servicesItems";

function AboutUs() {
  return (
    <section id="درباره ما">
      <div className="container pl-5.5 relative mb-40 grid grid-cols-2 place-items-center gap-y-10 md:flex md:justify-between">
        <p className="absolute top-0 bottom-0 my-auto h-px w-full bg-gray-300 md:hidden">
          {" "}
        </p>
        <p className="absolute right-0 left-0 mx-auto h-full w-px bg-gray-300 md:hidden">
          {" "}
        </p>
        {servicesItems.map((service) => (
          <ServiceCard
            key={service.id}
            svg={service.svg}
            title={service.title}
            subTitle={service.subTitle}
          />
        ))}
      </div>
    </section>
  );
}

export default AboutUs;
