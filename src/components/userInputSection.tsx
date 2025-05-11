import React from "react";
import AmountInput from "./formElement/amountInput";
import { ISavingPlanStringInput } from "../types/ISavingPlan";
import { ICrypto } from "../types/ICrypto";
import SavingPlan from "./savingPlan";
import UserInputBtn from "./formElement/userInputBtn";
import SelectCrypto from "./formElement/cryptoUserInputform";
import { STEP } from "../lib/constants";

interface IUserInputSectionProps {
  formData: ISavingPlanStringInput;
  setFormData: React.Dispatch<React.SetStateAction<ISavingPlanStringInput>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  step: number;
  errorAmount: string;
  amountIsValid: boolean;
  handleAmountInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cryptoList: ICrypto[];
  calculateTotalInvestment: () => string;
}

const UserInputSection = ({
  formData,
  setFormData,
  setStep,
  step,
  errorAmount,
  amountIsValid,
  handleAmountInputChange,
  cryptoList,
  calculateTotalInvestment,
}: IUserInputSectionProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl ">Sett opp din spareplan</h1>
      {step === STEP.FORM && (
        <AmountInput
          formData={formData}
          handleAmountInputChange={handleAmountInputChange}
          errorAmount={errorAmount}
        />
      )}
      {step === STEP.CRYPTO && (
        <SelectCrypto
          formData={formData}
          setFormData={setFormData}
          cryptoList={cryptoList}
        />
      )}
      {step === STEP.SAVING_PLAN && (
        <SavingPlan
          formData={formData}
          setFormData={setFormData}
          calculateTotalInvestment={calculateTotalInvestment}
        />
      )}
      <UserInputBtn
        amountIsValid={amountIsValid}
        setStep={setStep}
        step={step}
      />
    </div>
  );
};

export default UserInputSection;
