"use client";
import { useState } from "react";
import Input from "./input";

interface palletFormValue {
  length: number | string;
  height: number | string;
  width: number | string;
  stringerLength: number | string;
  stringerWidth: number | string;
  stringerHeight: number | string;
  stringerBoardLength: number | string;
  stringerBoardWidth: number | string;
  stringerBoardHeight: number | string;
  stringerBoardNumber: number | string;
  topBoardPlanks: number | string;
  bottomBoardPlanks: number | string;
  stringerNumber: number | string;
}

interface palletFormError {
  length: string;
  height: string;
  width: string;
  stringerLength: string;
  stringerWidth: string;
  stringerHeight: string;
  stringerBoardLength: string;
  stringerBoardWidth: string;
  stringerBoardHeight: string;
  topBoardPlanks: string;
  bottomBoardPlanks: string;
  stringerBoardNumber: string;
  stringerNumber: string;
}

const defaultPalletFormValue: palletFormValue = {
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
};

const defaultPalletFormError: palletFormError = {
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
};

export default function GetRates() {
  const [palletFormValue, setPalletFormValue] = useState<palletFormValue>(
    defaultPalletFormValue
  );
  const [palletFormError, setPalletFormError] = useState<palletFormError>(
    defaultPalletFormError
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setPalletFormValue((prev) => {
      return { ...prev, [name]: value };
    });

    setPalletFormError(defaultPalletFormError);
  };

  return (
    <div className="min-h-[100vh]">
      <div className="flex flex-row justify-center gap-3">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-center gap-3">
            <Input
              error={palletFormError.length}
              type={"number"}
              handleChange={handleChange}
              name={"length"}
              value={palletFormValue?.length}
              placeHolder="Length"
            />
            <Input
              error={palletFormError.width}
              type={"number"}
              handleChange={handleChange}
              name={"width"}
              value={palletFormValue?.width}
              placeHolder="Width"
            />
            <Input
              error={palletFormError.height}
              type={"number"}
              handleChange={handleChange}
              name={"height"}
              value={palletFormValue?.height}
              placeHolder="Height"
            />
          </div>
          <h1>Stringer Boards</h1>
          <div className="flex flex-row justify-center gap-3">
            <Input
              error={palletFormError.stringerBoardLength}
              type={"number"}
              handleChange={handleChange}
              name={"stringerBoardLength"}
              value={palletFormValue?.stringerBoardLength}
              placeHolder="Board length"
            />
            <Input
              error={palletFormError.stringerBoardWidth}
              type={"number"}
              handleChange={handleChange}
              name={"stringerBoardWidth"}
              value={palletFormValue?.stringerBoardWidth}
              placeHolder="Board Width"
            />
            <Input
              error={palletFormError.stringerBoardHeight}
              type={"number"}
              handleChange={handleChange}
              name={"stringerBoardHeight"}
              value={palletFormValue?.stringerBoardHeight}
              placeHolder="Board Thickness"
            />
            <Input
              error={palletFormError.stringerBoardNumber}
              type={"number"}
              handleChange={handleChange}
              name={"stringerBoardNumber"}
              value={palletFormValue?.stringerBoardNumber}
              placeHolder="Numbers"
            />
          </div>
          <h1>Stringer </h1>
          <div className="flex flex-row justify-center gap-3">
            <Input
              error={palletFormError.stringerLength}
              type={"number"}
              handleChange={handleChange}
              name={"stringerLength"}
              value={palletFormValue?.stringerLength}
              placeHolder="Stringer length"
            />
            <Input
              error={palletFormError.stringerWidth}
              type={"number"}
              handleChange={handleChange}
              name={"stringerWidth"}
              value={palletFormValue?.stringerWidth}
              placeHolder="Stringer Width"
            />
            <Input
              error={palletFormError.stringerHeight}
              type={"number"}
              handleChange={handleChange}
              name={"stringerHeight"}
              value={palletFormValue?.stringerHeight}
              placeHolder="Stringer Thickness"
            />
            <Input
              error={palletFormError.stringerNumber}
              type={"number"}
              handleChange={handleChange}
              name={"stringerNumber"}
              value={palletFormValue?.stringerNumber}
              placeHolder="Numbers"
            />
          </div>
          <h1>Top Planks</h1>

          <div className="flex flex-row justify-center gap-3">
            <input placeholder="Length" />
            <input placeholder="Width" />
            <input placeholder="Height" />
            <input pattern="Numbers" />
          </div>
          <h1>Bottom Planks</h1>

          <div className="flex flex-row justify-center gap-3">
            <input placeholder="Length" />
            <input placeholder="Width" />
            <input placeholder="Height" />
            <input pattern="Numbers" />
          </div>
          <h1>Blocks</h1>

          <div className="flex flex-row justify-center gap-3">
            <input placeholder="Length" />
            <input placeholder="Width" />
            <input placeholder="Height" />
            <input pattern="Numbers" />
          </div>
        </div>
      </div>
    </div>
  );
}
