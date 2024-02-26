import { useEffect, useState } from 'react';

import Head from 'next/head';
import type { AppProps } from 'next/app';

import { useWindowSize } from '@jfteam/hooks';
import { portfolioTheme } from '@jfteam/theme';
import { appWithTranslation } from 'next-i18next';
import { JfteamMaterialProvider, Toaster } from '@jfteam/material';

import '../utils/app.css';
import { getFontTheme } from '../utils';

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
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Toaster />
      <Component {...pageProps} />
    </JfteamMaterialProvider>
  );
}

// export default appWithTranslation(App);
