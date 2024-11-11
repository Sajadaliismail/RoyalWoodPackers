import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProductComponent from "./components/ProductComponent";

export default function Home() {
  return (
    <div className="">
      <main>
        <Navbar />
        <HeroSection />
        <About />
        <div className="flex flex-row flex-wrap">
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
        </div>
      </main>
    </div>
  );
}
