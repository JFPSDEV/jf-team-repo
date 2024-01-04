import React, { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import('./NoSsrGame'), {
  ssr: false
});

export const Game = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return <>{loading ? <DynamicComponentWithNoSSR /> : null}</>;
};
