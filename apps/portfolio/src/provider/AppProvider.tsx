import React, { ReactNode } from "react";

import { MantineProvider } from "./MantineProvider";

interface AppProviderProps {
  children: ReactNode;
}
const AppProvider = ({ children }: AppProviderProps) => {
  return <MantineProvider>{children}</MantineProvider>;
};

export default AppProvider;
