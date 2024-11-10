import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-slate-200 h-12 flex flex-row items-center align-middle justify-center gap-5  ">
      <span>
        <Image src={"/rwp.svg"} width={60} height={100} alt="logo" />
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
    </nav>
  );
};

export default Navbar;
