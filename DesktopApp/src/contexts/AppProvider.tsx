import { createContext, useContext, useMemo, useState } from "react";
import { IAppContext, IPreference } from "../interface";


export const AppContext = createContext({} as IAppContext);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within the AppProvider");
  }
  return context;
};

const AppProvider = (props: any) => {
  const [userPreference, setUserPreference] = useState<IPreference | null>(null);

  const value = useMemo(
    () => ({
      userPreference, setUserPreference,
    }),
    [
      // eslint-disable-line react-hooks/exhaustive-deps
      userPreference
    ],
  );

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppProvider;
