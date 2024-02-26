import { configData } from './configData';

const Phaser = require('phaser');

export enum EGameKey {
  header = 'header',
  footer = 'footer'
}

export type TGameKey = keyof typeof EGameKey;

export const gameId: string = 'phaser-game';
export const gameIdList: Record<TGameKey, string> = {
  [EGameKey.header]: `${EGameKey.header}-${gameId}`,
  [EGameKey.footer]: `${EGameKey.footer}-${gameId}`
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

export const gameConfig: Record<TGameKey, TGameConfig> = {
  [EGameKey.header]: {
    ...config,
    scale: {
      ...config.scale,
      parent: gameIdList[EGameKey.header]
    }
  },
  [EGameKey.footer]: {
    ...config,
    scale: {
      ...config.scale,
      parent: gameIdList[EGameKey.footer]
    }
  }
};

export const H: number = +(config?.height || 0);
export const W: number = +(config?.width || 0);
