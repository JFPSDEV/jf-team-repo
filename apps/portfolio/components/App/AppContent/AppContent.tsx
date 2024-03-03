import React from 'react';

import { AppProps } from 'next/app';
import { Toaster } from '@jfteam/material';

import { Head } from '../Head/Head';
import { ScrollToTop } from '@/components';
import { useResponsive } from '@jfteam/hooks';

export const AppContent = ({ Component, pageProps }: AppProps) => {
  const { isMobile } = useResponsive();
  return (
    <>
      <Head />
      <Toaster />
      {!isMobile && <ScrollToTop />}
      <Component {...pageProps} />
    </>
  );
};
