"use client";
import React, { ReactNode } from "react";

import { MantineProvider as JFTeamMantineProvider } from "@mantine/core";

export interface MantineProviderProps {
  children: ReactNode;
}

export function MantineProvider({ children }: MantineProviderProps) {
  return (
    <JFTeamMantineProvider
      theme={{ fontFamily: "Open Sans" }}
      withGlobalStyles
      withNormalizeCSS
    >
      {children}
    </JFTeamMantineProvider>
  );
}
