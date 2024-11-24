"use client";

import HeroSection from "./components/HeroSection";
import Products from "./components/Products";
import { Didact_Gothic } from "next/font/google";

const didact = Didact_Gothic({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${didact.className}`}>
      <main>
        <HeroSection />
        <Products />
      </main>
    </div>
  );
}
