import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="rounded-xl m-1 left-1/2  md:absolute z-10 h-24 md:w-2/4  ">
      <div className=" flex text-lg py-2  flex-row items-center align-middle justify-around gap-5 ">
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
      </div>
    </nav>
  );
};

export default Navbar;
