import "./App.css";
import { Card, CardContent } from "@mui/material";
import SavingSummary from "./components/savingSummary";
import Confirmation from "./components/confirmation";
import useSavingsPlan from "./hooks/useSavingsPlan";
import UserInputSection from "./components/userInputSection";
import { STEP } from "./lib/constants";

function App() {
  const {
    cryptoList,
    formData,
    setFormData,
    amountIsValid,
    errorAmount,
    handleAmountInputChange,
    handleSubmit,
    setStep,
    step,
    submittedSavingsPlan,
    calculateTotalInvestment,
  } = useSavingsPlan();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5">
      <Card className="w-120 flex flex-col items-center justify-center p-4">
        <CardContent>
          <form
            onSubmit={handleSubmit}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
              }
            }}
          >
            {step < STEP.SUMMARY && (
              <UserInputSection
                formData={formData}
                setFormData={setFormData}
                setStep={setStep}
                step={step}
                errorAmount={errorAmount}
                amountIsValid={amountIsValid}
                handleAmountInputChange={handleAmountInputChange}
                cryptoList={cryptoList}
                calculateTotalInvestment={calculateTotalInvestment}
              />
            )}

            {step === STEP.SUMMARY && (
              <SavingSummary
                formData={formData}
                setStep={setStep}
                calculateTotalInvestment={calculateTotalInvestment}
              />
            )}
          </form>
          {step === STEP.CONFIRMATION && submittedSavingsPlan && (
            <Confirmation
              submittedSavingsPlan={submittedSavingsPlan}
              calculateTotalInvestment={calculateTotalInvestment}
              setStep={setStep}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
