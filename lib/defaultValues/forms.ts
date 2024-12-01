import { palletFormError, palletFormValue } from "../interfaces/forms";

export const defaultPalletForm: palletFormValue = {
  length: NaN,
  height: NaN,
  width: NaN,
  stringerLength: NaN,
  stringerWidth: NaN,
  stringerHeight: NaN,
  stringerBoardLength: NaN,
  stringerBoardWidth: NaN,
  stringerBoardHeight: NaN,
  topBoardPlanks: NaN,
  bottomBoardPlanks: NaN,
  stringerBoardNumber: NaN,
  stringerNumber: NaN,
  topPlankLength: NaN,
  topPlankdWidth: NaN,
  topPlankHeight: NaN,
  bottomPlankLength: NaN,
  bottomPlankdWidth: NaN,
  bottomPlankHeight: NaN,
  blockLength: NaN,
  blockdWidth: NaN,
  blockHeight: NaN,
  blockNumbers: NaN,
  name: "",
  email: "",
  requirement: NaN,
  remarks: "",
  capacity: 500,
  type: "four-way",
};

export const defaultPalletFormError: palletFormError = {
  length: "",
  height: "",
  width: "",
  stringerLength: "",
  stringerWidth: "",
  stringerHeight: "",
  stringerBoardLength: "",
  stringerBoardWidth: "",
  stringerBoardHeight: "",
  topBoardPlanks: "",
  bottomBoardPlanks: "",
  stringerBoardNumber: "",
  stringerNumber: "",
  topPlankLength: "",
  topPlankdWidth: "",
  topPlankHeight: "",
  bottomPlankLength: "",
  bottomPlankdWidth: "",
  bottomPlankHeight: "",
  blockLength: "",
  blockdWidth: "",
  blockHeight: "",
  blockNumbers: "",
  name: "",
  email: "",
  requirement: "",
  remarks: "",
};