import { FormControl, Select, MenuItem } from "@mui/material";
import React from "react";
import { IntervalEnum } from "../../enums/intervalEnum";
import { ISavingPlanStringInput } from "../../types/ISavingPlan";

interface ISelectIntervalProps {
  formData: ISavingPlanStringInput;
  setFormData: React.Dispatch<React.SetStateAction<ISavingPlanStringInput>>;
}
const SelectInterval = ({ formData, setFormData }: ISelectIntervalProps) => {
  return (
    <div>
      <FormControl fullWidth>
        <label id="interval-label">Velg intervall for sparing:</label>
        <Select
          labelId="interval-label"
          value={formData.interval}
          onChange={(e) =>
            setFormData({
              ...formData,
              interval: e.target.value as IntervalEnum,
            })
          }
        >
          <MenuItem value={IntervalEnum.Daily}>Daglig</MenuItem>
          <MenuItem value={IntervalEnum.Weekly}>Ukentlig</MenuItem>
          <MenuItem value={IntervalEnum.Monthly}>Månedlig</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectInterval;
