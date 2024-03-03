import { configData } from './configData';
import { HomeLevel } from './level';
import { CVLevel } from './level/CVLevel';

const Phaser = require('phaser');

export enum EGameKey {
  HOME = 'home',
  CV = 'cv'
}

export type EGameValueType = (typeof EGameKey)[keyof typeof EGameKey];

export const gameId: string = 'phaser-game';

export const gameIdList: Record<EGameKey, string> = {
  [EGameKey.HOME]: `${EGameKey.HOME}-${gameId}`,
  [EGameKey.CV]: `${EGameKey.CV}-${gameId}`
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
  }
};

export const levels: Record<EGameKey, Phaser.Types.Scenes.SceneType> = {
  [EGameKey.HOME]: HomeLevel,
  [EGameKey.CV]: CVLevel
};

export const H: number = +(config?.height || 0);
export const W: number = +(config?.width || 0);
