import React, { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';
import { Skeleton } from '@jfteam/material';

const DynamicComponentWithNoSSR = dynamic(() => import('./NoSsrGame'), {
  ssr: false,
});

export const Game = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <Skeleton visible={true} h={550} w="100%" style={{ zIndex: 10 }} />;

  return <DynamicComponentWithNoSSR />;
};
