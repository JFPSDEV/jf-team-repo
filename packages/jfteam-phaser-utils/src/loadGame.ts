// loadGame.ts

import 'phaser';

import type { TCallBacks, TGameParams } from '@jfteam/types';

import { Game } from './Game';

export const loadGame = async (
  conf: Phaser.Types.Core.GameConfig,
  ClassMain: Phaser.Types.Scenes.SceneType,
  callBacks?: TCallBacks,
  params?: TGameParams
): Promise<Phaser.Game | undefined> => {
  if (typeof window !== 'object') {
    return;
  }

  const game = new Game(conf, callBacks, params);
  game.scene.add('main', ClassMain);
  game.scene.start('main');

  return game;
};
