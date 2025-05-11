import { useState } from "react";
import { CryptoEnum } from "../enums/cryptoEnum";
import { DurationEnum } from "../enums/durationEnum";
import { IntervalEnum } from "../enums/intervalEnum";
import { ISavingPlan, ISavingPlanStringInput } from "../types/ISavingPlan";
import { ICrypto } from "../types/ICrypto";
import { STEP } from "../lib/constants";

const cryptoList: ICrypto[] = [
  { name: "Bitcoin", symbol: CryptoEnum.Bitcoin },
  { name: "Ethereum", symbol: CryptoEnum.Ethereum },
  { name: "Litecoin", symbol: CryptoEnum.Litecoin },
  { name: "Cardano", symbol: CryptoEnum.Cardano },
];

const MAX_AMOUNT = 100000;

const useSavingsPlan = () => {
  const [formData, setFormData] = useState<ISavingPlanStringInput>({
    crypto: CryptoEnum.Bitcoin,
    duration: DurationEnum.OneYear,
    interval: IntervalEnum.Monthly,
    amount: "",
  });
  const [step, setStep] = useState(1);
  const [errorAmount, setErrorAmount] = useState("");

  const [submittedSavingsPlan, setSubmittedSavingsPlan] =
    useState<ISavingPlan>();

  const isAmountWithinRange = (value: string) => {
    return (
      !isNaN(Number(value)) &&
      Number(value) >= 500 &&
      Number(value) <= MAX_AMOUNT
    );
  };

  const amountIsValid = isAmountWithinRange(formData.amount);

  const handleAmountInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      amount: value,
    }));

    if (Number(value) > MAX_AMOUNT) {
      setErrorAmount(`Beløpet kan ikke være høyere enn ${MAX_AMOUNT.toLocaleString("no-NO")}`);
    } else if (!isAmountWithinRange(value)) {
      setErrorAmount("Ugyldig beløp");
    } else {
      setErrorAmount("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const processedData = {
      ...formData,
      amount: Number(formData.amount),
    };

    setSubmittedSavingsPlan(processedData);
    setFormData({
      crypto: CryptoEnum.Bitcoin,
      duration: DurationEnum.OneYear,
      interval: IntervalEnum.Monthly,
      amount: "",
    });
    setErrorAmount("");

    setStep(STEP.CONFIRMATION);
  };

  const getDurationInMonths = (duration: DurationEnum): number => {
    switch (duration) {
      case DurationEnum.OneYear:
        return 12;
      case DurationEnum.ThreeMonths:
        return 3;
      case DurationEnum.TwoYears:
        return 24;
      case DurationEnum.SixMonths:
        return 6;
      default:
        return 1;
    }
  };

  const getIntervalCount = (
    interval: IntervalEnum,
    durationInMonths: number
  ): number => {
    switch (interval) {
      case IntervalEnum.Daily:
        return durationInMonths * 30;
      case IntervalEnum.Weekly:
        return durationInMonths * 4;
      case IntervalEnum.Monthly:
        return durationInMonths;
      default:
        return durationInMonths;
    }
  };

  const calculateTotalInvestment = () => {
    const dataToUse =
      step === STEP.CONFIRMATION ? submittedSavingsPlan : formData;
    if (!dataToUse) return "0";

    const durationInMonths = getDurationInMonths(dataToUse.duration);
    const intervalCount = getIntervalCount(
      dataToUse.interval,
      durationInMonths
    );

    const amountPerInterval = Number(dataToUse.amount);
    const totalInvestment = amountPerInterval * intervalCount;

    return totalInvestment.toLocaleString("no-NO");
  };

  return {
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
  };
};

export default useSavingsPlan;
