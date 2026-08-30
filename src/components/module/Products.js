import BestSellingProducts from "./BestSellingProducts";
import CoffeeClub from "./CoffeeClub";
import CoffeeTypes from "./CoffeeTypes";
import NewestProducts from "./NewestProducts";

function Products() {
  return (
    <section
      className="relative container overflow-hidden font-Dana text-zinc-700"
      id="فروشگاه"
    >
      <div className="pointer-events-none absolute top-0 right-9 z-0 h-205 w-full bg-none bg-contain bg-left bg-no-repeat opacity-50 sm:bg-product"></div>
      <div className="relative z-10">
        <NewestProducts />

        <CoffeeTypes />

        <BestSellingProducts />

        
      </div>
    </section>
  );
}

export default Products;
