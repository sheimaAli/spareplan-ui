import { ISavingPlan, ISavingPlanStringInput } from "../types/ISavingPlan";

interface SavingPlanInfoProps {
  formData: ISavingPlanStringInput | ISavingPlan;
    calculateTotalInvestment: () => string;
}
const SavingPlanInfo = ({ formData, calculateTotalInvestment }: SavingPlanInfoProps) => {
    
  return (
    <>
      <div className="flex justify-between mt-4">
        <div className="flex flex-col gap-1 font-semibold">
          <p>Valgt kryptovaluta:</p>
          <p>Varighet:</p>
          <p>Intervall:</p>
          <p>Beløp:</p>
        </div>
        <div className="flex flex-col gap-1">
          <p>{formData.crypto}</p>
          <p>{formData.duration}</p>
          <p>{formData.interval}</p>
          <p>{formData.amount} NOK</p>
        </div>
      </div>
      <div className="mt-4">
        <p>Totalt estimert investering: {calculateTotalInvestment()} NOK.</p>
      </div>
    </>
  );
};

export default SavingPlanInfo;
