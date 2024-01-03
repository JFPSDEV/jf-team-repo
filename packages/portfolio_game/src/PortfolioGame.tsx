import React, { useEffect, useState } from 'react';

import {
  PhaserContainer,
  type PhaserContainerProps
} from '@jfteam/phaser_next';

import { gameId, config } from './config';
import MainScene from './MainScene';

interface PortfolioGameProps
  extends Pick<PhaserContainerProps, 'className' | 'style'> {}

export const PortfolioGame = (props: PortfolioGameProps) => {
  const { ...phaserContainerProps } = props;

  const [loading, setLoading] = useState<boolean>(false);

  const reloadOnWindowResize = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  useEffect(() => {
    window.addEventListener('resize', reloadOnWindowResize);
    return () => {
      window.removeEventListener('resize', reloadOnWindowResize);
    };
  }, []);

  if (loading) return null;
  return (
    <PhaserContainer
      {...phaserContainerProps}
      gameId={gameId}
      config={config}
      mainScene={MainScene}
    />
  );
};
