"use client";
import { useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Products() {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const firstDivRef = useRef<HTMLDivElement>(null);
  const secondDivRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const container = secondDivRef.current;
    if (!container) return;

    let animationId: number;
    const scrollState = {
      speed: 1,
      autoScroll: true,
      direction: -1, // Start scrolling left
    };

    const scrollSecond = () => {
      if (scrollState.autoScroll) {
        // Check if we hit the rightmost edge
        if (container.scrollLeft === 0) {
          scrollState.direction = -1; // Change to scroll left
        }
        // Check if we hit the leftmost edge
        else if (
          -container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          scrollState.direction = 1; // Change to scroll right
        }

        // Apply scrolling based on direction
        container.scrollLeft += scrollState.direction * scrollState.speed;
      }

      // Request next animation frame
      animationId = requestAnimationFrame(scrollSecond);
    };

    // Start the animation
    animationId = requestAnimationFrame(scrollSecond);

    const handleMouseEnterSecond = () => {
      scrollState.speed = 0.2;
      scrollState.autoScroll = false;
    };

    const handleMouseLeaveSecond = () => {
      scrollState.speed = 1;
      scrollState.autoScroll = true;
    };

    const handleWheelSecond = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        scrollState.autoScroll = false;
        setTimeout(() => (scrollState.autoScroll = true), 1000);
      }
    };

    // Event listeners
    container.addEventListener("mouseenter", handleMouseEnterSecond);
    container.addEventListener("mouseleave", handleMouseLeaveSecond);
    container.addEventListener("wheel", handleWheelSecond);
    container.addEventListener("touchstart", handleMouseEnterSecond);
    container.addEventListener("touchend", handleMouseLeaveSecond);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("mouseenter", handleMouseEnterSecond);
      container.removeEventListener("mouseleave", handleMouseLeaveSecond);
      container.removeEventListener("wheel", handleWheelSecond);
      container.removeEventListener("touchstart", handleMouseEnterSecond);
      container.removeEventListener("touchend", handleMouseLeaveSecond);
    };
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const container = firstDivRef.current;
    if (!container) return;

    let animationId: number;
    let lastScrollPosition = container.scrollLeft;

    const scrollState = {
      speed: 1,
      autoScroll: true,
      direction: 1,
    };

    const scroll = () => {
      if (scrollState.autoScroll) {
        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth
        ) {
          scrollState.direction = -1;
        } else if (container.scrollLeft <= 0) {
          scrollState.direction = 1;
        }
        container.scrollLeft += scrollState.direction * scrollState.speed;
      } else {
        if (container.scrollLeft !== lastScrollPosition) {
          if (
            container.scrollLeft >=
            container.scrollWidth - container.clientWidth
          ) {
            container.scrollLeft =
              container.scrollWidth - container.clientWidth;
          } else if (container.scrollLeft <= 0) {
            container.scrollLeft = 0;
          }
        }
      }
      lastScrollPosition = container.scrollLeft;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => {
      scrollState.speed = 0.2;
      scrollState.autoScroll = false;
    };

    const handleMouseLeave = () => {
      scrollState.speed = 1;
      scrollState.autoScroll = true;
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        scrollState.autoScroll = false;

        setTimeout(() => (scrollState.autoScroll = true), 1000);
      }
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("touchstart", handleMouseEnter);
    container.addEventListener("touchend", handleMouseLeave);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("wheel", handleWheel);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("touchstart", handleMouseEnter);
      container.removeEventListener("touchend", handleMouseLeave);
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useGSAP(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -50, opacity: 0, scale: 0.5 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scale: 1,
          scrollTrigger: {
            trigger: ".productsSection",
            toggleActions: "restart pause resume pause",
            start: "top 100%",
            end: "bottom 80%",

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
          Explore Our Products
        </h1>
      </div>
      <div
        ref={firstDivRef}
        className="flex flex-row  sm:h-full  overflow-x-scroll gap-9 px-3 md:px-6"
        style={{ scrollbarWidth: "none" }}
      >
        <ProductCard
          name="Rubber Wood Pallets"
          imageUrl="/fourway.png"
          description="Rubberwood pallets offer good strength and durability due to their dense grain, providing a stable and sturdy option for handling heavy loads while being resistant to warping and cracking under pressure."
        />
        <ProductCard
          name="Country Wood Pallets"
          imageUrl="/HardWood.png"
          description="Pallets made from country woods are strong, durable, resistant to wear and moisture, and offer a sustainable option for heavy-duty applications."
        />
        <ProductCard
          name="Plywood Pallets"
          imageUrl="/palletImg4.png"
          description="Plywood pallets are lightweight, durable, cost-effective, and resistant to warping, making them ideal for lighter loads and indoor storage."
        />
        <ProductCard
          name="Painted Wood Pallets"
          imageUrl="/painted.png"
          description="Painted pallets offer enhanced protection against moisture, pests, and weathering while providing a more polished and visually appealing finish."
        />
        <ProductCard
          name="Pine Wood Pallets"
          imageUrl="/palletImg1.png"
          description="Our pinewood pallets offer lightweight construction, no risk of staining due to the absence of juices or glues, and excel in safe, efficient, and cost-effective transportation."
        />
        <ProductCard
          name="Plastic Pallets"
          imageUrl="/pp.png"
          description="Plastic pallets offer unmatched durability, are moisture-resistant, and ensure safe, reusable, and hassle-free transportation for all your goods."
        />
      </div>
      <div
        ref={secondDivRef}
        className="flex flex-row-reverse  sm:h-full my-9 overflow-x-scroll gap-9 px-3 md:px-6"
        style={{ scrollbarWidth: "none" }}
      >
        <ProductCard
          name="Wooden Boxes"
          imageUrl="/box.png"
          description="We produce high-quality wooden and plywood boxes, crafted for strength and durability. Perfect for storage, shipping, and industrial use, our boxes ensure secure and reliable packaging solutions."
        />
        <ProductCard
          name="Wooden Crates"
          imageUrl="/crate.png"
          description="We manufacture high-quality wooden crates designed for durability and reliability. Ideal for storage, shipping, and industrial use, our crates provide strong and secure solutions for all your packaging needs."
        />
        <ProductCard
          name="Wooden Planks"
          imageUrl="/planks.webp"
          description="We supplies high-quality wooden planks, perfect for manufacturing pallets, boxes, and similar products. Durable and reliable, our planks ensure superior strength and performance for industrial and packaging needs."
        />
        <ProductCard
          name="Plywood"
          imageUrl="/Plywood.png"
          description="We offers premium-quality plywood, crafted for strength and durability. Suitable for both commercial and hardwood applications, our plywood delivers exceptional performance for all your construction and furnishing needs."
        />
        <ProductCard
          name="Veneer Sheets"
          imageUrl="/veneer.jpg"
          description="Our high-quality veneer sheets, perfect for both commercial and hardwood plywood. Our precision-crafted veneers ensure durability and superior performance for all your plywood needs."
        />
        <ProductCard
          name="Rented Pallets"
          imageUrl="/rented.jpg"
          description="Our rental helps reduce your costs and environmental impact. We handle the management, tracking, and repair of pallets, so you can focus on what matters most: your business."
        />
      </div>
    </section>
  );
}
