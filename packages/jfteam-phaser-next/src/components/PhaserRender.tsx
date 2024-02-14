import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';

import 'phaser';

import { loadGame } from '@jfteam/phaser-utils';
import type { TCallBacks, TGameParams } from '@jfteam/types';

export interface PhaserRenderProps {
  gameId: string;
  config: Phaser.Types.Core.GameConfig;
  mainScene: Phaser.Types.Scenes.SceneType;
  className?: HTMLAttributes<HTMLDivElement>['className'];
  style?: React.CSSProperties;
  callBacks?: TCallBacks;
  params?: TGameParams;
}

export const PhaserRender = (props: PhaserRenderProps) => {
  const {
    gameId,
    config,
    mainScene,
    className,
    style,
    callBacks,
    params
  } = props;

  const phaserGameRef = useRef<any>(null);
  const [loaded, isLoaded] = useState<boolean>(false);

  useEffect(() => {
    isLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      loadGame(config, mainScene, callBacks, params).then((game) => {
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
    <div
      id={gameId}
      key={gameId}
      className={className}
      style={{
        ...style,
        overflow: 'hidden',
        height: config.height
      }}
    />
  );
};
