// "use client";
// import { useState } from "react";
// import Input from "./input";

// const defaultPalletForm = {
//   length: "",
//   height: "",
//   width: "",
//   stringerLength: "",
//   stringerWidth: "",
//   stringerHeight: "",
//   stringerBoardLength: "",
//   stringerBoardWidth: "",
//   stringerBoardHeight: "",
//   topBoardPlanks: "",
//   bottomBoardPlanks: "",
//   stringerBoardNumber: "",
//   stringerNumber: "",
//   topPlankLength: "",
//   topPlankdWidth: "",
//   topPlankHeight: "",
//   bottomPlankLength: "",
//   bottomPlankdWidth: "",
//   bottomPlankHeight: "",
//   blockLength: "",
//   blockdWidth: "",
//   blockHeight: "",
//   blockNumbers: "",
// };

// interface palletFormValue {
//   length: number | string;
//   height: number | string;
//   width: number | string;
//   stringerLength: number | string;
//   stringerWidth: number | string;
//   stringerHeight: number | string;
//   stringerBoardLength: number | string;
//   stringerBoardWidth: number | string;
//   stringerBoardHeight: number | string;
//   stringerBoardNumber: number | string;
//   topBoardPlanks: number | string;
//   bottomBoardPlanks: number | string;
//   stringerNumber: number | string;
//   topPlankLength: number | string;
//   topPlankdWidth: number | string;
//   topPlankHeight: number | string;
//   bottomPlankLength: number | string;
//   bottomPlankdWidth: number | string;
//   bottomPlankHeight: number | string;
//   blockLength: number | string;
//   blockdWidth: number | string;
//   blockHeight: number | string;
//   blockNumbers: number | string;
// }

// interface palletFormError {
//   length: string;
//   height: string;
//   width: string;
//   stringerLength: string;
//   stringerWidth: string;
//   stringerHeight: string;
//   stringerBoardLength: string;
//   stringerBoardWidth: string;
//   stringerBoardHeight: string;
//   topBoardPlanks: string;
//   bottomBoardPlanks: string;
//   stringerBoardNumber: string;
//   stringerNumber: string;
//   topPlankLength: string;
//   topPlankdWidth: string;
//   topPlankHeight: string;
//   bottomPlankLength: string;
//   bottomPlankdWidth: string;
//   bottomPlankHeight: string;
//   blockLength: string;
//   blockdWidth: string;
//   blockHeight: string;
//   blockNumbers: string;
// }

// const defaultPalletFormValue: palletFormValue = defaultPalletForm;

// const defaultPalletFormError: palletFormError = defaultPalletForm;

// export default function GetRates() {
//   const [palletFormValue, setPalletFormValue] = useState<palletFormValue>(
//     defaultPalletFormValue
//   );
//   const [palletFormError, setPalletFormError] = useState<palletFormError>(
//     defaultPalletFormError
//   );
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { value, name } = e.target;

//     setPalletFormValue((prev) => {
//       return { ...prev, [name]: value };
//     });

//     setPalletFormError(defaultPalletFormError);
//   };

//   return (
//     <div className="min-h-[100vh]">
//       <div className="flex flex-row justify-center gap-3">
//         <div className="flex flex-col gap-2">
//           <div className="flex flex-row justify-center gap-3">
//             <div>
//               <Input
//                 error={palletFormError.length}
//                 type={"number"}
//                 handleChange={handleChange}
//                 name={"length"}
//                 value={palletFormValue?.length}
//                 placeHolder="Length (mm)"
//                 label="Length"
//               />
//             </div>
//             <Input
//               error={palletFormError.width}
//               type={"number"}
//               handleChange={handleChange}
//               name={"width"}
//               value={palletFormValue?.width}
//               placeHolder="Width (mm)"
//               label="Width"
//             />
//             <Input
//               error={palletFormError.height}
//               type={"number"}
//               handleChange={handleChange}
//               name={"height"}
//               value={palletFormValue?.height}
//               placeHolder="Height (mm)"
//               label="Height"
//             />
//           </div>
//           {/*
//           <h1>Stringer Boards</h1>
//           <div className="flex flex-row justify-center gap-3">
//             <Input
//               error={palletFormError.stringerBoardLength}
//               type={"number"}
//               handleChange={handleChange}
//               name={"stringerBoardLength"}
//               value={palletFormValue?.stringerBoardLength}
//               placeHolder="Board length (mm)"
//             />
//             <Input
//               error={palletFormError.stringerBoardWidth}
//               type={"number"}
//               handleChange={handleChange}
//               name={"stringerBoardWidth"}
//               value={palletFormValue?.stringerBoardWidth}
//               placeHolder="Board Width (mm)"
//             />
//             <Input
//               error={palletFormError.stringerBoardHeight}
//               type={"number"}
//               handleChange={handleChange}
//               name={"stringerBoardHeight"}
//               value={palletFormValue?.stringerBoardHeight}
//               placeHolder="Board Thickness (mm)"
//             />
//             <Input
//               error={palletFormError.stringerBoardNumber}
//               type={"number"}
//               handleChange={handleChange}
//               name={"stringerBoardNumber"}
//               value={palletFormValue?.stringerBoardNumber}
//               placeHolder="Numbers"
//             />
//           </div>
//           <h1>Stringer </h1>
//           <div className="flex flex-row justify-center gap-3">
//             <Input
//               error={palletFormError.stringerLength}
//               type={"number"}
//               handleChange={handleChange}
//               name={"stringerLength"}
//               value={palletFormValue?.stringerLength}
//               placeHolder="Stringer length (mm)"
//             />
//             <Input
//               error={palletFormError.stringerWidth}
//               type={"number"}
//               handleChange={handleChange}
//               name={"stringerWidth"}
//               value={palletFormValue?.stringerWidth}
//               placeHolder="Stringer Width (mm)"
//             />
//             <Input
//               error={palletFormError.stringerHeight}
//               type={"number"}
//               handleChange={handleChange}
//               name={"stringerHeight"}
//               value={palletFormValue?.stringerHeight}
//               placeHolder="Stringer Thickness (mm)"
//             />
//             <Input
//               error={palletFormError.stringerNumber}
//               type={"number"}
//               handleChange={handleChange}
//               name={"stringerNumber"}
//               value={palletFormValue?.stringerNumber}
//               placeHolder="Numbers"
//             />
//           </div>
//           <h1>Top Planks</h1>

//           <div className="flex flex-row justify-center gap-3">
//             <Input
//               error={palletFormError.topPlankLength}
//               type={"number"}
//               handleChange={handleChange}
//               name={"topPlankLength"}
//               value={palletFormValue?.topPlankLength}
//               placeHolder="Top Plank Length (mm)"
//             />
//             <Input
//               error={palletFormError.topPlankdWidth}
//               type={"number"}
//               handleChange={handleChange}
//               name={"topPlankdWidth"}
//               value={palletFormValue?.topPlankdWidth}
//               placeHolder="Top Plank Width (mm)"
//             />
//             <Input
//               error={palletFormError.topPlankHeight}
//               type={"number"}
//               handleChange={handleChange}
//               name={"topPlankHeight"}
//               value={palletFormValue?.topPlankHeight}
//               placeHolder="Top Plank Thickness (mm)"
//             />
//             <Input
//               error={palletFormError.topBoardPlanks}
//               type={"number"}
//               handleChange={handleChange}
//               name={"topBoardPlanks"}
//               value={palletFormValue?.topBoardPlanks}
//               placeHolder="Numbers"
//             />
//           </div>
//           <h1>Bottom Planks</h1>

//           <div className="flex flex-row justify-center gap-3">
//             <Input
//               error={palletFormError.bottomPlankLength}
//               type={"number"}
//               handleChange={handleChange}
//               name={"bottomPlankLength"}
//               value={palletFormValue?.bottomPlankLength}
//               placeHolder="Bottom Plank Length (mm)"
//             />
//             <Input
//               error={palletFormError.bottomPlankdWidth}
//               type={"number"}
//               handleChange={handleChange}
//               name={"bottomPlankdWidth"}
//               value={palletFormValue?.bottomPlankdWidth}
//               placeHolder="Bottom Plank Width (mm)"
//             />
//             <Input
//               error={palletFormError.bottomPlankHeight}
//               type={"number"}
//               handleChange={handleChange}
//               name={"bottomPlankHeight"}
//               value={palletFormValue?.bottomPlankHeight}
//               placeHolder="Bottom Plank Thickness (mm)"
//             />
//             <Input
//               error={palletFormError.bottomBoardPlanks}
//               type={"number"}
//               handleChange={handleChange}
//               name={"bottomBoardPlanks"}
//               value={palletFormValue?.bottomBoardPlanks}
//               placeHolder="Numbers"
//             />
//           </div>
//           <h1>Blocks</h1>

//           <div className="flex flex-row justify-center gap-3">
//             <Input
//               error={palletFormError.blockLength}
//               type={"number"}
//               handleChange={handleChange}
//               name={"blockLength"}
//               value={palletFormValue?.blockLength}
//               placeHolder="Block Length (mm)"
//             />
//             <Input
//               error={palletFormError.blockdWidth}
//               type={"number"}
//               handleChange={handleChange}
//               name={"blockdWidth"}
//               value={palletFormValue?.blockdWidth}
//               placeHolder="Block Width (mm)"
//             />
//             <Input
//               error={palletFormError.blockHeight}
//               type={"number"}
//               handleChange={handleChange}
//               name={"blockHeight"}
//               value={palletFormValue?.blockHeight}
//               placeHolder="Block Height (mm)"
//             />
//             <Input
//               error={palletFormError.blockNumbers}
//               type={"number"}
//               handleChange={handleChange}
//               name={"blockNumbers"}
//               value={palletFormValue?.blockNumbers}
//               placeHolder="Numbers"
//             />
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// }
