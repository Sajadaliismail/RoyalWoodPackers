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
import { useRouter } from "next/navigation";

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

  const router = useRouter();

  const handleNavigation = () => {
    router.push('/getrates');
  };

  useGSAP(
    () => {
      if (text.current) {
        const text = new SplitType("#caption");
        gsap.fromTo(
          text.chars,
          { x: 15, y: 70, opacity: 0 },
          {
            x: 0,
            y: 0,
            skewX: 0,
            stagger: 0.04,
            opacity: 100,
            duration: 1.1,
            ease: "back.out",
          }
        );
      }
      if (headingRef.current) {
        const text = new SplitType("#heading");
        gsap.from(text.chars, {
          opacity: 0,
          x: 50,
          rotateY: 90,
          duration: 1.5,
          ease: "back.out",
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
    },
    { scope: container }
  );

  return (
    <section id="home">
      <div
        className="flex md:flex-row flex-co align-middlel  items-center relative min-h-[100vh] px-3 "
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
          <h1
            id="heading"
            className={`${saira.className} md:text-5xl text-4xl text-center md:text-start font-bold text-white mb-8`}
          >
            ROYAL WOOD PACKERS
          </h1>
          <h2
            ref={text}
            id="caption"
            className={` ${saira.className} flex md:text-7xl text-5xl text-center md:text-start font-bold md:w-[50vw] `}
            style={{
              clipPath: "border-box",
            }}
          >
            Quality Wood Pallet Makers.
          </h2>

          <div className="flex flex-row justify-evenly mt-16">
            <button title="View all products" className="bg-blue-700 text-white text-nowrap h-14 md:p-3 px-6 my-10 rounded-xl md:text-lg md:w-48 hover:animate-scale-bounce-1_02 duration-500 shadow-black shadow-md">
              Products
            </button>
            <button title="Get Rates of custom measurements" onClick={handleNavigation} className=" md:p-3 px-6 my-10 rounded-xl md:text-lg md:w-48 bg-blue-700 text-white  hover:animate-scale-bounce-1_02 duration-500 shadow-black shadow-md">
            Get Rates
            </button>
            <Link
            title="Message us on WhatsApp"
              className="items-center flex align-middle hover:animate-scale-bounce-1_1"
              target="_blank"
              href={"https://wa.me/9495785815"}
            >
              <Image
                className="rounded-full"
                src={"/whatsapp.svg"}
                width={50}
                height={50}
                alt="Contact whatsapp"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
