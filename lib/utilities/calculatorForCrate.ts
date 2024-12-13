import { CrateFormValue } from "../interfaces/forms";

/**
 * Calculates the total volume of wood required for a pallet.
 * @param formData - Object containing pallet specifications (dimensions, type, capacity).
 * @returns Total wood required in cubic meters.
 */
export const calculateCrateRates = (formData: CrateFormValue) => {
  // Retrieve measurement data based on weight capacity
  const measurementData = findMeasurements(formData.capacity);
  const CBMtoCFT = 0.0283168;

  const effectiveLength = Math.ceil(
    Number(formData.length) +
      measurementData.battonThickness * 2 +
      measurementData.crossPlankThickness * 2
  );

  const effectiveWidth = Math.ceil(
    Number(formData.width) +
      measurementData.battonThickness * 2 +
      measurementData.crossPlankThickness * 2
  );

  const effectiveheight =
    measurementData.bottomPlankThickness +
    Number(formData.height) +
    formData.stringerHeight +
    measurementData.battonThickness +
    measurementData.crossPlankThickness;

  // Calculate the number of planks that fit based on length and plank width
  const bottomBoardPlanks = maxPlanks(
    formData.gap,
    formData.width,
    measurementData.plankWidth
  );

  const crossBoardPlanks = maxPlanks(
    formData.gap,
    formData.height,
    measurementData.plankWidth
  );

  const topBoardPlanks = maxPlanks(
    formData.gap,
    formData.width,
    measurementData.plankWidth
  );

  // Find the number of stringers needed based on pallet length
  const stringerNum = findStringerAndSideBattonNum(formData.length);

  // Find the number of block rows needed based on pallet width
  const nettyBattonNumber = findNettyBattonNumber(formData.width);

  // let totalWood; // Total wood required in cubic meters

  const bottomBoardWood =
    (effectiveLength *
      measurementData.plankWidth *
      measurementData.bottomPlankThickness *
      bottomBoardPlanks) /
    (1000 * 1000 * 1000);

  const topBoardWood =
    (effectiveLength *
      measurementData.plankWidth *
      measurementData.crossPlankThickness *
      bottomBoardPlanks) /
    (1000 * 1000 * 1000);

  const sideBoardWood =
    (effectiveLength *
      measurementData.plankWidth *
      measurementData.crossPlankThickness *
      crossBoardPlanks *
      2) /
    (1000 * 1000 * 1000);

  const nettyBoardWood =
    (effectiveWidth *
      measurementData.plankWidth *
      measurementData.crossPlankThickness *
      crossBoardPlanks *
      2) /
    (1000 * 1000 * 1000);

  const verticalBattons =
    (measurementData.battonWidth *
      measurementData.battonThickness *
      (measurementData.bottomPlankThickness +
        Number(formData.height) +
        formData.stringerHeight +
        measurementData.battonThickness +
        measurementData.crossPlankThickness) *
      (stringerNum + nettyBattonNumber)) /
    (1000 * 1000 * 1000);

  const topBattons =
    (measurementData.battonWidth *
      measurementData.battonThickness *
      stringerNum *
      effectiveWidth) /
    (1000 * 1000 * 1000);

  const stringerWood =
    (effectiveWidth *
      formData.stringerHeight *
      measurementData.stringerWidth *
      stringerNum) /
    (1000 * 1000 * 1000);

  const horizonatalBattons =
    ((effectiveLength + effectiveWidth) *
      2 *
      measurementData.battonWidth *
      measurementData.battonThickness) /
    (1000 * 1000 * 1000);
  console.log(
    stringerWood,
    topBattons,
    verticalBattons,
    nettyBoardWood,
    sideBoardWood,
    bottomBoardWood,
    horizonatalBattons,
    topBoardWood
  );

  const totalWood =
    (stringerWood +
      topBattons +
      verticalBattons +
      nettyBoardWood +
      sideBoardWood +
      bottomBoardWood +
      horizonatalBattons +
      topBoardWood) /
    CBMtoCFT;

  formData.stringerLength = effectiveWidth;
  formData.stringerWidth = Math.floor(measurementData.stringerWidth - 12.2);
  formData.stringerNumber = stringerNum;
  formData.baseBoardPlankNumber = bottomBoardPlanks;
  formData.baseBoardThickness = measurementData.bottomPlankThickness - 6.4;
  formData.baseBoardLength = effectiveLength;
  formData.baseBoardPlankWidth = measurementData.plankWidth - 6.4;
  formData.outerlength = effectiveLength;
  formData.outerwidth = effectiveWidth;
  formData.outerheight = Math.floor(effectiveheight);
  formData.crossBoardThickness = measurementData.crossPlankThickness - 6.4;
  formData.sideBoardLength = effectiveLength;
  formData.sideBoardPlankWidth = measurementData.plankWidth - 6.4;
  formData.sideBoardPlankNumber = crossBoardPlanks;
  formData.nettyBoardLength = formData.width;
  formData.nettyBoardPlankWidth = measurementData.plankWidth - 6.4;
  formData.nettyBoardPlankNumber = crossBoardPlanks;
  formData.topboardLength = effectiveLength;
  formData.topboardPlankWidth = measurementData.plankWidth - 6.4;
  formData.topboardPlankNumber = topBoardPlanks;
  formData.battonWidth = measurementData.battonWidth;
  formData.battonThickness = Math.floor(measurementData.battonThickness - 6.4);

  const finalPrice = Math.ceil((totalWood * 800) / 10) * 10;
  return { price: finalPrice, crateData: formData };
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

const findMeasurements = (
  weight: "500" | "1000" | "1500" | "2000" | "3000"
) => {
  let measurementData = {
    bottomPlankThickness: 0,
    battonThickness: 0,
    crossPlankThickness: 0,
    stringerWidth: 0,
    battonWidth: 0,
    plankWidth: 0,
  };

  // Assign values based on weight capacity
  switch (weight) {
    case "500":
      measurementData = {
        bottomPlankThickness: 22.3,
        battonThickness: 25.5,
        crossPlankThickness: 22.3,
        stringerWidth: 51 + 12.2,
        battonWidth: 75,
        plankWidth: 75 + 6.4,
      };
      break;
    case "1000":
      measurementData = {
        bottomPlankThickness: 25.5,
        battonThickness: 25.5,
        crossPlankThickness: 22.3,
        stringerWidth: 57.2 + 12.2,
        battonWidth: 75,
        plankWidth: 90 + 6.4,
      };
      break;
    case "1500":
      measurementData = {
        bottomPlankThickness: 28.7,
        battonThickness: 25.5,
        crossPlankThickness: 22.3,
        stringerWidth: 63.6,
        battonWidth: 100,
        plankWidth: 100 + 6.4,
      };
      break;
    case "2000":
      measurementData = {
        bottomPlankThickness: 31.7,
        battonThickness: 28.7,
        crossPlankThickness: 25.5,
        stringerWidth: 75 + 12.2,
        battonWidth: 100,
        plankWidth: 100 + 6.4,
      };
      break;
    case "3000":
      measurementData = {
        bottomPlankThickness: 38.2,
        battonThickness: 31.7,
        crossPlankThickness: 28.7,
        stringerWidth: 88.7 + 12.2,
        battonWidth: 100,
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
const findStringerAndSideBattonNum = (length: number) => {
  if (length <= 50) return 2;
  if (length <= 1300) return 3;
  return Math.floor(length / 350); // For longer pallets, calculate dynamically
};

/**
 * Calculates the number of block rows required based on the width of the pallet.
 * @param width - Width of the pallet in mm.
 * @returns Number of block rows needed.
 */
const findNettyBattonNumber = (width: number) => {
  if (width <= 50) return 2;
  if (width <= 1000) return 3;
  return Math.floor(width / 350); // For wider pallets, calculate dynamically
};
