import React, { useEffect, useState } from 'react';

import { PhaserRender } from '@jfteam/phaser-next';
import { gameId, config, MainScene } from '@jfteam/portfolio-game';

import { useMantineColorScheme, useMantineTheme } from '@jfteam/material';

const NoSsrGame = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const { colorScheme, setColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });

  const theme = useMantineTheme();

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
      gameId={gameId}
      config={config}
      mainScene={MainScene}
      params={{ colorScheme }}
      callBacks={{
        light: () => setColorScheme('light'),
        dark: () => setColorScheme('dark'),
      }}
    />
  );
};

export default NoSsrGame;
