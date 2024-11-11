import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ToggleTheme";

export const Navbar = () => {
  return (
    <nav className="bg-[#16161638] dark:bg-[#99999973] rounded-xl m-1 sticky mx-auto text-lg py-2 flex flex-row items-center align-middle justify-center gap-5 md:w-2/4 ">
      <span>
        <Image src={"/rwp.svg"} width={90} height={100} alt="logo" />
      </span>
      <span>
        <Link className="" href={"#"}>
          Home
        </Link>
      </span>
      <span>
        <Link href={"#"}>Products</Link>
      </span>
      <span>
        <Link href={"#"}>About</Link>
      </span>
      <span>
        <Link href={"#"}>Gallery</Link>
      </span>
      <span>
        <Link href={"#"}>Contact</Link>
      </span>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
