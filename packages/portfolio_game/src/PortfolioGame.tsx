import React from 'react';

import { PhaserContainer } from '@jfteam/phaser_next';

import { gameId, config } from './config';
import MainScene from './MainScene';

interface PortfolioGameProps {}

export const PortfolioGame = (props: PortfolioGameProps) => {
  const {} = props;

  return (
    <PhaserContainer
      gameId={gameId}
      config={config}
      mainScene={MainScene}
    />
  );
};
