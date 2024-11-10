"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";
import { Saira } from "next/font/google";
import Logo from "./Logo";
import Image from "next/image";
import SplitType from "split-type";

const saira = Saira({
  weight: ["100", "400", "700", "900"],
  subsets: ["latin"],
});

gsap.registerPlugin(useGSAP, TextPlugin);

export default function HeroSection() {
  const container = useRef(null);
  const text = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (text.current) {
        const text = new SplitType("#caption");
        gsap.fromTo(
          text.chars,
          { x: 2, y: 25, skewX: 2, opacity: 0 },
          { x: 0, y: 0, skewX: 0, stagger: 0.02, opacity: 100, duration: 0.25 }
        );
      }
      if (headingRef.current) {
        const text = new SplitType("#heading");
        gsap.from(text.chars, {
          opacity: 0,
          x: 50,
          duration: 0.3,
          ease: "expo.out",
          stagger: 0.05,
        });
      }
    },
    { scope: container }
  );

  return (
    <div
      className="flex md:flex-row flex-col relative "
      style={{
        backgroundImage: "url(/intor.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      ref={container}
    >
      <div ref={headingRef} className="flex flex-col bg-[#c5c5c5bb]  p-2 ">
        <Logo />
        <div
          id="heading"
          className={`${saira.className} md:text-5xl text-2xl font-bold text-[#0b0f31]`}
        >
          ROYAL WOOD PACKERS
        </div>
        <div
          ref={text}
          id="caption"
          className={` ${saira.className} flex md:text-3xl text-xl flex-wrap font-medium`}
          style={{
            clipPath: "border-box",
          }}
        >
          Manufactures of wooden pallets and boxes
        </div>
        <p className="text-xl mt-2 font-medium ">
          We manufactures and supplies the widest range of pallets in India.
          Over the years, we have become one of the foremost wooden pallet
          manufacturers and the most trusted suppliers in the nation. With
          unmatched expertise in platform solutions, we assist clients in
          selecting the best platforms tailored to their supply chain needs.
          Committed to maintaining high-quality standards and delivering fast,
          reliable service, we ensure your supply chain runs smoothly and
          cost-effectively.
        </p>
      </div>

      <div className="bg-[#c5c5c5bb] flex py-auto align-middle items-center justify-center">
        <Image
          className="hover:scale-105 transition-transform duration-[500ms] "
          src={"/pallets.png"}
          width={2500}
          height={500}
          alt="pallets1"
        />
      </div>
    </div>
  );
}
