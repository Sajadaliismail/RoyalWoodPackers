import About from "./components/About";
import Contacts from "./components/Contacts";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

export default function Home() {
  return (
    <div className="">
      <main>
        <Navbar />
        <HeroSection />
        <About />
        <Products />
        <Contacts />
      </main>
    </div>
  );
}
