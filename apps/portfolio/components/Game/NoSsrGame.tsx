import React, { useEffect, useState } from 'react';

import { PhaserRender } from '@jfteam/phaser-next';
import { gameConfig, MainScene, gameIdList, EGameKey, type TGameKey } from '@jfteam/portfolio-game';

import { useMantineColorScheme } from '@jfteam/material';
import { useResponsive } from '@jfteam/hooks';

interface NoSsrGameProps {
  mode?: TGameKey;
}

const NoSsrGame = ({ mode = EGameKey.header }: NoSsrGameProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const { isMobile } = useResponsive();
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
    if (!isMobile) {
      window.addEventListener('resize', reloadOnWindowResize);
      return () => {
        window.removeEventListener('resize', reloadOnWindowResize);
      };
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) return null;
  return (
    <PhaserRender
      gameId={gameIdList[mode]}
      config={gameConfig[mode]}
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
