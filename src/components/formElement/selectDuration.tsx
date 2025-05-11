import { FormControl, Select, MenuItem } from "@mui/material";
import React from "react";
import { DurationEnum } from "../../enums/durationEnum";
import { ISavingPlanStringInput } from "../../types/ISavingPlan";

interface ISelectDurationProps {
  formData: ISavingPlanStringInput;
  setFormData: React.Dispatch<React.SetStateAction<ISavingPlanStringInput>>;
}
const SelectDuration = ({ formData, setFormData }: ISelectDurationProps) => {
  return (
    <div>
      <FormControl fullWidth>
        <label id="duration-label">Hvor lenge ønsker du å spare?:</label>
        <Select
          labelId="duration-label"
          value={formData.duration}
          onChange={(e) =>
            setFormData({
              ...formData,
              duration: e.target.value as DurationEnum,
            })
          }
        >
          <MenuItem value={DurationEnum.ThreeMonths}>3 måneder</MenuItem>
          <MenuItem value={DurationEnum.SixMonths}>6 måneder</MenuItem>
          <MenuItem value={DurationEnum.OneYear}>1 år</MenuItem>
          <MenuItem value={DurationEnum.TwoYears}>2 år</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectDuration;
