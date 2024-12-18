"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const Navbar = () => {
  const lastScrollY = useRef(0);
  const [top, setTop] = useState(0);
  const [isOpen, setIsopen] = useState(false);

  const toggleMenu = () => {
    setIsopen((prev) => !prev);
  };
  const handleScroll = () => {
    setIsopen(false);
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY.current) {
        setTop(-100);
      } else {
        setTop(0);
      }
      lastScrollY.current = window.scrollY;
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [top]);
  return (
    <nav
      className=" m-1 rounded-3xl   left-1/2 transform -translate-x-1/2 fixed z-10  w-full md:w-2/4"
      style={{
        top: `${top}px`,
        transition: "top .7s ease-in-out",
      }}
    >
      <div className="sm:hidden mx-2 my-3 flex flex-row justify-between">
        <Image
          className="z-50 cursor-context-menu"
          onClick={toggleMenu}
          src={"/menuus.svg"}
          width={30}
          height={5}
          alt="logo"
        />
      </div>
      <div
        style={{
          backgroundColor: lastScrollY.current > 5 ? "#515a5f3b " : "none",
        }}
        className=" hidden sm:flex py-2 rounded-xl px-6   text-sm md:text-lg md:h-16  text-center  flex-row items-center align-middle justify-around md:gap-5 gap-3 "
      >
        <span
          className={`${
            lastScrollY.current > 500 ? " inline-block" : "hidden"
          } transition-all duration-300`}
        >
          <Image src={"/rwp.svg"} width={80} height={100} alt="logo" />
        </span>
        <span>
          <Link title="Home Page" className="" href={"/"}>
            Home
          </Link>
        </span>
        <span>
          <Link title="About Us" href={"/about"}>About</Link>
        </span>
        <span>
          <Link title="Product Details" href={"#"}>Products</Link>
        </span>
        <span>
          <Link title="Gallery" href={"#"}>Gallery</Link>
        </span>
        <span>
          <Link title="Contact Us" href={"/contact"}>Contact</Link>
        </span>
      </div>

      <div
        onClick={toggleMenu}
        className={`sm:hidden ${
          isOpen
            ? "opacity-100 translate-y-0 "
            : "opacity-0 h-0 -translate-y-32 "
        } flex py-2 bg-[#292929e3] absolute w-[100vw] top-0 text-xl md:text-lg md:h-16   text-center  flex-col items-center align-middle justify-around md:gap-5 gap-3 transition-all duration-500`}
      >
        <span className=" px-2 rounded-xl" style={{}}>
          <Image src={"/rwp.svg"} width={80} height={100} alt="logo" />
        </span>
        <span>
          <Link title="Home Page" className="" href={"/"}>
            Home
          </Link>
        </span>
        <span>
          <Link title="About Us" href={"/about"}>About</Link>
        </span>
        <span>
          <Link title="Product Details" href={"#"}>Products</Link>
        </span>
        <span>
          <Link title="Gallery" href={"#"}>Gallery</Link>
        </span>
        <span>
          <Link title="Contact Us" href={"/contact"}>Contact</Link>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
