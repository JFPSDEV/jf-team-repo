import React from 'react';

import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import('./NoSsrGame'), {
  ssr: false,
});

export const HeaderGame = () => {
  return <DynamicComponentWithNoSSR mode="header" />;
};
