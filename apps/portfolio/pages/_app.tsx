import type { AppProps } from 'next/app';
import Head from 'next/head';

import { JfteamMaterialProvider, Toaster } from '@jfteam/material';
import { portfolioTheme } from '@jfteam/theme';
import { useWindowSize } from '@jfteam/hooks';

import '../utils/app.css';
import { getFontTheme } from '../utils';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const { width } = useWindowSize();

  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return <p>Loading...</p>;
  return (
    <JfteamMaterialProvider
      theme={{
        ...getFontTheme(width),
        ...portfolioTheme,
      }}
    >
      <Head>
        <title>Jean-François Picherit-Steinbrucker</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Toaster />
      <Component {...pageProps} />
    </JfteamMaterialProvider>
  );
}
