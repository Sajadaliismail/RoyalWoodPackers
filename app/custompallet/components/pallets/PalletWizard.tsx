"use client";

import {
  defaultPalletForm,
  defaultPalletFormError,
  heights,
} from "@/lib/defaultValues/forms";
import {
  palletFormError,
  palletFormValue,
  stepsProps,
} from "@/lib/interfaces/forms";
import React, { useState } from "react";
import { PalletInfo } from "./PalletSize";
import { AdditionalInfo } from "./AdditionalInfo";
import { PalletRates } from "./PalletRates";
import {
  validatePalletFirstStep,
  validatePalletSecondStep,
} from "@/lib/utilities/validationHelper";
import { Check, MoveLeft } from "lucide-react";

const steps: stepsProps[] = [
  { title: "Pallet Info", component: PalletInfo },
  { title: "Additonal Info", component: AdditionalInfo },
  { title: "Cost", component: PalletRates },
];
interface PalletWizard {
  onBack: () => void;
}
export const PalletWizard: React.FC<PalletWizard> = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<palletFormValue>(defaultPalletForm);
  const [formDataError, setFormDataError] = useState<palletFormError>(
    defaultPalletFormError
  );

  const handleNext = () => {
    setFormDataError(defaultPalletFormError);
    if (currentStep === 0) {
      const validate = validatePalletFirstStep(formData);
      const err = validate.error;
      setFormDataError((prev) => {
        return { ...prev, ...err };
      });
      if (!validate.isError) {
        setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
      }
    }
    if (currentStep === 1) {
      const validate = validatePalletSecondStep(formData);
      const err = validate.error;
      setFormDataError((prev) => {
        return { ...prev, ...err };
      });
      if (!validate.isError) {
        setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
      }
    }
    // setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      if (name === "palletOpening") {
        return {
          ...prev,
          [name]: Number(value),
          height: Number(Math.max(0, Number(value) + heights[prev.capacity])),
        };
      }
      if (name !== "height") {
        return { ...prev, [name]: value };
      }
      return {
        ...prev,
        [name]: Number(value),
        palletOpening: Number(
          Math.max(0, Number(value) - heights[prev.capacity]).toFixed(1)
        ),
      };
    });
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="max-w-4xl w-full mx-auto sm:px-6 px-3 rounded-lg shadow-md">
      {/* Progress bar */}
      <div className="relative">
        <button
          onClick={onBack}
          className="hover:bg-slate-900 my-3 transition-all duration-500 rounded-md hover:scale-125 sm:px-4 absolute "
        >
          <MoveLeft size={35} />
        </button>
        <p className="text-center  text-xl sm:text-3xl my-3 mb-6 font-bold ">
          Wooden Pallet Estimate
        </p>
      </div>

      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`text-sm font-medium ${
                index <= currentStep ? "text-green-600" : "text-gray-400"
              }`}
            >
              <Check
                strokeWidth={4}
                className={`p-1 rounded-full text-white ${
                  index <= currentStep ? "bg-green-600" : "bg-gray-400"
                }`}
              />
            </div>
          ))}
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-green-600 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${currentStep * 0.5 * 100}%` }}
          ></div>
        </div>
      </div>

      <CurrentStepComponent
        formData={formData}
        handleInputChange={handleInputChange}
        errorData={formDataError}
      />

      {/* Navigation buttons */}
      <div className="mt-8 flex ">
        <button
          onClick={handlePrev}
          disabled={currentStep === 0}
          hidden={currentStep === 0}
          className="px-4 py-2 mr-auto bg-gray-200 text-gray-800 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
          hidden={currentStep === steps.length - 1}
          className="px-4 py-2 bg-blue-600 ml-auto text-white rounded-md disabled:opacity-50"
        >
          {currentStep === steps.length - 2 ? "Get Rates" : "Next"}
        </button>
      </div>
    </div>
  );
};
