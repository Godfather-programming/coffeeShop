import React from "react";
import Introduction from "../module/Introduction";
import HeaderList from "../module/HeaderList";
import Products from "../module/Products";
import BestSellingProducts from "../module/BestSellingProducts";
import CoffeeClub from "../module/CoffeeClub";
import CoffeeTypes from "../module/CoffeeTypes";
import NewestProducts from "../module/NewestProducts";
import ReadingArticles from "../module/ReadingArticles";
import Contact from "../module/Contact";
import Services from "../module/AboutUs";

function HomePage({
  open,
  hamburgerHandler,
  openShoppingCart,
  openShoppingCartHandler,
}) {
  return (
    <div className="relative mt-16 font-Dana lg:mt-0">
      <HeaderList />

      <Introduction
        open={open}
        hamburgerHandler={hamburgerHandler}
        openShoppingCart={openShoppingCart}
        openShoppingCartHandler={openShoppingCartHandler}
      />

      <Products />

      {/*  */}

      {/* <NewestProducts /> */}

      <CoffeeClub />

      <ReadingArticles />

      <Contact />

      <Services />
    </div>
  );
}

export default HomePage;
