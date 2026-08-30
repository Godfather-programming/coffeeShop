import categoriesImages from "@/src/constants/categoriesImages";
import Image from "next/image";
import React from "react";
import PhotoType from "../elements/PhotoType";

function CoffeeTypes() {
  return (
    <>
      <div className="mt-12 mb-20 space-y-8 grid md:grid-cols-2 md:gap-x-5">
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

      <div className="flex flex-wrap justify-between gap-10 max-xl:justify-center">
        {categoriesImages.map((item) => (
          <div key={item.id} className="flex w-50 h-60 flex-col items-center dark:text-white">
            <div
              className="h-40 w-40 bg-cover bg-center bg-no-repeat lg:w-full lg:h-full"
              style={{ backgroundImage: `url(${item.src})` }}
            ></div>
            <p className="mt-3 max-w-16.5 text-center font-Dana text-sm font-semibold sm:max-w-max lg:text-xl">
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
