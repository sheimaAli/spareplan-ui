import { Button } from "@mui/material";
import React from "react";
import { ISavingPlan } from "../types/ISavingPlan";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SavingPlanInfo from "./savingPlanInfo";

interface IConfirmationProps {
  submittedSavingsPlan: ISavingPlan;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  calculateTotalInvestment: () => string;
}
const Confirmation: React.FC<IConfirmationProps> = ({
  submittedSavingsPlan,
  setStep,
  calculateTotalInvestment,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl font-bold ">Sparingsplan opprettet!</h2>
      <div className="text-center">
        <p className="text-lg mb-4">
          Takk for at du opprettet en sparingsplan med oss!
        </p>
        <CheckCircleIcon
          className="text-green-500 justify-center"
          fontSize="large"
        />
      </div>

      <SavingPlanInfo
        formData={submittedSavingsPlan}
        calculateTotalInvestment={calculateTotalInvestment}
      />
      <div>
        <Button
          variant="contained"
          className="text-white rounded p-2 mt-4"
          onClick={() => {
            setStep(1);
          }}
        >
          Tilbake til start
        </Button>
      </div>
    </div>
  );
};

export default Confirmation;
