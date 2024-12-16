import { palletFormError, palletFormValue } from "@/lib/interfaces/forms";
import React from "react";
import Input from "../input";
import RadioButton from "../inputRadio";
import SelectInput from "../selectInput";
import Image from "next/image";
interface PalletInfoProps {
  formData: palletFormValue;
  errorData: palletFormError;
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
}

export const PalletInfo: React.FC<PalletInfoProps> = ({
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
          name="palletOpening"
          remarks="Keep a minimum of 90 mm."
          handleChange={handleInputChange}
          error={errorData.palletOpening}
          value={formData.palletOpening}
          placeHolder="Pallet opening Height in mm"
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
      <div className="relative py-8 px-3 mx-auto my-auto">
        <Image
          src={formData.type === "two-way" ? "/2way.png" : "/4way.png"}
          width={300}
          height={400}
          alt="pallet"
        />
        {!Number.isNaN(formData.length) &&
        <p className={`absolute ${formData.type == 'two-way' ? " bottom-16 left-8 [rotate:38deg]":' bottom-7 left-12 [rotate:15deg]'}`}>{formData.length} mm</p>
         }
         {!Number.isNaN(formData.width) &&
        <p className={`absolute ${formData.type == 'two-way' ? " bottom-16 right-10 [rotate:-30deg]":' bottom-8 right-14 [rotate:-13deg]'}`}>{formData.width} mm</p>
         }
      </div>
    </div>
  );
};
