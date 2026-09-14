"use client";

import bestSellingProducts from "@/src/constants/bestSellingProducts";
import { chevronLeft, chevronRight } from "@/src/constants/chevrons";
import React, { useRef, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function BestSellingProducts() {
  const [bestSellingCorps, setBestSellingCorps] = useState(bestSellingProducts);

  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current;

    if (!swiper) return;

    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;

    swiper.params.pagination.el = paginationRef.current;
    swiper.params.pagination.clickable = true;

    swiper.init();

    swiper.navigation.init();
    swiper.navigation.update();

    swiper.pagination.init();
    swiper.pagination.render();
    swiper.pagination.update();
  }, []);

  return (
    <div className="container mt-8 md:mt-15 dark:text-white">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-Morabba text-2xl font-medium lg:text-5xl">
            محصولات پرفروش
          </h2>

          <p className="mt-3 font-Morabba text-lg font-light lg:text-3xl">
            پیشنهاد قهوه خورها...
          </p>
        </div>

        {/* Custom navigation */}
        <div className="flex items-center gap-x-3 md:gap-x-4.5">
          <button
            ref={prevRef}
            type="button"
            className="flex size-9 items-center justify-center rounded-full bg-white transition-colors duration-200 hover:bg-gray-300 lg:size-11 dark:bg-zinc-700 dark:text-white dark:hover:bg-white dark:hover:text-zinc-700"
          >
            {chevronRight}
          </button>

          <button
            ref={nextRef}
            type="button"
            className="flex size-9 items-center justify-center rounded-full bg-white transition-colors duration-200 hover:bg-gray-300 lg:size-11 dark:bg-zinc-700 dark:text-white dark:hover:bg-white dark:hover:text-zinc-700"
          >
            {chevronLeft}
          </button>
        </div>
      </div>

      {/* Swiper */}
      <div className="mt-5 w-full md:mt-10">
        <Swiper
          modules={[Navigation, Pagination]}
          init={false}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={14}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 14,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 14,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          // className="w-screen max-w-none bg-blue-300"
        >
          {bestSellingCorps.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">
              <ProductCard
                discount={item.discount}
                number={item.number}
                price={item.price}
                strikethroughPrice={item.strikethroughPrice}
                subTitle={item.subTitle}
                title={item.title}
                display={item.display}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* External Pagination */}
        <div
          ref={paginationRef}
          className="swiper-pagination static! mt-6! flex! w-full! translate-y-0! justify-center! gap-x-1.5!"
        />
      </div>
    </div>
  );
}

export default BestSellingProducts;

// function BestSellingProducts() {
//   const [bestSellingCorps, setBestSellingCorps] = useState(bestSellingProducts);

//   const swiperRef = useRef(null);
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   return (
//     <div className="container mt-8 dark:text-white">
//       <div className="flex items-center justify-between">
//         <div>
//           <h2 className="font-Morabba text-2xl font-medium lg:text-5xl">
//             محصولات پرفروش
//           </h2>

//           <p className="mt-3 font-Morabba text-lg font-light lg:text-3xl">
//             پیشنهاد قهوه خورها...
//           </p>
//         </div>

//         <div className="flex items-center gap-x-3 md:gap-x-4.5">
//           <button
//             ref={prevRef}
//             type="button"
//             className="flex size-9 items-center justify-center rounded-full bg-white transition-colors duration-200 hover:bg-gray-300 lg:size-11 dark:bg-zinc-700 dark:text-white dark:hover:bg-white dark:hover:text-zinc-700"
//           >
//             {chevronRight}
//           </button>

//           <button
//             ref={nextRef}
//             type="button"
//             className="flex size-9 items-center justify-center rounded-full bg-white transition-colors duration-200 hover:bg-gray-300 lg:size-11 dark:bg-zinc-700 dark:text-white dark:hover:bg-white dark:hover:text-zinc-700"
//           >
//             {chevronLeft}
//           </button>
//         </div>
//       </div>

//       <div className="mt-5 mb-24 w-full md:mt-10">
//         <Swiper
//           modules={[Navigation, Pagination]}
//           onSwiper={(swiper) => {
//             swiperRef.current = swiper;
//           }}
//           onBeforeInit={(swiper) => {
//             swiper.params.navigation.prevEl = prevRef.current;
//             swiper.params.navigation.nextEl = nextRef.current;
//           }}
//           onInit={(swiper) => {
//             swiper.navigation.init();
//             swiper.navigation.update();
//           }}
//           navigation
//           pagination={{ clickable: true }}
//           spaceBetween={20}
//           breakpoints={{
//             0: {
//               slidesPerView: 1,
//             },
//             768: {
//               slidesPerView: 2,
//             },
//             1200: {
//               slidesPerView: 3,
//             },
//           }}
//           className="w-full [&_.swiper-pagination]:bottom-0! [&_.swiper-pagination]:translate-y-4!"
//         >
//           {bestSellingCorps.map((item) => (
//             <SwiperSlide key={item.id} className="h-auto">
//               <ProductCard
//                 discount={item.discount}
//                 number={item.number}
//                 price={item.price}
//                 strikethroughPrice={item.strikethroughPrice}
//                 subTitle={item.subTitle}
//                 title={item.title}
//                 display={item.display}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }

// export default BestSellingProducts;
