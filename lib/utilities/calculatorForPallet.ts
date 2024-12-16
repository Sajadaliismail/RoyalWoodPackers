import { palletFormValue } from "../interfaces/forms";

/**
 * Calculates the total volume of wood required for a pallet.
 * @param formData - Object containing pallet specifications (dimensions, type, capacity).
 * @returns Total wood required in cubic meters.
 */
export const calculatePalletRates = (formData: palletFormValue) => {
  // Retrieve measurement data based on weight capacity
  const measurementData = findMeasurements(formData.capacity);
  const CBMtoCFT = 0.0283168;

  // Calculate the number of top planks that fit based on length and plank width
  const topPlanksNum = maxPlanks(
    50, // Minimum gap between planks in mm
    formData.width,
    measurementData.plankWidth
  );

  // Find the number of stringers needed based on pallet length
  const stringerNum = findStringerNum(formData.width);

  // Find the number of block rows needed based on pallet width
  const blockRowNum = findBlockNum(formData.length);

  let totalWood; // Total wood required in cubic meters

  if (formData.type === "two-way") {
    // Two-way pallets with stringers
    totalWood =
      ((formData.length *
        measurementData.plankWidth *
        topPlanksNum *
        measurementData.topPlankThickness) /
        (1000 * 1000 * 1000) + // Convert to cubic meters
        (formData.width *
          (formData.palletOpening + 12.2) *
          measurementData.stringerThickness *
          stringerNum) /
          (1000 * 1000 * 1000) +
        (formData.length *
          blockRowNum *
          measurementData.plankWidth *
          measurementData.bottomPlankThickness) /
          (1000 * 1000 * 1000)) /
      CBMtoCFT; // Convert from cubic meters to cubic feet
  } else {
    // Block pallets with additional components
    totalWood =
      ((formData.width *
        measurementData.plankWidth *
        topPlanksNum *
        measurementData.topPlankThickness) /
        (1000 * 1000 * 1000) +
        (measurementData.blockLength *
          measurementData.blockWidth *
          (formData.palletOpening + 12.2) *
          stringerNum *
          blockRowNum) /
          (1000 * 1000 * 1000) +
        (formData.width *
          blockRowNum *
          measurementData.plankWidth *
          measurementData.bottomPlankThickness) /
          (1000 * 1000 * 1000) +
        (formData.length *
          blockRowNum *
          measurementData.plankWidth *
          measurementData.stringerPlankThickness) /
          (1000 * 1000 * 1000)) /
      CBMtoCFT; // Convert from cubic meters to cubic feet
  }
  formData.blockLength = measurementData.blockLength - 12.2;
  formData.blockdWidth = measurementData.blockWidth - 12.2;
  formData.blockNumbers = blockRowNum * stringerNum;
  formData.bottomBoardPlanks = blockRowNum;
  formData.bottomPlankHeight = measurementData.bottomPlankThickness - 6.4;
  formData.bottomPlankLength = formData.width;
  formData.bottomPlankdWidth = measurementData.plankWidth - 6.4;
  formData.stringerBoardHeight = measurementData.stringerPlankThickness - 6.4;
  formData.stringerBoardLength = formData.length;
  formData.stringerBoardWidth = measurementData.plankWidth - 6.4;
  formData.stringerBoardNumber = stringerNum;
  formData.stringerLength = formData.length;
  formData.stringerWidth = measurementData.stringerThickness - 6.4;
  formData.topPlankLength = formData.width;
  formData.topPlankHeight = measurementData.topPlankThickness - 6.4;
  formData.topPlankdWidth = measurementData.plankWidth - 6.4;
  formData.topBoardPlanks = topPlanksNum;
  formData.stringerNumber = stringerNum;

  const finalPrice = Math.ceil((totalWood * 650) / 10) * 10;
  return { price: finalPrice, palletData: formData };
};

/**
 * Calculates the maximum number of planks that can fit based on dimensions and gap.
 * @param gap - Minimum gap between planks in mm.
 * @param maxLength - Total length of the pallet in mm.
 * @param plankWidth - Width of a single plank in mm.
 * @returns Maximum number of planks that can fit.
 */
export const maxPlanks = (
  gap: number,
  maxLength: number,
  plankWidth: number
) => {
  if (maxLength <= plankWidth) return 1; // If the length is less than one plank, return 1 plank

  let plankNum = Math.floor(maxLength / plankWidth); // Initial estimate for number of planks

  let currGap = -Infinity;

  // Adjust plank number to ensure the gap meets the required minimum
  while (currGap < gap) {
    currGap = Math.max(
      currGap,
      Math.ceil((maxLength - plankNum * plankWidth) / (plankNum - 1))
    );
    plankNum--;
    if (currGap + 10 > gap) return plankNum + 1;
  }
  return plankNum + 1;
};

/**
 * Finds measurement data (plank thickness, block dimensions, etc.) based on weight capacity.
 * @param weight - Weight capacity of the pallet in kg.
 * @returns Object containing measurement data.
 */
const findMeasurements = (
  weight: "500" | "1000" | "1500" | "2000" | "3000"
) => {
  let measurementData = {
    topPlankThickness: 0,
    stringerPlankThickness: 0,
    bottomPlankThickness: 0,
    stringerThickness: 0,
    blockLength: 0,
    blockWidth: 0,
    plankWidth: 0,
  };

  // Assign values based on weight capacity
  switch (weight) {
    case "500":
      measurementData = {
        bottomPlankThickness: 22.3,
        stringerPlankThickness: 25.5,
        topPlankThickness: 22.3,
        stringerThickness: 51,
        blockLength: 76.2 + 12.2,
        blockWidth: 76.2 + 12.2,
        plankWidth: 76.2 + 6.4,
      };
      break;
    case "1000":
      measurementData = {
        bottomPlankThickness: 25.5,
        stringerPlankThickness: 28.7,
        topPlankThickness: 25.5,
        stringerThickness: 57.2,
        blockLength: 90  + 12.2,
        blockWidth: 90  + 12.2,
        plankWidth: 90   + 6.4,
      };
      break;
    case "1500":
      measurementData = {
        bottomPlankThickness: 28.7,
        stringerPlankThickness: 31.7,
        topPlankThickness: 28.7,
        stringerThickness: 63.6,
        blockLength: 100 + 12.2,
        blockWidth: 100 + 12.2,
        plankWidth: 100 + 6.4,
      };
      break;
    case "2000":
      measurementData = {
        bottomPlankThickness: 31.7,
        stringerPlankThickness: 31.7,
        topPlankThickness: 31.7,
        stringerThickness: 75,
        blockLength: 100 + 12.2,
        blockWidth: 100 + 12.2,
        plankWidth: 100 + 6.4,
      };
      break;
    case "3000":
      measurementData = {
        bottomPlankThickness: 38.2,
        stringerPlankThickness: 38.2,
        topPlankThickness: 38.2,
        stringerThickness: 88.7,
        blockLength: 100 + 6.4,
        blockWidth: 100 + 6.4,
        plankWidth: 100 + 6.4,
      };
      break;
  }

  return measurementData;
};

/**
 * Calculates the number of stringers required based on the length of the pallet.
 * @param length - Length of the pallet in mm.
 * @returns Number of stringers needed.
 */
const findStringerNum = (length: number) => {
  if (length <= 50) return 2;
  if (length <= 1300) return 3;
  return Math.floor(length / 350); // For longer pallets, calculate dynamically
};

/**
 * Calculates the number of block rows required based on the width of the pallet.
 * @param width - Width of the pallet in mm.
 * @returns Number of block rows needed.
 */
const findBlockNum = (width: number) => {
  if (width <= 50) return 2;
  if (width <= 1000) return 3;
  return Math.floor(width / 350); // For wider pallets, calculate dynamically
};
