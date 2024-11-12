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
  // description,
  // url,
}) => {
  return (
    <div className="flex flex-col items-center min-w-[30vw]">
      <div>{name}</div>
      <Image src={imageUrl} width={300} height={300} alt="pallet" />
    </div>
  );
};

export default ProductCard;
