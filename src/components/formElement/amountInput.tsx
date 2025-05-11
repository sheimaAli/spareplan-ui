import { FormControl, Input } from "@mui/material";
import React from "react";
import {  ISavingPlanStringInput } from "../../types/ISavingPlan";

interface IAmountInputProps {
  formData: ISavingPlanStringInput;
  handleAmountInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorAmount: string | null;
}

const AmountInput = ({
  formData,
  handleAmountInputChange,
  errorAmount,
}: IAmountInputProps) => {
  return (
    <>
      <FormControl fullWidth className="mb-4">
        <label>Beløp (NOK):</label>{" "}
        <p className="text-gray-500 text-xs ">Minimumsbeløp: 500 NOK</p>
        <Input
          type="text"
          name="amount"
          value={formData.amount}
          className="border border-gray-300 rounded p-2 mb-1"
          onChange={handleAmountInputChange}
        />
        {errorAmount && <p className="text-red-500 text-xs">{errorAmount}</p>}
      </FormControl>
    </>
  );
};

export default AmountInput;
