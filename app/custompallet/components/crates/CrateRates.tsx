"use client";
import {  CrateFormValue } from "@/lib/interfaces/forms";
import React, { useEffect, useState } from "react";

// import jsPDF from "jspdf";
import { calculateCrateRates } from "@/lib/utilities/calculatorForCrate";
interface CrateInfoProps {
  formData: CrateFormValue;
}

export const CrateRates: React.FC<CrateInfoProps> = ({ formData }) => {
  const [boxData, setBoxData] = useState<CrateFormValue | null>(null);
  const [rate, setRate] = useState<string>("");
  useEffect(() => {
    const { price, crateData } = calculateCrateRates(formData);
    setBoxData(crateData);
    setRate(price.toFixed(0));
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
  //   doc.setFont("times", "bold");
  //   doc.text("ROYAL WOOD PACKERS", 60, y);
  //   y += 2;

  //   // Separation line
  //   doc.setLineWidth(0.5);
  //   doc.line(20, y, 190, y);
  //   y += 7;

  //   // Subtitle
  //   doc.setFontSize(18);
  //   doc.text("Box Specifications", 75, y);
  //   y += 10;

  //   doc.setFontSize(16);
  //   doc.setFont("helvetica", "bold");
  //   doc.text("General Specification", 20, y);
  //   y += 10;
  //   // General Information
  //   doc.setFontSize(14);
  //   doc.setFont("helvetica", "normal");
  //   doc.text(
  //     `Type: ${boxData.type === "wood" ? "Wooden Box" : "Plywood Box"}`,
  //     20,
  //     y
  //   );
  //   y += 10;
  //   doc.text(`Capacity: ${boxData.capacity} kg`, 20, y);
  //   y += 10;
  //   doc.text(
  //     `Dimensions (L x W x H): ${boxData.length} mm x ${boxData.width} mm x ${boxData.height} mm`,
  //     20,
  //     y
  //   );
  //   y += 10;
  //   doc.text(
  //     `Outer Dimensions (L x W x H): ${boxData.outerlength} mm x ${boxData.outerwidth} mm x ${boxData.outerheight} mm`,
  //     20,
  //     y
  //   );
  //   y += 10;
  //   doc.text(`Price: ${rate}.00`, 20, y);
  //   y += 15;

  //   doc.setFontSize(12);
  //   doc.setFont("helvetica", "normal");
  //   doc.text(
  //     `Bottom Board (L x W x H): ${boxData.baseBoardLength} mm x ${
  //       boxData.baseBoardWidth
  //     } mm x ${Math.floor(boxData.baseBoardThickness)} mm`,
  //     20,
  //     y
  //   );
  //   y += 15;

  //   doc.text(
  //     `Top Board (L x W x H): ${boxData.baseBoardLength} mm x ${
  //       boxData.baseBoardWidth
  //     } mm x ${Math.floor(boxData.crossBoardThickness)} mm`,
  //     20,
  //     y
  //   );
  //   y += 15;

  //   doc.text(
  //     `Side Board x 2 (L x W x H): ${boxData.baseBoardLength} mm x ${
  //       boxData.height
  //     } mm x ${Math.floor(boxData.crossBoardThickness)} mm`,
  //     20,
  //     y
  //   );
  //   y += 15;

  //   doc.text(
  //     `Front Board x 2 (L x W x H): ${boxData.width} mm x ${
  //       boxData.height
  //     } mm x ${Math.floor(boxData.crossBoardThickness)} mm`,
  //     20,
  //     y
  //   );
  //   y += 15;

  //   doc.text(
  //     `Stringers x ${boxData.stringerNumber} (L x W x H): ${
  //       boxData.stringerLength
  //     } mm x ${boxData.stringerWidth} mm x ${Math.floor(
  //       boxData.stringerHeight
  //     )} mm`,
  //     20,
  //     y
  //   );
  //   y += 15;

  //   // Final line for styling
  //   doc.setLineWidth(0.5);
  //   doc.line(20, y, 190, y);
  //   y += 5;

  //   doc.setFontSize(7);
  //   doc.setFont("helvetica", "italic");

  //   // Define the text
  //   const disclaimerText =
  //     "** The rates displayed on this web application are electronically generated and provided for informational purposes only. While we strive to ensure accuracy, there may be errors or discrepancies. If any inaccuracies are identified, our team will review and contact you promptly. For any urgent inquiries or clarifications, please reach out to us directly.";

  //   // Split the text to fit within a specific width (e.g., 170 units)
  //   const textLines = doc.splitTextToSize(disclaimerText, 170);

  //   // Render the text with line breaks
  //   doc.text(textLines, 20, y);

  //   // Save the PDF
  //   doc.save("box_details.pdf");
  // };

  return (
    <div className="container mx-auto sm:p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Crate Specifications
      </h1>

      <div className="grid gap-10">
        <div className="bg-slate-800   hover:shadow-gray-800 shadow-2xl rounded-lg p-6 hover:scale-105 transform transition duration-500 ease-in-out">
          <td className="text-2xl font-semibold mb-4 text-white">
            General Information
          </td>
          <table className="w-full text-gray-200">
            <tbody>
              
              <tr className="hover:bg-slate-700  transition-colors duration-200">
                <td className="font-medium p-2 rounded-l-md">Capacity</td>
                <td className="p-2 rounded-r-md">{boxData.capacity} kg</td>
              </tr>
              <tr className="hover:bg-slate-700  transition-colors duration-200">
                <td className="font-medium p-2 rounded-l-md">
                  Dimensions (L x W x H)
                </td>
                <td className="p-2 rounded-r-md">
                  {boxData.length} mm x {boxData.width} mm x {boxData.height} mm
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
              <tr className="hover:bg-slate-700  transition-colors duration-200 ">
                <td className="font-medium p-2  rounded-l-md">
                  Vertcial battens ( W x T)
                </td>
                <td className="p-2  rounded-r-md">
                  {boxData.battonWidth} x {boxData.battonThickness}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

          <div className="bg-slate-900 hover:shadow-gray-800 shadow-2xl rounded-lg p-6 hover:scale-105 transform transition duration-500 ease-in-out">
            <table className="w-full text-gray-200">
              <tbody>
                <tr>
                  <td className="text-2xl font-semibold mb-4 text-white">
                    Bottom Board
                  </td>
                </tr>
                <tr className="hover:bg-slate-700  transition-colors duration-200">
                  <td className="font-medium p-2 rounded-l-md">
                    Dimensions (L x W x T )
                  </td>
                  <td className="p-2 rounded-r-md">
                    {boxData.baseBoardLength} mm x{" "}
                    {boxData.baseBoardPlankWidth.toFixed(0)} mm x{" "}
                    {Math.floor(boxData.baseBoardThickness)} mm
                  </td>
                </tr>
                <tr className="hover:bg-slate-700  transition-colors duration-200">
                  <td className="font-medium p-2 rounded-l-md">
                    Numbers
                  </td>
                  <td className="p-2 rounded-r-md">
                    {boxData.baseBoardPlankNumber} 
                  </td>
                </tr>
                <tr>
                  <td className="text-2xl font-semibold mb-4 text-white">
                    Top Board
                  </td>
                </tr>

                <tr className="hover:bg-slate-700  transition-colors duration-200">
                  <td className="font-medium p-2 rounded-l-md">
                    Top Board Dimensions (L x W x T)
                  </td>
                  <td className="p-2 rounded-r-md">
                    {boxData.topboardLength} mm x {boxData.topboardPlankWidth} mm
                    x {Math.floor(boxData.crossBoardThickness)} mm
                  </td>
                </tr>
                <tr className="hover:bg-slate-700  transition-colors duration-200">
                  <td className="font-medium p-2 rounded-l-md">
                    Numbers
                  </td>
                  <td className="p-2 rounded-r-md">
                    {boxData.topboardPlankNumber} 
                  </td>
                </tr>
                <tr>
                  <td className="text-2xl font-semibold mb-4 text-white">
                    Side Board 
                  </td>
                </tr>

                <tr className="hover:bg-slate-700  transition-colors duration-200">
                  <td className="font-medium p-2 rounded-l-md">
                    Side Board Dimensions (L x W x T)
                  </td>
                  <td className="p-2 rounded-r-md">
                    {boxData.sideBoardLength} mm x{" "}
                    {boxData.sideBoardPlankWidth} mm x{" "}
                    {Math.floor(boxData.crossBoardThickness)} mm
                  </td>
                </tr>
                <tr className="hover:bg-slate-700  transition-colors duration-200">
                  <td className="font-medium p-2 rounded-l-md">
                    Numbers
                  </td>
                  <td className="p-2 rounded-r-md">
                    {boxData.sideBoardPlankNumber*2} 
                  </td>
                </tr>
                <tr>
                  <td className="text-2xl font-semibold mb-4 text-white">
                    Front Board 
                  </td>
                </tr>

                <tr className="hover:bg-slate-700  transition-colors duration-200">
                  <td className="font-medium p-2 rounded-l-md">
                    Front Board Dimensions (L x W x T)
                  </td>
                  <td className="p-2 rounded-r-md">
                    {boxData.nettyBoardLength} mm x {boxData.nettyBoardPlankWidth} mm
                    x {Math.floor(boxData.crossBoardThickness)} mm
                  </td>
                </tr>
                <tr className="hover:bg-slate-700  transition-colors duration-200">
                  <td className="font-medium p-2 rounded-l-md">
                    Numbers
                  </td>
                  <td className="p-2 rounded-r-md">
                    {boxData.nettyBoardPlankNumber*2} 
                  </td>
                </tr>
                <tr>
                  <td className="text-2xl font-semibold mb-4 text-white">
                    Stringer 
                  </td>
                </tr>
                <tr className="hover:bg-slate-700  transition-colors duration-200">
                  <td className="font-medium p-2 rounded-l-md">
                    Dimensions (L x W x T)
                  </td>
                  <td className="p-2 rounded-r-md">
                    {boxData.stringerLength} mm x {boxData.stringerWidth} mm x{" "}
                    {Math.floor(boxData.stringerHeight)} mm
                  </td>
                </tr>
                <tr className="hover:bg-slate-700  transition-colors duration-200">
                  <td className="font-medium p-2 rounded-l-md">
                    Numbers
                  </td>
                  <td className="p-2 rounded-r-md">
                    {boxData.stringerNumber} 
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs my-3">
              ** The rates displayed on this web application are electronically
              generated and provided for informational purposes only. While we
              strive to ensure accuracy, there may be errors or discrepancies.
              If any inaccuracies are identified, our team will review and
              contact you promptly. For any urgent inquiries or clarifications,
              please reach out to us directly.
            </p>
            <button
              // onClick={downloadPDF}
              className="bg-blue-500 hover:scale-105 transition-transform duration-300 text-white p-2 w-fit mx-auto rounded-md hover:bg-blue-600"
            >
              Download Details
            </button>
          </div>
      
      </div>
    </div>
  );
};
