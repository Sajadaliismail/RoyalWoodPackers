import { PalletInfoProps } from "@/app/custompallet/components/AdditionalInfo";

export interface stepsProps {
  title: string;
  component: React.FC<PalletInfoProps>;
}

export interface palletFormError {
  length: string;
  palletOpening: string;
  width: string;
  height: string;
  stringerLength: string;
  stringerWidth: string;
  stringerBoardLength: string;
  stringerBoardWidth: string;
  stringerBoardHeight: string;
  stringerBoardNumber: string;
  topBoardPlanks: string;
  bottomBoardPlanks: string;
  stringerNumber: string;
  topPlankLength: string;
  topPlankdWidth: string;
  topPlankHeight: string;
  bottomPlankLength: string;
  bottomPlankdWidth: string;
  bottomPlankHeight: string;
  blockLength: string;
  blockdWidth: string;
  blockNumbers: string;
  name: string;
  email: string;
  requirement: string;
  remarks: string;
}

export interface palletFormValue {
  length: number;
  width: number;
  height: number;
  palletOpening: number;
  stringerLength: number;
  stringerWidth: number;
  stringerBoardLength: number;
  stringerBoardWidth: number;
  stringerBoardHeight: number;
  stringerBoardNumber: number;
  topBoardPlanks: number;
  bottomBoardPlanks: number;
  stringerNumber: number;
  topPlankLength: number;
  topPlankdWidth: number;
  topPlankHeight: number;
  bottomPlankLength: number;
  bottomPlankdWidth: number;
  bottomPlankHeight: number;
  blockLength: number;
  blockdWidth: number;
  blockNumbers: number;
  name: string;
  email: string;
  requirement: number;
  remarks: string;
  capacity: "500" | "1000" | "1500" | "2000" | "3000";
  type: "two-way" | "four-way";
}
