import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <section id="products" className="min-h-[100vh]">
      <div
        className="flex md:flex-row flex-col  overflow-x-scroll "
        style={{ scrollbarWidth: "none" }}
      >
        <ProductCard name="Rubber Wood Pallets" imageUrl="/fourway.png" />
        <ProductCard name="Jungle Wood Pallets" imageUrl="/Jungle.png" />
        <ProductCard name="Plywood Pallets" imageUrl="/pallet.jpg" />
        <ProductCard name="Neem Wood Pallets" imageUrl="/pallet.jpg" />
      </div>
    </section>
  );
}
