import React, { useEffect, useRef, useState } from 'react';

import { loadGame } from './loadGame';
import { PhaserContainerProps } from '../PhaserContainer';

import 'phaser';

const PhaserRender = (props: PhaserContainerProps) => {
  const { gameId, config, mainScene, className, style } = props;

  const phaserGameRef = useRef<any>(null);
  const [loaded, isLoaded] = useState<boolean>(false);

  useEffect(() => {
    isLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      loadGame(config, mainScene).then((game) => {
        phaserGameRef.current = game;
      });
    }

    return () => {
      if (phaserGameRef?.current) {
        phaserGameRef.current.destroy(true);
      }
    };
  }, [loaded]);

  return (
    <div id={gameId} key={gameId} className={className} style={style} />
  );
};

export default PhaserRender;
