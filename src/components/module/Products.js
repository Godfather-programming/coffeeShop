import BestSellingProducts from "./BestSellingProducts";
import CoffeeClub from "./CoffeeClub";
import CoffeeTypes from "./CoffeeTypes";
import NewestProducts from "./NewestProducts";

function Products() {
  return (
    <section
      className="relative font-Dana text-zinc-700 pt-8 md:pt-14 lg:mt-48"
      id="فروشگاه"
    >
      <div className="pointer-events-none absolute -top-50 z-0 h-205 w-full bg-none bg-contain bg-left bg-no-repeat opacity-50 xl:product xl:bg-product dark:bg-transparent!"></div>
      <div className="relative z-10">
        <NewestProducts />

        <CoffeeTypes />

        <BestSellingProducts />
      </div>
    </section>
  );
}

export default Products;
