import { palletFormError, palletFormValue } from "@/lib/interfaces/forms";
import React from "react";
import Input from "./input";

export interface PalletInfoProps {
  formData: palletFormValue;
  errorData: palletFormError;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export const AdditionalInfo: React.FC<PalletInfoProps> = ({
  formData,
  errorData,
  handleInputChange,
}) => {
  return (
    <div className="w-full flex-row">
      <div className="space-y-4">
        <Input
          name="requirement"
          handleChange={handleInputChange}
          error={errorData.requirement}
          value={formData.requirement}
          placeHolder="Number of Pallets Required"
          type="number"
        />
        <Input
          name="name"
          handleChange={handleInputChange}
          error={errorData.name}
          value={formData.name}
          placeHolder="Full name"
          type="text"
        />
        <Input
          name="email"
          handleChange={handleInputChange}
          error={errorData.email}
          value={formData.email}
          placeHolder="Email address"
          type="text"
        />
      </div>
    </div>
  );
};
