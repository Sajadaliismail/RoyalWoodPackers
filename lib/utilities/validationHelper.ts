import { ContactFormData } from "@/app/contact/page";
import { boxFormValue, palletFormValue } from "../interfaces/forms";

export const validatePalletFirstStep = (formData: palletFormValue) => {
  let isError = false;
  const error = {
    length: "",
    width: "",
    height: "",
    palletOpening: "",
  };
  for (const [key, value] of Object.entries(formData)) {
    if (
      key === "length" ||
      key === "width" ||
      key === "height" ||
      key === "palletOpening"
    ) {
      if (Number.isNaN(value) || !value) {
        isError = true;
        error[key] = "*Required";
      } else if (value <= 0 || value > 5000) {
        isError = true;
        error[key] = "Invalid Entry";
      }
    }
  }
  return { error, isError };
};

export const validatePalletSecondStep = (formData: palletFormValue) => {
  let isError = false;
  const error = {
    name: "",
    email: "",
    requirement: "",
  };
  for (const [key, value] of Object.entries(formData)) {
    if (key === "name" || key === "email" || key === "requirement") {
      if (Number.isNaN(value) || !value.trim()) {
        isError = true;
        error[key] = "*Required";
      } else if (key === "requirement" && (value <= 0 || value > 5000)) {
        isError = true;
        error[key] = "Invalid Entry";
      }
    }
  }
  return { error, isError };
};


export const validateBoxFirstStep = (formData: boxFormValue) => {
  let isError = false;
  const error = {
    length: "",
    width: "",
    height: "",
  };
  for (const [key, value] of Object.entries(formData)) {
    if (
      key === "length" ||
      key === "width" ||
      key === "height" 
    ) {
      if (Number.isNaN(value) || !value) {
        isError = true;
        error[key] = "*Required";
      } else if (value <= 0 || value > 5000) {
        isError = true;
        error[key] = "Invalid Entry";
      }
    }
  }
  return { error, isError };
};

export const validateBoxSecondStep = (formData: boxFormValue) => {
  let isError = false;
  const error = {
    name: "",
    email: "",
    requirement: "",
  };
  for (const [key, value] of Object.entries(formData)) {
    if (key === "name" || key === "email" || key === "requirement") {
      if (Number.isNaN(value) || !value.trim()) {
        isError = true;
        error[key] = "*Required";
      } else if (key === "requirement" && (value <= 0 || value > 5000)) {
        isError = true;
        error[key] = "Invalid Entry";
      }
    }
  }
  return { error, isError };
};

export const validateContactForm = (formData:ContactFormData)=>{
  let isError = false;
  const error = {
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: "",}

    for (const [key, value] of Object.entries(formData)) {
      if (key === "name" || key === "email" || key === "message" || key ==='enquiryType') {
        if (Number.isNaN(value) || !value.trim()) {
          isError = true;
          error[key] = "*Required";
        }
      }
    }
    return { error, isError };
  

}