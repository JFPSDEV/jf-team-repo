import React from 'react';

import { AppProps } from 'next/app';
import { Toaster } from '@jfteam/material';

import { Head } from '../Head/Head';
import { ScrollToTop } from '@/components';

export const AppContent = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head />
      <Toaster />
      <ScrollToTop />
      <Component {...pageProps} />
    </>
  );
};
