import React, { useEffect, useState } from 'react';

import { PhaserRender } from '@jfteam/phaser-next';
import { useMantineColorScheme } from '@jfteam/material';
import { gameConfig, gameIdList, levels, EGameKey } from '@jfteam/portfolio-game';

interface NoSsrGameProps {
  mode?: 'home' | 'cv';
}

const NoSsrGame = ({ mode = EGameKey.HOME }: NoSsrGameProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const { colorScheme, setColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });

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
    <PhaserRender
      gameId={gameIdList[mode]}
      config={gameConfig[mode]}
      mainScene={levels[mode]}
      params={{ colorScheme }}
      callBacks={{
        light: () => setColorScheme('light'),
        dark: () => setColorScheme('dark'),
      }}
    />
  );
};

export default NoSsrGame;
