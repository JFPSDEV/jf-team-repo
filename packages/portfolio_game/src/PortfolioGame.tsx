import React from 'react';

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

  return (
    <PhaserContainer
      {...phaserContainerProps}
      gameId={gameId}
      config={config}
      mainScene={MainScene}
    />
  );
};
