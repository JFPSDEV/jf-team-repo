import React, { type CSSProperties } from 'react';

import { GoogleAnalytics } from '@next/third-parties/google';

import { ColorSchemeScript } from '@jfteam/material';
import { Html, Head, Main, NextScript } from 'next/document';
import { meta } from '@/utils';

const style: CSSProperties = {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
};

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="stylesheet" href={process.env.NEXT_PUBLIC_ICON_LIB} />

        {Object.entries(meta).map(([name, content]) => (
          <meta key={name} name={name} content={content} />
        ))}

        <ColorSchemeScript defaultColorScheme="light" />
      </Head>
      <body style={style}>
        <Main />
        <NextScript />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GTM_ID || ''} />
    </Html>
  );
}
