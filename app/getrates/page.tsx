"use client";

import { useState } from "react";
import { CustomOptions } from "./components/customOptions";
import { PalletWizard } from "./components/pallets/PalletWizard";
import { BoxWizard } from "./components/boxes/BoxWizard";
import { CrateWizard } from "./components/crates/CrateWizard";

// interface childrenProps {
//   title: string;
//   component: React.FC;
// }
export default function GetRates() {
  const [activeWizard, setActiveWizard] = useState<
    "wizardOne" | "wizardTwo" | 'wizardThree' | null
  >(null); // `null` means no wizard is selected

  const handleBack = () => {
    console.log("asdas");

    setActiveWizard(null); // Reset to show buttons
  };

  const renderWizard = () => {
    switch (activeWizard) {
      case "wizardOne":
        return <PalletWizard onBack={handleBack} />;
      case "wizardTwo":
        return <BoxWizard onBack={handleBack} />;
      case "wizardThree":
        return <CrateWizard onBack={handleBack} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-[100vh] flex  justify-center">
      {!activeWizard && <CustomOptions onSelect={setActiveWizard} />}
      {renderWizard()}
    </div>
  );
}
