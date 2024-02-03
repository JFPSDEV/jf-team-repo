import React, { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';
import { Skeleton } from '@jfteam/material';

const DynamicComponentWithNoSSR = dynamic(() => import('./NoSsrGame'), {
  ssr: false,
});

export const Game = () => {
  return <DynamicComponentWithNoSSR />;
};
