const Phaser = require('phaser');

export const gameId: string = 'phaser-game';

export const config: Phaser.Types.Core.GameConfig = {
  height: 550,
  type: Phaser.AUTO,
  scale: {
    parent: gameId,
    // mode: Phaser.Scale.FIT,
    // autoCenter: Phaser.Scale.CENTER_BOTH,
    width: '100%'
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  }
  // parent: gameId,
};

export const H: number = +(config?.height || 0);
export const W: number = +(config?.width || 0);
