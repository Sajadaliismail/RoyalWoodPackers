import About from "./components/About";
import Contacts from "./components/Contacts";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Footer from "./components/Footer";
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
