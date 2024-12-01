import { palletFormError, palletFormValue } from "@/lib/interfaces/forms";
import React from "react";
import Input from "./input";
import RadioButton from "./inputRadio";
import SelectInput from "./selectInput";
import Image from "next/image";
interface PalletInfoProps {
  formData: palletFormValue;
  errorData: palletFormError;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export const PalletInfo: React.FC<PalletInfoProps> = ({
  formData,
  errorData,
  handleInputChange,
}) => {
  return (
    <div className="w-full flex-row">
      <div className="space-y-4">
        <Input
          name="length"
          handleChange={handleInputChange}
          error={errorData.length}
          value={formData.length}
          placeHolder="Length"
          type="number"
        />
        <Input
          name="width"
          handleChange={handleInputChange}
          error={errorData.width}
          value={formData.width}
          placeHolder="Width"
          type="number"
        />
        <Input
          name="height"
          handleChange={handleInputChange}
          error={errorData.height}
          value={formData.height}
          placeHolder="Height"
          type="number"
        />
        <RadioButton
          handleChange={handleInputChange}
          label="Type"
          name="type"
          options={[
            { value: "two-way", label: "Two way" },
            { label: "Four way", value: "four-way" },
          ]}
          value={formData.type}
        />
        <SelectInput
          handleChange={handleInputChange}
          label="Capacity"
          name="capacity"
          options={[
            { label: "500 Kg", value: 500 },
            { label: "1000 Kg", value: 1000 },
            { label: "1500 Kg", value: 1500 },
            { label: "2000 Kg", value: 2000 },
            { label: "3000 Kg", value: 3000 },
          ]}
          value={formData.capacity}
        />
      </div>
      <div>
        <Image
          src={formData.type === "two-way" ? "/palletImg2.png" : "/fourway.png"}
          width={250}
          height={400}
          alt="pallet"
        />
      </div>
    </div>
  );
};
