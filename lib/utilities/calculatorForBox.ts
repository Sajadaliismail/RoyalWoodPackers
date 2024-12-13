import { boxFormValue } from "../interfaces/forms";

/**
 * Calculates the total volume of wood required for a pallet.
 * @param formData - Object containing pallet specifications (dimensions, type, capacity).
 * @returns Total wood required in cubic meters.
 */
export const calculateBoxRates = (formData: boxFormValue) => {
  const CBMtoCFT = 0.0283168;

  //find basic measurements according to the required capacity
  const measurementData = findMeasurements(formData.capacity);

  // find the number of stringers and side battons, and same is the number of top battons
  const stringerNumber = findStringerAndSideBattonNum(formData.length);

  // find the number of nettybattons
  const nettyBattonNumber = findNettyBattonNumber(formData.width);

  const effectiveLength = Math.floor(
    Number(formData.length) +
      measurementData.battonThickness * 2 +
      measurementData.crossPlankThickness * 2
  );

  const effectiveWidth = Math.floor(
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
  let totalWood = 1;
  if (formData.type === "wood") {
    const bottomBoardWood =
      (effectiveLength *
        effectiveWidth *
        measurementData.bottomPlankThickness) /
      (1000 * 1000 * 1000);

    const topBoardWood =
      (effectiveLength * effectiveWidth * measurementData.crossPlankThickness) /
      (1000 * 1000 * 1000);

    const sideBoardWood =
      (effectiveLength *
        formData.height *
        measurementData.crossPlankThickness *
        2) /
      (1000 * 1000 * 1000);

    const nettyBoardWood =
      (effectiveWidth *
        Number(formData.height) *
        measurementData.crossPlankThickness *
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
        (stringerNumber + nettyBattonNumber)) /
      (1000 * 1000 * 1000);

    const topBattons =
      (measurementData.battonWidth *
        measurementData.battonThickness *
        stringerNumber *
        effectiveWidth) /
      (1000 * 1000 * 1000);

    const stringerWood =
      (effectiveWidth *
        formData.stringerHeight *
        measurementData.stringerWidth *
        stringerNumber) /
      (1000 * 1000 * 1000);

    const horizonatalBattons =
      ((effectiveLength + effectiveWidth) *
        2 *
        measurementData.battonWidth *
        measurementData.battonThickness) /
      (1000 * 1000 * 1000);

    totalWood =
      (stringerWood +
        topBattons +
        verticalBattons +
        nettyBoardWood +
        sideBoardWood +
        bottomBoardWood +
        horizonatalBattons +
        topBoardWood) /
      CBMtoCFT;
  }

  formData.outerlength = effectiveLength;
  formData.outerwidth = effectiveWidth;
  formData.outerheight = Math.floor(effectiveheight);
  formData.baseBoardThickness = measurementData.bottomPlankThickness - 6.4;
  formData.crossBoardThickness = measurementData.crossPlankThickness - 6.4;
  formData.stringerWidth = Math.floor(measurementData.stringerWidth - 12.2);
  formData.stringerNumber = stringerNumber;
  formData.stringerLength = effectiveWidth;
  formData.baseBoardLength = effectiveLength;
  formData.baseBoardWidth = effectiveWidth;
  formData.sideBoardLength = effectiveLength;
  formData.sideBoardWidth = formData.height;
  formData.nettyBoardLength = formData.width;
  formData.nettyBoardWidth = formData.height;
  formData.topboardLength = effectiveLength;
  formData.topboarddWidth = effectiveWidth;
  formData.battonWidth = measurementData.battonWidth;
  formData.battonThickness = Math.floor(measurementData.battonThickness - 6.4);

  const finalPrice = Math.ceil((totalWood * 800) / 10) * 10;
  return { finalPrice, boxData: formData };
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
    bottomPlankThickness: 0,
    battonThickness: 0,
    crossPlankThickness: 0,
    stringerWidth: 0,
    battonWidth: 0,
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
      };
      break;
    case "1000":
      measurementData = {
        bottomPlankThickness: 25.5,
        battonThickness: 25.5,
        crossPlankThickness: 22.3,
        stringerWidth: 57.2 + 12.2,
        battonWidth: 75,
      };
      break;
    case "1500":
      measurementData = {
        bottomPlankThickness: 28.7,
        battonThickness: 25.5,
        crossPlankThickness: 22.3,
        stringerWidth: 63.6 + 12.2,
        battonWidth: 100,
      };
      break;
    case "2000":
      measurementData = {
        bottomPlankThickness: 31.7,
        battonThickness: 28.7,
        crossPlankThickness: 25.5,
        stringerWidth: 75 + 12.2,
        battonWidth: 100,
      };
      break;
    case "3000":
      measurementData = {
        bottomPlankThickness: 38.2,
        battonThickness: 31.7,
        crossPlankThickness: 28.7,
        stringerWidth: 88.7 + 12.2,
        battonWidth: 100,
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
