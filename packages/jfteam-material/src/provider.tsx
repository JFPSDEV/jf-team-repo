import { ReactNode } from "react";
import { createTheme } from "@mantine/core";

import { MantineProvider, type MantineThemeOverride } from "@mantine/core";

import "@mantine/core/styles.css";

export interface JfteamMaterialProviderProps {
  children: ReactNode;
  theme: MantineThemeOverride;
}

export const JfteamMaterialProvider = ({
  theme,
  children,
}: JfteamMaterialProviderProps) => (
  <MantineProvider theme={createTheme(theme)} forceColorScheme="light">
    {children}
  </MantineProvider>
);
