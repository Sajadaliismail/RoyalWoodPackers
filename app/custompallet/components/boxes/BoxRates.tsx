"use client";
import { boxFormValue } from "@/lib/interfaces/forms";
import React, { useEffect, useState } from "react";
// import { calculatePalletRates } from "@/lib/utilities/calculatorForPallet";
// import jsPDF from "jspdf";
import { calculateBoxRates } from "@/lib/utilities/calculatorForBox";
interface boxInfoProps {
  formData: boxFormValue;
}

export const BoxRates: React.FC<boxInfoProps> = ({ formData }) => {
  const [boxData, setBoxData] = useState<boxFormValue | null>(null);
  const [rate, setRate] = useState<string>("");
  useEffect(() => {
    const { finalPrice,boxData } = calculateBoxRates(formData);
    setBoxData(boxData);
    setRate(finalPrice.toFixed(0));
    return () => {};
  }, [formData]);

  if (!boxData) return null;

  // const downloadPDF = () => {
  //   const doc = new jsPDF();

  //   const watermark = "/g1690.png"; // Use a pre-transparent image
  //   doc.addImage(watermark, "PNG", 35, 100, 150, 80);

  //   // Initial Y position
  //   let y = 10;

  //   // Logo
  //   const logo = "/rwp.png"; // Adjust the path as needed
  //   doc.addImage(logo, "PNG", 20, y, 30, 18, "", "FAST");
  //   y += 20; // Adjust for logo height

  //   // Title
  //   doc.setFontSize(30);
  //   doc.setFont("helvetica", "bold");
  //   doc.text("ROYAL WOOD PACKERS", 60, y);
  //   y += 2;

  //   // Separation line
  //   doc.setLineWidth(0.5);
  //   doc.line(20, y, 190, y);
  //   y += 7;

  //   // Subtitle
  //   doc.setFontSize(18);
  //   doc.text("Pallet Specifications", 75, y);
  //   y += 10;

  //   doc.setFontSize(16);
  //   doc.setFont("helvetica", "bold");
  //   doc.text("General Specification", 20, y);
  //   y += 10;
  //   // General Information
  //   doc.setFontSize(14);
  //   doc.setFont("helvetica", "normal");
  //   doc.text(
  //     `Type: ${
  //       palletData.type === "two-way" ? "Two Way Entry" : "Four Way Entry"
  //     }`,
  //     20,
  //     y
  //   );
  //   y += 10;
  //   doc.text(`Capacity: ${palletData.capacity} kg`, 20, y);
  //   y += 10;
  //   doc.text(
  //     `Dimensions (L x W x H): ${palletData.length} mm x ${palletData.width} mm x ${palletData.height} mm`,
  //     20,
  //     y
  //   );
  //   y += 10;
  //   doc.text(`Pallet Opening: ${palletData.palletOpening} mm`, 20, y);
  //   y += 10;
  //   doc.text(`Price: ${rate}.00`, 20, y);
  //   y += 15;

  //   // Top Deck section
  //   doc.setFontSize(16);
  //   doc.setFont("helvetica", "bold");
  //   doc.text("Top Deck", 20, y);
  //   y += 10;
  //   doc.setFontSize(12);
  //   doc.setFont("helvetica", "normal");
  //   doc.text(`Number of Planks: ${palletData.topBoardPlanks}`, 20, y);
  //   y += 10;
  //   doc.text(
  //     `Plank Dimensions (L x W x H): ${
  //       palletData.topPlankLength
  //     } mm x ${palletData.topPlankdWidth.toFixed(0)} mm x ${Math.floor(
  //       palletData.topPlankHeight
  //     )} mm`,
  //     20,
  //     y
  //   );
  //   y += 15;

  //   // Bottom Deck section
  //   doc.setFontSize(16);
  //   doc.setFont("helvetica", "bold");
  //   doc.text("Bottom Deck", 20, y);
  //   y += 10;
  //   doc.setFontSize(12);
  //   doc.setFont("helvetica", "normal");
  //   doc.text(`Number of Planks: ${palletData.bottomBoardPlanks}`, 20, y);
  //   y += 10;
  //   doc.text(
  //     `Plank Dimensions (L x W x H): ${
  //       palletData.bottomPlankLength
  //     } mm x ${palletData.bottomPlankdWidth.toFixed(0)} mm x ${Math.floor(
  //       palletData.bottomPlankHeight
  //     )} mm`,
  //     20,
  //     y
  //   );
  //   y += 15;

  //   // Stringer and Blocks sections (conditional formatting for "four-way" type)
  //   if (palletData.type === "four-way") {
  //     doc.setFontSize(16);
  //     doc.setFont("helvetica", "bold");
  //     doc.text("Stringer Board", 20, y);
  //     y += 10;
  //     doc.setFontSize(12);
  //     doc.setFont("helvetica", "normal");
  //     doc.text(
  //       `Dimensions (L x W x T): ${
  //         palletData.stringerBoardLength
  //       } mm x ${palletData.stringerBoardWidth.toFixed(0)} mm x ${Math.floor(
  //         palletData.stringerBoardHeight
  //       )} mm`,
  //       20,
  //       y
  //     );
  //     y += 10;
  //     doc.text(
  //       `Number of Stringer Boards: ${palletData.stringerBoardNumber}`,
  //       20,
  //       y
  //     );
  //     y += 15;

  //     doc.setFontSize(16);
  //     doc.setFont("helvetica", "bold");
  //     doc.text("Blocks", 20, y);
  //     y += 10;
  //     doc.setFontSize(12);
  //     doc.setFont("helvetica", "normal");
  //     doc.text(`Number of Blocks: ${palletData.blockNumbers}`, 20, y);
  //     y += 10;
  //     doc.text(
  //       `Block Dimensions (L x W): ${palletData.blockLength.toFixed(
  //         0
  //       )} mm x ${palletData.blockdWidth.toFixed(0)} mm`,
  //       20,
  //       y
  //     );
  //     y += 15;
  //   } else {
  //     doc.setFontSize(16);
  //     doc.setFont("helvetica", "bold");
  //     doc.text("Stringer", 20, y);
  //     y += 10;
  //     doc.setFontSize(12);
  //     doc.setFont("helvetica", "normal");
  //     doc.text(
  //       `Dimensions (L x W x T): ${
  //         palletData.stringerLength
  //       } mm x ${palletData.stringerWidth.toFixed(
  //         0
  //       )} mm x ${palletData.palletOpening.toFixed(0)} mm`,
  //       20,
  //       y
  //     );
  //     y += 10;
  //     doc.text(`Number of Stringers: ${palletData.stringerBoardNumber}`, 20, y);
  //     y += 15;
  //   }

  //   // Final line for styling
  //   doc.setLineWidth(0.5);
  //   doc.line(20, y, 190, y);
  //   y += 5;

  //   doc.setFontSize(7);
  //   doc.setFont("helvetica", "italic");
  //   doc.text(
  //     "This document was electronically generated, there may be variations.",
  //     20,
  //     y
  //   );

  //   // Save the PDF
  //   doc.save("pallet_details.pdf");
  // };

  return (
    <div className="container mx-auto sm:p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Box Specifications
      </h1>

      <div className="grid gap-10">
        <div className="bg-slate-800   hover:shadow-gray-800 shadow-2xl rounded-lg p-6 hover:scale-105 transform transition duration-500 ease-in-out">
          <td className="text-2xl font-semibold mb-4 text-white">
            General Information
          </td>
          <table className="w-full text-gray-200">
            <tbody>
              <tr className="hover:bg-slate-700  transition-colors duration-200">
                <td className="font-medium p-2 rounded-l-md">Type</td>
                <td className="p-2 rounded-r-md">
                  {boxData.type === "wood"
                    ? "Wooden Box"
                    : "Plywood Box"}
                </td>
              </tr>
              <tr className="hover:bg-slate-700  transition-colors duration-200">
                <td className="font-medium p-2 rounded-l-md">Capacity</td>
                <td className="p-2 rounded-r-md">{boxData.capacity} kg</td>
              </tr>
              <tr className="hover:bg-slate-700  transition-colors duration-200">
                <td className="font-medium p-2 rounded-l-md">
                  Dimensions (L x W x H)
                </td>
                <td className="p-2 rounded-r-md">
                  {boxData.length} mm x {boxData.width} mm x{" "}
                  {boxData.height} mm
                </td>
              </tr>
              <tr className="hover:bg-slate-700  transition-colors duration-200">
                <td className="font-medium p-2 rounded-l-md">
                 Outer Dimensions (L x W x H)
                </td>
                <td className="p-2 rounded-r-md">
                  {boxData.outerlength} mm x {boxData.outerwidth} mm x{" "}
                  {boxData.outerheight} mm
                </td>
              </tr>
              <tr className="hover:bg-slate-700  transition-colors duration-200">
                <td className="font-medium p-2 rounded-l-md">Pallet Opening</td>
                <td className="p-2 rounded-r-md">
                  {boxData.stringerHeight} mm
                </td>
              </tr>
              <tr className="hover:bg-slate-700  transition-colors duration-200 ">
                <td className="font-medium p-2  rounded-l-md">Price</td>
                <td className="p-2  rounded-r-md">₹ {rate}.00 </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-slate-900 hover:shadow-gray-800 shadow-2xl rounded-lg p-6 hover:scale-105 transform transition duration-500 ease-in-out">
          <table className="w-full text-gray-200">
            <tbody>
              {boxData.type === "wood" ? (
                <>
                  <tr>
                    <td className="text-2xl font-semibold mb-4 text-white">
                      Bottom Board
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-700  transition-colors duration-200">
                    <td className="font-medium p-2 rounded-l-md">
                      Dimensions (L x W x T)
                    </td>
                    <td className="p-2 rounded-r-md">
                      {boxData.baseBoardLength} mm x{" "}
                      {boxData.baseBoardWidth.toFixed(0)} mm x{" "}
                      {Math.floor(boxData.baseBoardThickness)} mm
                    </td>
                  </tr>
                  <tr>
                    <td className="text-2xl font-semibold mb-4 text-white">
                      Side Board
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-slate-700  transition-colors duration-200">
                    <td className="font-medium p-2 rounded-l-md">
                      Side Board Dimensions (L x W)
                    </td>
                    <td className="p-2 rounded-r-md">
                      {boxData.sideBoardLength.toFixed(0)} mm x{" "}
                      {boxData.sideBoardWidth.toFixed(0)} mm x{" "}
                      {boxData.crossBoardThickness.toFixed(0)} mm
                    </td>
                  </tr>
                </>
              ) : (
                <>
                  <tr>
                    <td className="text-2xl font-semibold mb-4 text-white">
                      Stringer
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-700  transition-colors duration-200">
                    <td className="font-medium p-2 rounded-l-md">
                      Dimensions (L x W x T)
                    </td>
                  </tr>
                  
                </>
              )}

              
            </tbody>
          </table>
        </div>
        <button
          // onClick={downloadPDF}
          className="bg-blue-500 hover:scale-105 transition-transform duration-300 text-white p-2 w-fit mx-auto rounded-md hover:bg-blue-600"
        >
          Download Details
        </button>
      </div>
    </div>
  );
};
