import {

  CrateFormError,
  CrateFormValue,

} from "@/lib/interfaces/forms";
import React from "react";
import Input from "../input";
import SelectInput from "../selectInput";
import Image from "next/image";

interface CrateInfoProps {
  formData: CrateFormValue;
  errorData: CrateFormError;
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
}

export const CrateSize: React.FC<CrateInfoProps> = ({
  formData,
  errorData,
  handleInputChange,
}) => {
  return (
    <div className="w-full sm:flex-row flex-col flex">
      <div className="space-y-4 sm:w-2/3">
        <Input
          name="length"
          handleChange={handleInputChange}
          error={errorData.length}
          value={formData.length}
          placeHolder="Length in mm"
          type="number"
        />
        <Input
          name="width"
          handleChange={handleInputChange}
          error={errorData.width}
          value={formData.width}
          placeHolder="Width in mm"
          type="number"
        />
        <Input
          name="height"
          handleChange={handleInputChange}
          error={errorData.height}
          value={formData.height}
          placeHolder="Height in mm"
          type="number"
        />
           <Input
          name="gap"
          handleChange={handleInputChange}
          error={errorData.gap}
          value={formData.gap}
          placeHolder="Gap Between Cross Flats in mm"
          type="number"
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
      <div className=" py-1 px-3 mx-auto my-auto">
        <Image
          src="/woodcrate.png" 
          width={300}
          height={300}
          alt="pallet"
        />
      </div>
    </div>
  );
};
