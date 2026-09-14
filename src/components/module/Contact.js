import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbPhoneCalling } from "react-icons/tb";
import Services from "./AboutUs";

function Contact() {
  return (
    <section id="تماس با ما">
      <div className="container mb-20 md:flex md:gap-x-5 xl:gap-x-0">
        <div className="flex w-full items-center justify-center lg:w-80 xl:w-95">
          <div className="h-78 w-full">
            <Image
              width={120}
              height={120}
              alt="contact-photo"
              src="/images/contact.png"
              className="h-full w-full object-contain md:object-fill lg:object-contain object-center"
            />
          </div>
        </div>

        <div className="mt-6 font-Morabba lg:ml-0 lg:w-7/10 lg:flex-1">
          <div>
            <h2 className="text-2xl font-medium lg:text-5xl">
              {" "}
              یکی از بهترین قهوه ها!{" "}
            </h2>
            <p className="mt-0.5 text-lg font-light lg:mt-1.5 lg:text-3xl/[48px]">
              {" "}
              کیفیت قهوه را از ما بخواهید ...{" "}
            </p>
          </div>

          <p className="child:block my-5 flex gap-x-2.5 *:size-1 *:rounded-full *:bg-zinc-700 lg:my-6 *:dark:bg-white">
            <span className=""> </span>
            <span> </span>
            <span> </span>
          </p>
          <p className="text-justify font-Dana text-lg lg:text-2xl 2xl:max-w-238">
            {" "}
            فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه معطری
            پیدا کنند و دسرهای خوشمزه ما را که کاملاً با قهوه داغ همراه شده است،
            امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد ما روز شما را می
            سازد!{" "}
          </p>
          <Link
            href="#"
            className="mt-5 md:mt-6 flex w-fit items-center justify-center gap-x-2 rounded-full border md:border-2 border-orange-300 px-5 py-3 font-Dana tracking-tightest text-orange-300 lg:text-xl"
          >
            <TbPhoneCalling className="size-5.75 md:size-7" />
            {"  "}
            ثبت سفارش تلفنی{" "}
          </Link>
        </div>
      </div>

      {/* <Services /> */}
    </section>
  );
}

export default Contact;
