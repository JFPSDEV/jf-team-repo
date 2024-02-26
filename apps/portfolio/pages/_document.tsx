import { CSSProperties } from 'react';

import { ColorSchemeScript } from '@jfteam/material';
import { Html, Head, Main, NextScript } from 'next/document';

const style: CSSProperties = {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
};

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link rel="stylesheet" href={process.env.NEXT_PUBLIC_ICON_LIB} />
        <ColorSchemeScript defaultColorScheme="light" />
      </Head>
      <body style={style}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
