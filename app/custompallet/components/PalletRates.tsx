"use client";
import { palletFormValue } from "@/lib/interfaces/forms";
import React, { useEffect, useState } from "react";
import { calculatePalletRates } from "@/lib/utilities/calculator";
import jsPDF from "jspdf";
interface PalletInfoProps {
  formData: palletFormValue;
}

export const PalletRates: React.FC<PalletInfoProps> = ({ formData }) => {
  const [palletData, setPalletData] = useState<palletFormValue | null>(null);
  const [rate, setRate] = useState<string>("");
  useEffect(() => {
    const { price, palletData } = calculatePalletRates(formData);
    setPalletData(palletData);
    setRate(price.toFixed(0));
    return () => {};
  }, [formData]);

  if (!palletData) return null;

  const downloadPDF = () => {
    const doc = new jsPDF();

    // Initial Y position
    let y = 10;

    // Logo
    const logo = "/rwp.png"; // Adjust the path as needed
    doc.addImage(logo, "PNG", 20, y, 30, 18, "", "FAST");
    y += 20; // Adjust for logo height

    // Title
    doc.setFontSize(30);
    doc.setFont("helvetica", "bold");
    doc.text("ROYAL WOOD PACKERS", 60, y);
    y += 2;

    // Separation line
    doc.setLineWidth(0.5);
    doc.line(20, y, 190, y);
    y += 7;

    // Subtitle
    doc.setFontSize(18);
    doc.text("Pallet Specifications", 75, y);
    y += 10;

    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("General Specification", 20, y);
    y += 10;
    // General Information
    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.text(
      `Type: ${
        palletData.type === "two-way" ? "Two Way Entry" : "Four Way Entry"
      }`,
      20,
      y
    );
    y += 10;
    doc.text(`Capacity: ${palletData.capacity} kg`, 20, y);
    y += 10;
    doc.text(
      `Dimensions (L x W x H): ${palletData.length} mm x ${palletData.width} mm x ${palletData.height} mm`,
      20,
      y
    );
    y += 10;
    doc.text(`Pallet Opening: ${palletData.palletOpening} mm`, 20, y);
    y += 10;
    doc.text(`Price: ${rate}.00`, 20, y);
    y += 20;

    // Top Deck section
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Top Deck", 20, y);
    y += 10;
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Number of Planks: ${palletData.topBoardPlanks}`, 20, y);
    y += 10;
    doc.text(
      `Plank Dimensions (L x W x H): ${
        palletData.topPlankLength
      } mm x ${palletData.topPlankdWidth.toFixed(0)} mm x ${Math.floor(
        palletData.topPlankHeight
      )} mm`,
      20,
      y
    );
    y += 20;

    // Bottom Deck section
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Bottom Deck", 20, y);
    y += 10;
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Number of Planks: ${palletData.bottomBoardPlanks}`, 20, y);
    y += 10;
    doc.text(
      `Plank Dimensions (L x W x H): ${
        palletData.bottomPlankLength
      } mm x ${palletData.bottomPlankdWidth.toFixed(0)} mm x ${Math.floor(
        palletData.bottomPlankHeight
      )} mm`,
      20,
      y
    );
    y += 20;

    // Stringer and Blocks sections (conditional formatting for "four-way" type)
    if (palletData.type === "four-way") {
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text("Stringer Board", 20, y);
      y += 10;
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.text(
        `Dimensions (L x W x T): ${
          palletData.stringerBoardLength
        } mm x ${palletData.stringerBoardWidth.toFixed(0)} mm x ${Math.floor(
          palletData.stringerBoardHeight
        )} mm`,
        20,
        y
      );
      y += 10;
      doc.text(
        `Number of Stringer Boards: ${palletData.stringerBoardNumber}`,
        20,
        y
      );
      y += 20;

      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text("Blocks", 20, y);
      y += 10;
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.text(`Number of Blocks: ${palletData.blockNumbers}`, 20, y);
      y += 10;
      doc.text(
        `Block Dimensions (L x W): ${palletData.blockLength.toFixed(
          0
        )} mm x ${palletData.blockdWidth.toFixed(0)} mm`,
        20,
        y
      );
      y += 20;
    } else {
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text("Stringer", 20, y);
      y += 10;
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.text(
        `Dimensions (L x W x T): ${
          palletData.stringerLength
        } mm x ${palletData.stringerWidth.toFixed(
          0
        )} mm x ${palletData.palletOpening.toFixed(0)} mm`,
        20,
        y
      );
      y += 10;
      doc.text(`Number of Stringers: ${palletData.stringerBoardNumber}`, 20, y);
      y += 20;
    }

    // Final line for styling
    doc.setLineWidth(0.5);
    doc.line(20, y, 190, y);
    y += 10;

    // Save the PDF
    doc.save("pallet_details.pdf");
  };

  return (
    <div className="container mx-auto sm:p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Pallet Specifications
      </h1>
      <button
        onClick={downloadPDF}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Download Pallet Details as PDF
      </button>

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
                  {palletData.type === "two-way"
                    ? "Two Way Entry"
                    : "Four Way Entry"}
                </td>
              </tr>
              <tr className="hover:bg-slate-700  transition-colors duration-200">
                <td className="font-medium p-2 rounded-l-md">Capacity</td>
                <td className="p-2 rounded-r-md">{palletData.capacity} kg</td>
              </tr>
              <tr className="hover:bg-slate-700  transition-colors duration-200">
                <td className="font-medium p-2 rounded-l-md">
                  Dimensions (L x W x H)
                </td>
                <td className="p-2 rounded-r-md">
                  {palletData.length} mm x {palletData.width} mm x{" "}
                  {palletData.height} mm
                </td>
              </tr>
              <tr className="hover:bg-slate-700  transition-colors duration-200">
                <td className="font-medium p-2 rounded-l-md">Pallet Opening</td>
                <td className="p-2 rounded-r-md">
                  {palletData.palletOpening} mm
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
              {palletData.type === "four-way" ? (
                <>
                  <tr>
                    <td className="text-2xl font-semibold mb-4 text-white">
                      Stringer Board
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-700  transition-colors duration-200">
                    <td className="font-medium p-2 rounded-l-md">
                      Dimensions (L x W x T)
                    </td>
                    <td className="p-2 rounded-r-md">
                      {palletData.stringerBoardLength} mm x{" "}
                      {palletData.stringerBoardWidth.toFixed(0)} mm x{" "}
                      {Math.floor(palletData.stringerBoardHeight)} mm
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-700  transition-colors duration-200">
                    <td className="font-medium p-2 rounded-l-md">
                      Number of Stringer Boards
                    </td>
                    <td className="p-2 rounded-r-md">
                      {palletData.stringerBoardNumber}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-2xl font-semibold mb-4 text-white">
                      Blocks
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-700  transition-colors duration-200">
                    <td className="font-medium p-2 rounded-l-md">
                      Number of Blocks
                    </td>
                    <td className="p-2 rounded-r-md">
                      {palletData.blockNumbers}
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-700  transition-colors duration-200">
                    <td className="font-medium p-2 rounded-l-md">
                      Block Dimensions (L x W)
                    </td>
                    <td className="p-2 rounded-r-md">
                      {palletData.blockLength.toFixed(0)} mm x{" "}
                      {palletData.blockdWidth.toFixed(0)} mm x{" "}
                      {palletData.palletOpening.toFixed(0)} mm
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
                    <td className="p-2 rounded-r-md">
                      {palletData.stringerLength} mm x{" "}
                      {palletData.stringerWidth.toFixed(0)} mm x{" "}
                      {palletData.palletOpening.toFixed(0)} mm
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-700  transition-colors duration-200">
                    <td className="font-medium p-2 rounded-l-md">
                      Number of Stringers
                    </td>
                    <td className="p-2 rounded-r-md">
                      {palletData.stringerBoardNumber}
                    </td>
                  </tr>
                </>
              )}

              <tr>
                <td className="text-2xl font-semibold mb-4 text-white">
                  Top Deck
                </td>
              </tr>
              <tr className="hover:bg-slate-700  transition-colors duration-200">
                <td className="font-medium p-2 rounded-l-md">
                  Number of Planks
                </td>
                <td className="p-2 rounded-r-md">
                  {palletData.topBoardPlanks}
                </td>
              </tr>
              <tr className="hover:bg-slate-700  transition-colors duration-200">
                <td className="font-medium p-2 rounded-l-md">
                  Plank Dimensions (L x W x H)
                </td>
                <td className="p-2 rounded-r-md">
                  {palletData.topPlankLength} mm x{" "}
                  {palletData.topPlankdWidth.toFixed(0)} mm x{" "}
                  {Math.floor(palletData.topPlankHeight)} mm
                </td>
              </tr>
              <tr>
                <td className="text-2xl font-semibold mb-4 text-white">
                  Bottom Deck
                </td>
              </tr>
              <tr className="hover:bg-slate-700  transition-colors duration-200">
                <td className="font-medium p-2 rounded-l-md">
                  Number of Planks
                </td>
                <td className="p-2 rounded-r-md">
                  {palletData.bottomBoardPlanks}
                </td>
              </tr>
              <tr className="hover:bg-slate-700  transition-colors duration-200">
                <td className="font-medium p-2 rounded-l-md">
                  Plank Dimensions (L x W x H)
                </td>
                <td className="p-2 rounded-r-md">
                  {palletData.bottomPlankLength} mm x{" "}
                  {palletData.bottomPlankdWidth.toFixed(0)} mm x{" "}
                  {Math.floor(palletData.bottomPlankHeight)} mm
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
