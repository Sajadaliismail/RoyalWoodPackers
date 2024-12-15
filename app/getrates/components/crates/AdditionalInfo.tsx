import {

  CrateFormError,
  CrateFormValue,

} from "@/lib/interfaces/forms";
import React from "react";
import Input from "../input";
import TextArea from "../textArea";

export interface CrateInfoProps {
  formData: CrateFormValue;
  errorData: CrateFormError;
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
}

export const AdditionalInfo: React.FC<CrateInfoProps> = ({
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
        <TextArea
          error={errorData.remarks}
          value={formData.remarks}
          name="remarks"
          placeHolder="Additional Specifications "
          label=""
          handleChange={handleInputChange}
        />
      </div>
    </div>
  );
};
