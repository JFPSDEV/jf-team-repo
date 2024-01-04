import React, { useEffect, useState } from 'react';

import { gameId, config, MainScene } from '@jfteam/portfolio_game';
import { PhaserRender } from '@jfteam/phaser_next';

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

  if (loading) return null;
  return (
    <PhaserRender gameId={gameId} config={config} mainScene={MainScene} />
  );
};

export default NoSsrGame;
