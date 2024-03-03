import React from 'react';

import dynamic from 'next/dynamic';
import { EPageId } from '@/utils';

const DynamicComponentWithNoSSR = dynamic(() => import('./NoSsrGame'), {
  ssr: false,
});

interface GameProps {
  mode: EPageId;
}

export const Game = ({ mode }: GameProps) => {
  return <DynamicComponentWithNoSSR mode={mode} />;
};
