"use client";

import {

  defaultCrateError,
  defaultCrateValue,
} from "@/lib/defaultValues/forms";
import {
  CrateFormError,
  CrateFormValue,
  stepsPropsCrate,
} from "@/lib/interfaces/forms";
import React, { useState } from "react";
import { CrateSize } from "./CrateSize";
import { AdditionalInfo } from "./AdditionalInfo";
import { CrateRates } from "./CrateRates";

import { Check, MoveLeft } from "lucide-react";

const steps: stepsPropsCrate[] = [
  { title: "Crate Info", component: CrateSize },
  { title: "Additonal Info", component: AdditionalInfo },
  { title: "Cost", component: CrateRates },
];
interface CrateWizard {
  onBack: () => void;
}
export const CrateWizard: React.FC<CrateWizard> = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<CrateFormValue>(defaultCrateValue);
  const [formDataError, setFormDataError] =
    useState<CrateFormError>(defaultCrateError);

  const handleNext = () => {
    setFormDataError(defaultCrateError);
    if (currentStep === 0) {
    // const validate = validateBoxFirstStep(formData);
    //   const err = validate.error;
    //   setFormDataError((prev) => {
    //     return { ...prev, ...err };
    //   });
    //   if (!validate.isError) {
    //     setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    //   }
    }
    if (currentStep === 1) {
      // const validate = validateBoxSecondStep(formData);
      // const err = validate.error;
      // setFormDataError((prev) => {
      //   return { ...prev, ...err };
      // });
      // if (!validate.isError) {
      //   setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
      // }
    }
        setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  
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
      return { ...prev, [name]: value };
    });
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="max-w-4xl w-full mx-auto  sm:px-6 px-3 rounded-lg shadow-md">
      {/* Progress bar */}
      <div className="relative">
        <button
          onClick={onBack}
          className="hover:bg-slate-900 my-3 transition-all duration-500 rounded-md hover:scale-125 sm:px-4 absolute "
        >
          <MoveLeft size={35} />
        </button>
        <p className="text-center text-xl sm:text-3xl my-3 mb-6 font-bold ">
        Crate Pricing Info
        </p>
      </div>
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {steps.map((_, index) => (
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
