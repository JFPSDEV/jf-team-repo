import { configData } from './configData';
import { HomeLevel, NotFoundLevel } from './level';
import { CVLevel } from './level/CVLevel';

const Phaser = require('phaser');

export enum EGameKey {
  HOME = 'home',
  CV = 'cv',
  NOT_FOUND = 'not-found'
}

export type EGameValueType = (typeof EGameKey)[keyof typeof EGameKey];

export const gameId: string = 'phaser-game';

export const gameIdList: Record<EGameKey, string> = {
  [EGameKey.HOME]: `${EGameKey.HOME}-${gameId}`,
  [EGameKey.CV]: `${EGameKey.CV}-${gameId}`,
  [EGameKey.NOT_FOUND]: `${EGameKey.NOT_FOUND}-${gameId}`
};

export type TGameConfig = Phaser.Types.Core.GameConfig;

export const config: TGameConfig = {
  height: configData.height,
  width: configData.width,
  type: Phaser.AUTO,
  scale: {
    parent: gameId,
    width: '100%'
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 300 },
      debug: false
    }
  }
};

export const gameConfig: Record<EGameKey, TGameConfig> = {
  [EGameKey.HOME]: {
    ...config,
    scale: {
      ...config.scale,
      parent: gameIdList[EGameKey.HOME]
    }
  },
  [EGameKey.CV]: {
    ...config,
    scale: {
      ...config.scale,
      parent: gameIdList[EGameKey.CV]
    }
  },
  [EGameKey.NOT_FOUND]: {
    ...config,
    height: 600,
    scale: {
      ...config.scale,
      parent: gameIdList[EGameKey.NOT_FOUND]
    }
  }
};

export const levels: Record<EGameKey, Phaser.Types.Scenes.SceneType> = {
  [EGameKey.HOME]: HomeLevel,
  [EGameKey.CV]: CVLevel,
  [EGameKey.NOT_FOUND]: NotFoundLevel
};

export const H: number = +(config?.height || 0);
export const W: number = +(config?.width || 0);
