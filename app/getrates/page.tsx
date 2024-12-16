"use client";

import { useEffect, useRef, useState } from "react";
import { CustomOptions } from "./components/customOptions";
import { PalletWizard } from "./components/pallets/PalletWizard";
import { BoxWizard } from "./components/boxes/BoxWizard";
import { CrateWizard } from "./components/crates/CrateWizard";

// interface childrenProps {
//   title: string;
//   component: React.FC;
// }
export default function GetRates() {
  const wizardRef = useRef<HTMLDivElement | null>(null);

  const [activeWizard, setActiveWizard] = useState<
    "wizardOne" | "wizardTwo" | "wizardThree" | null
  >(null); // `null` means no wizard is selected

  const handleBack = () => {
    setActiveWizard(null); // Reset to show buttons
  };
  useEffect(() => {
    if (wizardRef.current)
      wizardRef.current.scrollIntoView({ behavior: "smooth" });
  }, [activeWizard]);

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
    <div ref={wizardRef} className="min-h-[100vh] flex  justify-center">
      {!activeWizard && <CustomOptions onSelect={setActiveWizard} />}
      {renderWizard()}
    </div>
  );
}
