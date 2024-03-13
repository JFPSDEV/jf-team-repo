import React, { useEffect, useState } from 'react';

import { PhaserRender } from '@jfteam/phaser-next';
import { useMantineColorScheme } from '@jfteam/material';
import { gameConfig, gameIdList, levels, EGameKey } from '@jfteam/portfolio-game';
import { useLocale } from '@/hooks';
import { ELocale } from '@/utils';

interface NoSsrGameProps {
  mode?: 'home' | 'cv';
}

const NoSsrGame = ({ mode = EGameKey.HOME }: NoSsrGameProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const { locale, switchLocale } = useLocale();
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
      params={{ colorScheme, locale }}
      callBacks={{
        light: () => setColorScheme('light'),
        dark: () => setColorScheme('dark'),
        switchFr: () => switchLocale(ELocale.FR),
        switchEn: () => switchLocale(ELocale.EN),
      }}
    />
  );
};

export default NoSsrGame;
