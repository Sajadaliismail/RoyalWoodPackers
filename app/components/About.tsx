import Image from "next/image";

export default function About() {
  return (
    <section id={"about"} className="min-h-[100vh]">
      <div className="flex flex-col py-12">
        <div className="flex md:flex-row flex-col text-balance justify-evenly items-center gap-24">
          <div className="hover:scale-105 cursor-pointer duration-300 relative bg-neutral-900  w-60 h-52 px-2 text-base text-center flex flex-col items-center rounded-3xl py-6">
            <Image
              className="absolute -top-6"
              alt="vision"
              width={50}
              height={50}
              src={"/vision.svg"}
            />
            <h3 className="uppercase my-3 underline font-semibold text-xl">
              Our Vision
            </h3>
            <p>
              Our goal is to attain global leadership by delivering top-quality
              products and outstanding services.
            </p>
          </div>
          <div className="hover:scale-105  cursor-pointer  duration-300 relative bg-neutral-900  w-60 h-52 px-2 text-base text-center flex flex-col items-center rounded-3xl py-6">
            <Image
              className="absolute -top-6"
              alt="mission"
              width={50}
              height={50}
              src={"/target.svg"}
            />
            <h3 className="uppercase my-3 underline font-semibold text-xl">
              Our mission
            </h3>
            <p>
              Our goal is to continually innovate and enhance our products and
              standards, delivering world-class quality at every step.
            </p>
          </div>
          <div className="hover:scale-105  cursor-pointer  duration-300 relative bg-neutral-900  w-60 h-52 px-2 text-base text-center flex flex-col items-center rounded-3xl py-6">
            <Image
              className="absolute -top-6"
              alt="trust"
              width={50}
              height={50}
              src={"/trust.svg"}
            />
            <h3 className="uppercase my-3 underline font-semibold text-xl">
              Our Values
            </h3>
            <p>
              Our commitment to honesty, integrity, and respect for our clients
              drives everything we do, serving as the cornerstone of our work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
