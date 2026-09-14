import { chevronLeft } from "@/src/constants/chevrons";
import React from "react";
import Article from "./Article";
import articleItems from "@/src/constants/articleItems";

function ReadingArticles() {
  return (
    <section id="بلاگ">
      <div className="container mt-8 mb-20 md:mt-15">
        <div className="flex items-center justify-between font-Dana">
          <h2 className="text-2xl font-semibold lg:text-5xl dark:text-white">
            {" "}
            مطالب خواندنی{" "}
          </h2>
          <p className="flex cursor-pointer items-center p-3 text-orange-300 transition-colors duration-200 ease-in-out hover:rounded-md hover:bg-[#FED7AA33] lg:text-xl">
            {" "}
            مشاهده همه <span className="hidden md:block"> مطالب </span>{" "}
            <span className="block size-5"> {chevronLeft} </span>{" "}
          </p>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:mt-6 lg:grid-cols-4">
          {articleItems.map((article) => (
            <Article
              key={article.id}
              number={article.number}
              title={article.title}
              dateNumber={article.dateNumber}
              dateMonth={article.dateMonth}
              date={article.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReadingArticles;
