import React from "react";
import SelectDuration from "./formElement/selectDuration";
import SelectInterval from "./formElement/selectInterval";
import { ISavingPlanStringInput } from "../types/ISavingPlan";

interface SavingPlanProps {
  formData: ISavingPlanStringInput;
  setFormData: React.Dispatch<React.SetStateAction<ISavingPlanStringInput>>;
  calculateTotalInvestment: () => string;
}

const SavingPlan: React.FC<SavingPlanProps> = ({ formData, setFormData, calculateTotalInvestment }) => {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <SelectDuration formData={formData} setFormData={setFormData} />
        <SelectInterval formData={formData} setFormData={setFormData} />
        <p>Estimert totalt: {calculateTotalInvestment()} NOK</p>
      </div>
    </div>
  );
};

export default SavingPlan;
