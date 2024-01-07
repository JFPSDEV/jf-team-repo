import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';

import 'phaser';

import { loadGame } from '@jfteam/phaser-utils';

export interface PhaserRenderProps {
  gameId: string;
  config: Phaser.Types.Core.GameConfig;
  mainScene: Phaser.Types.Scenes.SceneType;
  className?: HTMLAttributes<HTMLDivElement>['className'];
  style?: React.CSSProperties;
}

export const PhaserRender = (props: PhaserRenderProps) => {
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
