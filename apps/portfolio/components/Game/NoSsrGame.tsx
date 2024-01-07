import React, { useEffect, useState } from 'react';

import { Skeleton } from '@jfteam/material';
import { PhaserRender } from '@jfteam/phaser-next';
import { gameId, config, MainScene } from '@jfteam/portfolio-game';

const NoSsrGame = () => {
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

  if (loading) return <Skeleton visible={true} h={550} w="100%" style={{ zIndex: 10 }} />;
  return <PhaserRender gameId={gameId} config={config} mainScene={MainScene} />;
};

export default NoSsrGame;
