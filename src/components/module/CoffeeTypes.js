import categoriesImages from "@/src/constants/categoriesImages";
import Image from "next/image";
import React from "react";
import PhotoType from "../elements/PhotoType";
import Link from "next/link";

function CoffeeTypes() {
  return (
    <>
      <div className="container mt-20 grid space-y-8 md:grid-cols-2 md:gap-x-5">
        {/* <div
          className="relative h-40 w-full rounded-2xl bg-coffee-gradient bg-cover bg-center"
        >
          <div className="absolute top-0 right-0 left-0 mt-12 mr-12 flex flex-col gap-y-3 font-Dana text-white">
            <h2 className="text-2xl font-semibold"> انواع قهوه </h2>
            <p className="font-"> ترکیبی و تک خاستگاه </p>
          </div>
        </div> */}

        <PhotoType
          photo="bg-coffee-gradient"
          title="انواع قهوه"
          subTitle="ترکیبی و تک خاستگاه"
        />
        <PhotoType
          photo="bg-hotDrinks-gradient"
          title="پودر های فوری"
          subTitle="نسکافه، هات چاکلت، ماسالا"
        />
      </div>

      <div className="container mt-10 flex flex-wrap justify-between gap-x-7.25 gap-y-6 md:gap-15 max-xl:justify-center md:mt-20">
        {categoriesImages.map((item) => (
          <div
            key={item.id}
            className="flex h-60 w-50 flex-col items-center dark:text-white"
          >
            <Link
              href="#"
              className="size-40 bg-cover bg-center bg-no-repeat md:size-50"
              style={{ backgroundImage: `url(${item.src})` }}
            ></Link>
            <p className="mt-2.5 max-w-16.5 text-center font-Dana text-sm font-semibold sm:max-w-max md:text-xl">
              {" "}
              {item.title}{" "}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CoffeeTypes;
