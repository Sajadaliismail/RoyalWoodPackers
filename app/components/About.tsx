"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, TextPlugin);

export default function About() {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const ImageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    if (ImageRef.current) {
      gsap.fromTo(
        ImageRef.current,
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 2,
        }
      );
    }
    if (paragraphRef.current) {
      gsap.fromTo(
        paragraphRef.current,
        {
          y: 50,
          opacity: 0,
        },
        { y: 0, opacity: 1, duration: 1 }
      );
    }
  });

  return (
    <section id={"about"} className="min-h-[100vh]">
      <div className="flex flex-col justify-center  py-3  px-5">
        <h1 className="text-center text-6xl underline underline-offset-8">
          About Us
        </h1>
        <div className="flex md:flex-row flex-col justify-center mt-2 mb-8">
          <Image
            ref={ImageRef}
            className=" md:min-w-[35vw]"
            alt="wooden pallet"
            width={500}
            height={500}
            src={"/aboutus.jpeg"}
          />
          <div className="flex flex-col items-start align-middle justify-center  ">
            <h2 className="text-3xl mt-5 mb-2 uppercase">
              A Tradition of Quality
            </h2>
            <h3 className={`uppercase text text-5xl font-bold mb-3`}>
              Reliable, Sustainable Pallets for Every Need
            </h3>
            <p
              ref={paragraphRef}
              className="md:text-xl  text-sm  mt-2 font-medium text-pretty "
            >
              Founded in 2000, we have grown into one of India’s leading
              manufacturers and suppliers of high-quality pallets. With over two
              decades of experience, we specialize in offering a diverse range
              of pallet solutions tailored to meet various needs, from storage
              and export to custom designs. Throughout our journey, we have
              earned a reputation for reliability, innovation, and excellence,
              making us the trusted choice for businesses nationwide. At the
              heart of our operations is a commitment to delivering superior
              quality and ensuring customer satisfaction with every pallet we
              produce.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col text-balance justify-evenly items-center gap-24">
          <div className="hover:scale-105 cursor-pointer duration-300 relative bg-neutral-900  w-72 md:60 h-52 px-3 text-base text-center flex flex-col items-center rounded-3xl py-6">
            <Image
              className="absolute -top-6"
              alt="vision"
              width={50}
              height={50}
              src={"/vision.svg"}
            />
            <h3 className="uppercase my-3 underline font-semibold text-xl">
              Our Vision
            </h3>
            <p className="text-pretty">
              Our goal is to attain global leadership by delivering top-quality
              products and outstanding services.
            </p>
          </div>
          <div className="hover:scale-105  cursor-pointer  duration-300 relative bg-neutral-900  w-72 md:60 h-52 px-3 text-base text-center flex flex-col items-center rounded-3xl py-6">
            <Image
              className="absolute -top-6"
              alt="mission"
              width={50}
              height={50}
              src={"/target.svg"}
            />
            <h3 className="uppercase my-3 underline font-semibold text-xl">
              Our mission
            </h3>
            <p className="text-pretty">
              Our goal is to continually innovate and enhance our products and
              standards, delivering world-class quality at every step.
            </p>
          </div>
          <div className="hover:scale-105  cursor-pointer  duration-500 relative bg-neutral-900 w-72 md:60 h-52 px-3 text-base text-center flex flex-col items-center rounded-3xl py-6">
            <Image
              className="absolute -top-6"
              alt="trust"
              width={50}
              height={50}
              src={"/trust.svg"}
            />
            <h3 className="uppercase my-3 underline font-semibold text-xl">
              Our Values
            </h3>
            <p className="text-pretty">
              Our commitment to honesty, integrity, and respect for our clients
              drives everything we do, serving as the cornerstone of our work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
