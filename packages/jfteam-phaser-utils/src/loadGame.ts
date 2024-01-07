// loadGame.ts

import 'phaser';

export const loadGame = async (
  conf: Phaser.Types.Core.GameConfig,
  ClassMain: Phaser.Types.Scenes.SceneType
): Promise<Phaser.Game | undefined> => {
  if (typeof window !== 'object') {
    return;
  }

  let game: Phaser.Game = new Phaser.Game({ ...conf });
  game.scene.add('main', ClassMain);
  game.scene.start('main');

  return game;
};
