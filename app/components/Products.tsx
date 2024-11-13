"use client";
import { useRef } from "react";
import ProductCard from "./ProductCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Products() {
  const headerRef = useRef<HTMLHeadingElement>(null);
  useGSAP(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -50, opacity: 0, scale: 0.5 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          scale: 1,
          scrollTrigger: {
            trigger: ".productsSection",
            toggleActions: "restart pause resume pause",
            start: "top 80%",
            end: "bottom 50%",

            scrub: true,
          },
        }
      );
    }
  });
  return (
    <section
      id="products"
      className="productsSection min-h-[100vh] flex flex-col align-middle justify-center "
    >
      <div className="flex justify-center">
        <h1
          ref={headerRef}
          className="text-center text-6xl my-8 font-semibold "
        >
          Our Products
        </h1>
      </div>
      <div
        className="flex md:flex-row flex-col md:h-full h-[100vh]  overflow-scroll gap-9"
        style={{ scrollbarWidth: "none" }}
      >
        <ProductCard
          name="Rubber Wood Pallets"
          imageUrl="/fourway.png"
          description="Rubberwood pallets offer good strength and durability due to their dense grain, providing a stable and sturdy option for handling heavy loads while being resistant to warping and cracking under pressure."
        />
        <ProductCard
          name="Hard Wood Pallets"
          imageUrl="/HardWood.png"
          description="Pallets made from jungle woods are strong, durable, resistant to wear and moisture, and offer a sustainable option for heavy-duty applications."
        />
        <ProductCard
          name="Plywood Pallets"
          imageUrl="/palletImg4.png"
          description="Plywood pallets are lightweight, durable, cost-effective, and resistant to warping, making them ideal for lighter loads and indoor storage."
        />
        <ProductCard
          name="Painted Wood Pallets"
          imageUrl="/pallet.jpg"
          description="Painted pallets offer enhanced protection against moisture, pests, and weathering while providing a more polished and visually appealing finish."
        />
        <ProductCard name="Pine Wood Pallets" imageUrl="/palletImg1.png" />
        <ProductCard name="Neem Wood Pallets" imageUrl="/pallet.jpg" />
      </div>
    </section>
  );
}
