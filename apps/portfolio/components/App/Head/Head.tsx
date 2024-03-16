import React from 'react';

import Head from 'next/head';

const HeadComponent = () => {
  return (
    <Head>
      <title>Jean-François Picherit-Steinbrucker</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
      />
      <link rel="shortcut icon" href="/favicon.svg" />
    </Head>
  );
};

export { HeadComponent as Head };
