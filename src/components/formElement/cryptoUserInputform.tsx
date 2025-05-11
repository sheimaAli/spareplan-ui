import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";
import {  ISavingPlanStringInput } from "../../types/ISavingPlan";
import { ICrypto } from "../../types/ICrypto";

interface ISelectCryptoProps {
  formData: ISavingPlanStringInput;
  setFormData: React.Dispatch<React.SetStateAction<ISavingPlanStringInput>>;
  cryptoList: ICrypto[];
}
const SelectCrypto = ({
  formData,
  setFormData,
  cryptoList,
}: ISelectCryptoProps) => {
  return (
    <div className="flex flex-col gap-3">
      <FormControl fullWidth>
        <label id="crypto-select-label">Hva ønsker du å investere i?</label>
        <Select
          value={formData.crypto}
          id="crypto-select"
          labelId="crypto-select-label"
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              crypto: e.target.value as ICrypto["symbol"],
            }))
          }
        >
          {cryptoList.map((crypto) => (
            <MenuItem key={crypto.symbol} value={crypto.symbol}>
              {crypto.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectCrypto;
