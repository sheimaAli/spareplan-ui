import { Button } from "@mui/material";

interface IUserInputBtnProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  step: number;
  amountIsValid: boolean;
}

const UserInputBtn = ({ setStep, step, amountIsValid }: IUserInputBtnProps) => {
  return (
    <div className="flex justify-between">
      {step > 1 && (
        <Button
          variant="outlined"
          className=" text-white rounded p-2 mt-6"
          onClick={() => {
            setStep(step - 1);
          }}
        >
          Tilbake
        </Button>
      )}

      <Button
        variant="contained"
        className=" text-white rounded p-2 mt-6"
        onClick={() => {
          setStep(step + 1);
        }}
        disabled={!amountIsValid}
      >
        {step === 3 ? "Oppsummering" : "Neste"}
      </Button>
    </div>
  );
};

export default UserInputBtn;
