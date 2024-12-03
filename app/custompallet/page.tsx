"use client";

import { useState } from "react";
import { ChooseButtons } from "./components/ChooseButtons";
import { PalletWizard } from "./PalletWizard";

// interface childrenProps {
//   title: string;
//   component: React.FC;
// }
export default function GetRates() {
  const [activeWizard, setActiveWizard] = useState<"wizardOne" | null>(null); // `null` means no wizard is selected

  const handleBack = () => {
    setActiveWizard(null); // Reset to show buttons
  };

  const renderWizard = () => {
    switch (activeWizard) {
      case "wizardOne":
        return <PalletWizard onBack={handleBack} />;
      // case "wizardTwo":
      //   return <WizardTwo onBack={handleBack} />;
      // case "wizardThree":
      //   return <WizardThree onBack={handleBack} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-[100vh] flex  justify-center">
      {!activeWizard && <ChooseButtons onSelect={setActiveWizard} />}
      {renderWizard()}
    </div>
  );
}
