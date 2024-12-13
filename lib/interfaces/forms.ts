import { boxInfoProps } from "@/app/custompallet/components/boxes/AdditionalInfo";
import { CrateInfoProps } from "@/app/custompallet/components/crates/AdditionalInfo";
import { PalletInfoProps } from "@/app/custompallet/components/pallets/AdditionalInfo";

export interface stepsProps {
  title: string;
  component: React.FC<PalletInfoProps>;
}

export interface stepsPropsBox {
  title: string;
  component: React.FC<boxInfoProps>;
}

export interface stepsPropsCrate {
  title: string;
  component: React.FC<CrateInfoProps>;
}

export interface palletFormError {
  length: string;
  palletOpening: string;
  width: string;
  height: string;

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

export interface BoxFormError {
  length: string;
  width: string;
  height: string;
  name: string;
  email: string;
  requirement: string;
  remarks: string;
}

export interface boxFormValue {
  length: number;
  width: number;
  height: number;
  outerlength: number,
  outerwidth: number,
  outerheight: number,
  stringerLength: number;
  stringerWidth: number;
  stringerHeight: number;
  stringerNumber: number;
  baseBoardLength: number;
  baseBoardWidth: number;
  baseBoardThickness: number;
  sideBoardLength: number;
  sideBoardWidth: number;
  nettyBoardLength: number;
  nettyBoardWidth: number;
  topboardLength: number;
  topboarddWidth: number;
  crossBoardThickness: number;
  sideBattonNumber: number;
  nettyBattonNumber: number;
  topbattonsNumber: number;
  battonThickness: number;
  battonLength: number;
  crossBatton: number;
  crossBattonLength: number;
  battonWidth: number;
  name: string;
  email: string;
  requirement: number;
  remarks: string;
  type: "plywood" | "wood";
  capacity: "500" | "1000" | "1500" | "2000" | "3000";
}


export interface CrateFormError {
  length: string;
  width: string;
  height: string;
  gap:string;
  name: string;
  email: string;
  requirement: string;
  remarks: string;
}

export interface CrateFormValue {
  length: number;
  width: number;
  height: number;
  gap:number;
  outerlength: number,
  outerwidth: number,
  outerheight: number,
  stringerLength: number;
  stringerWidth: number;
  stringerHeight: number;
  stringerNumber: number;
  baseBoardLength: number;
  baseBoardPlankWidth: number;
  baseBoardPlankNumber: number;
  baseBoardThickness: number;
  sideBoardLength: number;
  sideBoardPlankWidth: number;
  sideBoardPlankNumber: number;
  nettyBoardLength: number;
  nettyBoardPlankWidth: number;
  nettyBoardPlankNumber: number;
  topboardLength: number;
  topboardPlankWidth: number;
  topboardPlankNumber: number;
  crossBoardThickness: number;
  sideBattonNumber: number;
  nettyBattonNumber: number;
  topbattonsNumber: number;
  battonThickness: number;
  battonLength: number;
  crossBatton: number;
  crossBattonLength: number;
  battonWidth: number;
  name: string;
  email: string;
  requirement: number;
  remarks: string;
  capacity: "500" | "1000" | "1500" | "2000" | "3000";
}
