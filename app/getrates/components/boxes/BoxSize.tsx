import {
  BoxFormError,
  boxFormValue,

} from "@/lib/interfaces/forms";
import React from "react";
import Input from "../input";
import RadioButton from "../inputRadio";
import SelectInput from "../selectInput";
import Image from "next/image";
interface boxInfoProps {
  formData: boxFormValue;
  errorData: BoxFormError;
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
}

export const BoxSize: React.FC<boxInfoProps> = ({
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

        <RadioButton
          handleChange={handleInputChange}
          label="Type"
          name="type"
          options={[
            { label: "Wooden Box", value: "wood" },
            { value: "plywood", label: "Plywood Box" },
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
      <div className=" px-3 mx-auto my-auto ">
        <Image
          src={formData.type === "plywood" ? "/plyBox.png" : "/boxwood.png"}
          width={300}
          height={400}
          alt="pallet"
        />
      </div>
    </div>
  );
};
