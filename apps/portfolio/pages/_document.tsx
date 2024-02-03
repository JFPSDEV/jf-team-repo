import { CSSProperties } from 'react';

import { ColorSchemeScript } from '@jfteam/material';
import { Html, Head, Main, NextScript } from 'next/document';

const style: CSSProperties = {
  height: '100%',
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
};

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <ColorSchemeScript defaultColorScheme="light" />
      </Head>
      <body style={style}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
