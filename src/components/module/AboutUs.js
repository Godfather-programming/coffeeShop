import React from "react";
import ServiceCard from "./AboutUsCard";
import servicesItems from "@/src/constants/servicesItems";

function Services() {
  return (
    <section id="درباره ما">
      <div className="container pl-5.5 relative mb-12 md:mb-36 grid grid-cols-2 place-items-center gap-y-11 md:flex md:justify-between">
        <p className="absolute inset-y-0 my-auto h-px w-9/10 bg-gray-300 dark:bg-paleWhite md:hidden">
          {" "}
        </p>
        <p className="absolute inset-x-0 mx-auto h-[110%] w-px bg-gray-300 dark:bg-paleWhite md:hidden">
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

export default Services;
