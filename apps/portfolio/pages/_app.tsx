import React from 'react';

import type { AppProps } from 'next/app';

import { AppContent } from '@/components';
import { AppProvider } from '@/provider';

import '../utils/app.css';

export default function App(props: AppProps) {
  return (
    <AppProvider>
      <AppContent {...props} />
    </AppProvider>
  );
}
