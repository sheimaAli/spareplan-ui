import { CryptoEnum } from "../enums/cryptoEnum";
import { DurationEnum } from "../enums/durationEnum";
import { IntervalEnum } from "../enums/intervalEnum";

export interface ISavingPlan {
  crypto: CryptoEnum;
  duration: DurationEnum;
  interval: IntervalEnum;
  amount: number;
}

export interface ISavingPlanStringInput {
  crypto: CryptoEnum;
  duration: DurationEnum;
  interval: IntervalEnum;
  amount: string;
}
