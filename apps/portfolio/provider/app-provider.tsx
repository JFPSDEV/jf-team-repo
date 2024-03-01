import React, { type ReactNode } from 'react';

import { portfolioTheme } from '@jfteam/theme';
import { JfteamMaterialProvider } from '@jfteam/material';

import { fontTheme } from '@/utils';

interface AppProvider {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProvider) => {
  return (
    <JfteamMaterialProvider
      theme={{
        ...fontTheme,
        ...portfolioTheme,
      }}
    >
      {children}
    </JfteamMaterialProvider>
  );
};
