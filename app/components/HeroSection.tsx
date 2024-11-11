"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";
import { Saira } from "next/font/google";
import Logo from "./Logo";
import Image from "next/image";
import SplitType from "split-type";
import Link from "next/link";

const saira = Saira({
  weight: ["100", "400", "700", "900"],
  subsets: ["latin"],
});

gsap.registerPlugin(useGSAP, TextPlugin);

export default function HeroSection() {
  const container = useRef(null);
  const text = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (text.current) {
        const text = new SplitType("#caption");
        gsap.fromTo(
          text.chars,
          { x: 5, y: 10, skewX: 2, opacity: 0 },
          { x: 0, y: 0, skewX: 0, stagger: 0.02, opacity: 100, duration: 0.25 }
        );
      }
      if (headingRef.current) {
        const text = new SplitType("#heading");
        gsap.from(text.chars, {
          opacity: 0,
          x: 50,
          rotateY: 90,
          duration: 1.5,
          ease: "back",
          stagger: 0.05,
        });
      }
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          {
            x: 70,
            opacity: 0,
          },
          { x: 0, duration: 3, opacity: 1 }
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
    },
    { scope: container }
  );

  return (
    <div
      className="flex md:flex-row flex-col  items-center relative md:h-[100vh] px-3 "
      style={{
        backgroundImage: "url(/palletbg.jpeg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      ref={container}
    >
      <div ref={headingRef} className="flex flex-col p-2 ">
        <Logo />
        <div
          id="heading"
          className={`${saira.className} md:text-5xl text-3xl text-center md:text-start font-bold text-white`}
        >
          ROYAL WOOD PACKERS
        </div>
        <div
          ref={text}
          id="caption"
          className={` ${saira.className} flex md:text-7xl text-5xl text-center md:text-start font-bold md:w-[50vw] `}
          style={{
            clipPath: "border-box",
          }}
        >
          Quality Wood Pallet Makers in India
        </div>
        {/* <p
          ref={paragraphRef}
          className="md:text-base text-sm  mt-2 font-medium text-balance "
        >
          Founded in 2000, our company has grown to become one of India’s
          leading manufacturers and suppliers of high-quality pallets. With over
          two decades of experience, we specialize in providing a wide range of
          pallets designed to meet diverse needs, from storage and export to
          custom solutions. Throughout our journey, we have built a reputation
          for reliability, innovation, and excellence, making us the trusted
          choice for businesses across the nation. At our core, we are committed
          to delivering exceptional quality and ensuring customer satisfaction
          in every pallet we produce.
        </p> */}
        <div className="flex flex-row justify-evenly">
          <button className="bg-blue-700 text-white text-nowrap h-14 md:p-3 px-6 my-10 rounded-xl md:text-lg md:w-48 hover:scale-105 duration-500 shadow-black shadow-md">
            P roducts
          </button>
          <button className="bg-blue-700 text-white md:p-3 px-6 my-10 rounded-xl md:text-lg md:w-48  hover:scale-105 duration-500 shadow-black shadow-md">
            Enquire
          </button>
          <Link
            className="items-center flex align-middle hover:-translate-y-3 duration-200"
            target="_blank"
            href={"https://wa.me/9495785815"}
          >
            <Image
              className="rounded-full"
              src={"/whatsapp.svg"}
              width={50}
              height={50}
              alt="whatsapp"
            />
          </Link>
        </div>
      </div>

      {/* <div className="flex py-auto align-middle items-center justify-center ">
        <Image
          ref={imageRef}
          // className="hover:scale-105 transition-transform duration-[500ms] "
          src={"/pallets.png"}
          width={2500}
          height={500}
          alt="pallets1"
        />
      </div> */}
    </div>
  );
}
