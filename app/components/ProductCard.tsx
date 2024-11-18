import Image from "next/image";
import React from "react";
interface ProductProps {
  name: string;
  imageUrl: string;
  description?: string;
  url?: string;
}

const ProductCard: React.FC<ProductProps> = ({
  name,
  imageUrl,
  description = "",
  // url,
}) => {
  return (
    <div className="flex flex-col items-center md:min-w-[30vw] min-w-[95vw] mx-auto h-96 justify-around bg-[#17171770] rounded-2xl p-2 cursor-pointer">
      <div className="h-60 items-center flex">
        <Image src={imageUrl} width={250} height={250} alt="pallet" />
      </div>
      <div className="md:h-32 px-4 font-sans ">
        <h1 className="text-2xl font-semibold  text-center ">{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
