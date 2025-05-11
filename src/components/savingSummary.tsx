import React from "react";
import { ISavingPlanStringInput } from "../types/ISavingPlan";
import { Button } from "@mui/material";
import SavingPlanInfo from "./savingPlanInfo";

interface ISummaryProps {
  formData: ISavingPlanStringInput;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  calculateTotalInvestment: () => string;
}
const SavingSummary = ({
  formData,
  setStep,
  calculateTotalInvestment,
}: ISummaryProps) => {
  return (
    <div>
      <h2 className="text-xl">Bekreft informasjon</h2>
      <SavingPlanInfo
        formData={formData}
        calculateTotalInvestment={calculateTotalInvestment}
      />

      <div className="flex gap-3 mt-4">
        <Button
          variant="outlined"
          className=" text-white rounded p-2 mt-4"
          onClick={() => {
            setStep(3);
          }}
        >
          Tilbake
        </Button>
        <Button
          type="submit"
          variant="contained"
          className=" text-white rounded p-2 mt-4"
        >
          Bekreft
        </Button>
      </div>
    </div>
  );
};

export default SavingSummary;
