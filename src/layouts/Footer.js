import React from "react";
import { appLogo, appLogoType } from "../constants/homePageSvgs";
import { footerFirstList, footerSecondList } from "../constants/footerLists";
import FooterItem from "../components/elements/FooterItem";
import footerAddressItems from "../constants/footerAddressItems";
import FooterAddressItem from "../components/elements/FooterAddressItem";
import Link from "next/link";
import { chevronUp } from "../constants/chevrons";
import userAccountItems from "../constants/userAccountItems";
import Item from "../components/elements/Item";

function Footer() {

  const upHandler = () => {
    const topElement = document.getElementById("صفحه اصلی").offsetTop
    
    window.scrollTo({
      top: topElement,
      behavior: "smooth"
    })
  }

  return (
    <footer id="footer">

    <div className="relative flex flex-col space-y-12 bg-zinc-700 px-5 pb-0 font-Dana text-gray-300 pt-20">
      <div className="flex flex-col xl:items-center xl:justify-center xl:text-xl 2xl:flex-row">
        <div>
          <div className="flex items-center gap-x-4">
            {" "}
            <span className="size-14"> {appLogo} </span>{" "}
            <span className="h-14 w-35"> {appLogoType} </span>{" "}
          </div>
          <p className="mt-5 text-justify text-lg text-gray-300 xl:max-w-221 xl:text-xl/12 2xl:max-w-146">
            ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات
            و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه
            در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت
            به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.
          </p>
        </div>

        <div className="x xl:flex xl:gap-x-12">
          <div className="mt-8 2xl:mr-12">
            <h3 className="text-2xl/7 font-semibold"> دسترسی سریع </h3>

            <div className="mt-5 flex items-center gap-x-10">
              <ul className="space-y-3">
                {footerFirstList.map((item) => (
                  <FooterItem key={item.id} text={item.text} />
                ))}
              </ul>
              <ul className="space-y-3">
                {footerSecondList.map((item) => (
                  <FooterItem key={item.id} text={item.text} />
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl/7 font-semibold"> در تماس باشیم </h3>
            <div className="mt-5 space-y-3">
              {footerAddressItems.map((address) => (
                <FooterAddressItem
                  key={address.id}
                  svg={address.svg}
                  text={address.text}
                />
              ))}
            </div>
            <div className="mt-6 flex gap-x-3">
              <Link
                href="#"
                className="group relative flex h-12 w-5/10 items-center justify-center gap-x-2 overflow-hidden rounded-xl border border-orange-200 px-3 py-5 text-orange-300"
              >
                {/* Gradient */}
                <span className="absolute inset-0 z-0 bg-[linear-gradient(270deg,#FDBA74_0%,#FED7AA_100%)] opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100" />

                {/* Content */}
                <span className="relative z-0 size-6 text-orange-300 transition-colors duration-1000 group-hover:text-zinc-700">
                  <svg
                    width="39"
                    height="38"
                    viewBox="0 0 39 38"
                    fill="none"
                    className="size-full"
                  >
                    <path
                      d="M13.7405 5.9375C9.52393 5.9375 6.05884 9.39795 6.05884 13.6191V24.3809C6.05884 28.5974 9.51929 32.0625 13.7405 32.0625H24.5022C28.7188 32.0625 32.1838 28.6021 32.1838 24.3809V13.6191C32.1838 9.40259 28.7234 5.9375 24.5022 5.9375H13.7405ZM13.7405 8.3125H24.5022C27.4385 8.3125 29.8088 10.6829 29.8088 13.6191V24.3809C29.8088 27.3171 27.4385 29.6875 24.5022 29.6875H13.7405C10.8042 29.6875 8.43384 27.3171 8.43384 24.3809V13.6191C8.43384 10.6829 10.8042 8.3125 13.7405 8.3125ZM26.135 10.9102C25.5366 10.9102 25.0588 11.3879 25.0588 11.9863C25.0588 12.5847 25.5366 13.0625 26.135 13.0625C26.7334 13.0625 27.2112 12.5847 27.2112 11.9863C27.2112 11.3879 26.7334 10.9102 26.135 10.9102ZM19.1213 11.875C15.2017 11.875 11.9963 15.0803 11.9963 19C11.9963 22.9197 15.2017 26.125 19.1213 26.125C23.041 26.125 26.2463 22.9197 26.2463 19C26.2463 15.0803 23.041 11.875 19.1213 11.875ZM19.1213 14.25C21.7607 14.25 23.8713 16.3606 23.8713 19C23.8713 21.6394 21.7607 23.75 19.1213 23.75C16.4819 23.75 14.3713 21.6394 14.3713 19C14.3713 16.3606 16.4819 14.25 19.1213 14.25Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>

                <span className="relative z-0 mt-0.75 transition-colors duration-1000 group-hover:text-zinc-700">
                  @golden_coffee
                </span>
              </Link>

              <Link
                href="#"
                className="group relative flex h-12.5 w-5/10 items-center justify-center gap-x-2 overflow-hidden rounded-xl border border-orange-200 px-3 py-5 text-orange-300"
              >
                {/* Gradient */}
                <span className="absolute inset-0 z-0 bg-[linear-gradient(270deg,#FDBA74_0%,#FED7AA_100%)] opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100" />

                {/* Content */}
                <span className="relative z-0 size-6 text-orange-300 transition-colors duration-1000 group-hover:text-zinc-700">
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    className="size-full"
                  >
                    <path
                      d="M31.0136 7.9292C32.3492 7.9292 32.7007 8.93937 32.3056 11.3112C31.8536 14.0234 30.5513 23.0033 29.5126 28.5933C29.1152 30.7324 28.3988 31.6547 27.3561 31.6547C26.783 31.6547 26.1116 31.376 25.3405 30.867C24.2955 30.1766 19.0199 26.6877 17.8743 25.8684C16.8293 25.1218 15.3877 24.2233 17.1959 22.4547C17.8395 21.8245 22.0567 17.7973 25.3421 14.6631C25.6928 14.3282 25.3991 13.8176 25.0096 13.8176C24.921 13.8176 24.8268 13.8445 24.7349 13.9055C20.3063 16.8426 14.1654 20.9189 13.384 21.4501C12.6026 21.9805 11.841 22.3209 10.8261 22.3209C10.3076 22.3209 9.72255 22.2322 9.03459 22.0343C7.49638 21.5926 5.99459 21.0661 5.40955 20.865C3.15726 20.0924 3.69163 19.0909 5.87901 18.1282C14.6491 14.2704 25.9976 9.56637 27.5643 8.91562C29.0907 8.28149 30.2243 7.9292 31.0136 7.9292ZM31.0136 5.5542C29.9306 5.5542 28.6268 5.90332 26.6547 6.72112L26.418 6.81928C17.9986 10.3153 10.3646 13.5595 4.92267 15.9535C4.07242 16.328 1.48605 17.4656 1.58659 19.8454C1.62934 20.8722 2.19459 22.2718 4.63926 23.1102L4.81976 23.172C5.50217 23.4071 6.92322 23.8971 8.37988 24.3159C9.26655 24.5708 10.0677 24.6943 10.8269 24.6943C12.1443 24.6943 13.1647 24.3183 13.9627 23.8805C13.9588 24.0135 13.9619 24.1473 13.9722 24.2819C14.1163 26.1122 15.5318 27.116 16.3773 27.7161L16.4953 27.8C17.7437 28.693 23.3938 32.4257 24.0335 32.8477C25.2376 33.6425 26.3246 34.0281 27.3577 34.0281C28.9822 34.0281 31.0809 33.1604 31.8488 29.0263C32.578 25.1052 33.4203 19.6277 34.0354 15.6282C34.2975 13.9213 34.5128 12.5217 34.6498 11.7007C34.9261 10.0429 35.0527 8.16512 33.8993 6.80424C33.4148 6.23424 32.5218 5.5542 31.0136 5.5542Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>

                <span className="relative z-0 mt-0.75 transition-colors duration-1000 group-hover:text-zinc-700">
                  @golden_coffee
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <p className="h-px w-full bg-paleWhite"> </p>

      <div className="flex flex-col font-Dana text-xs/5 font-medium xl:items-center xl:justify-between xl:text-xl/12">
        <div className="flex items-center gap-x-5">
          <div className="flex size-7.5 items-center justify-center">
            <span className="flex size-full items-center justify-center rounded-full border border-paleWhite">
              <span className="flex size-5 items-center justify-center rounded-full border border-[#FFFFFF33]">
                <span className="block size-2.5 rounded-full bg-[linear-gradient(180deg,#FDBA74_0%,#FED7AA_100%)]"></span>
              </span>
            </span>
          </div>

          <p className="xl:text-nowrap">
            {" "}
            تمام حقوق این رابط کاربری متعلق به سبزلرن میباشد و دانشجوی این دوره
            اجازه استفاده آن را در مصارف شخصی و تجاری ندارد.{" "}
          </p>
        </div>
        <p className="mt-6 text-left text-nowrap">
          {" "}
          .Copyright © 2023 Golden Coffee. All rights reserved{" "}
        </p>
      </div>

      {/* دکمه */}
      <div className="absolute -top-13.75 left-1/2 size-21 -translate-x-1/2 rounded-full bg-gray-100" />

      <svg
        className="absolute -top-4 left-0 h-15 w-full"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path
          d="
        M0 0
        H430
        C455 0 470 12 485 30
        C492 39 497 48 500 50
        C503 48 508 39 515 30
        C530 12 545 0 570 0
        H1000
        V100
        H0
        Z
      "
          fill="#3f3f46"
        />
      </svg>

      <button className="absolute -top-6.5 left-1/2 z-10 flex size-7.5 -translate-x-1/2 items-center justify-center rounded-full border-2 border-orange-300 bg-gray-100" onClick={upHandler}>
        <span className="size-5 text-zinc-700"> {chevronUp} </span>
      </button>

    </div>
    </footer>
  
  );
}

export default Footer;

{/* <div>
  <ul className="absolute top-20 z-50 flex max-h-0 translate-y-2 flex-col space-y-1.5 overflow-hidden rounded-2xl border-orange-300 bg-white text-zinc-700 opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-56 group-hover:translate-y-0 group-hover:border-t-[3px] group-hover:p-6 group-hover:opacity-100 dark:bg-zinc-700 dark:text-white">
    {userAccountItems.map((item) => (
      <Item title={item.title} svg={item.svg} key={item.id} />
    ))}
  </ul>
</div> */}