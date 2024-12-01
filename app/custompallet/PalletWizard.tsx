"use client";

import {
  defaultPalletForm,
  defaultPalletFormError,
} from "@/lib/defaultValues/forms";
import {
  palletFormError,
  palletFormValue,
  stepsProps,
} from "@/lib/interfaces/forms";
import React, { useState } from "react";
import { PalletInfo } from "./components/PalletSize";

const steps: stepsProps[] = [
  //   { title: "Personal Information", component: PersonalInfo },
  //   { title: "Contact Details", component: ContactDetails },
  //   { title: "Review", component: Review },
];

export default function Wizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<palletFormValue>(defaultPalletForm);
  const [formDataError, setFormDataError] = useState<palletFormError>(
    defaultPalletFormError
  );

  const handleNext = () => {
    setFormDataError(defaultPalletFormError);
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="max-w-4xl w-full mx-auto mt-10 p-6 rounded-lg shadow-md">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`text-sm font-medium ${
                index <= currentStep ? "text-blue-600" : "text-gray-400"
              }`}
            >
              {step.title}
            </div>
          ))}
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-blue-600 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <PalletInfo
        formData={formData}
        errorData={formDataError}
        handleInputChange={handleInputChange}
      />
      {/* Step content */}
      {/* <CurrentStepComponent
        formData={formData}
        handleInputChange={handleInputChange}
      /> */}

      {/* Navigation buttons */}
      <div className="mt-8 flex justify-between">
        <button
          onClick={handlePrev}
          disabled={currentStep === 0}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
          className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:opacity-50"
        >
          {currentStep === steps.length - 2 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}
