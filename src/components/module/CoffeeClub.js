import coffeeClubEvents from "@/src/constants/coffeeClubEvents";
import { chevronLeft } from "@/src/constants/chevrons";
import { BASE_PATH } from "@/src/config/site";
import Image from "next/image";
import React from "react";
import CoffeeClubEventElement from "../elements/CoffeeClubEventElement";

// background: linear-gradient(90deg, #10B981 0%, #059669 100%);

function CoffeeClub() {
  return (
    <section id="دیکشنری">
      <div className="container mt-8 mb-10 md:mt-15">
        <div className="container flex flex-col md:gap-x-5 lg:gap-x-4 items-center justify-center rounded-2xl bg-linear-to-r from-emerald-500 to-emerald-600 px-3 py-10 text-white md:pl-14 md:flex-row md:justify-between lg:items-center lg:px-11">
          <div className="flex w-full items-center justify-center gap-x-3 max-xs:flex max-xs:flex-col max-xs:items-center max-xs:justify-center max-xs:space-y-4 max-xs:text-center md:w-1/2 md:gap-x-6">
            <Image
              src={`${BASE_PATH}/images/diamond.png`}
              width={87}
              height={78}
              alt="diamond-photo"
              className="h-19.5 w-22 lg:h-24 lg:w-28"
            />

            <div className="font-Morabba">
              <h2 className="text-2xl font-bold lg:text-5xl"> کافی کلاب </h2>
              <p className="mt-1 text-lg leading-7 font-light lg:mt-4 lg:text-2xl xl:text-nowrap">
                {" "}
                میدونستی میتونی با امتیاز هات قهوه بگیری؟{" "}
              </p>
            </div>
          </div>

          <div className="mt-5 flex w-full justify-center gap-x-6 max-xs:flex-col max-xs:items-center max-xs:justify-center max-xs:gap-y-5 max-xs:text-center md:w-1/2 md:justify-between md:gap-x-3 lg:w-1/2 lg:justify-between xl:mr-30">
            <div className="flex gap-x-3">
              {coffeeClubEvents.map((event) => (
                <CoffeeClubEventElement
                  key={event.id}
                  svg={event.svg}
                  title={event.title}
                />
              ))}
            </div>

            <div className="font-Dana text-xs lg:text-sm">
              <p className="pr-2.5 text-2xl font-semibold lg:text-3xl"> 542 </p>
              <p className="pr-2.5"> امتیاز شما </p>
              <p className="mt-1.5 flex items-center rounded-full bg-linear-to-r from-orange-200 to-orange-300 px-2 py-1.5 text-xs text-nowrap md:px-3 md:text-sm">
                {" "}
                دریافت جایزه{" "}
                <span className="size-5 md:size-6"> {chevronLeft} </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// background: linear-gradient(270deg, #FDBA74 0%, #FED7AA 100%);

export default CoffeeClub;
