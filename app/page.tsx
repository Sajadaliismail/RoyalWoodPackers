import HeroSection from "./components/HeroSection";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        {/* <Logo /> */}
        <HeroSection />
      </main>
    </div>
  );
}
