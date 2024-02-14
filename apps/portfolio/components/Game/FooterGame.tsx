import React from 'react';

import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import('./NoSsrGame'), {
  ssr: false,
});

export const FooterGame = () => {
  return <DynamicComponentWithNoSSR mode="footer" />;
};
