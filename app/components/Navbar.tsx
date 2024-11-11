"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const Navbar = () => {
  const lastScrollY = useRef(0);
  const [top, setTop] = useState(0);
  // Function to handle scroll behavior
  const handleScroll = () => {
    if (window.scrollY > lastScrollY.current) {
      setTop(-100);
    } else {
      setTop(0);
    }
    lastScrollY.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [top]);
  return (
    <nav
      className="rounded-xl m-1  left-1/2 transform -translate-x-1/2 fixed z-10  w-full md:w-2/4"
      style={{
        top: `${top}px`,
        transition: "top .5s ease-in-out",
        backgroundColor: lastScrollY.current > 5 ? "#515a5fcc" : "",
      }}
    >
      <div className=" flex py-2   text-sm md:text-lg  flex-row items-center align-middle justify-around gap-5 ">
        <span>
          <Link className="" href={"#home"}>
            Home
          </Link>
        </span>
        <span>
          <Link href={"#about"}>About</Link>
        </span>
        <span>
          <Link href={"#"}>Products</Link>
        </span>
        <span>
          <Link href={"#"}>Gallery</Link>
        </span>
        <span>
          <Link href={"#"}>Contact</Link>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
