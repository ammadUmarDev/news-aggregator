import { Dispatch, SetStateAction } from "react";

import { IPreference } from ".";

export interface IAppContext {
  userPreference: IPreference | null;
  setUserPreference: Dispatch<SetStateAction<IPreference | null>>;
}
